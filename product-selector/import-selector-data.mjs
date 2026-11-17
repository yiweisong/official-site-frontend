import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const root = path.resolve(import.meta.dirname, "..");
const selectorDir = path.join(root, "Current sensor selector");
const packageFamiliesPath = path.join(root, "package-families", "package-families.json");
const workbookFiles = (await fs.readdir(selectorDir, { withFileTypes: true }))
  .filter(entry => entry.isFile() && /^Aceinna Current Sensor Product Selection_\d{8}\.xlsx$/i.test(entry.name))
  .map(entry => entry.name)
  .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

if (!workbookFiles.length) {
  throw new Error(`No dated current sensor selection workbook was found in ${selectorDir}.`);
}

const workbookPath = path.join(selectorDir, workbookFiles.at(-1));

const columnKeys = [
  "family",
  "part",
  "current",
  "supply",
  "packageType",
  "packageOutline",
  "gain",
  "sensitivity",
  "zeroCurrentOutput",
  "bandwidth",
  "response",
  "overCurrent",
  "dielectric",
  "basicIsolation",
  "creepage",
  "primaryResistance",
  "accuracy",
  "offset",
  "temp",
  "rating",
  "msl",
];

const escapeHtml = value => String(value ?? "").replace(/[&<>\"]/g, char => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
}[char]));

const asDisplayText = value => {
  if (value === null || value === undefined) return "";
  if (typeof value === "number") return String(Number(value.toFixed(8)));
  return String(value).trim();
};

const input = await FileBlob.load(workbookPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.getItemAt(0);
const values = sheet.getUsedRange(true).values;

if (!Array.isArray(values) || values.length < 2 || values[0].length !== columnKeys.length) {
  throw new Error(`The selector workbook must contain one ${columnKeys.length}-column header row and product rows.`);
}

const columns = columnKeys.map((key, index) => ({
  key,
  label: asDisplayText(values[0][index]),
}));

const products = values.slice(1)
  .filter(row => row.some(value => asDisplayText(value)))
  .map(row => Object.fromEntries(columns.map((column, index) => [column.key, asDisplayText(row[index])])));

const packageFamilies = JSON.parse(await fs.readFile(packageFamiliesPath, "utf8"));
if (!Array.isArray(packageFamilies) || !packageFamilies.length) {
  throw new Error("The package family configuration must contain at least one family.");
}

const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

function optionsFor(column) {
  const values = [...new Set(products.map(product => product[column.key]).filter(Boolean))]
    .sort((a, b) => collator.compare(a, b));
  return `<option value="">All</option>${values.map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("")}`;
}

function tableMarkup() {
  const headings = columns.map(column => `                  <th>${escapeHtml(column.label)}</th>`).join("\n");
  const filters = columns.map(column => `                  <th><select data-key="${escapeHtml(column.key)}">${optionsFor(column)}</select></th>`).join("\n");
  const rows = products.map((product, index) => {
    const cells = columns.map(column => {
      const value = escapeHtml(product[column.key]);
      return column.key === "part"
        ? `                  <td><a href="#" class="selector-part">${value}</a></td>`
        : `                  <td>${value}</td>`;
    }).join("\n");
    return `                <tr data-index="${index}">\n                  <td class="selector-check"><input type="checkbox" class="sensor-row-check" aria-label="Select ${escapeHtml(product.part)}"></td>\n${cells}\n                </tr>`;
  }).join("\n");

  return `              <thead>\n                <tr>\n                  <th class="selector-check"><input type="checkbox" id="sensorMasterCheck" aria-label="Select visible rows"></th>\n${headings}\n                </tr>\n                <tr class="filter-row">\n                  <th></th>\n${filters}\n                </tr>\n              </thead>\n              <tbody>\n${rows}\n              </tbody>`;
}

function replaceTable(html) {
  const marker = '<table class="selector-table" id="sensorProductTable">';
  const tableStart = html.indexOf(marker);
  if (tableStart < 0) throw new Error("Product table marker was not found.");
  const theadStart = html.indexOf("<thead>", tableStart);
  const tbodyEnd = html.indexOf("</tbody>", theadStart) + "</tbody>".length;
  if (theadStart < 0 || tbodyEnd < "</tbody>".length) throw new Error("Product table body was not found.");
  return html.slice(0, theadStart) + tableMarkup().trimStart() + html.slice(tbodyEnd);
}

function packageFamilyMarkup() {
  return packageFamilies.map(family => {
    const bullets = (family.bullets || []).slice(0, 3)
      .map(item => `                <li>${escapeHtml(item)}</li>`)
      .join("\n");

    return `          <article class="category-card" data-family="${escapeHtml(family.id)}">
            <div class="category-visual category-photo">
              <div class="package-shot">
                <img src="${escapeHtml(family.image)}" alt="${escapeHtml(family.alt || family.title)}">
              </div>
            </div>
            <div class="category-body">
              <h3 class="category-title">${escapeHtml(family.title)}</h3>
              <ul class="feature-list">
${bullets}
              </ul>
              <div class="card-footer"><a class="card-link" href="${escapeHtml(family.link || "#")}">Related products <svg viewBox="0 0 20 20" fill="none"><path d="M4 10h11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="m11 4 5 6-5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>
            </div>
          </article>`;
  }).join("\n\n");
}

function replacePackageFamilies(html) {
  const gridMarker = '<div class="category-grid" id="packageFamilyGrid"';
  const gridStart = html.indexOf(gridMarker);
  const gridTagEnd = html.indexOf(">", gridStart) + 1;
  const selectorStart = html.indexOf('<section class="selector-section"', gridTagEnd);

  if (gridStart < 0 || gridTagEnd <= 0 || selectorStart < 0) {
    throw new Error("Package family grid markers were not found.");
  }

  const gridOpenTag = html.slice(gridStart, gridTagEnd);
  const replacement = `${gridOpenTag}\n\n${packageFamilyMarkup()}\n        </div>\n      </div>\n    </section>\n\n    `;
  return html.slice(0, gridStart) + replacement + html.slice(selectorStart);
}

function replaceEmbeddedJson(html, id, data) {
  const pattern = new RegExp(`<script type="application/json" id="${id}">[\\s\\S]*?<\\/script>`);
  const replacement = `<script type="application/json" id="${id}">${JSON.stringify(data)}</script>`;
  if (!pattern.test(html)) throw new Error(`Embedded data marker ${id} was not found.`);
  return html.replace(pattern, replacement);
}

await fs.writeFile(path.join(root, "product-selector", "columns.json"), `${JSON.stringify(columns, null, 2)}\n`, "utf8");
await fs.writeFile(path.join(root, "product-selector", "products.json"), `${JSON.stringify(products, null, 2)}\n`, "utf8");

for (const fileName of ["cs_home_page.html"]) {
  const filePath = path.join(root, fileName);
  let html = await fs.readFile(filePath, "utf8");
  html = html.replace(
    /<h2 class="section-heading" id="selectorTitle">[\s\S]*?<\/h2>/,
    '<h2 class="section-heading" id="selectorTitle">Product Selection Guide</h2>',
  );
  html = replacePackageFamilies(html);
  html = replaceTable(html);
  html = replaceEmbeddedJson(html, "packageFamiliesData", packageFamilies);
  html = replaceEmbeddedJson(html, "sensorColumnsData", columns);
  html = replaceEmbeddedJson(html, "sensorProductsData", products);
  await fs.writeFile(filePath, html, "utf8");
}

console.log(`Generated the page with ${packageFamilies.length} package families, ${products.length} products, and ${columns.length} columns from ${path.basename(workbookPath)}.`);
