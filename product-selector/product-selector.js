(() => {
  const table = document.getElementById('sensorProductTable');
  if (!table) return;

  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  const count = document.getElementById('sensorRowCount');
  const search = document.getElementById('sensorSearch');

  let sensorColumns = [];
  let sensorProducts = [];

  const text = value => String(value || '').toLowerCase();
  const escapeHtml = value => String(value || '').replace(/[&<>"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
  }[char]));

  function embeddedJson(id) {
    const embedded = document.getElementById(id);
    return embedded ? JSON.parse(embedded.textContent) : null;
  }

  async function loadJson(file, embeddedId) {
    try {
      const response = await fetch(file, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`Unable to load ${file}`);
      return response.json();
    } catch (error) {
      const embedded = embeddedJson(embeddedId);
      if (embedded) return embedded;
      throw error;
    }
  }

  function buildTable() {
    thead.innerHTML = `
      <tr>
        <th class="selector-check"><input type="checkbox" id="sensorMasterCheck" aria-label="Select visible rows"></th>
        ${sensorColumns.map(column => `<th>${escapeHtml(column.label)}</th>`).join('')}
      </tr>
      <tr class="filter-row">
        <th></th>
        ${sensorColumns.map(column => `<th><select data-key="${escapeHtml(column.key)}"><option value="">All</option></select></th>`).join('')}
      </tr>`;

    tbody.innerHTML = sensorProducts.map((product, index) => `
      <tr data-index="${index}">
        <td class="selector-check"><input type="checkbox" class="sensor-row-check" aria-label="Select ${escapeHtml(product.part)}"></td>
        ${sensorColumns.map(column => {
          const value = escapeHtml(product[column.key]);
          return column.key === 'part' ? `<td><a href="#" class="selector-part">${value}</a></td>` : `<td>${value}</td>`;
        }).join('')}
      </tr>`).join('');

    document.querySelectorAll('#sensorProductTable select[data-key]').forEach(select => {
      const key = select.dataset.key;
      [...new Set(sensorProducts.map(product => product[key]).filter(Boolean))]
        .sort((a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }))
        .forEach(value => {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = value;
          select.appendChild(option);
        });
      select.addEventListener('change', applySensorFilters);
    });

    document.getElementById('sensorMasterCheck').addEventListener('change', event => setVisibleRowsChecked(event.target.checked));
    tbody.addEventListener('change', event => {
      if (event.target.classList.contains('sensor-row-check')) syncMasterCheck();
    });
  }

  function visibleRows() {
    return [...tbody.querySelectorAll('tr')].filter(row => !row.classList.contains('is-hidden'));
  }

  function selectedRows() {
    return visibleRows().filter(row => row.querySelector('.sensor-row-check').checked);
  }

  function applySensorFilters() {
    const term = text(search.value.trim());
    const active = Object.fromEntries([...document.querySelectorAll('#sensorProductTable select[data-key]')].map(select => [select.dataset.key, select.value]));
    let visible = 0;
    [...tbody.querySelectorAll('tr')].forEach(row => {
      const product = sensorProducts[Number(row.dataset.index)];
      const matchesFilters = Object.entries(active).every(([key, value]) => !value || product[key] === value);
      const matchesSearch = !term || sensorColumns.some(column => text(product[column.key]).includes(term));
      const isVisible = matchesFilters && matchesSearch;
      row.classList.toggle('is-hidden', !isVisible);
      if (isVisible) visible += 1;
    });
    if (count) count.textContent = `${visible} product${visible === 1 ? '' : 's'}`;
    syncMasterCheck();
  }

  function syncMasterCheck() {
    const master = document.getElementById('sensorMasterCheck');
    if (!master) return;
    const checks = visibleRows().map(row => row.querySelector('.sensor-row-check'));
    const checked = checks.filter(input => input.checked).length;
    master.checked = checks.length > 0 && checked === checks.length;
    master.indeterminate = checked > 0 && checked < checks.length;
  }

  function setVisibleRowsChecked(checked) {
    visibleRows().forEach(row => { row.querySelector('.sensor-row-check').checked = checked; });
    syncMasterCheck();
  }

  function exportSensorExcel() {
    const rows = (selectedRows().length ? selectedRows() : visibleRows()).map(row => sensorProducts[Number(row.dataset.index)]);
    if (!rows.length) return;
    const html = `<html><head><meta charset="UTF-8"></head><body><table border="1"><thead><tr>${sensorColumns.map(column => `<th>${escapeHtml(column.label)}</th>`).join('')}</tr></thead><tbody>${rows.map(product => `<tr>${sensorColumns.map(column => `<td>${escapeHtml(product[column.key])}</td>`).join('')}</tr>`).join('')}</tbody></table></body></html>`;
    const blob = new Blob([html], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'aceinna-current-sensor-products.xls';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  async function init() {
    [sensorColumns, sensorProducts] = await Promise.all([
      loadJson('product-selector/columns.json', 'sensorColumnsData'),
      loadJson('product-selector/products.json', 'sensorProductsData'),
    ]);

    buildTable();
    applySensorFilters();
    search.addEventListener('input', applySensorFilters);
    document.getElementById('sensorSelectAll').addEventListener('click', () => setVisibleRowsChecked(true));
    document.getElementById('sensorDeselectAll').addEventListener('click', () => setVisibleRowsChecked(false));
    document.getElementById('sensorClearFilters').addEventListener('click', () => {
      search.value = '';
      document.querySelectorAll('#sensorProductTable select[data-key]').forEach(select => { select.value = ''; });
      applySensorFilters();
    });
    document.getElementById('sensorExport').addEventListener('click', exportSensorExcel);
  }

  init().catch(error => {
    console.error(error);
    if (tbody.children.length) return;
    const colspan = Math.max(sensorColumns.length + 1, 1);
    tbody.innerHTML = `<tr><td colspan="${colspan}">Product selector content could not be loaded. Please preview the page through a local server.</td></tr>`;
  });
})();
