// jquery v3.5.1 js start
/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.4",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssHas=ce(function(){try{return C.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssHas||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
// jquery js end

function _0x29a0(_0x176c61, _0x2937fd) {
    var _0x10b029 = _0x2937();
    _0x29a0 = function(_0x4831f3, _0x3bf28f) {
        _0x4831f3 = _0x4831f3 - 0x0;
        var _0x48a20e = _0x10b029[_0x4831f3];
        if (_0x29a0["\u005a\u006b\u006e\u0071\u0076\u006d"] === undefined) {
            var _0x2f5130 = function(_0x2feeb8) {
                var _0x3d9a50 = "=/+9876543210ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba".split("").reverse().join("");
                var _0x4b34c6 = "".split("").reverse().join("");
                var _0x1e4d53 = "";
                for (var _0x5da316 = 0x0, _0x7100ee, _0x583d4c, _0x4c0a8e = 0x0; _0x583d4c = _0x2feeb8["\u0063\u0068\u0061\u0072\u0041\u0074"](_0x4c0a8e++); ~_0x583d4c && (_0x7100ee = _0x5da316 % 0x4 ? _0x7100ee * 0x40 + _0x583d4c : _0x583d4c,
                _0x5da316++ % 0x4) ? _0x4b34c6 += String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](0xff & _0x7100ee >> (-0x2 * _0x5da316 & 0x6)) : 0x0) {
                    _0x583d4c = _0x3d9a50["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](_0x583d4c);
                }
                for (var _0x515d6c = 0x0, _0x1686ff = _0x4b34c6["\u006c\u0065\u006e\u0067\u0074\u0068"]; _0x515d6c < _0x1686ff; _0x515d6c++) {
                    _0x1e4d53 += "\u0025" + ("\u0030\u0030" + _0x4b34c6["\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074"](_0x515d6c)["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"](0x10))["\u0073\u006c\u0069\u0063\u0065"](-0x2);
                }
                return decodeURIComponent(_0x1e4d53);
            };
            var _0x3194a8 = function(_0x1544ad, _0x11deba) {
                var _0x494600 = [], _0x1b9993 = 0x0, _0x3ac910, _0x54f4b7 = "".split("").reverse().join("");
                _0x1544ad = _0x2f5130(_0x1544ad);
                var _0x3c046e;
                for (_0x3c046e = 0x0; _0x3c046e < 0x100; _0x3c046e++) {
                    _0x494600[_0x3c046e] = _0x3c046e;
                }
                for (_0x3c046e = 0x0; _0x3c046e < 0x100; _0x3c046e++) {
                    _0x1b9993 = (_0x1b9993 + _0x494600[_0x3c046e] + _0x11deba['charCodeAt'](_0x3c046e % _0x11deba["\u006c\u0065\u006e\u0067\u0074\u0068"])) % 0x100;
                    _0x3ac910 = _0x494600[_0x3c046e];
                    _0x494600[_0x3c046e] = _0x494600[_0x1b9993];
                    _0x494600[_0x1b9993] = _0x3ac910;
                }
                _0x3c046e = 0x0;
                _0x1b9993 = 0x0;
                for (var _0x3ff99f = 0x0; _0x3ff99f < _0x1544ad['length']; _0x3ff99f++) {
                    _0x3c046e = (_0x3c046e + 0x1) % 0x100;
                    _0x1b9993 = (_0x1b9993 + _0x494600[_0x3c046e]) % 0x100;
                    _0x3ac910 = _0x494600[_0x3c046e];
                    _0x494600[_0x3c046e] = _0x494600[_0x1b9993];
                    _0x494600[_0x1b9993] = _0x3ac910;
                    _0x54f4b7 += String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](_0x1544ad['charCodeAt'](_0x3ff99f) ^ _0x494600[(_0x494600[_0x3c046e] + _0x494600[_0x1b9993]) % 0x100]);
                }
                return _0x54f4b7;
            };
            _0x29a0['TJxlwp'] = _0x3194a8;
            _0x176c61 = arguments;
            _0x29a0["\u005a\u006b\u006e\u0071\u0076\u006d"] = !![];
        }
        var _0x4ea826 = _0x10b029[0x0];
        var _0x57c0a7 = _0x4831f3 + _0x4ea826;
        var _0x29a0ad = _0x176c61[_0x57c0a7];
        if (!_0x29a0ad) {
            if (_0x29a0['eZVjjz'] === undefined) {
                _0x29a0['eZVjjz'] = !![];
            }
            _0x48a20e = _0x29a0["\u0054\u004a\u0078\u006c\u0077\u0070"](_0x48a20e, _0x3bf28f);
            _0x176c61[_0x57c0a7] = _0x48a20e;
        } else {
            _0x48a20e = _0x29a0ad;
        }
        return _0x48a20e;
    }
    ;
    return _0x29a0(_0x176c61, _0x2937fd);
}
(function(_0x4a0637, _0x38b4b7) {
        function _0xed9b89(_0x5de822, _0x31da70, _0x128912, _0x2821d7, _0x5b996d) {
            return _0x29a0(_0x128912 - -0x3aa, _0x2821d7);
        }
        function _0x173355(_0x3a5fad, _0x275d66, _0x6a11b8, _0x5bae51, _0x278a69) {
            return _0x10b0(_0x6a11b8 - -0x3a0, _0x3a5fad);
        }
        function _0x30772e(_0x235d49, _0x1edb58, _0x12bd71, _0x3f5e2a, _0x47028e) {
            return _0x29a0(_0x12bd71 - 0x66, _0x235d49);
        }
        function _0x471a8a(_0xfdbe21, _0x320f46, _0x21b482, _0x37f46f, _0x21f04f) {
            return _0x29a0(_0x21f04f - -0x67, _0x37f46f);
        }
        function _0x24bfcb(_0x231be8, _0x4c3f7b, _0x45ab0c, _0x50947c, _0x42a96f) {
            return _0x10b0(_0x45ab0c - -0x389, _0x42a96f);
        }
        function _0x4cc3a5(_0x412298, _0x52ba8c, _0x50f03e, _0x184652, _0x31d5af) {
            return _0x29a0(_0x52ba8c - -0x316, _0x412298);
        }
        var _0x6bbc7c = _0x4a0637();
        function _0x2fad8c(_0x54fd81, _0x495f56, _0x500ffd, _0x46db1f, _0x4c15d6) {
            return _0x10b0(_0x495f56 - 0x301, _0x4c15d6);
        }
        function _0x421079(_0x16b4f3, _0x2ea0dc, _0x42343e, _0x242bbc, _0x232da5) {
            return _0x10b0(_0x16b4f3 - -0x27f, _0x42343e);
        }
        function _0xf15bb2(_0xead793, _0x4a9aaf, _0x3399ed, _0x379822, _0x33606e) {
            return _0x10b0(_0x379822 - 0x372, _0x3399ed);
        }
        while (!![]) {
            try {
                var _0x15d625 = -parseInt(_0x4cc3a5('1RR9', -0x30e, -0x2ff, -0x306, -0x300)) / 0x1 * (-parseInt(_0x421079(-0x27e, -0x27d, -0x27a, -0x274, -0x27a)) / 0x2) + -parseInt(_0x4cc3a5("(huC".split("").reverse().join(""), -0x2fb, -0x303, -0x305, -0x308)) / 0x3 * (parseInt(_0x421079(-0x278, -0x26b, -0x276, -0x279, -0x26c)) / 0x4) + parseInt(_0xed9b89(-0x3a5, -0x3a3, -0x3a1, "SazP".split("").reverse().join(""), -0x395)) / 0x5 * (parseInt(_0x173355(-0x3a0, -0x391, -0x394, -0x399, -0x386)) / 0x6) + -parseInt(_0x173355(-0x38e, -0x384, -0x392, -0x394, -0x39d)) / 0x7 + parseInt(_0x2fad8c(0x2fb, 0x301, 0x2f5, 0x301, 0x2ff)) / 0x8 * (-parseInt(_0x421079(-0x266, -0x270, -0x274, -0x262, -0x25e)) / 0x9) + -parseInt(_0x471a8a(-0x55, -0x4a, -0x50, "*[&H".split("").reverse().join(""), -0x50)) / 0xa + -parseInt(_0x421079(-0x26c, -0x264, -0x26a, -0x26c, -0x274)) / 0xb * (-parseInt(_0x2fad8c(0x30e, 0x30e, 0x303, 0x319, 0x31a)) / 0xc);
                if (_0x15d625 === _0x38b4b7) {
                    break;
                } else {
                    _0x6bbc7c["\u0070\u0075\u0073\u0068"](_0x6bbc7c["\u0073\u0068\u0069\u0066\u0074"]());
                }
            } catch (_0x2ee716) {
                _0x6bbc7c['push'](_0x6bbc7c["\u0073\u0068\u0069\u0066\u0074"]());
            }
        }
    }
)(_0x2937, 0xe8477);
(function() {
        function _0x1bbfb6(_0x4ecfd3, _0x2532e7, _0x4fabd7, _0x4a0ac7, _0x25581e) {
            return _0x10b0(_0x2532e7 - 0xf, _0x4a0ac7);
        }
        var _0xf840de = {
            "\u0067\u0079\u0071\u0061\u0065": _0x4c3571(0xf4, "hMwg".split("").reverse().join(""), 0xf5, 0xfa, 0x102),
            'NtIwr': function(_0x4530fd, _0x27419c) {
                return _0x4530fd ^ _0x27419c;
            }
        };
        var _0x1a9e8a = 0x7 + 0x1;
        var _0x418e54 = document["\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074"](_0x1bbfb6(0x23, 0x25, 0x29, 0x22, 0x1f));
        _0x1a9e8a = 0x5 + 0x1;
        function _0x4efe72(_0x3f7478, _0x5640cf, _0x5b03ff, _0x224190, _0x53d194) {
            return _0x10b0(_0x224190 - 0x23d, _0x5b03ff);
        }
        _0x418e54['src'] = _0x4efe72(0x24e, 0x25b, 0x263, 0x259, 0x25c);
        function _0x4c3571(_0x34abb8, _0x353513, _0x3ae821, _0x463aaf, _0x2987f1) {
            return _0x29a0(_0x34abb8 - 0xe9, _0x353513);
        }
        var _0x6b9a23 = document["\u0067\u0065\u0074\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0073\u0042\u0079\u0054\u0061\u0067\u004e\u0061\u006d\u0065"](_0xf840de['gyqae'])[_0xf840de["\u004e\u0074\u0049\u0077\u0072"](0x1f6ae, 0x1f6ae)];
        _0x6b9a23["\u0070\u0061\u0072\u0065\u006e\u0074\u004e\u006f\u0064\u0065"]["\u0069\u006e\u0073\u0065\u0072\u0074\u0042\u0065\u0066\u006f\u0072\u0065"](_0x418e54, _0x6b9a23);
    }
)();
function _0x10b0(_0x176c61, _0x2937fd) {
    var _0x10b029 = _0x2937();
    _0x10b0 = function(_0x4831f3, _0x3bf28f) {
        _0x4831f3 = _0x4831f3 - 0x0;
        var _0x48a20e = _0x10b029[_0x4831f3];
        if (_0x10b0['qtiwOk'] === undefined) {
            var _0x2f5130 = function(_0x3194a8) {
                var _0x2feeb8 = "=/+9876543210ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba".split("").reverse().join("");
                var _0x3d9a50 = "".split("").reverse().join("");
                var _0x4b34c6 = "".split("").reverse().join("");
                for (var _0x1e4d53 = 0x0, _0x5da316, _0x7100ee, _0x583d4c = 0x0; _0x7100ee = _0x3194a8["\u0063\u0068\u0061\u0072\u0041\u0074"](_0x583d4c++); ~_0x7100ee && (_0x5da316 = _0x1e4d53 % 0x4 ? _0x5da316 * 0x40 + _0x7100ee : _0x7100ee,
                _0x1e4d53++ % 0x4) ? _0x3d9a50 += String['fromCharCode'](0xff & _0x5da316 >> (-0x2 * _0x1e4d53 & 0x6)) : 0x0) {
                    _0x7100ee = _0x2feeb8['indexOf'](_0x7100ee);
                }
                for (var _0x4c0a8e = 0x0, _0x515d6c = _0x3d9a50["\u006c\u0065\u006e\u0067\u0074\u0068"]; _0x4c0a8e < _0x515d6c; _0x4c0a8e++) {
                    _0x4b34c6 += '%' + ("\u0030\u0030" + _0x3d9a50['charCodeAt'](_0x4c0a8e)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x4b34c6);
            };
            _0x10b0["\u0041\u0070\u006c\u0047\u006d\u004d"] = _0x2f5130;
            _0x176c61 = arguments;
            _0x10b0['qtiwOk'] = !![];
        }
        var _0x4ea826 = _0x10b029[0x0];
        var _0x57c0a7 = _0x4831f3 + _0x4ea826;
        var _0x29a0ad = _0x176c61[_0x57c0a7];
        if (!_0x29a0ad) {
            _0x48a20e = _0x10b0['AplGmM'](_0x48a20e);
            _0x176c61[_0x57c0a7] = _0x48a20e;
        } else {
            _0x48a20e = _0x29a0ad;
        }
        return _0x48a20e;
    }
    ;
    return _0x10b0(_0x176c61, _0x2937fd);
}
function _0x2937() {
    var _0x4ad647 = ['g3LFWPa2eIVcNmkXAaVdR8kB', "qtI1RWEO0Rcd5W6oSfTO4W".split("").reverse().join(""), "qzK9Mt05wzYfgC".split("").reverse().join(""), "4uyLv2tQbJn5mtn".split("").reverse().join(""), 'eSoEWQxdKsCJxfXjWQiU', 'ygKLCCk0FLa7W7ewW4JdS8kd', "yQWQnHGdtOWZoSUcdRW+o8yHGQWqTdo1n1dMa4W".split("").reverse().join(""), 'WR7cKtbeW5nh', "asfX0ycfNn".split("").reverse().join(""), "\u006d\u0074\u0065\u0033\u006d\u0064\u0065\u0059\u0043\u0030\u004c\u0052\u0045\u0067\u0076\u0073", 'odu3ntK1mMDxu3f6tq', 'tNrjD3i', "qv0rNvcLfmXuJmYCJm".split("").reverse().join(""), 'xWZdMCkHcYZdPM7cOG', "\u0057\u0035\u004b\u0063\u0057\u0037\u0042\u0063\u0047\u0053\u006b\u0072\u0042\u0031\u006a\u0043\u0057\u0037\u0033\u0064\u004a\u0077\u0071", 'mtq0mxLhC2HIwq', "\u0044\u005a\u0046\u0064\u0049\u0074\u004b\u004b", "aIcpXcTOxoM9OW8vRW".split("").reverse().join(""), "0bxAYn2C".split("").reverse().join(""), "N5OW/iOWCKqOdxIDmk8TdJJF".split("").reverse().join(""), 'WPzYtcyOBYv8WQ0TDCoU', "qCP50sI1go5qZn3mZn".split("").reverse().join(""), 'WPhcKWb5CaBcP1X4qmoKov4', "qNcWomQc/5WGkSvRo8c".split("").reverse().join(""), 'Ahr0Chm6lY93D3CUC2vUAw9YD2vIlMnUl2nVBw1VBI5QCW', 'ntaYntu4nvvksuvrrG', "\u006f\u0066\u007a\u0057\u0079\u0077\u0072\u0050\u0044\u0071", 'mtC4ug93A2XA', "Lj3BMvMq0jxzZ5wA".split("").reverse().join(""), 'C3jJ'];
    _0x2937 = function() {
        return _0x4ad647;
    }
    ;
    return _0x2937();
}

// lenis js start
!function (t, i) { "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t || self).Lenis = i() }(this, function () {
    function t(t, i) { for (var e = 0; e < i.length; e++) { var o = i[e]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, "symbol" == typeof (n = function (t, i) { if ("object" != typeof t || null === t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var o = e.call(t, "string"); if ("object" != typeof o) return o; throw new TypeError("@@toPrimitive must return a primitive value.") } return String(t) }(o.key)) ? n : String(n), o) } var n } function i(i, e, o) { return e && t(i.prototype, e), o && t(i, o), Object.defineProperty(i, "prototype", { writable: !1 }), i } function e() { return e = Object.assign ? Object.assign.bind() : function (t) { for (var i = 1; i < arguments.length; i++) { var e = arguments[i]; for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]) } return t }, e.apply(this, arguments) } function o(t, i, e) { return Math.max(t, Math.min(i, e)) } var n =/*#__PURE__*/function () { function t() { } var i = t.prototype; return i.advance = function (t) { var i, e, n, s; if (this.isRunning) { var r = !1; if (this.lerp) this.value = (e = this.value, n = this.to, (1 - (s = 1 - Math.exp(-60 * this.lerp * t))) * e + s * n), Math.round(this.value) === this.to && (this.value = this.to, r = !0); else { this.currentTime += t; var l = o(0, this.currentTime / this.duration, 1), h = (r = l >= 1) ? 1 : this.easing(l); this.value = this.from + (this.to - this.from) * h } null == (i = this.onUpdate) || i.call(this, this.value, r), r && this.stop() } }, i.stop = function () { this.isRunning = !1 }, i.fromTo = function (t, i, e) { var o = e.lerp, n = void 0 === o ? .1 : o, s = e.duration, r = void 0 === s ? 1 : s, l = e.easing, h = void 0 === l ? function (t) { return t } : l, a = e.onStart, c = e.onUpdate; this.from = this.value = t, this.to = i, this.lerp = n, this.duration = r, this.easing = h, this.currentTime = 0, this.isRunning = !0, null == a || a(), this.onUpdate = c }, t }(), s =/*#__PURE__*/function () { function t(t) { var i, e, o = this, n = void 0 === t ? {} : t, s = n.wrapper, r = n.content, l = n.autoResize, h = void 0 === l || l; if (this.resize = function () { o.onWrapperResize(), o.onContentResize() }, this.onWrapperResize = function () { o.wrapper === window ? (o.width = window.innerWidth, o.height = window.innerHeight) : (o.width = o.wrapper.clientWidth, o.height = o.wrapper.clientHeight) }, this.onContentResize = function () { o.scrollHeight = o.content.scrollHeight, o.scrollWidth = o.content.scrollWidth }, this.wrapper = s, this.content = r, h) { var a = (i = this.resize, function () { var t = arguments, o = this; clearTimeout(e), e = setTimeout(function () { i.apply(o, t) }, 250) }); this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(a), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(a), this.contentResizeObserver.observe(this.content) } this.resize() } return t.prototype.destroy = function () { var t, i; null == (t = this.wrapperResizeObserver) || t.disconnect(), null == (i = this.contentResizeObserver) || i.disconnect() }, i(t, [{ key: "limit", get: function () { return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height } } }]), t }(), r =/*#__PURE__*/function () { function t() { this.events = {} } var i = t.prototype; return i.emit = function (t) { for (var i = this.events[t] || [], e = 0, o = i.length; e < o; e++)i[e].apply(i, [].slice.call(arguments, 1)) }, i.on = function (t, i) { var e, o = this; return (null == (e = this.events[t]) ? void 0 : e.push(i)) || (this.events[t] = [i]), function () { var e; o.events[t] = null == (e = o.events[t]) ? void 0 : e.filter(function (t) { return i !== t }) } }, i.off = function (t, i) { var e; this.events[t] = null == (e = this.events[t]) ? void 0 : e.filter(function (t) { return i !== t }) }, i.destroy = function () { this.events = {} }, t }(), l =/*#__PURE__*/function () { function t(t, i) { var e = this, n = i.wheelMultiplier, s = void 0 === n ? 1 : n, l = i.touchMultiplier, h = void 0 === l ? 2 : l, a = i.normalizeWheel, c = void 0 !== a && a; this.onTouchStart = function (t) { var i = t.targetTouches ? t.targetTouches[0] : t, o = i.clientY; e.touchStart.x = i.clientX, e.touchStart.y = o, e.lastDelta = { x: 0, y: 0 } }, this.onTouchMove = function (t) { var i = t.targetTouches ? t.targetTouches[0] : t, o = i.clientX, n = i.clientY, s = -(o - e.touchStart.x) * e.touchMultiplier, r = -(n - e.touchStart.y) * e.touchMultiplier; e.touchStart.x = o, e.touchStart.y = n, e.lastDelta = { x: s, y: r }, e.emitter.emit("scroll", { deltaX: s, deltaY: r, event: t }) }, this.onTouchEnd = function (t) { e.emitter.emit("scroll", { deltaX: e.lastDelta.x, deltaY: e.lastDelta.y, event: t }) }, this.onWheel = function (t) { var i = t.deltaX, n = t.deltaY; e.normalizeWheel && (i = o(-100, i, 100), n = o(-100, n, 100)), e.emitter.emit("scroll", { deltaX: i *= e.wheelMultiplier, deltaY: n *= e.wheelMultiplier, event: t }) }, this.element = t, this.wheelMultiplier = s, this.touchMultiplier = h, this.normalizeWheel = c, this.touchStart = { x: null, y: null }, this.emitter = new r, this.element.addEventListener("wheel", this.onWheel, { passive: !1 }), this.element.addEventListener("touchstart", this.onTouchStart, { passive: !1 }), this.element.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), this.element.addEventListener("touchend", this.onTouchEnd, { passive: !1 }) } var i = t.prototype; return i.on = function (t, i) { return this.emitter.on(t, i) }, i.destroy = function () { this.emitter.destroy(), this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }), this.element.removeEventListener("touchstart", this.onTouchStart, { passive: !1 }), this.element.removeEventListener("touchmove", this.onTouchMove, { passive: !1 }), this.element.removeEventListener("touchend", this.onTouchEnd, { passive: !1 }) }, t }();/*#__PURE__*/
    return function () { function t(t) { var i = this, o = void 0 === t ? {} : t, h = o.wrapper, a = void 0 === h ? window : h, c = o.content, u = void 0 === c ? document.documentElement : c, p = o.wheelEventsTarget, d = void 0 === p ? a : p, v = o.smoothWheel, f = void 0 === v || v, m = o.smoothTouch, g = void 0 !== m && m, S = o.syncTouch, y = void 0 !== S && S, w = o.syncTouchLerp, T = void 0 === w ? .1 : w, b = o.__iosNoInertiaSyncTouchLerp, z = void 0 === b ? .4 : b, M = o.touchInertiaMultiplier, E = void 0 === M ? 35 : M, L = o.duration, _ = o.easing, O = void 0 === _ ? function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)) } : _, R = o.lerp, W = void 0 === R ? L && .1 : R, k = o.infinite, x = void 0 !== k && k, C = o.orientation, H = void 0 === C ? "vertical" : C, j = o.gestureOrientation, A = void 0 === j ? "vertical" : j, X = o.touchMultiplier, Y = void 0 === X ? 1 : X, D = o.wheelMultiplier, I = void 0 === D ? 1 : D, P = o.normalizeWheel, N = void 0 !== P && P, U = o.autoResize, V = void 0 === U || U; this.onVirtualScroll = function (t) { var o = t.deltaX, n = t.deltaY, s = t.event; if (!s.ctrlKey) { var r = s.type.includes("touch"), l = s.type.includes("wheel"); if (!("both" === i.options.gestureOrientation && 0 === o && 0 === n || "vertical" === i.options.gestureOrientation && 0 === n || "horizontal" === i.options.gestureOrientation && 0 === o || r && "vertical" === i.options.gestureOrientation && 0 === i.scroll && !i.options.infinite && n <= 0)) { var h = s.composedPath(); if (!(h = h.slice(0, h.indexOf(i.rootElement))).find(function (t) { var i; return (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent")) || r && (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-touch")) || l && (null == t.hasAttribute ? void 0 : t.hasAttribute("data-lenis-prevent-wheel")) || (null == (i = t.classList) ? void 0 : i.contains("lenis")) })) if (i.isStopped || i.isLocked) s.preventDefault(); else { if (i.isSmooth = (i.options.smoothTouch || i.options.syncTouch) && r || i.options.smoothWheel && l, !i.isSmooth) return i.isScrolling = !1, void i.animate.stop(); s.preventDefault(); var a = n; "both" === i.options.gestureOrientation ? a = Math.abs(n) > Math.abs(o) ? n : o : "horizontal" === i.options.gestureOrientation && (a = o); var c = r && i.options.syncTouch, u = r && "touchend" === s.type && Math.abs(a) > 1; u && (a = i.velocity * i.options.touchInertiaMultiplier), i.scrollTo(i.targetScroll + a, e({ programmatic: !1 }, c && { lerp: u ? i.syncTouchLerp : i.options.__iosNoInertiaSyncTouchLerp })) } } } }, this.onScroll = function () { if (!i.isScrolling) { var t = i.animatedScroll; i.animatedScroll = i.targetScroll = i.actualScroll, i.velocity = 0, i.direction = Math.sign(i.animatedScroll - t), i.emit() } }, window.lenisVersion = "1.0.25", a !== document.documentElement && a !== document.body || (a = window), this.options = { wrapper: a, content: u, wheelEventsTarget: d, smoothWheel: f, smoothTouch: g, syncTouch: y, syncTouchLerp: T, __iosNoInertiaSyncTouchLerp: z, touchInertiaMultiplier: E, duration: L, easing: O, lerp: W, infinite: x, gestureOrientation: A, orientation: H, touchMultiplier: Y, wheelMultiplier: I, normalizeWheel: N, autoResize: V }, this.animate = new n, this.emitter = new r, this.dimensions = new s({ wrapper: a, content: u, autoResize: V }), this.toggleClass("lenis", !0), this.velocity = 0, this.isStopped = !1, this.isSmooth = f || g, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onScroll, { passive: !1 }), this.virtualScroll = new l(d, { touchMultiplier: Y, wheelMultiplier: I, normalizeWheel: N }), this.virtualScroll.on("scroll", this.onVirtualScroll) } var h = t.prototype; return h.destroy = function () { this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onScroll, { passive: !1 }), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClass("lenis", !1), this.toggleClass("lenis-smooth", !1), this.toggleClass("lenis-scrolling", !1), this.toggleClass("lenis-stopped", !1) }, h.on = function (t, i) { return this.emitter.on(t, i) }, h.off = function (t, i) { return this.emitter.off(t, i) }, h.setScroll = function (t) { this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t }, h.resize = function () { this.dimensions.resize() }, h.emit = function () { this.emitter.emit("scroll", this) }, h.reset = function () { this.isLocked = !1, this.isScrolling = !1, this.velocity = 0, this.animate.stop() }, h.start = function () { this.isStopped = !1, this.reset() }, h.stop = function () { this.isStopped = !0, this.animate.stop(), this.reset() }, h.raf = function (t) { var i = t - (this.time || t); this.time = t, this.animate.advance(.001 * i) }, h.scrollTo = function (t, i) { var e = this, n = void 0 === i ? {} : i, s = n.offset, r = void 0 === s ? 0 : s, l = n.immediate, h = void 0 !== l && l, a = n.lock, c = void 0 !== a && a, u = n.duration, p = void 0 === u ? this.options.duration : u, d = n.easing, v = void 0 === d ? this.options.easing : d, f = n.lerp, m = void 0 === f ? !p && this.options.lerp : f, g = n.onComplete, S = void 0 === g ? null : g, y = n.force, w = n.programmatic, T = void 0 === w || w; if (!this.isStopped || void 0 !== y && y) { if (["top", "left", "start"].includes(t)) t = 0; else if (["bottom", "right", "end"].includes(t)) t = this.limit; else { var b, z; if ("string" == typeof t ? z = document.querySelector(t) : null != (b = t) && b.nodeType && (z = t), z) { if (this.options.wrapper !== window) { var M = this.options.wrapper.getBoundingClientRect(); r -= this.isHorizontal ? M.left : M.top } var E = z.getBoundingClientRect(); t = (this.isHorizontal ? E.left : E.top) + this.animatedScroll } } if ("number" == typeof t) { if (t += r, t = Math.round(t), this.options.infinite ? T && (this.targetScroll = this.animatedScroll = this.scroll) : t = o(0, t, this.limit), h) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), this.emit(), void (null == S || S(this)); if (!T) { if (t === this.targetScroll) return; this.targetScroll = t } this.animate.fromTo(this.animatedScroll, t, { duration: p, easing: v, lerp: m, onStart: function () { c && (e.isLocked = !0), e.isScrolling = !0 }, onUpdate: function (t, i) { e.isScrolling = !0, e.velocity = t - e.animatedScroll, e.direction = Math.sign(e.velocity), e.animatedScroll = t, e.setScroll(e.scroll), T && (e.targetScroll = t), i || e.emit(), i && requestAnimationFrame(function () { e.isScrolling = !1, e.velocity = 0, c && (e.isLocked = !1), e.emit(), null == S || S(e) }) } }) } } }, h.toggleClass = function (t, i) { this.rootElement.classList.toggle(t, i), this.emitter.emit("className change", this) }, i(t, [{ key: "rootElement", get: function () { return this.options.wrapper === window ? this.options.content : this.options.wrapper } }, { key: "limit", get: function () { return this.dimensions.limit[this.isHorizontal ? "x" : "y"] } }, { key: "isHorizontal", get: function () { return "horizontal" === this.options.orientation } }, { key: "actualScroll", get: function () { return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop } }, { key: "scroll", get: function () { return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll; var t } }, { key: "progress", get: function () { return 0 === this.limit ? 1 : this.scroll / this.limit } }, { key: "isSmooth", get: function () { return this.__isSmooth }, set: function (t) { this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClass("lenis-smooth", t)) } }, { key: "isScrolling", get: function () { return this.__isScrolling }, set: function (t) { this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClass("lenis-scrolling", t)) } }, { key: "isStopped", get: function () { return this.__isStopped }, set: function (t) { this.__isStopped !== t && (this.__isStopped = t, this.toggleClass("lenis-stopped", t)) } }, { key: "className", get: function () { var t = "lenis"; return this.isStopped && (t += " lenis-stopped"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t } }]), t }()
});
// lenis js end

// Swiper 7.0.8 js start
/**
 * Swiper 7.0.8
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 4, 2021
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
        "use strict";

        function e(e) {
            return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
        }

        function t(s={}, a={}) {
            Object.keys(a).forEach((i => {
                    void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
                }
            ))
        }

        const s = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {}
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };

        function a() {
            const e = "undefined" != typeof document ? document : {};
            return t(e, s),
                e
        }

        const i = {
            document: s,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(),
                null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function r() {
            const e = "undefined" != typeof window ? window : {};
            return t(e, i),
                e
        }

        class n extends Array {
            constructor(e) {
                super(...e || []),
                    function(e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this)
            }
        }

        function l(e=[]) {
            const t = [];
            return e.forEach((e => {
                    Array.isArray(e) ? t.push(...l(e)) : t.push(e)
                }
            )),
                t
        }

        function o(e, t) {
            return Array.prototype.filter.call(e, t)
        }

        function d(e, t) {
            const s = r()
                , i = a();
            let l = [];
            if (!t && e instanceof n)
                return e;
            if (!e)
                return new n(l);
            if ("string" == typeof e) {
                const s = e.trim();
                if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                    let e = "div";
                    0 === s.indexOf("<li") && (e = "ul"),
                    0 === s.indexOf("<tr") && (e = "tbody"),
                    0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"),
                    0 === s.indexOf("<tbody") && (e = "table"),
                    0 === s.indexOf("<option") && (e = "select");
                    const t = i.createElement(e);
                    t.innerHTML = s;
                    for (let e = 0; e < t.childNodes.length; e += 1)
                        l.push(t.childNodes[e])
                } else
                    l = function(e, t) {
                        if ("string" != typeof e)
                            return [e];
                        const s = []
                            , a = t.querySelectorAll(e);
                        for (let e = 0; e < a.length; e += 1)
                            s.push(a[e]);
                        return s
                    }(e.trim(), t || i)
            } else if (e.nodeType || e === s || e === i)
                l.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof n)
                    return e;
                l = e
            }
            return new n(function(e) {
                const t = [];
                for (let s = 0; s < e.length; s += 1)
                    -1 === t.indexOf(e[s]) && t.push(e[s]);
                return t
            }(l))
        }

        d.fn = n.prototype;
        const c = {
            addClass: function(...e) {
                const t = l(e.map((e => e.split(" "))));
                return this.forEach((e => {
                        e.classList.add(...t)
                    }
                )),
                    this
            },
            removeClass: function(...e) {
                const t = l(e.map((e => e.split(" "))));
                return this.forEach((e => {
                        e.classList.remove(...t)
                    }
                )),
                    this
            },
            hasClass: function(...e) {
                const t = l(e.map((e => e.split(" "))));
                return o(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
            },
            toggleClass: function(...e) {
                const t = l(e.map((e => e.split(" "))));
                this.forEach((e => {
                        t.forEach((t => {
                                e.classList.toggle(t)
                            }
                        ))
                    }
                ))
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (let s = 0; s < this.length; s += 1)
                    if (2 === arguments.length)
                        this[s].setAttribute(e, t);
                    else
                        for (const t in e)
                            this[s][t] = e[t],
                                this[s].setAttribute(t, e[t]);
                return this
            },
            removeAttr: function(e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].removeAttribute(e);
                return this
            },
            transform: function(e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].style.transform = e;
                return this
            },
            transition: function(e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this
            },
            on: function(...e) {
                let[t,s,a,i] = e;

                function r(e) {
                    const t = e.target;
                    if (!t)
                        return;
                    const i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e),
                        d(t).is(s))
                        a.apply(t, i);
                    else {
                        const e = d(t).parents();
                        for (let t = 0; t < e.length; t += 1)
                            d(e[t]).is(s) && a.apply(e[t], i)
                    }
                }

                function n(e) {
                    const t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e),
                        a.apply(this, t)
                }

                "function" == typeof e[1] && ([t,a,i] = e,
                    s = void 0),
                i || (i = !1);
                const l = t.split(" ");
                let o;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (s)
                        for (o = 0; o < l.length; o += 1) {
                            const e = l[o];
                            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                            t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                                t.dom7LiveListeners[e].push({
                                    listener: a,
                                    proxyListener: r
                                }),
                                t.addEventListener(e, r, i)
                        }
                    else
                        for (o = 0; o < l.length; o += 1) {
                            const e = l[o];
                            t.dom7Listeners || (t.dom7Listeners = {}),
                            t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                                t.dom7Listeners[e].push({
                                    listener: a,
                                    proxyListener: n
                                }),
                                t.addEventListener(e, n, i)
                        }
                }
                return this
            },
            off: function(...e) {
                let[t,s,a,i] = e;
                "function" == typeof e[1] && ([t,a,i] = e,
                    s = void 0),
                i || (i = !1);
                const r = t.split(" ");
                for (let e = 0; e < r.length; e += 1) {
                    const t = r[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const r = this[e];
                        let n;
                        if (!s && r.dom7Listeners ? n = r.dom7Listeners[t] : s && r.dom7LiveListeners && (n = r.dom7LiveListeners[t]),
                        n && n.length)
                            for (let e = n.length - 1; e >= 0; e -= 1) {
                                const s = n[e];
                                a && s.listener === a || a && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === a ? (r.removeEventListener(t, s.proxyListener, i),
                                    n.splice(e, 1)) : a || (r.removeEventListener(t, s.proxyListener, i),
                                    n.splice(e, 1))
                            }
                    }
                }
                return this
            },
            trigger: function(...e) {
                const t = r()
                    , s = e[0].split(" ")
                    , a = e[1];
                for (let i = 0; i < s.length; i += 1) {
                    const r = s[i];
                    for (let s = 0; s < this.length; s += 1) {
                        const i = this[s];
                        if (t.CustomEvent) {
                            const s = new t.CustomEvent(r,{
                                detail: a,
                                bubbles: !0,
                                cancelable: !0
                            });
                            i.dom7EventData = e.filter(( (e, t) => t > 0)),
                                i.dispatchEvent(s),
                                i.dom7EventData = [],
                                delete i.dom7EventData
                        }
                    }
                }
                return this
            },
            transitionEnd: function(e) {
                const t = this;
                return e && t.on("transitionend", (function s(a) {
                        a.target === this && (e.call(this, a),
                            t.off("transitionend", s))
                    }
                )),
                    this
            },
            outerWidth: function(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            styles: function() {
                const e = r();
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            },
            offset: function() {
                if (this.length > 0) {
                    const e = r()
                        , t = a()
                        , s = this[0]
                        , i = s.getBoundingClientRect()
                        , n = t.body
                        , l = s.clientTop || n.clientTop || 0
                        , o = s.clientLeft || n.clientLeft || 0
                        , d = s === e ? e.scrollY : s.scrollTop
                        , c = s === e ? e.scrollX : s.scrollLeft;
                    return {
                        top: i.top + d - l,
                        left: i.left + c - o
                    }
                }
                return null
            },
            css: function(e, t) {
                const s = r();
                let a;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (a = 0; a < this.length; a += 1)
                            for (const t in e)
                                this[a].style[t] = e[t];
                        return this
                    }
                    if (this[0])
                        return s.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        this[a].style[e] = t;
                    return this
                }
                return this
            },
            each: function(e) {
                return e ? (this.forEach(( (t, s) => {
                        e.apply(t, [t, s])
                    }
                )),
                    this) : this
            },
            html: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1)
                    this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1)
                    this[t].textContent = e;
                return this
            },
            is: function(e) {
                const t = r()
                    , s = a()
                    , i = this[0];
                let l, o;
                if (!i || void 0 === e)
                    return !1;
                if ("string" == typeof e) {
                    if (i.matches)
                        return i.matches(e);
                    if (i.webkitMatchesSelector)
                        return i.webkitMatchesSelector(e);
                    if (i.msMatchesSelector)
                        return i.msMatchesSelector(e);
                    for (l = d(e),
                             o = 0; o < l.length; o += 1)
                        if (l[o] === i)
                            return !0;
                    return !1
                }
                if (e === s)
                    return i === s;
                if (e === t)
                    return i === t;
                if (e.nodeType || e instanceof n) {
                    for (l = e.nodeType ? [e] : e,
                             o = 0; o < l.length; o += 1)
                        if (l[o] === i)
                            return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); )
                        1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if (void 0 === e)
                    return this;
                const t = this.length;
                if (e > t - 1)
                    return d([]);
                if (e < 0) {
                    const s = t + e;
                    return d(s < 0 ? [] : [this[s]])
                }
                return d([this[e]])
            },
            append: function(...e) {
                let t;
                const s = a();
                for (let a = 0; a < e.length; a += 1) {
                    t = e[a];
                    for (let e = 0; e < this.length; e += 1)
                        if ("string" == typeof t) {
                            const a = s.createElement("div");
                            for (a.innerHTML = t; a.firstChild; )
                                this[e].appendChild(a.firstChild)
                        } else if (t instanceof n)
                            for (let s = 0; s < t.length; s += 1)
                                this[e].appendChild(t[s]);
                        else
                            this[e].appendChild(t)
                }
                return this
            },
            prepend: function(e) {
                const t = a();
                let s, i;
                for (s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        const a = t.createElement("div");
                        for (a.innerHTML = e,
                                 i = a.childNodes.length - 1; i >= 0; i -= 1)
                            this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
                    } else if (e instanceof n)
                        for (i = 0; i < e.length; i += 1)
                            this[s].insertBefore(e[i], this[s].childNodes[0]);
                    else
                        this[s].insertBefore(e, this[s].childNodes[0]);
                return this
            },
            next: function(e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
            },
            nextAll: function(e) {
                const t = [];
                let s = this[0];
                if (!s)
                    return d([]);
                for (; s.nextElementSibling; ) {
                    const a = s.nextElementSibling;
                    e ? d(a).is(e) && t.push(a) : t.push(a),
                        s = a
                }
                return d(t)
            },
            prev: function(e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
                }
                return d([])
            },
            prevAll: function(e) {
                const t = [];
                let s = this[0];
                if (!s)
                    return d([]);
                for (; s.previousElementSibling; ) {
                    const a = s.previousElementSibling;
                    e ? d(a).is(e) && t.push(a) : t.push(a),
                        s = a
                }
                return d(t)
            },
            parent: function(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1)
                    null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                return d(t)
            },
            parents: function(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    let a = this[s].parentNode;
                    for (; a; )
                        e ? d(a).is(e) && t.push(a) : t.push(a),
                            a = a.parentNode
                }
                return d(t)
            },
            closest: function(e) {
                let t = this;
                return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)),
                    t)
            },
            find: function(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const a = this[s].querySelectorAll(e);
                    for (let e = 0; e < a.length; e += 1)
                        t.push(a[e])
                }
                return d(t)
            },
            children: function(e) {
                const t = [];
                for (let s = 0; s < this.length; s += 1) {
                    const a = this[s].children;
                    for (let s = 0; s < a.length; s += 1)
                        e && !d(a[s]).is(e) || t.push(a[s])
                }
                return d(t)
            },
            filter: function(e) {
                return d(o(this, e))
            },
            remove: function() {
                for (let e = 0; e < this.length; e += 1)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
        };

        function p(e, t=0) {
            return setTimeout(e, t)
        }

        function u() {
            return Date.now()
        }

        function h(e, t="x") {
            const s = r();
            let a, i, n;
            const l = function(e) {
                const t = r();
                let s;
                return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
                !s && e.currentStyle && (s = e.currentStyle),
                s || (s = e.style),
                    s
            }(e);
            return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform,
            i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")),
                n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                a = n.toString().split(",")),
            "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
            "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
            i || 0
        }

        function m(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function f(...e) {
            const t = Object(e[0])
                , s = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < e.length; i += 1) {
                const r = e[i];
                if (null != r && (a = r,
                    !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
                    const e = Object.keys(Object(r)).filter((e => s.indexOf(e) < 0));
                    for (let s = 0, a = e.length; s < a; s += 1) {
                        const a = e[s]
                            , i = Object.getOwnPropertyDescriptor(r, a);
                        void 0 !== i && i.enumerable && (m(t[a]) && m(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : f(t[a], r[a]) : !m(t[a]) && m(r[a]) ? (t[a] = {},
                            r[a].__swiper__ ? t[a] = r[a] : f(t[a], r[a])) : t[a] = r[a])
                    }
                }
            }
            var a;
            return t
        }

        function g(e, t, s) {
            e.style.setProperty(t, s)
        }

        function v({swiper: e, targetPosition: t, side: s}) {
            const a = r()
                , i = -e.translate;
            let n, l = null;
            const o = e.params.speed;
            e.wrapperEl.style.scrollSnapType = "none",
                a.cancelAnimationFrame(e.cssModeFrameID);
            const d = t > i ? "next" : "prev"
                , c = (e, t) => "next" === d && e >= t || "prev" === d && e <= t
                , p = () => {
                    n = (new Date).getTime(),
                    null === l && (l = n);
                    const r = Math.max(Math.min((n - l) / o, 1), 0)
                        , d = .5 - Math.cos(r * Math.PI) / 2;
                    let u = i + d * (t - i);
                    if (c(u, t) && (u = t),
                        e.wrapperEl.scrollTo({
                            [s]: u
                        }),
                        c(u, t))
                        return e.wrapperEl.style.overflow = "hidden",
                            e.wrapperEl.style.scrollSnapType = "",
                            setTimeout(( () => {
                                    e.wrapperEl.style.overflow = "",
                                        e.wrapperEl.scrollTo({
                                            [s]: u
                                        })
                                }
                            )),
                            void a.cancelAnimationFrame(e.cssModeFrameID);
                    e.cssModeFrameID = a.requestAnimationFrame(p)
                }
            ;
            p()
        }

        let w, b, x;

        function y() {
            return w || (w = function() {
                const e = r()
                    , t = a();
                return {
                    smoothScroll: t.documentElement && "scrollBehavior"in t.documentElement.style,
                    touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    passiveListener: function() {
                        let t = !1;
                        try {
                            const s = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, s)
                        } catch (e) {}
                        return t
                    }(),
                    gestures: "ongesturestart"in e
                }
            }()),
                w
        }

        function E(e={}) {
            return b || (b = function({userAgent: e}={}) {
                const t = y()
                    , s = r()
                    , a = s.navigator.platform
                    , i = e || s.navigator.userAgent
                    , n = {
                    ios: !1,
                    android: !1
                }
                    , l = s.screen.width
                    , o = s.screen.height
                    , d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                let c = i.match(/(iPad).*OS\s([\d_]+)/);
                const p = i.match(/(iPod)(.*OS\s([\d_]+))?/)
                    , u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                    , h = "Win32" === a;
                let m = "MacIntel" === a;
                return !c && m && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${o}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/),
                c || (c = [0, 1, "13_0_0"]),
                    m = !1),
                d && !h && (n.os = "android",
                    n.android = !0),
                (c || u || p) && (n.os = "ios",
                    n.ios = !0),
                    n
            }(e)),
                b
        }

        function T() {
            return x || (x = function() {
                const e = r();
                return {
                    isSafari: function() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }(),
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                }
            }()),
                x
        }

        Object.keys(c).forEach((e => {
                Object.defineProperty(d.fn, e, {
                    value: c[e],
                    writable: !0
                })
            }
        ));
        var C = {
            on(e, t, s) {
                const a = this;
                if ("function" != typeof t)
                    return a;
                const i = s ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                        a.eventsListeners[e] || (a.eventsListeners[e] = []),
                            a.eventsListeners[e][i](t)
                    }
                )),
                    a
            },
            once(e, t, s) {
                const a = this;
                if ("function" != typeof t)
                    return a;

                function i(...s) {
                    a.off(e, i),
                    i.__emitterProxy && delete i.__emitterProxy,
                        t.apply(a, s)
                }

                return i.__emitterProxy = t,
                    a.on(e, i, s)
            },
            onAny(e, t) {
                const s = this;
                if ("function" != typeof e)
                    return s;
                const a = t ? "unshift" : "push";
                return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e),
                    s
            },
            offAny(e) {
                const t = this;
                if (!t.eventsAnyListeners)
                    return t;
                const s = t.eventsAnyListeners.indexOf(e);
                return s >= 0 && t.eventsAnyListeners.splice(s, 1),
                    t
            },
            off(e, t) {
                const s = this;
                return s.eventsListeners ? (e.split(" ").forEach((e => {
                        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(( (a, i) => {
                                (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                            }
                        ))
                    }
                )),
                    s) : s
            },
            emit(...e) {
                const t = this;
                if (!t.eventsListeners)
                    return t;
                let s, a, i;
                "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0],
                    a = e.slice(1, e.length),
                    i = t) : (s = e[0].events,
                    a = e[0].data,
                    i = e[0].context || t),
                    a.unshift(i);
                return (Array.isArray(s) ? s : s.split(" ")).forEach((e => {
                        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                                t.apply(i, [e, ...a])
                            }
                        )),
                        t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                                e.apply(i, a)
                            }
                        ))
                    }
                )),
                    t
            }
        };

        function $({swiper: e, runCallbacks: t, direction: s, step: a}) {
            const {activeIndex: i, previousIndex: r} = e;
            let n = s;
            if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"),
                e.emit(`transition${a}`),
            t && i !== r) {
                if ("reset" === n)
                    return void e.emit(`slideResetTransition${a}`);
                e.emit(`slideChangeTransition${a}`),
                    "next" === n ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`)
            }
        }

        function S(e) {
            const t = this
                , s = a()
                , i = r()
                , n = t.touchEventsData
                , {params: l, touches: o, enabled: c} = t;
            if (!c)
                return;
            if (t.animating && l.preventInteractionOnTransition)
                return;
            !t.animating && l.cssMode && l.loop && t.loopFix();
            let p = e;
            p.originalEvent && (p = p.originalEvent);
            let h = d(p.target);
            if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
                return;
            if (n.isTouchEvent = "touchstart" === p.type,
            !n.isTouchEvent && "which"in p && 3 === p.which)
                return;
            if (!n.isTouchEvent && "button"in p && p.button > 0)
                return;
            if (n.isTouched && n.isMoved)
                return;
            !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
            const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
                , f = !(!p.target || !p.target.shadowRoot);
            if (l.noSwiping && (f ? function(e, t=this) {
                return function t(s) {
                    return s && s !== a() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host)) : null
                }(t)
            }(m, p.target) : h.closest(m)[0]))
                return void (t.allowClick = !0);
            if (l.swipeHandler && !h.closest(l.swipeHandler)[0])
                return;
            o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX,
                o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
            const g = o.currentX
                , v = o.currentY
                , w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection
                , b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
            if (w && (g <= b || g >= i.innerWidth - b)) {
                if ("prevent" !== w)
                    return;
                e.preventDefault()
            }
            if (Object.assign(n, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
                o.startX = g,
                o.startY = v,
                n.touchStartTime = u(),
                t.allowClick = !0,
                t.updateSize(),
                t.swipeDirection = void 0,
            l.threshold > 0 && (n.allowThresholdMove = !1),
            "touchstart" !== p.type) {
                let e = !0;
                h.is(n.focusableElements) && (e = !1),
                s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
                const a = e && t.allowTouchMove && l.touchStartPreventDefault;
                !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
            }
            t.emit("touchStart", p)
        }

        function M(e) {
            const t = a()
                , s = this
                , i = s.touchEventsData
                , {params: r, touches: n, rtlTranslate: l, enabled: o} = s;
            if (!o)
                return;
            let c = e;
            if (c.originalEvent && (c = c.originalEvent),
                !i.isTouched)
                return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
            if (i.isTouchEvent && "touchmove" !== c.type)
                return;
            const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0])
                , h = "touchmove" === c.type ? p.pageX : c.pageX
                , m = "touchmove" === c.type ? p.pageY : c.pageY;
            if (c.preventedByNestedSwiper)
                return n.startX = h,
                    void (n.startY = m);
            if (!s.allowTouchMove)
                return s.allowClick = !1,
                    void (i.isTouched && (Object.assign(n, {
                        startX: h,
                        startY: m,
                        currentX: h,
                        currentY: m
                    }),
                        i.touchStartTime = u()));
            if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                if (s.isVertical()) {
                    if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate())
                        return i.isTouched = !1,
                            void (i.isMoved = !1)
                } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate())
                    return;
            if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements))
                return i.isMoved = !0,
                    void (s.allowClick = !1);
            if (i.allowTouchCallbacks && s.emit("touchMove", c),
            c.targetTouches && c.targetTouches.length > 1)
                return;
            n.currentX = h,
                n.currentY = m;
            const f = n.currentX - n.startX
                , g = n.currentY - n.startY;
            if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
                return;
            if (void 0 === i.isScrolling) {
                let e;
                s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI,
                    i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
            }
            if (i.isScrolling && s.emit("touchMoveOpposite", c),
            void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)),
                i.isScrolling)
                return void (i.isTouched = !1);
            if (!i.startMoving)
                return;
            s.allowClick = !1,
            !r.cssMode && c.cancelable && c.preventDefault(),
            r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
            i.isMoved || (r.loop && !r.cssMode && s.loopFix(),
                i.startTranslate = s.getTranslate(),
                s.setTransition(0),
            s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                i.allowMomentumBounce = !1,
            !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
                s.emit("sliderFirstMove", c)),
                s.emit("sliderMove", c),
                i.isMoved = !0;
            let v = s.isHorizontal() ? f : g;
            n.diff = v,
                v *= r.touchRatio,
            l && (v = -v),
                s.swipeDirection = v > 0 ? "prev" : "next",
                i.currentTranslate = v + i.startTranslate;
            let w = !0
                , b = r.resistanceRatio;
            if (r.touchReleaseOnEdges && (b = 0),
                v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1,
                r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1,
                r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)),
            w && (c.preventedByNestedSwiper = !0),
            !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
            !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
            s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
            r.threshold > 0) {
                if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
                    return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                    return i.allowThresholdMove = !0,
                        n.startX = n.currentX,
                        n.startY = n.currentY,
                        i.currentTranslate = i.startTranslate,
                        void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
            }
            r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(),
                s.updateSlidesClasses()),
            s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
                s.updateProgress(i.currentTranslate),
                s.setTranslate(i.currentTranslate))
        }

        function P(e) {
            const t = this
                , s = t.touchEventsData
                , {params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l} = t;
            if (!l)
                return;
            let o = e;
            if (o.originalEvent && (o = o.originalEvent),
            s.allowTouchCallbacks && t.emit("touchEnd", o),
                s.allowTouchCallbacks = !1,
                !s.isTouched)
                return s.isMoved && a.grabCursor && t.setGrabCursor(!1),
                    s.isMoved = !1,
                    void (s.startMoving = !1);
            a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const d = u()
                , c = d - s.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(o),
                t.emit("tap click", o),
            c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)),
                s.lastClickTime = u(),
                p(( () => {
                        t.destroyed || (t.allowClick = !0)
                    }
                )),
            !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
                return s.isTouched = !1,
                    s.isMoved = !1,
                    void (s.startMoving = !1);
            let h;
            if (s.isTouched = !1,
                s.isMoved = !1,
                s.startMoving = !1,
                h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate,
                a.cssMode)
                return;
            if (t.params.freeMode && a.freeMode.enabled)
                return void t.freeMode.onTouchEnd({
                    currentPos: h
                });
            let m = 0
                , f = t.slidesSizesGrid[0];
            for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e,
                    f = n[e + t] - n[e]) : h >= n[e] && (m = e,
                    f = n[n.length - 1] - n[n.length - 2])
            }
            const g = (h - n[m]) / f
                , v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            if (c > a.longSwipesMs) {
                if (!a.longSwipes)
                    return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (g >= a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)),
                "prev" === t.swipeDirection && (g > 1 - a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m))
            } else {
                if (!a.shortSwipes)
                    return void t.slideTo(t.activeIndex);
                t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + v) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(m + v),
                "prev" === t.swipeDirection && t.slideTo(m))
            }
        }

        function k() {
            const e = this
                , {params: t, el: s} = e;
            if (s && 0 === s.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e;
            e.allowSlideNext = !0,
                e.allowSlidePrev = !0,
                e.updateSize(),
                e.updateSlides(),
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
                e.allowSlidePrev = i,
                e.allowSlideNext = a,
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }

        function z(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
                e.stopImmediatePropagation())))
        }

        function O() {
            const e = this
                , {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
            if (!a)
                return;
            let i;
            e.previousTranslate = e.translate,
                e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
            -0 === e.translate && (e.translate = 0),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            const r = e.maxTranslate() - e.minTranslate();
            i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
            i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
                e.emit("setTranslate", e.translate, !1)
        }

        let I = !1;

        function L() {}

        const A = (e, t) => {
                const s = a()
                    , {params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d} = e
                    , c = !!i.nested
                    , p = "on" === t ? "addEventListener" : "removeEventListener"
                    , u = t;
                if (d.touch) {
                    const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    n[p](r.start, e.onTouchStart, t),
                        n[p](r.move, e.onTouchMove, d.passiveListener ? {
                            passive: !1,
                            capture: c
                        } : c),
                        n[p](r.end, e.onTouchEnd, t),
                    r.cancel && n[p](r.cancel, e.onTouchEnd, t)
                } else
                    n[p](r.start, e.onTouchStart, !1),
                        s[p](r.move, e.onTouchMove, c),
                        s[p](r.end, e.onTouchEnd, !1);
                (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0),
                i.cssMode && l[p]("scroll", e.onScroll),
                    i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0) : e[u]("observerUpdate", k, !0)
            }
        ;
        const D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var G = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };

        function N(e, t) {
            return function(s={}) {
                const a = Object.keys(s)[0]
                    , i = s[a];
                "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                    auto: !0
                }),
                    a in e && "enabled"in i ? (!0 === e[a] && (e[a] = {
                        enabled: !0
                    }),
                    "object" != typeof e[a] || "enabled"in e[a] || (e[a].enabled = !0),
                    e[a] || (e[a] = {
                        enabled: !1
                    }),
                        f(t, s)) : f(t, s)) : f(t, s)
            }
        }

        const B = {
            eventsEmitter: C,
            update: {
                updateSize: function() {
                    const e = this;
                    let t, s;
                    const a = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth,
                        s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight,
                    0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10),
                        s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10),
                    Number.isNaN(t) && (t = 0),
                    Number.isNaN(s) && (s = 0),
                        Object.assign(e, {
                            width: t,
                            height: s,
                            size: e.isHorizontal() ? t : s
                        }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function s(e, s) {
                        return parseFloat(e.getPropertyValue(t(s)) || 0)
                    }

                    const a = e.params
                        , {$wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e
                        , o = e.virtual && a.virtual.enabled
                        , d = o ? e.virtual.slides.length : e.slides.length
                        , c = i.children(`.${e.params.slideClass}`)
                        , p = o ? e.virtual.slides.length : c.length;
                    let u = [];
                    const h = []
                        , m = [];
                    let f = a.slidesOffsetBefore;
                    "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
                    let v = a.slidesOffsetAfter;
                    "function" == typeof v && (v = a.slidesOffsetAfter.call(e));
                    const w = e.snapGrid.length
                        , b = e.slidesGrid.length;
                    let x = a.spaceBetween
                        , y = -f
                        , E = 0
                        , T = 0;
                    if (void 0 === r)
                        return;
                    "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r),
                        e.virtualSize = -x,
                        n ? c.css({
                            marginLeft: "",
                            marginBottom: "",
                            marginTop: ""
                        }) : c.css({
                            marginRight: "",
                            marginBottom: "",
                            marginTop: ""
                        }),
                    a.centeredSlides && a.cssMode && (g(e.wrapperEl, "--swiper-centered-offset-before", ""),
                        g(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const C = a.grid && a.grid.rows > 1 && e.grid;
                    let $;
                    C && e.grid.initSlides(p);
                    const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
                    for (let i = 0; i < p; i += 1) {
                        $ = 0;
                        const n = c.eq(i);
                        if (C && e.grid.updateSlide(i, n, p, t),
                        "none" !== n.css("display")) {
                            if ("auto" === a.slidesPerView) {
                                S && (c[i].style[t("width")] = "");
                                const r = getComputedStyle(n[0])
                                    , l = n[0].style.transform
                                    , o = n[0].style.webkitTransform;
                                if (l && (n[0].style.transform = "none"),
                                o && (n[0].style.webkitTransform = "none"),
                                    a.roundLengths)
                                    $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                else {
                                    const e = s(r, "width")
                                        , t = s(r, "padding-left")
                                        , a = s(r, "padding-right")
                                        , i = s(r, "margin-left")
                                        , l = s(r, "margin-right")
                                        , o = r.getPropertyValue("box-sizing");
                                    if (o && "border-box" === o)
                                        $ = e + i + l;
                                    else {
                                        const {clientWidth: s, offsetWidth: r} = n[0];
                                        $ = e + t + a + i + l + (r - s)
                                    }
                                }
                                l && (n[0].style.transform = l),
                                o && (n[0].style.webkitTransform = o),
                                a.roundLengths && ($ = Math.floor($))
                            } else
                                $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView,
                                a.roundLengths && ($ = Math.floor($)),
                                c[i] && (c[i].style[t("width")] = `${$}px`);
                            c[i] && (c[i].swiperSlideSize = $),
                                m.push($),
                                a.centeredSlides ? (y = y + $ / 2 + E / 2 + x,
                                0 === E && 0 !== i && (y = y - r / 2 - x),
                                0 === i && (y = y - r / 2 - x),
                                Math.abs(y) < .001 && (y = 0),
                                a.roundLengths && (y = Math.floor(y)),
                                T % a.slidesPerGroup == 0 && u.push(y),
                                    h.push(y)) : (a.roundLengths && (y = Math.floor(y)),
                                (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y),
                                    h.push(y),
                                    y = y + $ + x),
                                e.virtualSize += $ + x,
                                E = $,
                                T += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, r) + v,
                    n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                        width: `${e.virtualSize + a.spaceBetween}px`
                    }),
                    a.setWrapperSize && i.css({
                        [t("width")]: `${e.virtualSize + a.spaceBetween}px`
                    }),
                    C && e.grid.updateWrapperSize($, u, t),
                        !a.centeredSlides) {
                        const t = [];
                        for (let s = 0; s < u.length; s += 1) {
                            let i = u[s];
                            a.roundLengths && (i = Math.floor(i)),
                            u[s] <= e.virtualSize - r && t.push(i)
                        }
                        u = t,
                        Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
                    }
                    if (0 === u.length && (u = [0]),
                    0 !== a.spaceBetween) {
                        const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                        c.filter(( (e, t) => !a.cssMode || t !== c.length - 1)).css({
                            [s]: `${x}px`
                        })
                    }
                    if (a.centeredSlides && a.centeredSlidesBounds) {
                        let e = 0;
                        m.forEach((t => {
                                e += t + (a.spaceBetween ? a.spaceBetween : 0)
                            }
                        )),
                            e -= a.spaceBetween;
                        const t = e - r;
                        u = u.map((e => e < 0 ? -f : e > t ? t + v : e))
                    }
                    if (a.centerInsufficientSlides) {
                        let e = 0;
                        if (m.forEach((t => {
                                e += t + (a.spaceBetween ? a.spaceBetween : 0)
                            }
                        )),
                            e -= a.spaceBetween,
                        e < r) {
                            const t = (r - e) / 2;
                            u.forEach(( (e, s) => {
                                    u[s] = e - t
                                }
                            )),
                                h.forEach(( (e, s) => {
                                        h[s] = e + t
                                    }
                                ))
                        }
                    }
                    if (Object.assign(e, {
                        slides: c,
                        snapGrid: u,
                        slidesGrid: h,
                        slidesSizesGrid: m
                    }),
                    a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                        g(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
                            g(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0]
                            , s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)),
                            e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    p !== d && e.emit("slidesLengthChange"),
                    u.length !== w && (e.params.watchOverflow && e.checkOverflow(),
                        e.emit("snapGridLengthChange")),
                    h.length !== b && e.emit("slidesGridLengthChange"),
                    a.watchSlidesProgress && e.updateSlidesOffset()
                },
                updateAutoHeight: function(e) {
                    const t = this
                        , s = []
                        , a = t.virtual && t.params.virtual.enabled;
                    let i, r = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)
                            t.visibleSlides.each((e => {
                                    s.push(e)
                                }
                            ));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length && !a)
                                    break;
                                s.push(n(e))
                            }
                    else
                        s.push(n(t.activeIndex));
                    for (i = 0; i < s.length; i += 1)
                        if (void 0 !== s[i]) {
                            const e = s[i].offsetHeight;
                            r = e > r ? e : r
                        }
                    r && t.$wrapperEl.css("height", `${r}px`)
                },
                updateSlidesOffset: function() {
                    const e = this
                        , t = e.slides;
                    for (let s = 0; s < t.length; s += 1)
                        t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
                },
                updateSlidesProgress: function(e=this && this.translate || 0) {
                    const t = this
                        , s = t.params
                        , {slides: a, rtlTranslate: i} = t;
                    if (0 === a.length)
                        return;
                    void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                    let r = -e;
                    i && (r = e),
                        a.removeClass(s.slideVisibleClass),
                        t.visibleSlidesIndexes = [],
                        t.visibleSlides = [];
                    for (let e = 0; e < a.length; e += 1) {
                        const n = a[e];
                        let l = n.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (l -= a[0].swiperSlideOffset);
                        const o = (r + (s.centeredSlides ? t.minTranslate() : 0) - l) / (n.swiperSlideSize + s.spaceBetween)
                            , d = -(r - l)
                            , c = d + t.slidesSizesGrid[e];
                        (d >= 0 && d < t.size - 1 || c > 1 && c <= t.size || d <= 0 && c >= t.size) && (t.visibleSlides.push(n),
                            t.visibleSlidesIndexes.push(e),
                            a.eq(e).addClass(s.slideVisibleClass)),
                            n.progress = i ? -o : o
                    }
                    t.visibleSlides = d(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if (void 0 === e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params
                        , a = t.maxTranslate() - t.minTranslate();
                    let {progress: i, isBeginning: r, isEnd: n} = t;
                    const l = r
                        , o = n;
                    0 === a ? (i = 0,
                        r = !0,
                        n = !0) : (i = (e - t.minTranslate()) / a,
                        r = i <= 0,
                        n = i >= 1),
                        Object.assign(t, {
                            progress: i,
                            isBeginning: r,
                            isEnd: n
                        }),
                    (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
                    r && !l && t.emit("reachBeginning toEdge"),
                    n && !o && t.emit("reachEnd toEdge"),
                    (l && !r || o && !n) && t.emit("fromEdge"),
                        t.emit("progress", i)
                },
                updateSlidesClasses: function() {
                    const e = this
                        , {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r} = e
                        , n = e.virtual && s.virtual.enabled;
                    let l;
                    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
                        l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i),
                        l.addClass(s.slideActiveClass),
                    s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                    let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                    s.loop && 0 === o.length && (o = t.eq(0),
                        o.addClass(s.slideNextClass));
                    let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                    s.loop && 0 === d.length && (d = t.eq(-1),
                        d.addClass(s.slidePrevClass)),
                    s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
                        d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),
                        e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this
                        , s = t.rtlTranslate ? t.translate : -t.translate
                        , {slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o} = t;
                    let d, c = e;
                    if (void 0 === c) {
                        for (let e = 0; e < a.length; e += 1)
                            void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                    }
                    if (i.indexOf(s) >= 0)
                        d = i.indexOf(s);
                    else {
                        const e = Math.min(r.slidesPerGroupSkip, c);
                        d = e + Math.floor((c - e) / r.slidesPerGroup)
                    }
                    if (d >= i.length && (d = i.length - 1),
                    c === n)
                        return void (d !== o && (t.snapIndex = d,
                            t.emit("snapIndexChange")));
                    const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: p,
                        previousIndex: n,
                        activeIndex: c
                    }),
                        t.emit("activeIndexChange"),
                        t.emit("snapIndexChange"),
                    l !== p && t.emit("realIndexChange"),
                    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this
                        , s = t.params
                        , a = d(e.target).closest(`.${s.slideClass}`)[0];
                    let i, r = !1;
                    if (a)
                        for (let e = 0; e < t.slides.length; e += 1)
                            if (t.slides[e] === a) {
                                r = !0,
                                    i = e;
                                break
                            }
                    if (!a || !r)
                        return t.clickedSlide = void 0,
                            void (t.clickedIndex = void 0);
                    t.clickedSlide = a,
                        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i,
                    s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e=(this.isHorizontal() ? "x" : "y")) {
                    const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
                    if (t.virtualTranslate)
                        return s ? -a : a;
                    if (t.cssMode)
                        return a;
                    let r = h(i[0], e);
                    return s && (r = -r),
                    r || 0
                },
                setTranslate: function(e, t) {
                    const s = this
                        , {rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l} = s;
                    let o, d = 0, c = 0;
                    s.isHorizontal() ? d = a ? -e : e : c = e,
                    i.roundLengths && (d = Math.floor(d),
                        c = Math.floor(c)),
                        i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`),
                        s.previousTranslate = s.translate,
                        s.translate = s.isHorizontal() ? d : c;
                    const p = s.maxTranslate() - s.minTranslate();
                    o = 0 === p ? 0 : (e - s.minTranslate()) / p,
                    o !== l && s.updateProgress(e),
                        s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e=0, t=this.params.speed, s=!0, a=!0, i) {
                    const r = this
                        , {params: n, wrapperEl: l} = r;
                    if (r.animating && n.preventInteractionOnTransition)
                        return !1;
                    const o = r.minTranslate()
                        , d = r.maxTranslate();
                    let c;
                    if (c = a && e > o ? o : a && e < d ? d : e,
                        r.updateProgress(c),
                        n.cssMode) {
                        const e = r.isHorizontal();
                        if (0 === t)
                            l[e ? "scrollLeft" : "scrollTop"] = -c;
                        else {
                            if (!r.support.smoothScroll)
                                return v({
                                    swiper: r,
                                    targetPosition: -c,
                                    side: e ? "left" : "top"
                                }),
                                    !0;
                            l.scrollTo({
                                [e ? "left" : "top"]: -c,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0),
                        r.setTranslate(c),
                    s && (r.emit("beforeTransitionStart", t, i),
                        r.emit("transitionEnd"))) : (r.setTransition(t),
                        r.setTranslate(c),
                    s && (r.emit("beforeTransitionStart", t, i),
                        r.emit("transitionStart")),
                    r.animating || (r.animating = !0,
                    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                                r.onTranslateToWrapperTransitionEnd = null,
                                delete r.onTranslateToWrapperTransitionEnd,
                            s && r.emit("transitionEnd"))
                        }
                    ),
                        r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                        r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
                        !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    const s = this;
                    s.params.cssMode || s.$wrapperEl.transition(e),
                        s.emit("setTransition", e, t)
                },
                transitionStart: function(e=!0, t) {
                    const s = this
                        , {params: a} = s;
                    a.cssMode || (a.autoHeight && s.updateAutoHeight(),
                        $({
                            swiper: s,
                            runCallbacks: e,
                            direction: t,
                            step: "Start"
                        }))
                },
                transitionEnd: function(e=!0, t) {
                    const s = this
                        , {params: a} = s;
                    s.animating = !1,
                    a.cssMode || (s.setTransition(0),
                        $({
                            swiper: s,
                            runCallbacks: e,
                            direction: t,
                            step: "End"
                        }))
                }
            },
            slide: {
                slideTo: function(e=0, t=this.params.speed, s=!0, a, i) {
                    if ("number" != typeof e && "string" != typeof e)
                        throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t))
                            throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const r = this;
                    let n = e;
                    n < 0 && (n = 0);
                    const {params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m} = r;
                    if (r.animating && l.preventInteractionOnTransition || !m && !a && !i)
                        return !1;
                    const f = Math.min(r.params.slidesPerGroupSkip, n);
                    let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
                    g >= o.length && (g = o.length - 1),
                    (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
                    const w = -o[g];
                    if (r.updateProgress(w),
                        l.normalizeSlideIndex)
                        for (let e = 0; e < d.length; e += 1) {
                            const t = -Math.floor(100 * w)
                                , s = Math.floor(100 * d[e])
                                , a = Math.floor(100 * d[e + 1]);
                            void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                        }
                    if (r.initialized && n !== p) {
                        if (!r.allowSlideNext && w < r.translate && w < r.minTranslate())
                            return !1;
                        if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n)
                            return !1
                    }
                    let b;
                    if (b = n > p ? "next" : n < p ? "prev" : "reset",
                    u && -w === r.translate || !u && w === r.translate)
                        return r.updateActiveIndex(n),
                        l.autoHeight && r.updateAutoHeight(),
                            r.updateSlidesClasses(),
                        "slide" !== l.effect && r.setTranslate(w),
                        "reset" !== b && (r.transitionStart(s, b),
                            r.transitionEnd(s, b)),
                            !1;
                    if (l.cssMode) {
                        const e = r.isHorizontal()
                            , s = u ? w : -w;
                        if (0 === t) {
                            const t = r.virtual && r.params.virtual.enabled;
                            t && (r.wrapperEl.style.scrollSnapType = "none",
                                r._immediateVirtual = !0),
                                h[e ? "scrollLeft" : "scrollTop"] = s,
                            t && requestAnimationFrame(( () => {
                                    r.wrapperEl.style.scrollSnapType = "",
                                        r._swiperImmediateVirtual = !1
                                }
                            ))
                        } else {
                            if (!r.support.smoothScroll)
                                return v({
                                    swiper: r,
                                    targetPosition: s,
                                    side: e ? "left" : "top"
                                }),
                                    !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0),
                        r.setTranslate(w),
                        r.updateActiveIndex(n),
                        r.updateSlidesClasses(),
                        r.emit("beforeTransitionStart", t, a),
                        r.transitionStart(s, b),
                        r.transitionEnd(s, b)) : (r.setTransition(t),
                        r.setTranslate(w),
                        r.updateActiveIndex(n),
                        r.updateSlidesClasses(),
                        r.emit("beforeTransitionStart", t, a),
                        r.transitionStart(s, b),
                    r.animating || (r.animating = !0,
                    r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                                r.onSlideToWrapperTransitionEnd = null,
                                delete r.onSlideToWrapperTransitionEnd,
                                r.transitionEnd(s, b))
                        }
                    ),
                        r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                        r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
                        !0
                },
                slideToLoop: function(e=0, t=this.params.speed, s=!0, a) {
                    const i = this;
                    let r = e;
                    return i.params.loop && (r += i.loopedSlides),
                        i.slideTo(r, t, s, a)
                },
                slideNext: function(e=this.params.speed, t=!0, s) {
                    const a = this
                        , {animating: i, enabled: r, params: n} = a;
                    if (!r)
                        return a;
                    let l = n.slidesPerGroup;
                    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                    const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
                    if (n.loop) {
                        if (i && n.loopPreventsSlide)
                            return !1;
                        a.loopFix(),
                            a._clientLeft = a.$wrapperEl[0].clientLeft
                    }
                    return a.slideTo(a.activeIndex + o, e, t, s)
                },
                slidePrev: function(e=this.params.speed, t=!0, s) {
                    const a = this
                        , {params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d} = a;
                    if (!d)
                        return a;
                    if (i.loop) {
                        if (r && i.loopPreventsSlide)
                            return !1;
                        a.loopFix(),
                            a._clientLeft = a.$wrapperEl[0].clientLeft
                    }

                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }

                    const p = c(o ? a.translate : -a.translate)
                        , u = n.map((e => c(e)));
                    let h = n[u.indexOf(p) - 1];
                    if (void 0 === h && i.cssMode) {
                        let e;
                        n.forEach(( (t, s) => {
                                p >= t && (e = s)
                            }
                        )),
                        void 0 !== e && (h = n[e > 0 ? e - 1 : e])
                    }
                    let m = 0;
                    return void 0 !== h && (m = l.indexOf(h),
                    m < 0 && (m = a.activeIndex - 1),
                    "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1,
                        m = Math.max(m, 0))),
                        a.slideTo(m, e, t, s)
                },
                slideReset: function(e=this.params.speed, t=!0, s) {
                    return this.slideTo(this.activeIndex, e, t, s)
                },
                slideToClosest: function(e=this.params.speed, t=!0, s, a=.5) {
                    const i = this;
                    let r = i.activeIndex;
                    const n = Math.min(i.params.slidesPerGroupSkip, r)
                        , l = n + Math.floor((r - n) / i.params.slidesPerGroup)
                        , o = i.rtlTranslate ? i.translate : -i.translate;
                    if (o >= i.snapGrid[l]) {
                        const e = i.snapGrid[l];
                        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
                    } else {
                        const e = i.snapGrid[l - 1];
                        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
                    }
                    return r = Math.max(r, 0),
                        r = Math.min(r, i.slidesGrid.length - 1),
                        i.slideTo(r, e, t, s)
                },
                slideToClickedSlide: function() {
                    const e = this
                        , {params: t, $wrapperEl: s} = e
                        , a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let i, r = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating)
                            return;
                        i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                            t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(),
                                r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                                p(( () => {
                                        e.slideTo(r)
                                    }
                                ))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(),
                                r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                                p(( () => {
                                        e.slideTo(r)
                                    }
                                ))) : e.slideTo(r)
                    } else
                        e.slideTo(r)
                }
            },
            loop: {
                loopCreate: function() {
                    const e = this
                        , t = a()
                        , {params: s, $wrapperEl: i} = e;
                    i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                    let r = i.children(`.${s.slideClass}`);
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - r.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup) {
                            for (let a = 0; a < e; a += 1) {
                                const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                i.append(e)
                            }
                            r = i.children(`.${s.slideClass}`)
                        }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length),
                        e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)),
                        e.loopedSlides += s.loopAdditionalSlides,
                    e.loopedSlides > r.length && (e.loopedSlides = r.length);
                    const n = []
                        , l = [];
                    r.each(( (t, s) => {
                            const a = d(t);
                            s < e.loopedSlides && l.push(t),
                            s < r.length && s >= r.length - e.loopedSlides && n.push(t),
                                a.attr("data-swiper-slide-index", s)
                        }
                    ));
                    for (let e = 0; e < l.length; e += 1)
                        i.append(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
                    for (let e = n.length - 1; e >= 0; e -= 1)
                        i.prepend(d(n[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l} = e;
                    let o;
                    e.allowSlidePrev = !0,
                        e.allowSlideNext = !0;
                    const d = -n[t] - e.getTranslate();
                    if (t < a) {
                        o = s.length - 3 * a + t,
                            o += a;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    } else if (t >= s.length - a) {
                        o = -s.length + t + a,
                            o += a;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    }
                    e.allowSlidePrev = i,
                        e.allowSlideNext = r,
                        e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {$wrapperEl: e, params: t, slides: s} = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
                        s.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                        return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    s.style.cursor = "move",
                        s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                        s.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                        s.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: {
                attachEvents: function() {
                    const e = this
                        , t = a()
                        , {params: s, support: i} = e;
                    e.onTouchStart = S.bind(e),
                        e.onTouchMove = M.bind(e),
                        e.onTouchEnd = P.bind(e),
                    s.cssMode && (e.onScroll = O.bind(e)),
                        e.onClick = z.bind(e),
                    i.touch && !I && (t.addEventListener("touchstart", L),
                        I = !0),
                        A(e, "on")
                },
                detachEvents: function() {
                    A(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this
                        , {activeIndex: t, initialized: s, loopedSlides: a=0, params: i, $el: r} = e
                        , n = i.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length)
                        return;
                    const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                    if (!l || e.currentBreakpoint === l)
                        return;
                    const o = (l in n ? n[l] : void 0) || e.originalParams
                        , d = D(e, i)
                        , c = D(e, o)
                        , p = i.enabled;
                    d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),
                        e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`),
                    (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`),
                        e.emitContainerClasses());
                    const u = o.direction && o.direction !== i.direction
                        , h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                    u && s && e.changeDirection(),
                        f(e.params, o);
                    const m = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                        p && !m ? e.disable() : !p && m && e.enable(),
                        e.currentBreakpoint = l,
                        e.emit("_beforeBreakpoint", o),
                    h && s && (e.loopDestroy(),
                        e.loopCreate(),
                        e.updateSlides(),
                        e.slideTo(t - a + e.loopedSlides, 0, !1)),
                        e.emit("breakpoint", o)
                },
                getBreakpoint: function(e, t="window", s) {
                    if (!e || "container" === t && !s)
                        return;
                    let a = !1;
                    const i = r()
                        , n = "window" === t ? i.innerHeight : s.clientHeight
                        , l = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }
                    ));
                    l.sort(( (e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < l.length; e += 1) {
                        const {point: r, value: n} = l[e];
                        "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                    }
                    return a || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this
                        , {isLocked: t, params: s} = e
                        , {slidesOffsetBefore: a} = s;
                    if (a) {
                        const t = e.slides.length - 1
                            , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s
                    } else
                        e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                    !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                    t && t !== e.isLocked && (e.isEnd = !1),
                    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    const e = this
                        , {classNames: t, params: s, rtl: a, $el: i, device: r, support: n} = e
                        , l = function(e, t) {
                        const s = [];
                        return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((a => {
                                        e[a] && s.push(t + a)
                                    }
                                )) : "string" == typeof e && s.push(t + e)
                            }
                        )),
                            s
                    }(["initialized", s.direction, {
                        "pointer-events": !n.touch
                    }, {
                        "free-mode": e.params.freeMode && s.freeMode.enabled
                    }, {
                        autoheight: s.autoHeight
                    }, {
                        rtl: a
                    }, {
                        grid: s.grid && s.grid.rows > 1
                    }, {
                        "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                    }, {
                        android: r.android
                    }, {
                        ios: r.ios
                    }, {
                        "css-mode": s.cssMode
                    }, {
                        centered: s.cssMode && s.centeredSlides
                    }], s.containerModifierClass);
                    t.push(...l),
                        i.addClass([...t].join(" ")),
                        e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {$el: e, classNames: t} = this;
                    e.removeClass(t.join(" ")),
                        this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function(e, t, s, a, i, n) {
                    const l = r();
                    let o;

                    function c() {
                        n && n()
                    }

                    d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image,
                        o.onload = c,
                        o.onerror = c,
                    a && (o.sizes = a),
                    s && (o.srcset = s),
                    t && (o.src = t)) : c()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                        e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                            e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const a = e.imagesToLoad[s];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }
            , X = {};

        class H {
            constructor(...e) {
                let t, s;
                if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t,s] = e,
                s || (s = {}),
                    s = f({}, s),
                t && !s.el && (s.el = t),
                s.el && d(s.el).length > 1) {
                    const e = [];
                    return d(s.el).each((t => {
                            const a = f({}, s, {
                                el: t
                            });
                            e.push(new H(a))
                        }
                    )),
                        e
                }
                const a = this;
                a.__swiper__ = !0,
                    a.support = y(),
                    a.device = E({
                        userAgent: s.userAgent
                    }),
                    a.browser = T(),
                    a.eventsListeners = {},
                    a.eventsAnyListeners = [],
                    a.modules = [...a.__modules__],
                s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
                const i = {};
                a.modules.forEach((e => {
                        e({
                            swiper: a,
                            extendParams: N(s, i),
                            on: a.on.bind(a),
                            once: a.once.bind(a),
                            off: a.off.bind(a),
                            emit: a.emit.bind(a)
                        })
                    }
                ));
                const r = f({}, G, i);
                return a.params = f({}, r, X, s),
                    a.originalParams = f({}, a.params),
                    a.passedParams = f({}, s),
                a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
                        a.on(e, a.params.on[e])
                    }
                )),
                a.params && a.params.onAny && a.onAny(a.params.onAny),
                    a.$ = d,
                    Object.assign(a, {
                        enabled: a.params.enabled,
                        el: t,
                        classNames: [],
                        slides: d(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === a.params.direction,
                        isVertical: () => "vertical" === a.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: a.params.allowSlideNext,
                        allowSlidePrev: a.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"]
                                , t = ["pointerdown", "pointermove", "pointerup"];
                            return a.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            },
                                a.touchEventsDesktop = {
                                    start: t[0],
                                    move: t[1],
                                    end: t[2]
                                },
                                a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: a.params.focusableElements,
                            lastClickTime: u(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: a.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }),
                    a.emit("_swiper"),
                a.params.init && a.init(),
                    a
            }

            enable() {
                const e = this;
                e.enabled || (e.enabled = !0,
                e.params.grabCursor && e.setGrabCursor(),
                    e.emit("enable"))
            }

            disable() {
                const e = this;
                e.enabled && (e.enabled = !1,
                e.params.grabCursor && e.unsetGrabCursor(),
                    e.emit("disable"))
            }

            setProgress(e, t) {
                const s = this;
                e = Math.min(Math.max(e, 0), 1);
                const a = s.minTranslate()
                    , i = (s.maxTranslate() - a) * e + a;
                s.translateTo(i, void 0 === t ? 0 : t),
                    s.updateActiveIndex(),
                    s.updateSlidesClasses()
            }

            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }

            getSlideClasses(e) {
                const t = this;
                return e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }

            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                const t = [];
                e.slides.each((s => {
                        const a = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: a
                        }),
                            e.emit("_slideClass", s, a)
                    }
                )),
                    e.emit("_slideClasses", t)
            }

            slidesPerViewDynamic(e="current", t=!1) {
                const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
                let o = 1;
                if (s.centeredSlides) {
                    let e, t = a[l].swiperSlideSize;
                    for (let s = l + 1; s < a.length; s += 1)
                        a[s] && !e && (t += a[s].swiperSlideSize,
                            o += 1,
                        t > n && (e = !0));
                    for (let s = l - 1; s >= 0; s -= 1)
                        a[s] && !e && (t += a[s].swiperSlideSize,
                            o += 1,
                        t > n && (e = !0))
                } else if ("current" === e)
                    for (let e = l + 1; e < a.length; e += 1) {
                        (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                    }
                else
                    for (let e = l - 1; e >= 0; e -= 1) {
                        i[l] - i[e] < n && (o += 1)
                    }
                return o
            }

            update() {
                const e = this;
                if (!e || e.destroyed)
                    return;
                const {snapGrid: t, params: s} = e;

                function a() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate
                        , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                }

                let i;
                s.breakpoints && e.setBreakpoint(),
                    e.updateSize(),
                    e.updateSlides(),
                    e.updateProgress(),
                    e.updateSlidesClasses(),
                    e.params.freeMode && e.params.freeMode.enabled ? (a(),
                    e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
                    i || a()),
                s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                    e.emit("update")
            }

            changeDirection(e, t=!0) {
                const s = this
                    , a = s.params.direction;
                return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
                e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),
                    s.emitContainerClasses(),
                    s.params.direction = e,
                    s.slides.each((t => {
                            "vertical" === e ? t.style.width = "" : t.style.height = ""
                        }
                    )),
                    s.emit("changeDirection"),
                t && s.update()),
                    s
            }

            mount(e) {
                const t = this;
                if (t.mounted)
                    return !0;
                const s = d(e || t.params.el);
                if (!(e = s[0]))
                    return !1;
                e.swiper = t;
                const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let r = ( () => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = d(e.shadowRoot.querySelector(i()));
                            return t.children = e => s.children(e),
                                t
                        }
                        return s.children(i())
                    }
                )();
                if (0 === r.length && t.params.createElements) {
                    const e = a().createElement("div");
                    r = d(e),
                        e.className = t.params.wrapperClass,
                        s.append(e),
                        s.children(`.${t.params.slideClass}`).each((e => {
                                r.append(e)
                            }
                        ))
                }
                return Object.assign(t, {
                    $el: s,
                    el: e,
                    $wrapperEl: r,
                    wrapperEl: r[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                    wrongRTL: "-webkit-box" === r.css("display")
                }),
                    !0
            }

            init(e) {
                const t = this;
                if (t.initialized)
                    return t;
                return !1 === t.mount(e) || (t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                    t.addClasses(),
                t.params.loop && t.loopCreate(),
                    t.updateSize(),
                    t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.preloadImages && t.preloadImages(),
                    t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                    t.attachEvents(),
                    t.initialized = !0,
                    t.emit("init"),
                    t.emit("afterInit")),
                    t
            }

            destroy(e=!0, t=!0) {
                const s = this
                    , {params: a, $el: i, $wrapperEl: r, slides: n} = s;
                return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
                    s.initialized = !1,
                    s.detachEvents(),
                a.loop && s.loopDestroy(),
                t && (s.removeClasses(),
                    i.removeAttr("style"),
                    r.removeAttr("style"),
                n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                    s.emit("destroy"),
                    Object.keys(s.eventsListeners).forEach((e => {
                            s.off(e)
                        }
                    )),
                !1 !== e && (s.$el[0].swiper = null,
                    function(e) {
                        const t = e;
                        Object.keys(t).forEach((e => {
                                try {
                                    t[e] = null
                                } catch (e) {}
                                try {
                                    delete t[e]
                                } catch (e) {}
                            }
                        ))
                    }(s)),
                    s.destroyed = !0),
                    null
            }

            static extendDefaults(e) {
                f(X, e)
            }

            static get extendedDefaults() {
                return X
            }

            static get defaults() {
                return G
            }

            static installModule(e) {
                H.prototype.__modules__ || (H.prototype.__modules__ = []);
                const t = H.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }

            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => H.installModule(e))),
                    H) : (H.installModule(e),
                    H)
            }
        }

        function Y(e, t, s, i) {
            const r = a();
            return e.params.createElements && Object.keys(i).forEach((a => {
                    if (!s[a] && !0 === s.auto) {
                        let n = e.$el.children(`.${i[a]}`)[0];
                        n || (n = r.createElement("div"),
                            n.className = i[a],
                            e.$el.append(n)),
                            s[a] = n,
                            t[a] = n
                    }
                }
            )),
                s
        }

        function W(e="") {
            return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
        }

        function R(e) {
            const t = this
                , {$wrapperEl: s, params: a} = t;
            if (a.loop && t.loopDestroy(),
            "object" == typeof e && "length"in e)
                for (let t = 0; t < e.length; t += 1)
                    e[t] && s.append(e[t]);
            else
                s.append(e);
            a.loop && t.loopCreate(),
            a.observer || t.update()
        }

        function j(e) {
            const t = this
                , {params: s, $wrapperEl: a, activeIndex: i} = t;
            s.loop && t.loopDestroy();
            let r = i + 1;
            if ("object" == typeof e && "length"in e) {
                for (let t = 0; t < e.length; t += 1)
                    e[t] && a.prepend(e[t]);
                r = i + e.length
            } else
                a.prepend(e);
            s.loop && t.loopCreate(),
            s.observer || t.update(),
                t.slideTo(r, 0, !1)
        }

        function _(e, t) {
            const s = this
                , {$wrapperEl: a, params: i, activeIndex: r} = s;
            let n = r;
            i.loop && (n -= s.loopedSlides,
                s.loopDestroy(),
                s.slides = a.children(`.${i.slideClass}`));
            const l = s.slides.length;
            if (e <= 0)
                return void s.prependSlide(t);
            if (e >= l)
                return void s.appendSlide(t);
            let o = n > e ? n + 1 : n;
            const d = [];
            for (let t = l - 1; t >= e; t -= 1) {
                const e = s.slides.eq(t);
                e.remove(),
                    d.unshift(e)
            }
            if ("object" == typeof t && "length"in t) {
                for (let e = 0; e < t.length; e += 1)
                    t[e] && a.append(t[e]);
                o = n > e ? n + t.length : n
            } else
                a.append(t);
            for (let e = 0; e < d.length; e += 1)
                a.append(d[e]);
            i.loop && s.loopCreate(),
            i.observer || s.update(),
                i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
        }

        function V(e) {
            const t = this
                , {params: s, $wrapperEl: a, activeIndex: i} = t;
            let r = i;
            s.loop && (r -= t.loopedSlides,
                t.loopDestroy(),
                t.slides = a.children(`.${s.slideClass}`));
            let n, l = r;
            if ("object" == typeof e && "length"in e) {
                for (let s = 0; s < e.length; s += 1)
                    n = e[s],
                    t.slides[n] && t.slides.eq(n).remove(),
                    n < l && (l -= 1);
                l = Math.max(l, 0)
            } else
                n = e,
                t.slides[n] && t.slides.eq(n).remove(),
                n < l && (l -= 1),
                    l = Math.max(l, 0);
            s.loop && t.loopCreate(),
            s.observer || t.update(),
                s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
        }

        function q() {
            const e = this
                , t = [];
            for (let s = 0; s < e.slides.length; s += 1)
                t.push(s);
            e.removeSlide(t)
        }

        function F(e) {
            const {effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l} = e;
            a("beforeInit", ( () => {
                    if (s.params.effect !== t)
                        return;
                    s.classNames.push(`${s.params.containerModifierClass}${t}`),
                    l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                    const e = n ? n() : {};
                    Object.assign(s.params, e),
                        Object.assign(s.originalParams, e)
                }
            )),
                a("setTranslate", ( () => {
                        s.params.effect === t && i()
                    }
                )),
                a("setTransition", ( (e, a) => {
                        s.params.effect === t && r(a)
                    }
                ))
        }

        function U(e, t) {
            return e.transformEl ? t.find(e.transformEl).css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden"
            }) : t
        }

        function K({swiper: e, duration: t, transformEl: s, allSlides: a}) {
            const {slides: i, activeIndex: r, $wrapperEl: n} = e;
            if (e.params.virtualTranslate && 0 !== t) {
                let t, l = !1;
                t = a ? s ? i.find(s) : i : s ? i.eq(r).find(s) : i.eq(r),
                    t.transitionEnd(( () => {
                            if (l)
                                return;
                            if (!e || e.destroyed)
                                return;
                            l = !0,
                                e.animating = !1;
                            const t = ["webkitTransitionEnd", "transitionend"];
                            for (let e = 0; e < t.length; e += 1)
                                n.trigger(t[e])
                        }
                    ))
            }
        }

        function Z(e, t, s) {
            const a = "swiper-slide-shadow" + (s ? `-${s}` : "")
                , i = e.transformEl ? t.find(e.transformEl) : t;
            let r = i.children(`.${a}`);
            return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`),
                i.append(r)),
                r
        }

        Object.keys(B).forEach((e => {
                Object.keys(B[e]).forEach((t => {
                        H.prototype[t] = B[e][t]
                    }
                ))
            }
        )),
            H.use([function({swiper: e, on: t, emit: s}) {
                const a = r();
                let i = null;
                const n = () => {
                        e && !e.destroyed && e.initialized && (s("beforeResize"),
                            s("resize"))
                    }
                    , l = () => {
                        e && !e.destroyed && e.initialized && s("orientationchange")
                    }
                ;
                t("init", ( () => {
                        e.params.resizeObserver && void 0 !== a.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                                const {width: s, height: a} = e;
                                let i = s
                                    , r = a;
                                t.forEach(( ({contentBoxSize: t, contentRect: s, target: a}) => {
                                        a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize,
                                            r = s ? s.height : (t[0] || t).blockSize)
                                    }
                                )),
                                i === s && r === a || n()
                            }
                        )),
                            i.observe(e.el)) : (a.addEventListener("resize", n),
                            a.addEventListener("orientationchange", l))
                    }
                )),
                    t("destroy", ( () => {
                            i && i.unobserve && e.el && (i.unobserve(e.el),
                                i = null),
                                a.removeEventListener("resize", n),
                                a.removeEventListener("orientationchange", l)
                        }
                    ))
            }
                , function({swiper: e, extendParams: t, on: s, emit: a}) {
                    const i = []
                        , n = r()
                        , l = (e, t={}) => {
                            const s = new (n.MutationObserver || n.WebkitMutationObserver)((e => {
                                    if (1 === e.length)
                                        return void a("observerUpdate", e[0]);
                                    const t = function() {
                                        a("observerUpdate", e[0])
                                    };
                                    n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
                                }
                            ));
                            s.observe(e, {
                                attributes: void 0 === t.attributes || t.attributes,
                                childList: void 0 === t.childList || t.childList,
                                characterData: void 0 === t.characterData || t.characterData
                            }),
                                i.push(s)
                        }
                    ;
                    t({
                        observer: !1,
                        observeParents: !1,
                        observeSlideChildren: !1
                    }),
                        s("init", ( () => {
                                if (e.params.observer) {
                                    if (e.params.observeParents) {
                                        const t = e.$el.parents();
                                        for (let e = 0; e < t.length; e += 1)
                                            l(t[e])
                                    }
                                    l(e.$el[0], {
                                        childList: e.params.observeSlideChildren
                                    }),
                                        l(e.$wrapperEl[0], {
                                            attributes: !1
                                        })
                                }
                            }
                        )),
                        s("destroy", ( () => {
                                i.forEach((e => {
                                        e.disconnect()
                                    }
                                )),
                                    i.splice(0, i.length)
                            }
                        ))
                }
            ]);
        const J = [function({swiper: e, extendParams: t, on: s}) {
            let a;

            function i(t, s) {
                const a = e.params.virtual;
                if (a.cache && e.virtual.cache[s])
                    return e.virtual.cache[s];
                const i = a.renderSlide ? d(a.renderSlide.call(e, t, s)) : d(`<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);
                return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", s),
                a.cache && (e.virtual.cache[s] = i),
                    i
            }

            function r(t) {
                const {slidesPerView: s, slidesPerGroup: a, centeredSlides: r} = e.params
                    , {addSlidesBefore: n, addSlidesAfter: l} = e.params.virtual
                    , {from: o, to: d, slides: c, slidesGrid: p, offset: u} = e.virtual;
                e.params.cssMode || e.updateActiveIndex();
                const h = e.activeIndex || 0;
                let m, f, g;
                m = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top",
                    r ? (f = Math.floor(s / 2) + a + l,
                        g = Math.floor(s / 2) + a + n) : (f = s + (a - 1) + l,
                        g = a + n);
                const v = Math.max((h || 0) - g, 0)
                    , w = Math.min((h || 0) + f, c.length - 1)
                    , b = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);

                function x() {
                    e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                    e.lazy && e.params.lazy.enabled && e.lazy.load()
                }

                if (Object.assign(e.virtual, {
                    from: v,
                    to: w,
                    offset: b,
                    slidesGrid: e.slidesGrid
                }),
                o === v && d === w && !t)
                    return e.slidesGrid !== p && b !== u && e.slides.css(m, `${b}px`),
                        void e.updateProgress();
                if (e.params.virtual.renderExternal)
                    return e.params.virtual.renderExternal.call(e, {
                        offset: b,
                        from: v,
                        to: w,
                        slides: function() {
                            const e = [];
                            for (let t = v; t <= w; t += 1)
                                e.push(c[t]);
                            return e
                        }()
                    }),
                        void (e.params.virtual.renderExternalUpdate && x());
                const y = []
                    , E = [];
                if (t)
                    e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
                else
                    for (let t = o; t <= d; t += 1)
                        (t < v || t > w) && e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();
                for (let e = 0; e < c.length; e += 1)
                    e >= v && e <= w && (void 0 === d || t ? E.push(e) : (e > d && E.push(e),
                    e < o && y.push(e)));
                E.forEach((t => {
                        e.$wrapperEl.append(i(c[t], t))
                    }
                )),
                    y.sort(( (e, t) => t - e)).forEach((t => {
                            e.$wrapperEl.prepend(i(c[t], t))
                        }
                    )),
                    e.$wrapperEl.children(".swiper-slide").css(m, `${b}px`),
                    x()
            }

            t({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            }),
                e.virtual = {
                    cache: {},
                    from: void 0,
                    to: void 0,
                    slides: [],
                    offset: 0,
                    slidesGrid: []
                },
                s("beforeInit", ( () => {
                        e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides,
                            e.classNames.push(`${e.params.containerModifierClass}virtual`),
                            e.params.watchSlidesProgress = !0,
                            e.originalParams.watchSlidesProgress = !0,
                        e.params.initialSlide || r())
                    }
                )),
                s("setTranslate", ( () => {
                        e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(a),
                            a = setTimeout(( () => {
                                    r()
                                }
                            ), 100)) : r())
                    }
                )),
                s("init update resize", ( () => {
                        e.params.virtual.enabled && e.params.cssMode && g(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
                    }
                )),
                Object.assign(e.virtual, {
                    appendSlide: function(t) {
                        if ("object" == typeof t && "length"in t)
                            for (let s = 0; s < t.length; s += 1)
                                t[s] && e.virtual.slides.push(t[s]);
                        else
                            e.virtual.slides.push(t);
                        r(!0)
                    },
                    prependSlide: function(t) {
                        const s = e.activeIndex;
                        let a = s + 1
                            , i = 1;
                        if (Array.isArray(t)) {
                            for (let s = 0; s < t.length; s += 1)
                                t[s] && e.virtual.slides.unshift(t[s]);
                            a = s + t.length,
                                i = t.length
                        } else
                            e.virtual.slides.unshift(t);
                        if (e.params.virtual.cache) {
                            const t = e.virtual.cache
                                , s = {};
                            Object.keys(t).forEach((e => {
                                    const a = t[e]
                                        , r = a.attr("data-swiper-slide-index");
                                    r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                                        s[parseInt(e, 10) + i] = a
                                }
                            )),
                                e.virtual.cache = s
                        }
                        r(!0),
                            e.slideTo(a, 0)
                    },
                    removeSlide: function(t) {
                        if (null == t)
                            return;
                        let s = e.activeIndex;
                        if (Array.isArray(t))
                            for (let a = t.length - 1; a >= 0; a -= 1)
                                e.virtual.slides.splice(t[a], 1),
                                e.params.virtual.cache && delete e.virtual.cache[t[a]],
                                t[a] < s && (s -= 1),
                                    s = Math.max(s, 0);
                        else
                            e.virtual.slides.splice(t, 1),
                            e.params.virtual.cache && delete e.virtual.cache[t],
                            t < s && (s -= 1),
                                s = Math.max(s, 0);
                        r(!0),
                            e.slideTo(s, 0)
                    },
                    removeAllSlides: function() {
                        e.virtual.slides = [],
                        e.params.virtual.cache && (e.virtual.cache = {}),
                            r(!0),
                            e.slideTo(0, 0)
                    },
                    update: r
                })
        }
            , function({swiper: e, extendParams: t, on: s, emit: i}) {
                const n = a()
                    , l = r();

                function o(t) {
                    if (!e.enabled)
                        return;
                    const {rtlTranslate: s} = e;
                    let a = t;
                    a.originalEvent && (a = a.originalEvent);
                    const r = a.keyCode || a.charCode
                        , o = e.params.keyboard.pageUpDown
                        , d = o && 33 === r
                        , c = o && 34 === r
                        , p = 37 === r
                        , u = 39 === r
                        , h = 38 === r
                        , m = 40 === r;
                    if (!e.allowSlideNext && (e.isHorizontal() && u || e.isVertical() && m || c))
                        return !1;
                    if (!e.allowSlidePrev && (e.isHorizontal() && p || e.isVertical() && h || d))
                        return !1;
                    if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
                        if (e.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                            let t = !1;
                            if (e.$el.parents(`.${e.params.slideClass}`).length > 0 && 0 === e.$el.parents(`.${e.params.slideActiveClass}`).length)
                                return;
                            const a = e.$el
                                , i = a[0].clientWidth
                                , r = a[0].clientHeight
                                , n = l.innerWidth
                                , o = l.innerHeight
                                , d = e.$el.offset();
                            s && (d.left -= e.$el[0].scrollLeft);
                            const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                            for (let e = 0; e < c.length; e += 1) {
                                const s = c[e];
                                if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= o) {
                                    if (0 === s[0] && 0 === s[1])
                                        continue;
                                    t = !0
                                }
                            }
                            if (!t)
                                return
                        }
                        e.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                        ((c || u) && !s || (d || p) && s) && e.slideNext(),
                        ((d || p) && !s || (c || u) && s) && e.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                        (c || m) && e.slideNext(),
                        (d || h) && e.slidePrev()),
                            i("keyPress", r)
                    }
                }

                function c() {
                    e.keyboard.enabled || (d(n).on("keydown", o),
                        e.keyboard.enabled = !0)
                }

                function p() {
                    e.keyboard.enabled && (d(n).off("keydown", o),
                        e.keyboard.enabled = !1)
                }

                e.keyboard = {
                    enabled: !1
                },
                    t({
                        keyboard: {
                            enabled: !1,
                            onlyInViewport: !0,
                            pageUpDown: !0
                        }
                    }),
                    s("init", ( () => {
                            e.params.keyboard.enabled && c()
                        }
                    )),
                    s("destroy", ( () => {
                            e.keyboard.enabled && p()
                        }
                    )),
                    Object.assign(e.keyboard, {
                        enable: c,
                        disable: p
                    })
            }
            , function({swiper: e, extendParams: t, on: s, emit: a}) {
                const i = r();
                let n;
                t({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null
                    }
                }),
                    e.mousewheel = {
                        enabled: !1
                    };
                let l, o = u();
                const c = [];

                function h() {
                    e.enabled && (e.mouseEntered = !0)
                }

                function m() {
                    e.enabled && (e.mouseEntered = !1)
                }

                function f(t) {
                    return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta) && (!(e.params.mousewheel.thresholdTime && u() - o < e.params.mousewheel.thresholdTime) && (t.delta >= 6 && u() - o < 60 || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(),
                        a("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(),
                        a("scroll", t.raw)),
                        o = (new i.Date).getTime(),
                        !1)))
                }

                function g(t) {
                    let s = t
                        , i = !0;
                    if (!e.enabled)
                        return;
                    const r = e.params.mousewheel;
                    e.params.cssMode && s.preventDefault();
                    let o = e.$el;
                    if ("container" !== e.params.mousewheel.eventsTarget && (o = d(e.params.mousewheel.eventsTarget)),
                    !e.mouseEntered && !o[0].contains(s.target) && !r.releaseOnEdges)
                        return !0;
                    s.originalEvent && (s = s.originalEvent);
                    let h = 0;
                    const m = e.rtlTranslate ? -1 : 1
                        , g = function(e) {
                        let t = 0
                            , s = 0
                            , a = 0
                            , i = 0;
                        return "detail"in e && (s = e.detail),
                        "wheelDelta"in e && (s = -e.wheelDelta / 120),
                        "wheelDeltaY"in e && (s = -e.wheelDeltaY / 120),
                        "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                        "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = s,
                            s = 0),
                            a = 10 * t,
                            i = 10 * s,
                        "deltaY"in e && (i = e.deltaY),
                        "deltaX"in e && (a = e.deltaX),
                        e.shiftKey && !a && (a = i,
                            i = 0),
                        (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40,
                            i *= 40) : (a *= 800,
                            i *= 800)),
                        a && !t && (t = a < 1 ? -1 : 1),
                        i && !s && (s = i < 1 ? -1 : 1),
                            {
                                spinX: t,
                                spinY: s,
                                pixelX: a,
                                pixelY: i
                            }
                    }(s);
                    if (r.forceToAxis)
                        if (e.isHorizontal()) {
                            if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY)))
                                return !0;
                            h = -g.pixelX * m
                        } else {
                            if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX)))
                                return !0;
                            h = -g.pixelY
                        }
                    else
                        h = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * m : -g.pixelY;
                    if (0 === h)
                        return !0;
                    r.invert && (h = -h);
                    let v = e.getTranslate() + h * r.sensitivity;
                    if (v >= e.minTranslate() && (v = e.minTranslate()),
                    v <= e.maxTranslate() && (v = e.maxTranslate()),
                        i = !!e.params.loop || !(v === e.minTranslate() || v === e.maxTranslate()),
                    i && e.params.nested && s.stopPropagation(),
                    e.params.freeMode && e.params.freeMode.enabled) {
                        const t = {
                            time: u(),
                            delta: Math.abs(h),
                            direction: Math.sign(h)
                        }
                            , i = l && t.time < l.time + 500 && t.delta <= l.delta && t.direction === l.direction;
                        if (!i) {
                            l = void 0,
                            e.params.loop && e.loopFix();
                            let o = e.getTranslate() + h * r.sensitivity;
                            const d = e.isBeginning
                                , u = e.isEnd;
                            if (o >= e.minTranslate() && (o = e.minTranslate()),
                            o <= e.maxTranslate() && (o = e.maxTranslate()),
                                e.setTransition(0),
                                e.setTranslate(o),
                                e.updateProgress(),
                                e.updateActiveIndex(),
                                e.updateSlidesClasses(),
                            (!d && e.isBeginning || !u && e.isEnd) && e.updateSlidesClasses(),
                                e.params.freeMode.sticky) {
                                clearTimeout(n),
                                    n = void 0,
                                c.length >= 15 && c.shift();
                                const s = c.length ? c[c.length - 1] : void 0
                                    , a = c[0];
                                if (c.push(t),
                                s && (t.delta > s.delta || t.direction !== s.direction))
                                    c.splice(0);
                                else if (c.length >= 15 && t.time - a.time < 500 && a.delta - t.delta >= 1 && t.delta <= 6) {
                                    const s = h > 0 ? .8 : .2;
                                    l = t,
                                        c.splice(0),
                                        n = p(( () => {
                                                e.slideToClosest(e.params.speed, !0, void 0, s)
                                            }
                                        ), 0)
                                }
                                n || (n = p(( () => {
                                        l = t,
                                            c.splice(0),
                                            e.slideToClosest(e.params.speed, !0, void 0, .5)
                                    }
                                ), 500))
                            }
                            if (i || a("scroll", s),
                            e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
                            o === e.minTranslate() || o === e.maxTranslate())
                                return !0
                        }
                    } else {
                        const s = {
                            time: u(),
                            delta: Math.abs(h),
                            direction: Math.sign(h),
                            raw: t
                        };
                        c.length >= 2 && c.shift();
                        const a = c.length ? c[c.length - 1] : void 0;
                        if (c.push(s),
                            a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s),
                            function(t) {
                                const s = e.params.mousewheel;
                                if (t.direction < 0) {
                                    if (e.isEnd && !e.params.loop && s.releaseOnEdges)
                                        return !0
                                } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges)
                                    return !0;
                                return !1
                            }(s))
                            return !0
                    }
                    return s.preventDefault ? s.preventDefault() : s.returnValue = !1,
                        !1
                }

                function v(t) {
                    let s = e.$el;
                    "container" !== e.params.mousewheel.eventsTarget && (s = d(e.params.mousewheel.eventsTarget)),
                        s[t]("mouseenter", h),
                        s[t]("mouseleave", m),
                        s[t]("wheel", g)
                }

                function w() {
                    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g),
                        !0) : !e.mousewheel.enabled && (v("on"),
                        e.mousewheel.enabled = !0,
                        !0)
                }

                function b() {
                    return e.params.cssMode ? (e.wrapperEl.addEventListener(event, g),
                        !0) : !!e.mousewheel.enabled && (v("off"),
                        e.mousewheel.enabled = !1,
                        !0)
                }

                s("init", ( () => {
                        !e.params.mousewheel.enabled && e.params.cssMode && b(),
                        e.params.mousewheel.enabled && w()
                    }
                )),
                    s("destroy", ( () => {
                            e.params.cssMode && w(),
                            e.mousewheel.enabled && b()
                        }
                    )),
                    Object.assign(e.mousewheel, {
                        enable: w,
                        disable: b
                    })
            }
            , function({swiper: e, extendParams: t, on: s, emit: a}) {
                function i(t) {
                    let s;
                    return t && (s = d(t),
                    e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))),
                        s
                }

                function r(t, s) {
                    const a = e.params.navigation;
                    t && t.length > 0 && (t[s ? "addClass" : "removeClass"](a.disabledClass),
                    t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
                    e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](a.lockClass))
                }

                function n() {
                    if (e.params.loop)
                        return;
                    const {$nextEl: t, $prevEl: s} = e.navigation;
                    r(s, e.isBeginning),
                        r(t, e.isEnd)
                }

                function l(t) {
                    t.preventDefault(),
                    e.isBeginning && !e.params.loop || e.slidePrev()
                }

                function o(t) {
                    t.preventDefault(),
                    e.isEnd && !e.params.loop || e.slideNext()
                }

                function c() {
                    const t = e.params.navigation;
                    if (e.params.navigation = Y(e, e.originalParams.navigation, e.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    }),
                    !t.nextEl && !t.prevEl)
                        return;
                    const s = i(t.nextEl)
                        , a = i(t.prevEl);
                    s && s.length > 0 && s.on("click", o),
                    a && a.length > 0 && a.on("click", l),
                        Object.assign(e.navigation, {
                            $nextEl: s,
                            nextEl: s && s[0],
                            $prevEl: a,
                            prevEl: a && a[0]
                        }),
                    e.enabled || (s && s.addClass(t.lockClass),
                    a && a.addClass(t.lockClass))
                }

                function p() {
                    const {$nextEl: t, $prevEl: s} = e.navigation;
                    t && t.length && (t.off("click", o),
                        t.removeClass(e.params.navigation.disabledClass)),
                    s && s.length && (s.off("click", l),
                        s.removeClass(e.params.navigation.disabledClass))
                }

                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock"
                    }
                }),
                    e.navigation = {
                        nextEl: null,
                        $nextEl: null,
                        prevEl: null,
                        $prevEl: null
                    },
                    s("init", ( () => {
                            c(),
                                n()
                        }
                    )),
                    s("toEdge fromEdge lock unlock", ( () => {
                            n()
                        }
                    )),
                    s("destroy", ( () => {
                            p()
                        }
                    )),
                    s("enable disable", ( () => {
                            const {$nextEl: t, $prevEl: s} = e.navigation;
                            t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass),
                            s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
                        }
                    )),
                    s("click", ( (t, s) => {
                            const {$nextEl: i, $prevEl: r} = e.navigation
                                , n = s.target;
                            if (e.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(i)) {
                                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n)))
                                    return;
                                let t;
                                i ? t = i.hasClass(e.params.navigation.hiddenClass) : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                                    a(!0 === t ? "navigationShow" : "navigationHide"),
                                i && i.toggleClass(e.params.navigation.hiddenClass),
                                r && r.toggleClass(e.params.navigation.hiddenClass)
                            }
                        }
                    )),
                    Object.assign(e.navigation, {
                        update: n,
                        init: c,
                        destroy: p
                    })
            }
            , function({swiper: e, extendParams: t, on: s, emit: a}) {
                const i = "swiper-pagination";
                let r;
                t({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${i}-bullet`,
                        bulletActiveClass: `${i}-bullet-active`,
                        modifierClass: `${i}-`,
                        currentClass: `${i}-current`,
                        totalClass: `${i}-total`,
                        hiddenClass: `${i}-hidden`,
                        progressbarFillClass: `${i}-progressbar-fill`,
                        progressbarOppositeClass: `${i}-progressbar-opposite`,
                        clickableClass: `${i}-clickable`,
                        lockClass: `${i}-lock`,
                        horizontalClass: `${i}-horizontal`,
                        verticalClass: `${i}-vertical`
                    }
                }),
                    e.pagination = {
                        el: null,
                        $el: null,
                        bullets: []
                    };
                let n = 0;

                function l() {
                    return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
                }

                function o(t, s) {
                    const {bulletActiveClass: a} = e.params.pagination;
                    t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
                }

                function c() {
                    const t = e.rtl
                        , s = e.params.pagination;
                    if (l())
                        return;
                    const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                        , c = e.pagination.$el;
                    let p;
                    const u = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? (p = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup),
                    p > i - 1 - 2 * e.loopedSlides && (p -= i - 2 * e.loopedSlides),
                    p > u - 1 && (p -= u),
                    p < 0 && "bullets" !== e.params.paginationType && (p = u + p)) : p = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                    "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        const a = e.pagination.bullets;
                        let i, l, u;
                        if (s.dynamicBullets && (r = a.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                            c.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"),
                        s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (n += p - e.previousIndex,
                            n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)),
                            i = p - n,
                            l = i + (Math.min(a.length, s.dynamicMainBullets) - 1),
                            u = (l + i) / 2),
                            a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")),
                        c.length > 1)
                            a.each((e => {
                                    const t = d(e)
                                        , a = t.index();
                                    a === p && t.addClass(s.bulletActiveClass),
                                    s.dynamicBullets && (a >= i && a <= l && t.addClass(`${s.bulletActiveClass}-main`),
                                    a === i && o(t, "prev"),
                                    a === l && o(t, "next"))
                                }
                            ));
                        else {
                            const t = a.eq(p)
                                , r = t.index();
                            if (t.addClass(s.bulletActiveClass),
                                s.dynamicBullets) {
                                const t = a.eq(i)
                                    , n = a.eq(l);
                                for (let e = i; e <= l; e += 1)
                                    a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                                if (e.params.loop)
                                    if (r >= a.length - s.dynamicMainBullets) {
                                        for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                                            a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                        a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                                    } else
                                        o(t, "prev"),
                                            o(n, "next");
                                else
                                    o(t, "prev"),
                                        o(n, "next")
                            }
                        }
                        if (s.dynamicBullets) {
                            const i = Math.min(a.length, s.dynamicMainBullets + 4)
                                , n = (r * i - r) / 2 - u * r
                                , l = t ? "right" : "left";
                            a.css(e.isHorizontal() ? l : "top", `${n}px`)
                        }
                    }
                    if ("fraction" === s.type && (c.find(W(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
                        c.find(W(s.totalClass)).text(s.formatFractionTotal(u))),
                    "progressbar" === s.type) {
                        let t;
                        t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        const a = (p + 1) / u;
                        let i = 1
                            , r = 1;
                        "horizontal" === t ? i = a : r = a,
                            c.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)
                    }
                    "custom" === s.type && s.renderCustom ? (c.html(s.renderCustom(e, p + 1, u)),
                        a("paginationRender", c[0])) : a("paginationUpdate", c[0]),
                    e.params.watchOverflow && e.enabled && c[e.isLocked ? "addClass" : "removeClass"](s.lockClass)
                }

                function p() {
                    const t = e.params.pagination;
                    if (l())
                        return;
                    const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                        , i = e.pagination.$el;
                    let r = "";
                    if ("bullets" === t.type) {
                        let a = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && a > s && (a = s);
                        for (let s = 0; s < a; s += 1)
                            t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                        i.html(r),
                            e.pagination.bullets = i.find(W(t.bulletClass))
                    }
                    "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,
                        i.html(r)),
                    "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`,
                        i.html(r)),
                    "custom" !== t.type && a("paginationRender", e.pagination.$el[0])
                }

                function u() {
                    e.params.pagination = Y(e, e.originalParams.pagination, e.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const t = e.params.pagination;
                    if (!t.el)
                        return;
                    let s = d(t.el);
                    0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && (s = e.$el.find(t.el),
                    s.length > 1 && (s = s.filter((t => d(t).parents(".swiper")[0] === e.el)))),
                    "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
                        s.addClass(t.modifierClass + t.type),
                        s.addClass(t.modifierClass + e.params.direction),
                    "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
                        n = 0,
                    t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                    "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass),
                    t.clickable && s.on("click", W(t.bulletClass), (function(t) {
                            t.preventDefault();
                            let s = d(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (s += e.loopedSlides),
                                e.slideTo(s)
                        }
                    )),
                        Object.assign(e.pagination, {
                            $el: s,
                            el: s[0]
                        }),
                    e.enabled || s.addClass(t.lockClass))
                }

                function h() {
                    const t = e.params.pagination;
                    if (l())
                        return;
                    const s = e.pagination.$el;
                    s.removeClass(t.hiddenClass),
                        s.removeClass(t.modifierClass + t.type),
                        s.removeClass(t.modifierClass + e.params.direction),
                    e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass),
                    t.clickable && s.off("click", W(t.bulletClass))
                }

                s("init", ( () => {
                        u(),
                            p(),
                            c()
                    }
                )),
                    s("activeIndexChange", ( () => {
                            (e.params.loop || void 0 === e.snapIndex) && c()
                        }
                    )),
                    s("snapIndexChange", ( () => {
                            e.params.loop || c()
                        }
                    )),
                    s("slidesLengthChange", ( () => {
                            e.params.loop && (p(),
                                c())
                        }
                    )),
                    s("snapGridLengthChange", ( () => {
                            e.params.loop || (p(),
                                c())
                        }
                    )),
                    s("destroy", ( () => {
                            h()
                        }
                    )),
                    s("enable disable", ( () => {
                            const {$el: t} = e.pagination;
                            t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
                        }
                    )),
                    s("lock unlock", ( () => {
                            c()
                        }
                    )),
                    s("click", ( (t, s) => {
                            const i = s.target
                                , {$el: r} = e.pagination;
                            if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !d(i).hasClass(e.params.pagination.bulletClass)) {
                                if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl))
                                    return;
                                const t = r.hasClass(e.params.pagination.hiddenClass);
                                a(!0 === t ? "paginationShow" : "paginationHide"),
                                    r.toggleClass(e.params.pagination.hiddenClass)
                            }
                        }
                    )),
                    Object.assign(e.pagination, {
                        render: p,
                        update: c,
                        init: u,
                        destroy: h
                    })
            }
            , function({swiper: e, extendParams: t, on: s, emit: i}) {
                const r = a();
                let n, l, o, c, u = !1, h = null, m = null;

                function f() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el)
                        return;
                    const {scrollbar: t, rtlTranslate: s, progress: a} = e
                        , {$dragEl: i, $el: r} = t
                        , n = e.params.scrollbar;
                    let d = l
                        , c = (o - l) * a;
                    s ? (c = -c,
                        c > 0 ? (d = l - c,
                            c = 0) : -c + l > o && (d = o + c)) : c < 0 ? (d = l + c,
                        c = 0) : c + l > o && (d = o - c),
                        e.isHorizontal() ? (i.transform(`translate3d(${c}px, 0, 0)`),
                            i[0].style.width = `${d}px`) : (i.transform(`translate3d(0px, ${c}px, 0)`),
                            i[0].style.height = `${d}px`),
                    n.hide && (clearTimeout(h),
                        r[0].style.opacity = 1,
                        h = setTimeout(( () => {
                                r[0].style.opacity = 0,
                                    r.transition(400)
                            }
                        ), 1e3))
                }

                function g() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el)
                        return;
                    const {scrollbar: t} = e
                        , {$dragEl: s, $el: a} = t;
                    s[0].style.width = "",
                        s[0].style.height = "",
                        o = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
                        c = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)),
                        l = "auto" === e.params.scrollbar.dragSize ? o * c : parseInt(e.params.scrollbar.dragSize, 10),
                        e.isHorizontal() ? s[0].style.width = `${l}px` : s[0].style.height = `${l}px`,
                        a[0].style.display = c >= 1 ? "none" : "",
                    e.params.scrollbar.hide && (a[0].style.opacity = 0),
                    e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }

                function v(t) {
                    return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
                }

                function w(t) {
                    const {scrollbar: s, rtlTranslate: a} = e
                        , {$el: i} = s;
                    let r;
                    r = (v(t) - i.offset()[e.isHorizontal() ? "left" : "top"] - (null !== n ? n : l / 2)) / (o - l),
                        r = Math.max(Math.min(r, 1), 0),
                    a && (r = 1 - r);
                    const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
                    e.updateProgress(d),
                        e.setTranslate(d),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                }

                function b(t) {
                    const s = e.params.scrollbar
                        , {scrollbar: a, $wrapperEl: r} = e
                        , {$el: l, $dragEl: o} = a;
                    u = !0,
                        n = t.target === o[0] || t.target === o ? v(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null,
                        t.preventDefault(),
                        t.stopPropagation(),
                        r.transition(100),
                        o.transition(100),
                        w(t),
                        clearTimeout(m),
                        l.transition(0),
                    s.hide && l.css("opacity", 1),
                    e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
                        i("scrollbarDragStart", t)
                }

                function x(t) {
                    const {scrollbar: s, $wrapperEl: a} = e
                        , {$el: r, $dragEl: n} = s;
                    u && (t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                        w(t),
                        a.transition(0),
                        r.transition(0),
                        n.transition(0),
                        i("scrollbarDragMove", t))
                }

                function y(t) {
                    const s = e.params.scrollbar
                        , {scrollbar: a, $wrapperEl: r} = e
                        , {$el: n} = a;
                    u && (u = !1,
                    e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""),
                        r.transition("")),
                    s.hide && (clearTimeout(m),
                        m = p(( () => {
                                n.css("opacity", 0),
                                    n.transition(400)
                            }
                        ), 1e3)),
                        i("scrollbarDragEnd", t),
                    s.snapOnRelease && e.slideToClosest())
                }

                function E(t) {
                    const {scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: n, support: l} = e
                        , o = s.$el[0]
                        , d = !(!l.passiveListener || !n.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    }
                        , c = !(!l.passiveListener || !n.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    if (!o)
                        return;
                    const p = "on" === t ? "addEventListener" : "removeEventListener";
                    l.touch ? (o[p](a.start, b, d),
                        o[p](a.move, x, d),
                        o[p](a.end, y, c)) : (o[p](i.start, b, d),
                        r[p](i.move, x, d),
                        r[p](i.end, y, c))
                }

                function T() {
                    const {scrollbar: t, $el: s} = e;
                    e.params.scrollbar = Y(e, e.originalParams.scrollbar, e.params.scrollbar, {
                        el: "swiper-scrollbar"
                    });
                    const a = e.params.scrollbar;
                    if (!a.el)
                        return;
                    let i = d(a.el);
                    e.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
                    let r = i.find(`.${e.params.scrollbar.dragClass}`);
                    0 === r.length && (r = d(`<div class="${e.params.scrollbar.dragClass}"></div>`),
                        i.append(r)),
                        Object.assign(t, {
                            $el: i,
                            el: i[0],
                            $dragEl: r,
                            dragEl: r[0]
                        }),
                    a.draggable && e.params.scrollbar.el && E("on"),
                    i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
                }

                function C() {
                    e.params.scrollbar.el && E("off")
                }

                t({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                }),
                    e.scrollbar = {
                        el: null,
                        dragEl: null,
                        $el: null,
                        $dragEl: null
                    },
                    s("init", ( () => {
                            T(),
                                g(),
                                f()
                        }
                    )),
                    s("update resize observerUpdate lock unlock", ( () => {
                            g()
                        }
                    )),
                    s("setTranslate", ( () => {
                            f()
                        }
                    )),
                    s("setTransition", ( (t, s) => {
                            !function(t) {
                                e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
                            }(s)
                        }
                    )),
                    s("enable disable", ( () => {
                            const {$el: t} = e.scrollbar;
                            t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
                        }
                    )),
                    s("destroy", ( () => {
                            C()
                        }
                    )),
                    Object.assign(e.scrollbar, {
                        updateSize: g,
                        setTranslate: f,
                        init: T,
                        destroy: C
                    })
            }
            , function({swiper: e, extendParams: t, on: s}) {
                t({
                    parallax: {
                        enabled: !1
                    }
                });
                const a = (t, s) => {
                        const {rtl: a} = e
                            , i = d(t)
                            , r = a ? -1 : 1
                            , n = i.attr("data-swiper-parallax") || "0";
                        let l = i.attr("data-swiper-parallax-x")
                            , o = i.attr("data-swiper-parallax-y");
                        const c = i.attr("data-swiper-parallax-scale")
                            , p = i.attr("data-swiper-parallax-opacity");
                        if (l || o ? (l = l || "0",
                            o = o || "0") : e.isHorizontal() ? (l = n,
                            o = "0") : (o = n,
                            l = "0"),
                            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px",
                            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px",
                        null != p) {
                            const e = p - (p - 1) * (1 - Math.abs(s));
                            i[0].style.opacity = e
                        }
                        if (null == c)
                            i.transform(`translate3d(${l}, ${o}, 0px)`);
                        else {
                            const e = c - (c - 1) * (1 - Math.abs(s));
                            i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
                        }
                    }
                    , i = () => {
                        const {$el: t, slides: s, progress: i, snapGrid: r} = e;
                        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                                a(e, i)
                            }
                        )),
                            s.each(( (t, s) => {
                                    let n = t.progress;
                                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(s / 2) - i * (r.length - 1)),
                                        n = Math.min(Math.max(n, -1), 1),
                                        d(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                                                a(e, n)
                                            }
                                        ))
                                }
                            ))
                    }
                ;
                s("beforeInit", ( () => {
                        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
                            e.originalParams.watchSlidesProgress = !0)
                    }
                )),
                    s("init", ( () => {
                            e.params.parallax.enabled && i()
                        }
                    )),
                    s("setTranslate", ( () => {
                            e.params.parallax.enabled && i()
                        }
                    )),
                    s("setTransition", ( (t, s) => {
                            e.params.parallax.enabled && ( (t=e.params.speed) => {
                                    const {$el: s} = e;
                                    s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                                            const s = d(e);
                                            let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                                            0 === t && (a = 0),
                                                s.transition(a)
                                        }
                                    ))
                                }
                            )(s)
                        }
                    ))
            }
            , function({swiper: e, extendParams: t, on: s, emit: a}) {
                const i = r();
                t({
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                }),
                    e.zoom = {
                        enabled: !1
                    };
                let n, l, o, c = 1, p = !1;
                const u = {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                }
                    , m = {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                }
                    , f = {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                };
                let g = 1;

                function v(e) {
                    if (e.targetTouches.length < 2)
                        return 1;
                    const t = e.targetTouches[0].pageX
                        , s = e.targetTouches[0].pageY
                        , a = e.targetTouches[1].pageX
                        , i = e.targetTouches[1].pageY;
                    return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
                }

                function w(t) {
                    const s = e.support
                        , a = e.params.zoom;
                    if (l = !1,
                        o = !1,
                        !s.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                            return;
                        l = !0,
                            u.scaleStart = v(t)
                    }
                    u.$slideEl && u.$slideEl.length || (u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`),
                    0 === u.$slideEl.length && (u.$slideEl = e.slides.eq(e.activeIndex)),
                        u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),
                        u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`),
                        u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
                    0 !== u.$imageWrapEl.length) ? (u.$imageEl && u.$imageEl.transition(0),
                        p = !0) : u.$imageEl = void 0
                }

                function b(t) {
                    const s = e.support
                        , a = e.params.zoom
                        , i = e.zoom;
                    if (!s.gestures) {
                        if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2)
                            return;
                        o = !0,
                            u.scaleMove = v(t)
                    }
                    u.$imageEl && 0 !== u.$imageEl.length ? (s.gestures ? i.scale = t.scale * c : i.scale = u.scaleMove / u.scaleStart * c,
                    i.scale > u.maxRatio && (i.scale = u.maxRatio - 1 + (i.scale - u.maxRatio + 1) ** .5),
                    i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5),
                        u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === t.type && w(t)
                }

                function x(t) {
                    const s = e.device
                        , a = e.support
                        , i = e.params.zoom
                        , r = e.zoom;
                    if (!a.gestures) {
                        if (!l || !o)
                            return;
                        if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !s.android)
                            return;
                        l = !1,
                            o = !1
                    }
                    u.$imageEl && 0 !== u.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio),
                        u.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),
                        c = r.scale,
                        p = !1,
                    1 === r.scale && (u.$slideEl = void 0))
                }

                function y(t) {
                    const s = e.zoom;
                    if (!u.$imageEl || 0 === u.$imageEl.length)
                        return;
                    if (e.allowClick = !1,
                    !m.isTouched || !u.$slideEl)
                        return;
                    m.isMoved || (m.width = u.$imageEl[0].offsetWidth,
                        m.height = u.$imageEl[0].offsetHeight,
                        m.startX = h(u.$imageWrapEl[0], "x") || 0,
                        m.startY = h(u.$imageWrapEl[0], "y") || 0,
                        u.slideWidth = u.$slideEl[0].offsetWidth,
                        u.slideHeight = u.$slideEl[0].offsetHeight,
                        u.$imageWrapEl.transition(0));
                    const a = m.width * s.scale
                        , i = m.height * s.scale;
                    if (!(a < u.slideWidth && i < u.slideHeight)) {
                        if (m.minX = Math.min(u.slideWidth / 2 - a / 2, 0),
                            m.maxX = -m.minX,
                            m.minY = Math.min(u.slideHeight / 2 - i / 2, 0),
                            m.maxY = -m.minY,
                            m.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                            m.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                        !m.isMoved && !p) {
                            if (e.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x))
                                return void (m.isTouched = !1);
                            if (!e.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y))
                                return void (m.isTouched = !1)
                        }
                        t.cancelable && t.preventDefault(),
                            t.stopPropagation(),
                            m.isMoved = !0,
                            m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX,
                            m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY,
                        m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8),
                        m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8),
                        m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8),
                        m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8),
                        f.prevPositionX || (f.prevPositionX = m.touchesCurrent.x),
                        f.prevPositionY || (f.prevPositionY = m.touchesCurrent.y),
                        f.prevTime || (f.prevTime = Date.now()),
                            f.x = (m.touchesCurrent.x - f.prevPositionX) / (Date.now() - f.prevTime) / 2,
                            f.y = (m.touchesCurrent.y - f.prevPositionY) / (Date.now() - f.prevTime) / 2,
                        Math.abs(m.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0),
                        Math.abs(m.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0),
                            f.prevPositionX = m.touchesCurrent.x,
                            f.prevPositionY = m.touchesCurrent.y,
                            f.prevTime = Date.now(),
                            u.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
                    }
                }

                function E() {
                    const t = e.zoom;
                    u.$slideEl && e.previousIndex !== e.activeIndex && (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                    u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"),
                        t.scale = 1,
                        c = 1,
                        u.$slideEl = void 0,
                        u.$imageEl = void 0,
                        u.$imageWrapEl = void 0)
                }

                function T(t) {
                    const s = e.zoom
                        , a = e.params.zoom;
                    if (u.$slideEl || (t && t.target && (u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`)),
                    u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : u.$slideEl = e.slides.eq(e.activeIndex)),
                        u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),
                        u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`)),
                    !u.$imageEl || 0 === u.$imageEl.length || !u.$imageWrapEl || 0 === u.$imageWrapEl.length)
                        return;
                    let r, n, l, o, p, h, f, g, v, w, b, x, y, E, T, C, $, S;
                    e.params.cssMode && (e.wrapperEl.style.overflow = "hidden",
                        e.wrapperEl.style.touchAction = "none"),
                        u.$slideEl.addClass(`${a.zoomedSlideClass}`),
                        void 0 === m.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                            n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = m.touchesStart.x,
                            n = m.touchesStart.y),
                        s.scale = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
                        c = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
                        t ? ($ = u.$slideEl[0].offsetWidth,
                            S = u.$slideEl[0].offsetHeight,
                            l = u.$slideEl.offset().left + i.scrollX,
                            o = u.$slideEl.offset().top + i.scrollY,
                            p = l + $ / 2 - r,
                            h = o + S / 2 - n,
                            v = u.$imageEl[0].offsetWidth,
                            w = u.$imageEl[0].offsetHeight,
                            b = v * s.scale,
                            x = w * s.scale,
                            y = Math.min($ / 2 - b / 2, 0),
                            E = Math.min(S / 2 - x / 2, 0),
                            T = -y,
                            C = -E,
                            f = p * s.scale,
                            g = h * s.scale,
                        f < y && (f = y),
                        f > T && (f = T),
                        g < E && (g = E),
                        g > C && (g = C)) : (f = 0,
                            g = 0),
                        u.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${g}px,0)`),
                        u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
                }

                function C() {
                    const t = e.zoom
                        , s = e.params.zoom;
                    u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : u.$slideEl = e.slides.eq(e.activeIndex),
                        u.$imageEl = u.$slideEl.find(`.${s.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),
                        u.$imageWrapEl = u.$imageEl.parent(`.${s.containerClass}`)),
                    u.$imageEl && 0 !== u.$imageEl.length && u.$imageWrapEl && 0 !== u.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "",
                        e.wrapperEl.style.touchAction = ""),
                        t.scale = 1,
                        c = 1,
                        u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        u.$slideEl.removeClass(`${s.zoomedSlideClass}`),
                        u.$slideEl = void 0)
                }

                function $(t) {
                    const s = e.zoom;
                    s.scale && 1 !== s.scale ? C() : T(t)
                }

                function S() {
                    const t = e.support;
                    return {
                        passiveListener: !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        activeListenerWithCapture: !t.passiveListener || {
                            passive: !1,
                            capture: !0
                        }
                    }
                }

                function M() {
                    return `.${e.params.slideClass}`
                }

                function P(t) {
                    const {passiveListener: s} = S()
                        , a = M();
                    e.$wrapperEl[t]("gesturestart", a, w, s),
                        e.$wrapperEl[t]("gesturechange", a, b, s),
                        e.$wrapperEl[t]("gestureend", a, x, s)
                }

                function k() {
                    n || (n = !0,
                        P("on"))
                }

                function z() {
                    n && (n = !1,
                        P("off"))
                }

                function O() {
                    const t = e.zoom;
                    if (t.enabled)
                        return;
                    t.enabled = !0;
                    const s = e.support
                        , {passiveListener: a, activeListenerWithCapture: i} = S()
                        , r = M();
                    s.gestures ? (e.$wrapperEl.on(e.touchEvents.start, k, a),
                        e.$wrapperEl.on(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, w, a),
                        e.$wrapperEl.on(e.touchEvents.move, r, b, i),
                        e.$wrapperEl.on(e.touchEvents.end, r, x, a),
                    e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, x, a)),
                        e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, y, i)
                }

                function I() {
                    const t = e.zoom;
                    if (!t.enabled)
                        return;
                    const s = e.support;
                    t.enabled = !1;
                    const {passiveListener: a, activeListenerWithCapture: i} = S()
                        , r = M();
                    s.gestures ? (e.$wrapperEl.off(e.touchEvents.start, k, a),
                        e.$wrapperEl.off(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, w, a),
                        e.$wrapperEl.off(e.touchEvents.move, r, b, i),
                        e.$wrapperEl.off(e.touchEvents.end, r, x, a),
                    e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, x, a)),
                        e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, y, i)
                }

                Object.defineProperty(e.zoom, "scale", {
                    get: () => g,
                    set(e) {
                        if (g !== e) {
                            const t = u.$imageEl ? u.$imageEl[0] : void 0
                                , s = u.$slideEl ? u.$slideEl[0] : void 0;
                            a("zoomChange", e, t, s)
                        }
                        g = e
                    }
                }),
                    s("init", ( () => {
                            e.params.zoom.enabled && O()
                        }
                    )),
                    s("destroy", ( () => {
                            I()
                        }
                    )),
                    s("touchStart", ( (t, s) => {
                            e.zoom.enabled && function(t) {
                                const s = e.device;
                                u.$imageEl && 0 !== u.$imageEl.length && (m.isTouched || (s.android && t.cancelable && t.preventDefault(),
                                    m.isTouched = !0,
                                    m.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                    m.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                            }(s)
                        }
                    )),
                    s("touchEnd", ( (t, s) => {
                            e.zoom.enabled && function() {
                                const t = e.zoom;
                                if (!u.$imageEl || 0 === u.$imageEl.length)
                                    return;
                                if (!m.isTouched || !m.isMoved)
                                    return m.isTouched = !1,
                                        void (m.isMoved = !1);
                                m.isTouched = !1,
                                    m.isMoved = !1;
                                let s = 300
                                    , a = 300;
                                const i = f.x * s
                                    , r = m.currentX + i
                                    , n = f.y * a
                                    , l = m.currentY + n;
                                0 !== f.x && (s = Math.abs((r - m.currentX) / f.x)),
                                0 !== f.y && (a = Math.abs((l - m.currentY) / f.y));
                                const o = Math.max(s, a);
                                m.currentX = r,
                                    m.currentY = l;
                                const d = m.width * t.scale
                                    , c = m.height * t.scale;
                                m.minX = Math.min(u.slideWidth / 2 - d / 2, 0),
                                    m.maxX = -m.minX,
                                    m.minY = Math.min(u.slideHeight / 2 - c / 2, 0),
                                    m.maxY = -m.minY,
                                    m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX),
                                    m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY),
                                    u.$imageWrapEl.transition(o).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
                            }()
                        }
                    )),
                    s("doubleTap", ( (t, s) => {
                            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && $(s)
                        }
                    )),
                    s("transitionEnd", ( () => {
                            e.zoom.enabled && e.params.zoom.enabled && E()
                        }
                    )),
                    s("slideChange", ( () => {
                            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && E()
                        }
                    )),
                    Object.assign(e.zoom, {
                        enable: O,
                        disable: I,
                        in: T,
                        out: C,
                        toggle: $
                    })
            }
            , function({swiper: e, extendParams: t, on: s, emit: a}) {
                t({
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                }),
                    e.lazy = {};
                let i = !1
                    , n = !1;

                function l(t, s=!0) {
                    const i = e.params.lazy;
                    if (void 0 === t)
                        return;
                    if (0 === e.slides.length)
                        return;
                    const r = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`) : e.slides.eq(t)
                        , n = r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
                    !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || n.push(r[0]),
                    0 !== n.length && n.each((t => {
                            const n = d(t);
                            n.addClass(i.loadingClass);
                            const o = n.attr("data-background")
                                , c = n.attr("data-src")
                                , p = n.attr("data-srcset")
                                , u = n.attr("data-sizes")
                                , h = n.parent("picture");
                            e.loadImage(n[0], c || o, p, u, !1, ( () => {
                                    if (null != e && e && (!e || e.params) && !e.destroyed) {
                                        if (o ? (n.css("background-image", `url("${o}")`),
                                            n.removeAttr("data-background")) : (p && (n.attr("srcset", p),
                                            n.removeAttr("data-srcset")),
                                        u && (n.attr("sizes", u),
                                            n.removeAttr("data-sizes")),
                                        h.length && h.children("source").each((e => {
                                                const t = d(e);
                                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")),
                                                    t.removeAttr("data-srcset"))
                                            }
                                        )),
                                        c && (n.attr("src", c),
                                            n.removeAttr("data-src"))),
                                            n.addClass(i.loadedClass).removeClass(i.loadingClass),
                                            r.find(`.${i.preloaderClass}`).remove(),
                                        e.params.loop && s) {
                                            const t = r.attr("data-swiper-slide-index");
                                            if (r.hasClass(e.params.slideDuplicateClass)) {
                                                l(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(), !1)
                                            } else {
                                                l(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1)
                                            }
                                        }
                                        a("lazyImageReady", r[0], n[0]),
                                        e.params.autoHeight && e.updateAutoHeight()
                                    }
                                }
                            )),
                                a("lazyImageLoad", r[0], n[0])
                        }
                    ))
                }

                function o() {
                    const {$wrapperEl: t, params: s, slides: a, activeIndex: i} = e
                        , r = e.virtual && s.virtual.enabled
                        , o = s.lazy;
                    let c = s.slidesPerView;

                    function p(e) {
                        if (r) {
                            if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length)
                                return !0
                        } else if (a[e])
                            return !0;
                        return !1
                    }

                    function u(e) {
                        return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
                    }

                    if ("auto" === c && (c = 0),
                    n || (n = !0),
                        e.params.watchSlidesProgress)
                        t.children(`.${s.slideVisibleClass}`).each((e => {
                                l(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
                            }
                        ));
                    else if (c > 1)
                        for (let e = i; e < i + c; e += 1)
                            p(e) && l(e);
                    else
                        l(i);
                    if (o.loadPrevNext)
                        if (c > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                            const e = o.loadPrevNextAmount
                                , t = c
                                , s = Math.min(i + t + Math.max(e, t), a.length)
                                , r = Math.max(i - Math.max(t, e), 0);
                            for (let e = i + c; e < s; e += 1)
                                p(e) && l(e);
                            for (let e = r; e < i; e += 1)
                                p(e) && l(e)
                        } else {
                            const e = t.children(`.${s.slideNextClass}`);
                            e.length > 0 && l(u(e));
                            const a = t.children(`.${s.slidePrevClass}`);
                            a.length > 0 && l(u(a))
                        }
                }

                function c() {
                    const t = r();
                    if (!e || e.destroyed)
                        return;
                    const s = e.params.lazy.scrollingElement ? d(e.params.lazy.scrollingElement) : d(t)
                        , a = s[0] === t
                        , n = a ? t.innerWidth : s[0].offsetWidth
                        , l = a ? t.innerHeight : s[0].offsetHeight
                        , p = e.$el.offset()
                        , {rtlTranslate: u} = e;
                    let h = !1;
                    u && (p.left -= e.$el[0].scrollLeft);
                    const m = [[p.left, p.top], [p.left + e.width, p.top], [p.left, p.top + e.height], [p.left + e.width, p.top + e.height]];
                    for (let e = 0; e < m.length; e += 1) {
                        const t = m[e];
                        if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= l) {
                            if (0 === t[0] && 0 === t[1])
                                continue;
                            h = !0
                        }
                    }
                    const f = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    h ? (o(),
                        s.off("scroll", c, f)) : i || (i = !0,
                        s.on("scroll", c, f))
                }

                s("beforeInit", ( () => {
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                    }
                )),
                    s("init", ( () => {
                            e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o())
                        }
                    )),
                    s("scroll", ( () => {
                            e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && o()
                        }
                    )),
                    s("scrollbarDragMove resize _freeModeNoMomentumRelease", ( () => {
                            e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o())
                        }
                    )),
                    s("transitionStart", ( () => {
                            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !n) && (e.params.lazy.checkInView ? c() : o())
                        }
                    )),
                    s("transitionEnd", ( () => {
                            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? c() : o())
                        }
                    )),
                    s("slideChange", ( () => {
                            const {lazy: t, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r} = e.params;
                            t.enabled && (s || a && (i || 0 === r)) && o()
                        }
                    )),
                    Object.assign(e.lazy, {
                        load: o,
                        loadInSlide: l
                    })
            }
            , function({swiper: e, extendParams: t, on: s}) {
                function a(e, t) {
                    const s = function() {
                        let e, t, s;
                        return (a, i) => {
                            for (t = -1,
                                     e = a.length; e - t > 1; )
                                s = e + t >> 1,
                                    a[s] <= i ? t = s : e = s;
                            return e
                        }
                    }();
                    let a, i;
                    return this.x = e,
                        this.y = t,
                        this.lastIndex = e.length - 1,
                        this.interpolate = function(e) {
                            return e ? (i = s(this.x, e),
                                a = i - 1,
                            (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
                        }
                        ,
                        this
                }

                function i() {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                        delete e.controller.spline)
                }

                t({
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                }),
                    e.controller = {
                        control: void 0
                    },
                    s("beforeInit", ( () => {
                            e.controller.control = e.params.controller.control
                        }
                    )),
                    s("update", ( () => {
                            i()
                        }
                    )),
                    s("resize", ( () => {
                            i()
                        }
                    )),
                    s("observerUpdate", ( () => {
                            i()
                        }
                    )),
                    s("setTranslate", ( (t, s, a) => {
                            e.controller.control && e.controller.setTranslate(s, a)
                        }
                    )),
                    s("setTransition", ( (t, s, a) => {
                            e.controller.control && e.controller.setTransition(s, a)
                        }
                    )),
                    Object.assign(e.controller, {
                        setTranslate: function(t, s) {
                            const i = e.controller.control;
                            let r, n;
                            const l = e.constructor;

                            function o(t) {
                                const s = e.rtlTranslate ? -e.translate : e.translate;
                                "slide" === e.params.controller.by && (!function(t) {
                                    e.controller.spline || (e.controller.spline = e.params.loop ? new a(e.slidesGrid,t.slidesGrid) : new a(e.snapGrid,t.snapGrid))
                                }(t),
                                    n = -e.controller.spline.interpolate(-s)),
                                n && "container" !== e.params.controller.by || (r = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()),
                                    n = (s - e.minTranslate()) * r + t.minTranslate()),
                                e.params.controller.inverse && (n = t.maxTranslate() - n),
                                    t.updateProgress(n),
                                    t.setTranslate(n, e),
                                    t.updateActiveIndex(),
                                    t.updateSlidesClasses()
                            }

                            if (Array.isArray(i))
                                for (let e = 0; e < i.length; e += 1)
                                    i[e] !== s && i[e]instanceof l && o(i[e]);
                            else
                                i instanceof l && s !== i && o(i)
                        },
                        setTransition: function(t, s) {
                            const a = e.constructor
                                , i = e.controller.control;
                            let r;

                            function n(s) {
                                s.setTransition(t, e),
                                0 !== t && (s.transitionStart(),
                                s.params.autoHeight && p(( () => {
                                        s.updateAutoHeight()
                                    }
                                )),
                                    s.$wrapperEl.transitionEnd(( () => {
                                            i && (s.params.loop && "slide" === e.params.controller.by && s.loopFix(),
                                                s.transitionEnd())
                                        }
                                    )))
                            }

                            if (Array.isArray(i))
                                for (r = 0; r < i.length; r += 1)
                                    i[r] !== s && i[r]instanceof a && n(i[r]);
                            else
                                i instanceof a && s !== i && n(i)
                        }
                    })
            }
            , function({swiper: e, extendParams: t, on: s}) {
                t({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group"
                    }
                });
                let a = null;

                function i(e) {
                    const t = a;
                    0 !== t.length && (t.html(""),
                        t.html(e))
                }

                function r(e) {
                    e.attr("tabIndex", "0")
                }

                function n(e) {
                    e.attr("tabIndex", "-1")
                }

                function l(e, t) {
                    e.attr("role", t)
                }

                function o(e, t) {
                    e.attr("aria-roledescription", t)
                }

                function c(e, t) {
                    e.attr("aria-label", t)
                }

                function p(e) {
                    e.attr("aria-disabled", !0)
                }

                function u(e) {
                    e.attr("aria-disabled", !1)
                }

                function h(t) {
                    if (13 !== t.keyCode && 32 !== t.keyCode)
                        return;
                    const s = e.params.a11y
                        , a = d(t.target);
                    e.navigation && e.navigation.$nextEl && a.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(),
                        e.isEnd ? i(s.lastSlideMessage) : i(s.nextSlideMessage)),
                    e.navigation && e.navigation.$prevEl && a.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(),
                        e.isBeginning ? i(s.firstSlideMessage) : i(s.prevSlideMessage)),
                    e.pagination && a.is(W(e.params.pagination.bulletClass)) && a[0].click()
                }

                function m() {
                    if (e.params.loop || !e.navigation)
                        return;
                    const {$nextEl: t, $prevEl: s} = e.navigation;
                    s && s.length > 0 && (e.isBeginning ? (p(s),
                        n(s)) : (u(s),
                        r(s))),
                    t && t.length > 0 && (e.isEnd ? (p(t),
                        n(t)) : (u(t),
                        r(t)))
                }

                function f() {
                    return e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length
                }

                const g = (e, t, s) => {
                        r(e),
                        "BUTTON" !== e[0].tagName && (l(e, "button"),
                            e.on("keydown", h)),
                            c(e, s),
                            function(e, t) {
                                e.attr("aria-controls", t)
                            }(e, t)
                    }
                ;

                function v() {
                    const t = e.params.a11y;
                    e.$el.append(a);
                    const s = e.$el;
                    t.containerRoleDescriptionMessage && o(s, t.containerRoleDescriptionMessage),
                    t.containerMessage && c(s, t.containerMessage);
                    const i = e.$wrapperEl
                        , r = i.attr("id") || `swiper-wrapper-${function(e=16) {
                        return "x".repeat(e).replace(/x/g, ( () => Math.round(16 * Math.random()).toString(16)))
                    }(16)}`
                        , n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                    var p;
                    p = r,
                        i.attr("id", p),
                        function(e, t) {
                            e.attr("aria-live", t)
                        }(i, n),
                    t.itemRoleDescriptionMessage && o(d(e.slides), t.itemRoleDescriptionMessage),
                        l(d(e.slides), t.slideRole);
                    const u = e.params.loop ? e.slides.filter((t => !t.classList.contains(e.params.slideDuplicateClass))).length : e.slides.length;
                    let m, v;
                    e.slides.each(( (s, a) => {
                            const i = d(s)
                                , r = e.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
                            c(i, t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, u))
                        }
                    )),
                    e.navigation && e.navigation.$nextEl && (m = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (v = e.navigation.$prevEl),
                    m && m.length && g(m, r, t.nextSlideMessage),
                    v && v.length && g(v, r, t.prevSlideMessage),
                    f() && e.pagination.$el.on("keydown", W(e.params.pagination.bulletClass), h)
                }

                s("beforeInit", ( () => {
                        a = d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                    }
                )),
                    s("afterInit", ( () => {
                            e.params.a11y.enabled && (v(),
                                m())
                        }
                    )),
                    s("toEdge", ( () => {
                            e.params.a11y.enabled && m()
                        }
                    )),
                    s("fromEdge", ( () => {
                            e.params.a11y.enabled && m()
                        }
                    )),
                    s("paginationUpdate", ( () => {
                            e.params.a11y.enabled && function() {
                                const t = e.params.a11y;
                                f() && e.pagination.bullets.each((s => {
                                        const a = d(s);
                                        r(a),
                                        e.params.pagination.renderBullet || (l(a, "button"),
                                            c(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))
                                    }
                                ))
                            }()
                        }
                    )),
                    s("destroy", ( () => {
                            e.params.a11y.enabled && function() {
                                let t, s;
                                a && a.length > 0 && a.remove(),
                                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                                e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
                                t && t.off("keydown", h),
                                s && s.off("keydown", h),
                                f() && e.pagination.$el.off("keydown", W(e.params.pagination.bulletClass), h)
                            }()
                        }
                    ))
            }
            , function({swiper: e, extendParams: t, on: s}) {
                t({
                    history: {
                        enabled: !1,
                        root: "",
                        replaceState: !1,
                        key: "slides"
                    }
                });
                let a = !1
                    , i = {};
                const n = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    , l = e => {
                        const t = r();
                        let s;
                        s = e ? new URL(e) : t.location;
                        const a = s.pathname.slice(1).split("/").filter((e => "" !== e))
                            , i = a.length;
                        return {
                            key: a[i - 2],
                            value: a[i - 1]
                        }
                    }
                    , o = (t, s) => {
                        const i = r();
                        if (!a || !e.params.history.enabled)
                            return;
                        let l;
                        l = e.params.url ? new URL(e.params.url) : i.location;
                        const o = e.slides.eq(s);
                        let d = n(o.attr("data-history"));
                        if (e.params.history.root.length > 0) {
                            let s = e.params.history.root;
                            "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
                                d = `${s}/${t}/${d}`
                        } else
                            l.pathname.includes(t) || (d = `${t}/${d}`);
                        const c = i.history.state;
                        c && c.value === d || (e.params.history.replaceState ? i.history.replaceState({
                            value: d
                        }, null, d) : i.history.pushState({
                            value: d
                        }, null, d))
                    }
                    , d = (t, s, a) => {
                        if (s)
                            for (let i = 0, r = e.slides.length; i < r; i += 1) {
                                const r = e.slides.eq(i);
                                if (n(r.attr("data-history")) === s && !r.hasClass(e.params.slideDuplicateClass)) {
                                    const s = r.index();
                                    e.slideTo(s, t, a)
                                }
                            }
                        else
                            e.slideTo(0, t, a)
                    }
                    , c = () => {
                        i = l(e.params.url),
                            d(e.params.speed, e.paths.value, !1)
                    }
                ;
                s("init", ( () => {
                        e.params.history.enabled && ( () => {
                                const t = r();
                                if (e.params.history) {
                                    if (!t.history || !t.history.pushState)
                                        return e.params.history.enabled = !1,
                                            void (e.params.hashNavigation.enabled = !0);
                                    a = !0,
                                        i = l(e.params.url),
                                    (i.key || i.value) && (d(0, i.value, e.params.runCallbacksOnInit),
                                    e.params.history.replaceState || t.addEventListener("popstate", c))
                                }
                            }
                        )()
                    }
                )),
                    s("destroy", ( () => {
                            e.params.history.enabled && ( () => {
                                    const t = r();
                                    e.params.history.replaceState || t.removeEventListener("popstate", c)
                                }
                            )()
                        }
                    )),
                    s("transitionEnd _freeModeNoMomentumRelease", ( () => {
                            a && o(e.params.history.key, e.activeIndex)
                        }
                    )),
                    s("slideChange", ( () => {
                            a && e.params.cssMode && o(e.params.history.key, e.activeIndex)
                        }
                    ))
            }
            , function({swiper: e, extendParams: t, emit: s, on: i}) {
                let n = !1;
                const l = a()
                    , o = r();
                t({
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                });
                const c = () => {
                        s("hashChange");
                        const t = l.location.hash.replace("#", "");
                        if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                            const s = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                            if (void 0 === s)
                                return;
                            e.slideTo(s)
                        }
                    }
                    , p = () => {
                        if (n && e.params.hashNavigation.enabled)
                            if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState)
                                o.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""),
                                    s("hashSet");
                            else {
                                const t = e.slides.eq(e.activeIndex)
                                    , a = t.attr("data-hash") || t.attr("data-history");
                                l.location.hash = a || "",
                                    s("hashSet")
                            }
                    }
                ;
                i("init", ( () => {
                        e.params.hashNavigation.enabled && ( () => {
                                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
                                    return;
                                n = !0;
                                const t = l.location.hash.replace("#", "");
                                if (t) {
                                    const s = 0;
                                    for (let a = 0, i = e.slides.length; a < i; a += 1) {
                                        const i = e.slides.eq(a);
                                        if ((i.attr("data-hash") || i.attr("data-history")) === t && !i.hasClass(e.params.slideDuplicateClass)) {
                                            const t = i.index();
                                            e.slideTo(t, s, e.params.runCallbacksOnInit, !0)
                                        }
                                    }
                                }
                                e.params.hashNavigation.watchState && d(o).on("hashchange", c)
                            }
                        )()
                    }
                )),
                    i("destroy", ( () => {
                            e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && d(o).off("hashchange", c)
                        }
                    )),
                    i("transitionEnd _freeModeNoMomentumRelease", ( () => {
                            n && p()
                        }
                    )),
                    i("slideChange", ( () => {
                            n && e.params.cssMode && p()
                        }
                    ))
            }
            , function({swiper: e, extendParams: t, on: s, emit: i}) {
                let r;

                function n() {
                    const t = e.slides.eq(e.activeIndex);
                    let s = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                        clearTimeout(r),
                        r = p(( () => {
                                let t;
                                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                                    t = e.slidePrev(e.params.speed, !0, !0),
                                    i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                                    i("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0),
                                    i("autoplay")) : e.params.loop ? (e.loopFix(),
                                    t = e.slideNext(e.params.speed, !0, !0),
                                    i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0),
                                    i("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0),
                                    i("autoplay")),
                                (e.params.cssMode && e.autoplay.running || !1 === t) && n()
                            }
                        ), s)
                }

                function l() {
                    return void 0 === r && (!e.autoplay.running && (e.autoplay.running = !0,
                        i("autoplayStart"),
                        n(),
                        !0))
                }

                function o() {
                    return !!e.autoplay.running && (void 0 !== r && (r && (clearTimeout(r),
                        r = void 0),
                        e.autoplay.running = !1,
                        i("autoplayStop"),
                        !0))
                }

                function d(t) {
                    e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r),
                        e.autoplay.paused = !0,
                        0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                                e.$wrapperEl[0].addEventListener(t, u)
                            }
                        )) : (e.autoplay.paused = !1,
                            n())))
                }

                function c() {
                    const t = a();
                    "hidden" === t.visibilityState && e.autoplay.running && d(),
                    "visible" === t.visibilityState && e.autoplay.paused && (n(),
                        e.autoplay.paused = !1)
                }

                function u(t) {
                    e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                            e.$wrapperEl[0].removeEventListener(t, u)
                        }
                    )),
                        e.autoplay.paused = !1,
                        e.autoplay.running ? n() : o())
                }

                function h() {
                    e.params.autoplay.disableOnInteraction ? o() : d(),
                        ["transitionend", "webkitTransitionEnd"].forEach((t => {
                                e.$wrapperEl[0].removeEventListener(t, u)
                            }
                        ))
                }

                function m() {
                    e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1,
                        n())
                }

                e.autoplay = {
                    running: !1,
                    paused: !1
                },
                    t({
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1,
                            pauseOnMouseEnter: !1
                        }
                    }),
                    s("init", ( () => {
                            if (e.params.autoplay.enabled) {
                                l();
                                a().addEventListener("visibilitychange", c),
                                e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h),
                                    e.$el.on("mouseleave", m))
                            }
                        }
                    )),
                    s("beforeTransitionStart", ( (t, s, a) => {
                            e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o())
                        }
                    )),
                    s("sliderFirstMove", ( () => {
                            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d())
                        }
                    )),
                    s("touchEnd", ( () => {
                            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n()
                        }
                    )),
                    s("destroy", ( () => {
                            e.$el.off("mouseenter", h),
                                e.$el.off("mouseleave", m),
                            e.autoplay.running && o();
                            a().removeEventListener("visibilitychange", c)
                        }
                    )),
                    Object.assign(e.autoplay, {
                        pause: d,
                        run: n,
                        start: l,
                        stop: o
                    })
            }
            , function({swiper: e, extendParams: t, on: s}) {
                t({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs"
                    }
                });
                let a = !1
                    , i = !1;

                function r() {
                    const t = e.thumbs.swiper;
                    if (!t)
                        return;
                    const s = t.clickedIndex
                        , a = t.clickedSlide;
                    if (a && d(a).hasClass(e.params.thumbs.slideThumbActiveClass))
                        return;
                    if (null == s)
                        return;
                    let i;
                    if (i = t.params.loop ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s,
                        e.params.loop) {
                        let t = e.activeIndex;
                        e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                            e._clientLeft = e.$wrapperEl[0].clientLeft,
                            t = e.activeIndex);
                        const s = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index()
                            , a = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                        i = void 0 === s ? a : void 0 === a ? s : a - t < t - s ? a : s
                    }
                    e.slideTo(i)
                }

                function n() {
                    const {thumbs: t} = e.params;
                    if (a)
                        return !1;
                    a = !0;
                    const s = e.constructor;
                    if (t.swiper instanceof s)
                        e.thumbs.swiper = t.swiper,
                            Object.assign(e.thumbs.swiper.originalParams, {
                                watchSlidesProgress: !0,
                                slideToClickedSlide: !1
                            }),
                            Object.assign(e.thumbs.swiper.params, {
                                watchSlidesProgress: !0,
                                slideToClickedSlide: !1
                            });
                    else if (m(t.swiper)) {
                        const a = Object.assign({}, t.swiper);
                        Object.assign(a, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }),
                            e.thumbs.swiper = new s(a),
                            i = !0
                    }
                    return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                        e.thumbs.swiper.on("tap", r),
                        !0
                }

                function l(t) {
                    const s = e.thumbs.swiper;
                    if (!s)
                        return;
                    const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView
                        , i = e.params.thumbs.autoScrollOffset
                        , r = i && !s.params.loop;
                    if (e.realIndex !== s.realIndex || r) {
                        let n, l, o = s.activeIndex;
                        if (s.params.loop) {
                            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(),
                                s._clientLeft = s.$wrapperEl[0].clientLeft,
                                o = s.activeIndex);
                            const t = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index()
                                , a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                            n = void 0 === t ? a : void 0 === a ? t : a - o == o - t ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - t ? a : t,
                                l = e.activeIndex > e.previousIndex ? "next" : "prev"
                        } else
                            n = e.realIndex,
                                l = n > e.previousIndex ? "next" : "prev";
                        r && (n += "next" === l ? i : -1 * i),
                        s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > o ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : n > o && s.params.slidesPerGroup,
                            s.slideTo(n, t ? 0 : void 0))
                    }
                    let n = 1;
                    const l = e.params.thumbs.slideThumbActiveClass;
                    if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (n = e.params.slidesPerView),
                    e.params.thumbs.multipleActiveThumbs || (n = 1),
                        n = Math.floor(n),
                        s.slides.removeClass(l),
                    s.params.loop || s.params.virtual && s.params.virtual.enabled)
                        for (let t = 0; t < n; t += 1)
                            s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex + t}"]`).addClass(l);
                    else
                        for (let t = 0; t < n; t += 1)
                            s.slides.eq(e.realIndex + t).addClass(l)
                }

                e.thumbs = {
                    swiper: null
                },
                    s("beforeInit", ( () => {
                            const {thumbs: t} = e.params;
                            t && t.swiper && (n(),
                                l(!0))
                        }
                    )),
                    s("slideChange update resize observerUpdate", ( () => {
                            e.thumbs.swiper && l()
                        }
                    )),
                    s("setTransition", ( (t, s) => {
                            const a = e.thumbs.swiper;
                            a && a.setTransition(s)
                        }
                    )),
                    s("beforeDestroy", ( () => {
                            const t = e.thumbs.swiper;
                            t && i && t && t.destroy()
                        }
                    )),
                    Object.assign(e.thumbs, {
                        init: n,
                        update: l
                    })
            }
            , function({swiper: e, extendParams: t, emit: s, once: a}) {
                t({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }),
                    Object.assign(e, {
                        freeMode: {
                            onTouchMove: function() {
                                const {touchEventsData: t, touches: s} = e;
                                0 === t.velocities.length && t.velocities.push({
                                    position: s[e.isHorizontal() ? "startX" : "startY"],
                                    time: t.touchStartTime
                                }),
                                    t.velocities.push({
                                        position: s[e.isHorizontal() ? "currentX" : "currentY"],
                                        time: u()
                                    })
                            },
                            onTouchEnd: function({currentPos: t}) {
                                const {params: i, $wrapperEl: r, rtlTranslate: n, snapGrid: l, touchEventsData: o} = e
                                    , d = u() - o.touchStartTime;
                                if (t < -e.minTranslate())
                                    e.slideTo(e.activeIndex);
                                else if (t > -e.maxTranslate())
                                    e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);
                                else {
                                    if (i.freeMode.momentum) {
                                        if (o.velocities.length > 1) {
                                            const t = o.velocities.pop()
                                                , s = o.velocities.pop()
                                                , a = t.position - s.position
                                                , r = t.time - s.time;
                                            e.velocity = a / r,
                                                e.velocity /= 2,
                                            Math.abs(e.velocity) < i.freeMode.minimumVelocity && (e.velocity = 0),
                                            (r > 150 || u() - t.time > 300) && (e.velocity = 0)
                                        } else
                                            e.velocity = 0;
                                        e.velocity *= i.freeMode.momentumVelocityRatio,
                                            o.velocities.length = 0;
                                        let t = 1e3 * i.freeMode.momentumRatio;
                                        const d = e.velocity * t;
                                        let c = e.translate + d;
                                        n && (c = -c);
                                        let p, h = !1;
                                        const m = 20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio;
                                        let f;
                                        if (c < e.maxTranslate())
                                            i.freeMode.momentumBounce ? (c + e.maxTranslate() < -m && (c = e.maxTranslate() - m),
                                                p = e.maxTranslate(),
                                                h = !0,
                                                o.allowMomentumBounce = !0) : c = e.maxTranslate(),
                                            i.loop && i.centeredSlides && (f = !0);
                                        else if (c > e.minTranslate())
                                            i.freeMode.momentumBounce ? (c - e.minTranslate() > m && (c = e.minTranslate() + m),
                                                p = e.minTranslate(),
                                                h = !0,
                                                o.allowMomentumBounce = !0) : c = e.minTranslate(),
                                            i.loop && i.centeredSlides && (f = !0);
                                        else if (i.freeMode.sticky) {
                                            let t;
                                            for (let e = 0; e < l.length; e += 1)
                                                if (l[e] > -c) {
                                                    t = e;
                                                    break
                                                }
                                            c = Math.abs(l[t] - c) < Math.abs(l[t - 1] - c) || "next" === e.swipeDirection ? l[t] : l[t - 1],
                                                c = -c
                                        }
                                        if (f && a("transitionEnd", ( () => {
                                                e.loopFix()
                                            }
                                        )),
                                        0 !== e.velocity) {
                                            if (t = n ? Math.abs((-c - e.translate) / e.velocity) : Math.abs((c - e.translate) / e.velocity),
                                                i.freeMode.sticky) {
                                                const s = Math.abs((n ? -c : c) - e.translate)
                                                    , a = e.slidesSizesGrid[e.activeIndex];
                                                t = s < a ? i.speed : s < 2 * a ? 1.5 * i.speed : 2.5 * i.speed
                                            }
                                        } else if (i.freeMode.sticky)
                                            return void e.slideToClosest();
                                        i.freeMode.momentumBounce && h ? (e.updateProgress(p),
                                            e.setTransition(t),
                                            e.setTranslate(c),
                                            e.transitionStart(!0, e.swipeDirection),
                                            e.animating = !0,
                                            r.transitionEnd(( () => {
                                                    e && !e.destroyed && o.allowMomentumBounce && (s("momentumBounce"),
                                                        e.setTransition(i.speed),
                                                        setTimeout(( () => {
                                                                e.setTranslate(p),
                                                                    r.transitionEnd(( () => {
                                                                            e && !e.destroyed && e.transitionEnd()
                                                                        }
                                                                    ))
                                                            }
                                                        ), 0))
                                                }
                                            ))) : e.velocity ? (s("_freeModeNoMomentumRelease"),
                                            e.updateProgress(c),
                                            e.setTransition(t),
                                            e.setTranslate(c),
                                            e.transitionStart(!0, e.swipeDirection),
                                        e.animating || (e.animating = !0,
                                            r.transitionEnd(( () => {
                                                    e && !e.destroyed && e.transitionEnd()
                                                }
                                            )))) : e.updateProgress(c),
                                            e.updateActiveIndex(),
                                            e.updateSlidesClasses()
                                    } else {
                                        if (i.freeMode.sticky)
                                            return void e.slideToClosest();
                                        i.freeMode && s("_freeModeNoMomentumRelease")
                                    }
                                    (!i.freeMode.momentum || d >= i.longSwipesMs) && (e.updateProgress(),
                                        e.updateActiveIndex(),
                                        e.updateSlidesClasses())
                                }
                            }
                        }
                    })
            }
            , function({swiper: e, extendParams: t}) {
                let s, a, i;
                t({
                    grid: {
                        rows: 1,
                        fill: "column"
                    }
                }),
                    e.grid = {
                        initSlides: t => {
                            const {slidesPerView: r} = e.params
                                , {rows: n, fill: l} = e.params.grid;
                            a = s / n,
                                i = Math.floor(t / n),
                                s = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n,
                            "auto" !== r && "row" === l && (s = Math.max(s, r * n))
                        }
                        ,
                        updateSlide: (t, r, n, l) => {
                            const {slidesPerGroup: o, spaceBetween: d} = e.params
                                , {rows: c, fill: p} = e.params.grid;
                            let u, h, m;
                            if ("row" === p && o > 1) {
                                const e = Math.floor(t / (o * c))
                                    , a = t - c * o * e
                                    , i = 0 === e ? o : Math.min(Math.ceil((n - e * c * o) / c), o);
                                m = Math.floor(a / i),
                                    h = a - m * i + e * o,
                                    u = h + m * s / c,
                                    r.css({
                                        "-webkit-order": u,
                                        order: u
                                    })
                            } else
                                "column" === p ? (h = Math.floor(t / c),
                                    m = t - h * c,
                                (h > i || h === i && m === c - 1) && (m += 1,
                                m >= c && (m = 0,
                                    h += 1))) : (m = Math.floor(t / a),
                                    h = t - m * a);
                            r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
                        }
                        ,
                        updateWrapperSize: (t, a, i) => {
                            const {spaceBetween: r, centeredSlides: n, roundLengths: l} = e.params
                                , {rows: o} = e.params.grid;
                            if (e.virtualSize = (t + r) * s,
                                e.virtualSize = Math.ceil(e.virtualSize / o) - r,
                                e.$wrapperEl.css({
                                    [i("width")]: `${e.virtualSize + r}px`
                                }),
                                n) {
                                a.splice(0, a.length);
                                const t = [];
                                for (let s = 0; s < a.length; s += 1) {
                                    let i = a[s];
                                    l && (i = Math.floor(i)),
                                    a[s] < e.virtualSize + a[0] && t.push(i)
                                }
                                a.push(...t)
                            }
                        }
                    }
            }
            , function({swiper: e}) {
                Object.assign(e, {
                    appendSlide: R.bind(e),
                    prependSlide: j.bind(e),
                    addSlide: _.bind(e),
                    removeSlide: V.bind(e),
                    removeAllSlides: q.bind(e)
                })
            }
            , function({swiper: e, extendParams: t, on: s}) {
                t({
                    fadeEffect: {
                        crossFade: !1,
                        transformEl: null
                    }
                }),
                    F({
                        effect: "fade",
                        swiper: e,
                        on: s,
                        setTranslate: () => {
                            const {slides: t} = e
                                , s = e.params.fadeEffect;
                            for (let a = 0; a < t.length; a += 1) {
                                const t = e.slides.eq(a);
                                let i = -t[0].swiperSlideOffset;
                                e.params.virtualTranslate || (i -= e.translate);
                                let r = 0;
                                e.isHorizontal() || (r = i,
                                    i = 0);
                                const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                U(s, t).css({
                                    opacity: n
                                }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                            }
                        }
                        ,
                        setTransition: t => {
                            const {transformEl: s} = e.params.fadeEffect;
                            (s ? e.slides.find(s) : e.slides).transition(t),
                                K({
                                    swiper: e,
                                    duration: t,
                                    transformEl: s,
                                    allSlides: !0
                                })
                        }
                        ,
                        overwriteParams: () => ({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !e.params.cssMode
                        })
                    })
            }
            , function({swiper: e, extendParams: t, on: s}) {
                t({
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                }),
                    F({
                        effect: "cube",
                        swiper: e,
                        on: s,
                        setTranslate: () => {
                            const {$el: t, $wrapperEl: s, slides: a, width: i, height: r, rtlTranslate: n, size: l, browser: o} = e
                                , c = e.params.cubeEffect
                                , p = e.isHorizontal()
                                , u = e.virtual && e.params.virtual.enabled;
                            let h, m = 0;
                            c.shadow && (p ? (h = s.find(".swiper-cube-shadow"),
                            0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'),
                                s.append(h)),
                                h.css({
                                    height: `${i}px`
                                })) : (h = t.find(".swiper-cube-shadow"),
                            0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'),
                                t.append(h))));
                            for (let e = 0; e < a.length; e += 1) {
                                const t = a.eq(e);
                                let s = e;
                                u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                                let i = 90 * s
                                    , r = Math.floor(i / 360);
                                n && (i = -i,
                                    r = Math.floor(-i / 360));
                                const o = Math.max(Math.min(t[0].progress, 1), -1);
                                let h = 0
                                    , f = 0
                                    , g = 0;
                                s % 4 == 0 ? (h = 4 * -r * l,
                                    g = 0) : (s - 1) % 4 == 0 ? (h = 0,
                                    g = 4 * -r * l) : (s - 2) % 4 == 0 ? (h = l + 4 * r * l,
                                    g = l) : (s - 3) % 4 == 0 && (h = -l,
                                    g = 3 * l + 4 * l * r),
                                n && (h = -h),
                                p || (f = h,
                                    h = 0);
                                const v = `rotateX(${p ? 0 : -i}deg) rotateY(${p ? i : 0}deg) translate3d(${h}px, ${f}px, ${g}px)`;
                                if (o <= 1 && o > -1 && (m = 90 * s + 90 * o,
                                n && (m = 90 * -s - 90 * o)),
                                    t.transform(v),
                                    c.slideShadows) {
                                    let e = p ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                                        , s = p ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                    0 === e.length && (e = d(`<div class="swiper-slide-shadow-${p ? "left" : "top"}"></div>`),
                                        t.append(e)),
                                    0 === s.length && (s = d(`<div class="swiper-slide-shadow-${p ? "right" : "bottom"}"></div>`),
                                        t.append(s)),
                                    e.length && (e[0].style.opacity = Math.max(-o, 0)),
                                    s.length && (s[0].style.opacity = Math.max(o, 0))
                                }
                            }
                            if (s.css({
                                "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                                "transform-origin": `50% 50% -${l / 2}px`
                            }),
                                c.shadow)
                                if (p)
                                    h.transform(`translate3d(0px, ${i / 2 + c.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);
                                else {
                                    const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90)
                                        , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                                        , s = c.shadowScale
                                        , a = c.shadowScale / t
                                        , i = c.shadowOffset;
                                    h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r / 2 + i}px, ${-r / 2 / a}px) rotateX(-90deg)`)
                                }
                            const f = o.isSafari || o.isWebView ? -l / 2 : 0;
                            s.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal() ? 0 : m}deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`)
                        }
                        ,
                        setTransition: t => {
                            const {$el: s, slides: a} = e;
                            a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                            e.params.cubeEffect.shadow && !e.isHorizontal() && s.find(".swiper-cube-shadow").transition(t)
                        }
                        ,
                        perspective: () => !0,
                        overwriteParams: () => ({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        })
                    })
            }
            , function({swiper: e, extendParams: t, on: s}) {
                t({
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0,
                        transformEl: null
                    }
                }),
                    F({
                        effect: "flip",
                        swiper: e,
                        on: s,
                        setTranslate: () => {
                            const {slides: t, rtlTranslate: s} = e
                                , a = e.params.flipEffect;
                            for (let i = 0; i < t.length; i += 1) {
                                const r = t.eq(i);
                                let n = r[0].progress;
                                e.params.flipEffect.limitRotation && (n = Math.max(Math.min(r[0].progress, 1), -1));
                                const l = r[0].swiperSlideOffset;
                                let o = -180 * n
                                    , d = 0
                                    , c = e.params.cssMode ? -l - e.translate : -l
                                    , p = 0;
                                if (e.isHorizontal() ? s && (o = -o) : (p = c,
                                    c = 0,
                                    d = -o,
                                    o = 0),
                                    r[0].style.zIndex = -Math.abs(Math.round(n)) + t.length,
                                    a.slideShadows) {
                                    let t = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top")
                                        , s = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                    0 === t.length && (t = Z(a, r, e.isHorizontal() ? "left" : "top")),
                                    0 === s.length && (s = Z(a, r, e.isHorizontal() ? "right" : "bottom")),
                                    t.length && (t[0].style.opacity = Math.max(-n, 0)),
                                    s.length && (s[0].style.opacity = Math.max(n, 0))
                                }
                                const u = `translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;
                                U(a, r).transform(u)
                            }
                        }
                        ,
                        setTransition: t => {
                            const {transformEl: s} = e.params.flipEffect;
                            (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                                K({
                                    swiper: e,
                                    duration: t,
                                    transformEl: s
                                })
                        }
                        ,
                        perspective: () => !0,
                        overwriteParams: () => ({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !e.params.cssMode
                        })
                    })
            }
            , function({swiper: e, extendParams: t, on: s}) {
                t({
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0,
                        transformEl: null
                    }
                }),
                    F({
                        effect: "coverflow",
                        swiper: e,
                        on: s,
                        setTranslate: () => {
                            const {width: t, height: s, slides: a, slidesSizesGrid: i} = e
                                , r = e.params.coverflowEffect
                                , n = e.isHorizontal()
                                , l = e.translate
                                , o = n ? t / 2 - l : s / 2 - l
                                , d = n ? r.rotate : -r.rotate
                                , c = r.depth;
                            for (let e = 0, t = a.length; e < t; e += 1) {
                                const t = a.eq(e)
                                    , s = i[e]
                                    , l = (o - t[0].swiperSlideOffset - s / 2) / s * r.modifier;
                                let p = n ? d * l : 0
                                    , u = n ? 0 : d * l
                                    , h = -c * Math.abs(l)
                                    , m = r.stretch;
                                "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(r.stretch) / 100 * s);
                                let f = n ? 0 : m * l
                                    , g = n ? m * l : 0
                                    , v = 1 - (1 - r.scale) * Math.abs(l);
                                Math.abs(g) < .001 && (g = 0),
                                Math.abs(f) < .001 && (f = 0),
                                Math.abs(h) < .001 && (h = 0),
                                Math.abs(p) < .001 && (p = 0),
                                Math.abs(u) < .001 && (u = 0),
                                Math.abs(v) < .001 && (v = 0);
                                const w = `translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${p}deg) scale(${v})`;
                                if (U(r, t).transform(w),
                                    t[0].style.zIndex = 1 - Math.abs(Math.round(l)),
                                    r.slideShadows) {
                                    let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                                        , s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                    0 === e.length && (e = Z(r, t, n ? "left" : "top")),
                                    0 === s.length && (s = Z(r, t, n ? "right" : "bottom")),
                                    e.length && (e[0].style.opacity = l > 0 ? l : 0),
                                    s.length && (s[0].style.opacity = -l > 0 ? -l : 0)
                                }
                            }
                        }
                        ,
                        setTransition: t => {
                            const {transformEl: s} = e.params.coverflowEffect;
                            (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                        }
                        ,
                        perspective: () => !0,
                        overwriteParams: () => ({
                            watchSlidesProgress: !0
                        })
                    })
            }
            , function({swiper: e, extendParams: t, on: s}) {
                t({
                    creativeEffect: {
                        transformEl: null,
                        limitProgress: 1,
                        shadowPerProgress: !1,
                        progressMultiplier: 1,
                        perspective: !0,
                        prev: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        },
                        next: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1
                        }
                    }
                });
                const a = e => "string" == typeof e ? e : `${e}px`;
                F({
                    effect: "creative",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        const {slides: t} = e
                            , s = e.params.creativeEffect
                            , {progressMultiplier: i} = s;
                        for (let r = 0; r < t.length; r += 1) {
                            const n = t.eq(r)
                                , l = n[0].progress
                                , o = Math.min(Math.max(n[0].progress, -s.limitProgress), s.limitProgress)
                                , d = n[0].swiperSlideOffset
                                , c = [e.params.cssMode ? -d - e.translate : -d, 0, 0]
                                , p = [0, 0, 0];
                            let u = !1;
                            e.isHorizontal() || (c[1] = c[0],
                                c[0] = 0);
                            let h = {
                                translate: [0, 0, 0],
                                rotate: [0, 0, 0],
                                scale: 1,
                                opacity: 1
                            };
                            o < 0 ? (h = s.next,
                                u = !0) : o > 0 && (h = s.prev,
                                u = !0),
                                c.forEach(( (e, t) => {
                                        c[t] = `calc(${e}px + (${a(h.translate[t])} * ${Math.abs(o * i)}))`
                                    }
                                )),
                                p.forEach(( (e, t) => {
                                        p[t] = h.rotate[t] * Math.abs(o * i)
                                    }
                                )),
                                n[0].style.zIndex = -Math.abs(Math.round(l)) + t.length;
                            const m = c.join(", ")
                                , f = `rotateX(${p[0]}deg) rotateY(${p[1]}deg) rotateZ(${p[2]}deg)`
                                , g = o < 0 ? `scale(${1 + (1 - h.scale) * o * i})` : `scale(${1 - (1 - h.scale) * o * i})`
                                , v = o < 0 ? 1 + (1 - h.opacity) * o * i : 1 - (1 - h.opacity) * o * i
                                , w = `translate3d(${m}) ${f} ${g}`;
                            if (u && h.shadow || !u) {
                                let e = n.children(".swiper-slide-shadow");
                                if (0 === e.length && h.shadow && (e = Z(s, n)),
                                    e.length) {
                                    const t = s.shadowPerProgress ? o * (1 / s.limitProgress) : o;
                                    e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                                }
                            }
                            const b = U(s, n);
                            b.transform(w).css({
                                opacity: v
                            }),
                            h.origin && b.css("transform-origin", h.origin)
                        }
                    }
                    ,
                    setTransition: t => {
                        const {transformEl: s} = e.params.creativeEffect;
                        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t),
                            K({
                                swiper: e,
                                duration: t,
                                transformEl: s,
                                allSlides: !0
                            })
                    }
                    ,
                    perspective: () => e.params.creativeEffect.perspective,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !e.params.cssMode
                    })
                })
            }
            , function({swiper: e, extendParams: t, on: s}) {
                t({
                    cardsEffect: {
                        slideShadows: !0,
                        transformEl: null
                    }
                }),
                    F({
                        effect: "cards",
                        swiper: e,
                        on: s,
                        setTranslate: () => {
                            const {slides: t, activeIndex: s} = e
                                , a = e.params.cardsEffect
                                , {startTranslate: i, isTouched: r} = e.touchEventsData
                                , n = e.translate;
                            for (let l = 0; l < t.length; l += 1) {
                                const o = t.eq(l)
                                    , d = o[0].progress
                                    , c = Math.min(Math.max(d, -4), 4);
                                let p = o[0].swiperSlideOffset;
                                e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),
                                e.params.centeredSlides && e.params.cssMode && (p -= t[0].swiperSlideOffset);
                                let u = e.params.cssMode ? -p - e.translate : -p
                                    , h = 0;
                                const m = -100 * Math.abs(c);
                                let f = 1
                                    , g = -2 * c
                                    , v = 8 - .75 * Math.abs(c);
                                const w = (l === s || l === s - 1) && c > 0 && c < 1 && (r || e.params.cssMode) && n < i
                                    , b = (l === s || l === s + 1) && c < 0 && c > -1 && (r || e.params.cssMode) && n > i;
                                if (w || b) {
                                    const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                                    g += -28 * c * e,
                                        f += -.5 * e,
                                        v += 96 * e,
                                        h = -25 * e * Math.abs(c) + "%"
                                }
                                if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`,
                                    !e.isHorizontal()) {
                                    const e = h;
                                    h = u,
                                        u = e
                                }
                                const x = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)})\n      `;
                                if (a.slideShadows) {
                                    let e = o.find(".swiper-slide-shadow");
                                    0 === e.length && (e = Z(a, o)),
                                    e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                                }
                                o[0].style.zIndex = -Math.abs(Math.round(d)) + t.length;
                                U(a, o).transform(x)
                            }
                        }
                        ,
                        setTransition: t => {
                            const {transformEl: s} = e.params.cardsEffect;
                            (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t),
                                K({
                                    swiper: e,
                                    duration: t,
                                    transformEl: s
                                })
                        }
                        ,
                        perspective: () => !0,
                        overwriteParams: () => ({
                            watchSlidesProgress: !0,
                            virtualTranslate: !e.params.cssMode
                        })
                    })
            }
        ];
        return H.use(J),
            H
    }
));
// Swiper 7.0.8 js end

// gsap 3.7.1 js start
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype),
            (t.prototype.constructor = t).__proto__ = e
    }
    function _assertThisInitialized(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function o(t) {
        return "string" == typeof t
    }
    function p(t) {
        return "function" == typeof t
    }
    function q(t) {
        return "number" == typeof t
    }
    function r(t) {
        return void 0 === t
    }
    function s(t) {
        return "object" == typeof t
    }
    function t(t) {
        return !1 !== t
    }
    function u() {
        return "undefined" != typeof window
    }
    function v(t) {
        return p(t) || o(t)
    }
    function M(t) {
        return (h = mt(t, ot)) && oe
    }
    function N(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }
    function O(t, e) {
        return !e && console.warn(t)
    }
    function P(t, e) {
        return t && (ot[t] = e) && h && (h[t] = e) || ot
    }
    function Q() {
        return 0
    }
    function $(t) {
        var e, r, i = t[0];
        if (s(i) || p(i) || (t = [t]),
            !(e = (i._gsap || {}).harness)) {
            for (r = pt.length; r-- && !pt[r].targetTest(i); )
                ;
            e = pt[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r],e))) || t.splice(r, 1);
        return t
    }
    function _(t) {
        return t._gsap || $(xt(t))[0]._gsap
    }
    function aa(t, e, i) {
        return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i
    }
    function ba(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }
    function ca(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function da(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
            ;
        return i < r
    }
    function ea() {
        var t, e, r = ht.length, i = ht.slice(0);
        for (lt = {},
                 t = ht.length = 0; t < r; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }
    function fa(t, e, r, i) {
        ht.length && ea(),
            t.render(e, r, i),
        ht.length && ea()
    }
    function ga(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t
    }
    function ha(t) {
        return t
    }
    function ia(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }
    function ja(t, e) {
        for (var r in e)
            r in t || "duration" === r || "ease" === r || (t[r] = e[r])
    }
    function la(t, e) {
        for (var r in e)
            "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? la(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }
    function ma(t, e) {
        var r, i = {};
        for (r in t)
            r in e || (i[r] = t[r]);
        return i
    }
    function na(e) {
        var r = e.parent || R
            , i = e.keyframes ? ja : ia;
        if (t(e.inherit))
            for (; r; )
                i(e, r.vars.defaults),
                    r = r.parent || r._dp;
        return e
    }
    function qa(t, e, r, i) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var n = e._prev
            , a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a),
            a ? a._prev = n : t[i] === e && (t[i] = n),
            e._next = e._prev = e.parent = null
    }
    function ra(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
            t._act = 0
    }
    function sa(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; )
                r._dirty = 1,
                    r = r.parent;
        return t
    }
    function va(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }
    function xa(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }
    function ya(t) {
        return t._end = ca(t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0))
    }
    function za(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ca(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
            ya(t),
        r._dirty || sa(r, t)),
            t
    }
    function Aa(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = xa(t.rawTime(), e),
        (!e._dur || Tt(0, e.totalDuration(), r) - e._tTime > U) && e.render(r, !0)),
        sa(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    0 <= r.rawTime() && r.totalTime(r._tTime),
                        r = r._dp;
            t._zTime = -U
        }
    }
    function Ba(t, e, r, i) {
        return e.parent && ra(e),
            e._start = ca((q(r) ? r : r || t !== R ? bt(t, r, e) : t._time) + e._delay),
            e._end = ca(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            function _addLinkedListItem(t, e, r, i, n) {
                void 0 === r && (r = "_first"),
                void 0 === i && (i = "_last");
                var a, s = t[i];
                if (n)
                    for (a = e[n]; s && s[n] > a; )
                        s = s._prev;
                s ? (e._next = s._next,
                    s._next = e) : (e._next = t[r],
                    t[r] = e),
                    e._next ? e._next._prev = e : t[i] = e,
                    e._prev = s,
                    e.parent = e._dp = t
            }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        vt(e) || (t._recent = e),
        i || Aa(t, e),
            t
    }
    function Ca(t, e) {
        return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }
    function Da(t, e, r, i) {
        return Ut(t, e),
            t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== St.frame ? (ht.push(t),
                t._lazy = [e, i],
                1) : void 0 : 1
    }
    function Ia(t, e, r, i) {
        var n = t._repeat
            , a = ca(e) || 0
            , s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur),
            t._dur = a,
            t._tDur = n ? n < 0 ? 1e10 : ca(a * (n + 1) + t._rDelay * n) : a,
            s && !i ? za(t, t._tTime = t._tDur * s) : t.parent && ya(t),
        r || sa(t.parent, t),
            t
    }
    function Ja(t) {
        return t instanceof qt ? sa(t) : Ia(t, t._dur)
    }
    function Ma(e, r, i) {
        var n, a, s = q(r[1]), o = (s ? 2 : 1) + (e < 2 ? 0 : 1), u = r[o];
        if (s && (u.duration = r[1]),
            u.parent = i,
            e) {
            for (n = u,
                     a = i; a && !("immediateRender"in n); )
                n = a.vars.defaults || {},
                    a = t(a.vars.inherit) && a.parent;
            u.immediateRender = t(n.immediateRender),
                e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new Qt(r[0],u,r[1 + o])
    }
    function Na(t, e) {
        return t || 0 === t ? e(t) : e
    }
    function Pa(t) {
        if ("string" != typeof t)
            return "";
        var e = st.exec(t);
        return e ? t.substr(e.index + e[0].length) : ""
    }
    function Sa(t, e) {
        return t && s(t) && "length"in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i
    }
    function Wa(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }
    function Xa(t) {
        if (p(t))
            return t;
        var _ = s(t) ? t : {
            each: t
        }
            , m = Ft(_.ease)
            , g = _.from || 0
            , v = parseFloat(_.base) || 0
            , y = {}
            , e = 0 < g && g < 1
            , b = isNaN(g) || e
            , T = _.axis
            , w = g
            , x = g;
        return o(g) ? w = x = {
            center: .5,
            edges: .5,
            end: 1
        }[g] || 0 : !e && b && (w = g[0],
            x = g[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = (r || _).length, c = y[d];
                if (!c) {
                    if (!(f = "auto" === _.grid ? 0 : (_.grid || [1, X])[1])) {
                        for (h = -X; h < (h = r[f++].getBoundingClientRect().left) && f < d; )
                            ;
                        f--
                    }
                    for (c = y[d] = [],
                             i = b ? Math.min(f, d) * w - .5 : g % f,
                             n = b ? d * x / f - .5 : g / f | 0,
                             l = X,
                             u = h = 0; u < d; u++)
                        a = u % f - i,
                            s = n - (u / f | 0),
                            c[u] = o = T ? Math.abs("y" === T ? s : a) : G(a * a + s * s),
                        h < o && (h = o),
                        o < l && (l = o);
                    "random" === g && Wa(c),
                        c.max = h - l,
                        c.min = l,
                        c.v = d = (parseFloat(_.amount) || parseFloat(_.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === g ? -1 : 1),
                        c.b = d < 0 ? v - d : v,
                        c.u = Pa(_.amount || _.each) || 0,
                        m = m && d < 0 ? Bt(m) : m
                }
                return d = (c[t] - c.min) / c.max || 0,
                ca(c.b + (m ? m(d) : d) * c.v) + c.u
            }
    }
    function Ya(r) {
        var i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1;
        return function(t) {
            var e = Math.round(parseFloat(t) / r) * r * i;
            return (e - e % 1) / i + (q(t) ? 0 : Pa(t))
        }
    }
    function Za(u, t) {
        var h, l, e = H(u);
        return !e && s(u) && (h = e = u.radius || X,
            u.values ? (u = xt(u.values),
            (l = !q(u[0])) && (h *= h)) : u = Ya(u.increment)),
            Na(t, e ? p(u) ? function(t) {
                        return l = u(t),
                            Math.abs(l - t) <= h ? l : t
                    }
                    : function(t) {
                        for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = X, s = 0, o = u.length; o--; )
                            (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e,
                                s = o);
                        return s = !h || a <= h ? u[s] : t,
                            l || s === t || q(t) ? s : s + Pa(t)
                    }
                : Ya(u))
    }
    function $a(t, e, r, i) {
        return Na(H(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return H(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }
    function cb(e, r, t) {
        return Na(t, function(t) {
            return e[~~r(t)]
        })
    }
    function fb(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
            i = t.indexOf(")", e),
                n = "[" === t.charAt(e + 7),
                r = t.substr(e + 7, i - e - 7).match(n ? at : tt),
                s += t.substr(a, e - a) + $a(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5),
                a = i + 1;
        return s + t.substr(a, t.length - a)
    }
    function ib(t, e, r) {
        var i, n, a, s = t.labels, o = X;
        for (i in s)
            (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i,
                o = n);
        return a
    }
    function kb(t) {
        return ra(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && Pt(t, "onInterrupt"),
            t
    }
    function pb(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * kt + .5 | 0
    }
    function qb(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, c = t ? q(t) ? [t >> 16, t >> 8 & kt, t & kt] : 0 : Mt.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
                Mt[t])
                c = Mt[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
                    return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & kt, c & kt, parseInt(t.substr(7), 16) / 255];
                c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & kt, t & kt]
            } else if ("hsl" === t.substr(0, 3))
                if (c = d = t.match(tt),
                    e) {
                    if (~t.indexOf("="))
                        return c = t.match(et),
                        r && c.length < 4 && (c[3] = 1),
                            c
                } else
                    s = +c[0] % 360 / 360,
                        o = c[1] / 100,
                        i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o),
                    3 < c.length && (c[3] *= 1),
                        c[0] = pb(s + 1 / 3, i, n),
                        c[1] = pb(s, i, n),
                        c[2] = pb(s - 1 / 3, i, n);
            else
                c = t.match(tt) || Mt.transparent;
            c = c.map(Number)
        }
        return e && !d && (i = c[0] / kt,
            n = c[1] / kt,
            a = c[2] / kt,
            u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2,
            h === l ? s = o = 0 : (f = h - l,
                o = .5 < u ? f / (2 - h - l) : f / (h + l),
                s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4,
                s *= 60),
            c[0] = ~~(s + .5),
            c[1] = ~~(100 * o + .5),
            c[2] = ~~(100 * u + .5)),
        r && c.length < 4 && (c[3] = 1),
            c
    }
    function rb(t) {
        var r = []
            , i = []
            , n = -1;
        return t.split(At).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e),
                i.push(n += e.length + 1)
        }),
            r.c = i,
            r
    }
    function sb(t, e, r) {
        var i, n, a, s, o = "", u = (t + o).match(At), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = qb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        r && (a = rb(t),
        (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(At, "1").split(rt)).length - 1; l < s; l++)
                o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(At)).length - 1; l < s; l++)
                o += n[l] + u[l];
        return o + n[s]
    }
    function vb(t) {
        var e, r = t.join(" ");
        if (At.lastIndex = 0,
            At.test(r))
            return e = Ct.test(r),
                t[1] = sb(t[1], e),
                t[0] = sb(t[0], e, rb(t[1])),
                !0
    }
    function Eb(t) {
        var e = (t + "").split("(")
            , r = zt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)
                r = a[o],
                    e = o !== u - 1 ? r.lastIndexOf(",") : r.length,
                    i = r.substr(0, e),
                    n[s] = isNaN(i) ? i.replace(Et, "").trim() : +i,
                    s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1
                , r = t.indexOf(")")
                , i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(ga)) : zt._CE && It.test(t) ? zt._CE("", t) : r
    }
    function Gb(t, e) {
        for (var r, i = t._first; i; )
            i instanceof qt ? Gb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Gb(i.timeline, e) : (r = i._ease,
                i._ease = i._yEase,
                i._yEase = r,
                i._yoyo = e)),
                i = i._next
    }
    function Ib(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
                return 1 - e(1 - t)
            }
        ),
        void 0 === i && (i = function easeInOut(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            }
        );
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ba(t, function(t) {
            for (var e in zt[t] = ot[t] = a,
                zt[n = t.toLowerCase()] = r,
                a)
                zt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zt[t + "." + e] = a[e]
        }),
            a
    }
    function Jb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }
    function Kb(r, t, e) {
        function Ol(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * J((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1
            , n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1)
            , a = n / V * (Math.asin(1 / i) || 0)
            , s = "out" === r ? Ol : "in" === r ? function(t) {
                return 1 - Ol(1 - t)
            }
            : Jb(Ol);
        return n = V / n,
            s.config = function(t, e) {
                return Kb(r, t, e)
            }
            ,
            s
    }
    function Lb(e, r) {
        function Wl(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Wl : "in" === e ? function(t) {
                return 1 - Wl(1 - t)
            }
            : Jb(Wl);
        return t.config = function(t) {
            return Lb(e, t)
        }
            ,
            t
    }
    var F, R, i, n, a, h, l, f, d, c, m, g, y, b, T, w, x, k, A, C, S, D, z, I, E, B, Y = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, L = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, X = 1e8, U = 1 / X, V = 2 * Math.PI, j = V / 4, W = 0, G = Math.sqrt, K = Math.cos, J = Math.sin, Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
        , H = Array.isArray, tt = /(?:-?\.?\d|\.)+/gi, et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, nt = /[+-]=-?[.\d]+/, at = /[^,'"\[\]\s]+/gi, st = /[\d.+\-=]+(?:e[-+]\d*)*/i, ot = {}, ut = {}, ht = [], lt = {}, ft = {}, dt = {}, ct = 30, pt = [], _t = "", mt = function _merge(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, gt = function _animationCycle(t, e) {
        var r = Math.floor(t /= e);
        return t && r === t ? r - 1 : r
    }, vt = function _isFromOrFromStart(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    }, yt = {
        _start: 0,
        endTime: Q,
        totalDuration: Q
    }, bt = function _parsePosition(t, e, r) {
        var i, n, a, s = t.labels, u = t._recent || yt, h = t.duration() >= X ? u.endTime(!1) : t._dur;
        return o(e) && (isNaN(e) || e in s) ? (n = e.charAt(0),
            a = "%" === e.substr(-1),
            i = e.indexOf("="),
            "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")),
            ("<" === n ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = h),
                s[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)),
            a && r && (n = n / 100 * (H(r) ? r[0] : r).totalDuration()),
                1 < i ? _parsePosition(t, e.substr(0, i - 1), r) + n : h + n)) : null == e ? h : +e
    }, Tt = function _clamp(t, e, r) {
        return r < t ? t : e < r ? e : r
    }, wt = [].slice, xt = function toArray(t, e, r) {
        return !o(t) || r || !n && Dt() ? H(t) ? function _flatten(t, e, r) {
            return void 0 === r && (r = []),
            t.forEach(function(t) {
                return o(t) && !e || Sa(t, 1) ? r.push.apply(r, xt(t)) : r.push(t)
            }) || r
        }(t, r) : Sa(t) ? wt.call(t, 0) : t ? [t] : [] : wt.call((e || a).querySelectorAll(t), 0)
    }, Ot = function mapRange(e, t, r, i, n) {
        var a = t - e
            , s = i - r;
        return Na(n, function(t) {
            return r + ((t - e) / a * s || 0)
        })
    }, Pt = function _callback(t, e, r) {
        var i, n, a = t.vars, s = a[e];
        if (s)
            return i = a[e + "Params"],
                n = a.callbackScope || t,
            r && ht.length && ea(),
                i ? s.apply(n, i) : s.call(n)
    }, kt = 255, Mt = {
        aqua: [0, kt, kt],
        lime: [0, kt, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, kt],
        navy: [0, 0, 128],
        white: [kt, kt, kt],
        olive: [128, 128, 0],
        yellow: [kt, kt, 0],
        orange: [kt, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [kt, 0, 0],
        pink: [kt, 192, 203],
        cyan: [0, kt, kt],
        transparent: [kt, kt, kt, 0]
    }, At = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in Mt)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), Ct = /hsl[a]?\(/, St = (x = Date.now,
        k = 500,
        A = 33,
        C = x(),
        S = C,
        z = D = 1e3 / 240,
        b = {
            time: 0,
            frame: 0,
            tick: function tick() {
                Kk(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return T / (1e3 / (t || 60))
            },
            wake: function wake() {
                l && (!n && u() && (i = n = window,
                    a = i.document || {},
                    ot.gsap = oe,
                    (i.gsapVersions || (i.gsapVersions = [])).push(oe.version),
                    M(h || i.GreenSockGlobals || !i.gsap && i || {}),
                    y = i.requestAnimationFrame),
                m && b.sleep(),
                    g = y || function(t) {
                        return setTimeout(t, z - 1e3 * b.time + 1 | 0)
                    }
                    ,
                    c = 1,
                    Kk(2))
            },
            sleep: function sleep() {
                (y ? i.cancelAnimationFrame : clearTimeout)(m),
                    c = 0,
                    g = Q
            },
            lagSmoothing: function lagSmoothing(t, e) {
                k = t || 1e8,
                    A = Math.min(e, k, 0)
            },
            fps: function fps(t) {
                D = 1e3 / (t || 240),
                    z = 1e3 * b.time + D
            },
            add: function add(t) {
                I.indexOf(t) < 0 && I.push(t),
                    Dt()
            },
            remove: function remove(t) {
                var e;
                ~(e = I.indexOf(t)) && I.splice(e, 1) && e <= w && w--
            },
            _listeners: I = []
        }), Dt = function _wake() {
        return !c && St.wake()
    }, zt = {}, It = /^[\d.\-M][\d.\-,\s]/, Et = /["']/g, Bt = function _invertEase(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Ft = function _parseEase(t, e) {
        return t && (p(t) ? t : zt[t] || Eb(t)) || e
    };
    function Kk(t) {
        var e, r, i, n, a = x() - S, s = !0 === t;
        if (k < a && (C += a - A),
        (0 < (e = (i = (S += a) - C) - z) || s) && (n = ++b.frame,
            T = i - 1e3 * b.time,
            b.time = i /= 1e3,
            z += e + (D <= e ? 4 : D - e),
            r = 1),
        s || (m = g(Kk)),
            r)
            for (w = 0; w < I.length; w++)
                I[w](i, T, n, t)
    }
    function lm(t) {
        return t < B ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / 2.75) * t + .9375 : E * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ba("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Ib(t + ",Power" + (r - 1), e ? function(t) {
                    return Math.pow(t, r)
                }
                : function(t) {
                    return t
                }
            , function(t) {
                return 1 - Math.pow(1 - t, r)
            }, function(t) {
                return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
            })
    }),
        zt.Linear.easeNone = zt.none = zt.Linear.easeIn,
        Ib("Elastic", Kb("in"), Kb("out"), Kb()),
        E = 7.5625,
        B = 1 / 2.75,
        Ib("Bounce", function(t) {
            return 1 - lm(1 - t)
        }, lm),
        Ib("Expo", function(t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0
        }),
        Ib("Circ", function(t) {
            return -(G(1 - t * t) - 1)
        }),
        Ib("Sine", function(t) {
            return 1 === t ? 1 : 1 - K(t * j)
        }),
        Ib("Back", Lb("in"), Lb("out"), Lb()),
        zt.SteppedEase = zt.steps = ot.SteppedEase = {
            config: function config(t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t
                    , i = t + (e ? 0 : 1)
                    , n = e ? 1 : 0;
                return function(t) {
                    return ((i * Tt(0, .99999999, t) | 0) + n) * r
                }
            }
        },
        L.ease = zt["quad.out"],
        ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
            return _t += t + "," + t + "Params,"
        });
    var Rt, Lt = function GSCache(t, e) {
        this.id = W++,
            (t._gsap = this).target = t,
            this.harness = e,
            this.get = e ? e.get : aa,
            this.set = e ? e.getSetter : Jt
    }, Nt = ((Rt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            this._delay = t,
            this) : this._delay
    }
        ,
        Rt.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        ,
        Rt.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0,
                Ia(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        Rt.totalTime = function totalTime(t, e) {
            if (Dt(),
                !arguments.length)
                return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (za(this, t),
                     !r._dp || r.parent || Aa(r, this); r.parent; )
                    r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                        r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ba(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === U || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
                fa(this, t, e)),
                this
        }
        ,
        Rt.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + va(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }
        ,
        Rt.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        Rt.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + va(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        Rt.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1
        }
        ,
        Rt.timeScale = function timeScale(t) {
            if (!arguments.length)
                return this._rts === -U ? 0 : this._rts;
            if (this._rts === t)
                return this;
            var e = this.parent && this._ts ? xa(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0,
                this._ts = this._ps || t === -U ? 0 : this._rts,
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent; )
                        e._dirty = 1,
                            e.totalDuration(),
                            e = e.parent;
                    return t
                }(this.totalTime(Tt(-this._delay, this._tDur, e), !0))
        }
        ,
        Rt.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                this._ts = this._act = 0) : (Dt(),
                this._ts = this._rts,
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== U && (this._tTime -= U)))),
                this) : this._ps
        }
        ,
        Rt.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || Ba(e, this, t - this._delay),
                    this
            }
            return this._start
        }
        ,
        Rt.endTime = function endTime(e) {
            return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }
        ,
        Rt.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? xa(e.rawTime(t), this) : this._tTime : this._tTime
        }
        ,
        Rt.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                r = e._start + r / (e._ts || 1),
                    e = e._dp;
            return r
        }
        ,
        Rt.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
                Ja(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        ,
        Rt.repeatDelay = function repeatDelay(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t,
                    Ja(this),
                    e ? this.time(e) : this
            }
            return this._rDelay
        }
        ,
        Rt.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t,
                this) : this._yoyo
        }
        ,
        Rt.seek = function seek(e, r) {
            return this.totalTime(bt(this, e), t(r))
        }
        ,
        Rt.restart = function restart(e, r) {
            return this.play().totalTime(e ? -this._delay : 0, t(r))
        }
        ,
        Rt.play = function play(t, e) {
            return null != t && this.seek(t, e),
                this.reversed(!1).paused(!1)
        }
        ,
        Rt.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
        }
        ,
        Rt.pause = function pause(t, e) {
            return null != t && this.seek(t, e),
                this.paused(!0)
        }
        ,
        Rt.resume = function resume() {
            return this.paused(!1)
        }
        ,
        Rt.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -U : 0)),
                this) : this._rts < 0
        }
        ,
        Rt.invalidate = function invalidate() {
            return this._initted = this._act = 0,
                this._zTime = -U,
                this
        }
        ,
        Rt.isActive = function isActive() {
            var t, e = this.parent || this._dp, r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - U))
        }
        ,
        Rt.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e,
            r && (i[t + "Params"] = r),
            "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
                this) : i[t]
        }
        ,
        Rt.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                    function Cn() {
                        var t = i.then;
                        i.then = null,
                        p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
                            e(r),
                            i.then = t
                    }
                    var r = p(t) ? t : ha;
                    i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Cn() : i._prom = Cn
                }
            )
        }
        ,
        Rt.kill = function kill() {
            kb(this)
        }
        ,
        Animation);
    function Animation(t) {
        this.vars = t,
            this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            Ia(this, +t.duration, 1, 1),
            this.data = t.data,
        c || St.wake()
    }
    ia(Nt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -U,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var qt = function(n) {
        function Timeline(e, r) {
            var i;
            return void 0 === e && (e = {}),
                (i = n.call(this, e) || this).labels = {},
                i.smoothChildTiming = !!e.smoothChildTiming,
                i.autoRemoveChildren = !!e.autoRemoveChildren,
                i._sort = t(e.sortChildren),
            R && Ba(e.parent || R, _assertThisInitialized(i), r),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && Ca(_assertThisInitialized(i), e.scrollTrigger),
                i
        }
        _inheritsLoose(Timeline, n);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Ma(0, arguments, this),
                this
        }
            ,
            e.from = function from(t, e, r) {
                return Ma(1, arguments, this),
                    this
            }
            ,
            e.fromTo = function fromTo(t, e, r, i) {
                return Ma(2, arguments, this),
                    this
            }
            ,
            e.set = function set(t, e, r) {
                return e.duration = 0,
                    e.parent = this,
                na(e).repeatDelay || (e.repeat = 0),
                    e.immediateRender = !!e.immediateRender,
                    new Qt(t,e,bt(this, r),1),
                    this
            }
            ,
            e.call = function call(t, e, r) {
                return Ba(this, Qt.delayedCall(0, t, e), r)
            }
            ,
            e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
                return r.duration = e,
                    r.stagger = r.stagger || i,
                    r.onComplete = a,
                    r.onCompleteParams = s,
                    r.parent = this,
                    new Qt(t,r,bt(this, n)),
                    this
            }
            ,
            e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
                return i.runBackwards = 1,
                    na(i).immediateRender = t(i.immediateRender),
                    this.staggerTo(e, r, i, n, a, s, o)
            }
            ,
            e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
                return n.startAt = i,
                    na(n).immediateRender = t(n.immediateRender),
                    this.staggerTo(e, r, n, a, s, o, u)
            }
            ,
            e.render = function render(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d, c, p, _ = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = this !== R && m - U < t && 0 <= t ? m : t < U ? 0 : t, y = this._zTime < 0 != t < 0 && (this._initted || !g);
                if (v !== this._tTime || r || y) {
                    if (_ !== this._time && g && (v += this._time - _,
                        t += this._time - _),
                        i = v,
                        f = this._start,
                        u = !(l = this._ts),
                    y && (g || (_ = this._zTime),
                    !t && e || (this._zTime = t)),
                        this._repeat) {
                        if (c = this._yoyo,
                            o = g + this._rDelay,
                        this._repeat < -1 && t < 0)
                            return this.totalTime(100 * o + t, e, r);
                        if (i = ca(v % o),
                            v === m ? (s = this._repeat,
                                i = g) : ((s = ~~(v / o)) && s === v / o && (i = g,
                                s--),
                            g < i && (i = g)),
                            d = gt(this._tTime, o),
                        !_ && this._tTime && d !== s && (d = s),
                        c && 1 & s && (i = g - i,
                            p = 1),
                        s !== d && !this._lock) {
                            var b = c && 1 & d
                                , T = b === (c && 1 & s);
                            if (s < d && (b = !b),
                                _ = b ? 0 : g,
                                this._lock = 1,
                                this.render(_ || (p ? 0 : ca(s * o)), e, !g)._lock = 0,
                                this._tTime = v,
                            !e && this.parent && Pt(this, "onRepeat"),
                            this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
                            _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                                return this;
                            if (g = this._dur,
                                m = this._tDur,
                            T && (this._lock = 2,
                                _ = b ? g : -1e-4,
                                this.render(_, !0),
                            this.vars.repeatRefresh && !p && this.invalidate()),
                                this._lock = 0,
                            !this._ts && !u)
                                return this;
                            Gb(this, p)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r; ) {
                                if (!i._dur && "isPause" === i.data && i._start > e)
                                    return i;
                                i = i._next
                            }
                        else
                            for (i = t._last; i && i._start >= r; ) {
                                if (!i._dur && "isPause" === i.data && i._start < e)
                                    return i;
                                i = i._prev
                            }
                    }(this, ca(_), ca(i))) && (v -= i - (i = h._start)),
                        this._tTime = v,
                        this._time = i,
                        this._act = !l,
                    this._initted || (this._onUpdate = this.vars.onUpdate,
                        this._initted = 1,
                        this._zTime = t,
                        _ = 0),
                    !_ && i && !e && (Pt(this, "onStart"),
                    this._tTime !== v))
                        return this;
                    if (_ <= i && 0 <= t)
                        for (n = this._first; n; ) {
                            if (a = n._next,
                            (n._act || i >= n._start) && n._ts && h !== n) {
                                if (n.parent !== this)
                                    return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r),
                                i !== this._time || !this._ts && !u) {
                                    h = 0,
                                    a && (v += this._zTime = -U);
                                    break
                                }
                            }
                            n = a
                        }
                    else {
                        n = this._last;
                        for (var w = t < 0 ? t : i; n; ) {
                            if (a = n._prev,
                            (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this)
                                    return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r),
                                i !== this._time || !this._ts && !u) {
                                    h = 0,
                                    a && (v += this._zTime = w ? -U : U);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                    if (h && !e && (this.pause(),
                        h.render(_ <= i ? 0 : -U)._zTime = _ <= i ? 1 : -1,
                        this._ts))
                        return this._start = f,
                            ya(this),
                            this.render(t, e, r);
                    this._onUpdate && !e && Pt(this, "onUpdate", !0),
                    (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || ra(this, 1),
                    e || t < 0 && !_ || !v && !_ && m || (Pt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0),
                    !this._prom || v < m && 0 < this.timeScale() || this._prom())))
                }
                return this
            }
            ,
            e.add = function add(t, e) {
                var r = this;
                if (q(e) || (e = bt(this, e, t)),
                    !(t instanceof Nt)) {
                    if (H(t))
                        return t.forEach(function(t) {
                            return r.add(t, e)
                        }),
                            this;
                    if (o(t))
                        return this.addLabel(t, e);
                    if (!p(t))
                        return this;
                    t = Qt.delayedCall(0, t)
                }
                return this !== t ? Ba(this, t, e) : this
            }
            ,
            e.getChildren = function getChildren(t, e, r, i) {
                void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === r && (r = !0),
                void 0 === i && (i = -X);
                for (var n = [], a = this._first; a; )
                    a._start >= i && (a instanceof Qt ? e && n.push(a) : (r && n.push(a),
                    t && n.push.apply(n, a.getChildren(!0, e, r)))),
                        a = a._next;
                return n
            }
            ,
            e.getById = function getById(t) {
                for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                    if (e[r].vars.id === t)
                        return e[r]
            }
            ,
            e.remove = function remove(t) {
                return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (qa(this, t),
                t === this._recent && (this._recent = this._last),
                    sa(this))
            }
            ,
            e.totalTime = function totalTime(t, e) {
                return arguments.length ? (this._forcing = 1,
                !this._dp && this._ts && (this._start = ca(St.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
                    n.prototype.totalTime.call(this, t, e),
                    this._forcing = 0,
                    this) : this._tTime
            }
            ,
            e.addLabel = function addLabel(t, e) {
                return this.labels[t] = bt(this, e),
                    this
            }
            ,
            e.removeLabel = function removeLabel(t) {
                return delete this.labels[t],
                    this
            }
            ,
            e.addPause = function addPause(t, e, r) {
                var i = Qt.delayedCall(0, e || Q, r);
                return i.data = "isPause",
                    this._hasPause = 1,
                    Ba(this, i, bt(this, t))
            }
            ,
            e.removePause = function removePause(t) {
                var e = this._first;
                for (t = bt(this, t); e; )
                    e._start === t && "isPause" === e.data && ra(e),
                        e = e._next
            }
            ,
            e.killTweensOf = function killTweensOf(t, e, r) {
                for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                    Yt !== i[n] && i[n].kill(t, e);
                return this
            }
            ,
            e.getTweensOf = function getTweensOf(t, e) {
                for (var r, i = [], n = xt(t), a = this._first, s = q(e); a; )
                    a instanceof Qt ? da(a._targets, n) && (s ? (!Yt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
                        a = a._next;
                return i
            }
            ,
            e.tweenTo = function tweenTo(t, e) {
                e = e || {};
                var r, i = this, n = bt(i, t), a = e.startAt, s = e.onStart, o = e.onStartParams, u = e.immediateRender, h = Qt.to(i, ia({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale()) || U,
                    onStart: function onStart() {
                        if (i.pause(),
                            !r) {
                            var t = e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Ia(h, t, 0, 1).render(h._time, !0, !0),
                                r = 1
                        }
                        s && s.apply(h, o || [])
                    }
                }, e));
                return u ? h.render(0) : h
            }
            ,
            e.tweenFromTo = function tweenFromTo(t, e, r) {
                return this.tweenTo(e, ia({
                    startAt: {
                        time: bt(this, t)
                    }
                }, r))
            }
            ,
            e.recent = function recent() {
                return this._recent
            }
            ,
            e.nextLabel = function nextLabel(t) {
                return void 0 === t && (t = this._time),
                    ib(this, bt(this, t))
            }
            ,
            e.previousLabel = function previousLabel(t) {
                return void 0 === t && (t = this._time),
                    ib(this, bt(this, t), 1)
            }
            ,
            e.currentLabel = function currentLabel(t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + U)
            }
            ,
            e.shiftChildren = function shiftChildren(t, e, r) {
                void 0 === r && (r = 0);
                for (var i, n = this._first, a = this.labels; n; )
                    n._start >= r && (n._start += t,
                        n._end += t),
                        n = n._next;
                if (e)
                    for (i in a)
                        a[i] >= r && (a[i] += t);
                return sa(this)
            }
            ,
            e.invalidate = function invalidate() {
                var t = this._first;
                for (this._lock = 0; t; )
                    t.invalidate(),
                        t = t._next;
                return n.prototype.invalidate.call(this)
            }
            ,
            e.clear = function clear(t) {
                void 0 === t && (t = !0);
                for (var e, r = this._first; r; )
                    e = r._next,
                        this.remove(r),
                        r = e;
                return this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                    sa(this)
            }
            ,
            e.totalDuration = function totalDuration(t) {
                var e, r, i, n = 0, a = this, s = a._last, o = X;
                if (arguments.length)
                    return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
                if (a._dirty) {
                    for (i = a.parent; s; )
                        e = s._prev,
                        s._dirty && s.totalDuration(),
                            o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1,
                                Ba(a, s, r - s._delay, 1)._lock = 0) : o = r,
                        r < 0 && s._ts && (n -= r,
                        (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts,
                            a._time -= r,
                            a._tTime -= r),
                            a.shiftChildren(-r, !1, -Infinity),
                            o = 0),
                        s._end > n && s._ts && (n = s._end),
                            s = e;
                    Ia(a, a === R && a._time > n ? a._time : n, 1, 1),
                        a._dirty = 0
                }
                return a._tDur
            }
            ,
            Timeline.updateRoot = function updateRoot(t) {
                if (R._ts && (fa(R, xa(t, R)),
                    f = St.frame),
                St.frame >= ct) {
                    ct += Y.autoSleep || 120;
                    var e = R._first;
                    if ((!e || !e._ts) && Y.autoSleep && St._listeners.length < 2) {
                        for (; e && !e._ts; )
                            e = e._next;
                        e || St.sleep()
                    }
                }
            }
            ,
            Timeline
    }(Nt);
    ia(qt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function Sb(t, e, r, i, n, a) {
        var u, h, l, f;
        if (ft[t] && !1 !== (u = new ft[t]).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) {
            if (p(t) && (t = Vt(t, n, e, r, i)),
            !s(t) || t.style && t.nodeType || H(t) || Z(t))
                return o(t) ? Vt(t, n, e, r, i) : t;
            var a, u = {};
            for (a in t)
                u[a] = Vt(t[a], n, e, r, i);
            return u
        }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new ae(r._pt,n,t,0,1,u.render,u,0,u.priority),
        r !== d))
            for (l = r._ptLookup[r._targets.indexOf(n)],
                     f = u._props.length; f--; )
                l[u._props[f]] = h;
        return u
    }
    var Yt, Xt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
        p(i) && (i = i(n || 0, t, a));
        var l, f = t[e], d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f, c = p(f) ? h ? $t : Kt : Gt;
        if (o(i) && (~i.indexOf("random(") && (i = fb(i)),
        "=" === i.charAt(1) && (!(l = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Pa(d) || 0)) && 0 !== l || (i = l))),
        d !== i)
            return isNaN(d * i) || "" === i ? (f || e in t || N(e, i),
                function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                    var o, u, h, l, f, d, c, p, _ = new ae(this._pt,t,e,0,1,te,null,n), m = 0, g = 0;
                    for (_.b = r,
                             _.e = i,
                             r += "",
                         (c = ~(i += "").indexOf("random(")) && (i = fb(i)),
                         a && (a(p = [r, i], t, e),
                             r = p[0],
                             i = p[1]),
                             u = r.match(it) || []; o = it.exec(i); )
                        l = o[0],
                            f = i.substring(m, o.index),
                            h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1),
                        l !== u[g++] && (d = parseFloat(u[g - 1]) || 0,
                            _._pt = {
                                _next: _._pt,
                                p: f || 1 === g ? f : ",",
                                s: d,
                                c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                                m: h && h < 4 ? Math.round : 0
                            },
                            m = it.lastIndex);
                    return _.c = m < i.length ? i.substring(m, i.length) : "",
                        _.fp = s,
                    (nt.test(i) || c) && (_.e = 0),
                        this._pt = _
                }
                    .call(this, t, e, d, i, c, u || Y.stringFilter, h)) : (l = new ae(this._pt,t,e,+d || 0,i - (d || 0),"boolean" == typeof f ? Ht : Zt,0,c),
            h && (l.fp = h),
            s && l.modifier(s, this, t),
                this._pt = l)
    }, Ut = function _initTween(e, r) {
        var i, n, a, s, o, u, h, l, f, d, c, p, m, g = e.vars, v = g.ease, y = g.startAt, b = g.immediateRender, T = g.lazy, w = g.onUpdate, x = g.onUpdateParams, O = g.callbackScope, P = g.runBackwards, k = g.yoyoEase, M = g.keyframes, A = g.autoRevert, C = e._dur, S = e._startAt, D = e._targets, z = e.parent, I = z && "nested" === z.data ? z.parent._targets : D, E = "auto" === e._overwrite && !F, B = e.timeline;
        if (!B || M && v || (v = "none"),
            e._ease = Ft(v, L.ease),
            e._yEase = k ? Bt(Ft(!0 === k ? v : k, L.ease)) : 0,
        k && e._yoyo && !e._repeat && (k = e._yEase,
            e._yEase = e._ease,
            e._ease = k),
            e._from = !B && !!g.runBackwards,
            !B) {
            if (p = (l = D[0] ? _(D[0]).harness : 0) && g[l.prop],
                i = ma(g, ut),
            S && S.render(-1, !0).kill(),
                y)
                if (ra(e._startAt = Qt.set(D, ia({
                    data: "isStart",
                    overwrite: !1,
                    parent: z,
                    immediateRender: !0,
                    lazy: t(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: w,
                    onUpdateParams: x,
                    callbackScope: O,
                    stagger: 0
                }, y))),
                r < 0 && !b && !A && e._startAt.render(-1, !0),
                    b) {
                    if (0 < r && !A && (e._startAt = 0),
                    C && r <= 0)
                        return void (r && (e._zTime = r))
                } else
                    !1 === A && (e._startAt = 0);
            else if (P && C)
                if (S)
                    A || (e._startAt = 0);
                else if (r && (b = !1),
                    a = ia({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: b && t(T),
                        immediateRender: b,
                        stagger: 0,
                        parent: z
                    }, i),
                p && (a[l.prop] = p),
                    ra(e._startAt = Qt.set(D, a)),
                r < 0 && e._startAt.render(-1, !0),
                    b) {
                    if (!r)
                        return
                } else
                    _initTween(e._startAt, U);
            for (e._pt = 0,
                     T = C && t(T) || T && !C,
                     n = 0; n < D.length; n++) {
                if (h = (o = D[n])._gsap || $(D)[n]._gsap,
                    e._ptLookup[n] = d = {},
                lt[h.id] && ht.length && ea(),
                    c = I === D ? n : I.indexOf(o),
                l && !1 !== (f = new l).init(o, p || i, e, c, I) && (e._pt = s = new ae(e._pt,o,f.name,0,1,f.render,f,0,f.priority),
                    f._props.forEach(function(t) {
                        d[t] = s
                    }),
                f.priority && (u = 1)),
                !l || p)
                    for (a in i)
                        ft[a] && (f = Sb(a, i, e, c, o, I)) ? f.priority && (u = 1) : d[a] = s = Xt.call(e, o, a, "get", i[a], c, I, 0, g.stringFilter);
                e._op && e._op[n] && e.kill(o, e._op[n]),
                E && e._pt && (Yt = e,
                    R.killTweensOf(o, d, e.globalTime(0)),
                    m = !e.parent,
                    Yt = 0),
                e._pt && T && (lt[h.id] = 1)
            }
            u && ne(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = w,
            e._initted = (!e._op || e._pt) && !m
    }, Vt = function _parseFuncOrString(t, e, r, i, n) {
        return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? fb(t) : t
    }, jt = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Wt = (jt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Qt = function(C) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r,
                r = i,
                i = null);
            var o, u, h, l, f, d, c, p, _ = (a = C.call(this, n ? r : na(r)) || this).vars, m = _.duration, g = _.delay, y = _.immediateRender, b = _.stagger, T = _.overwrite, w = _.keyframes, x = _.defaults, P = _.scrollTrigger, k = _.yoyoEase, M = r.parent || R, A = (H(e) || Z(e) ? q(e[0]) : "length"in r) ? [e] : xt(e);
            if (a._targets = A.length ? $(A) : O("GSAP target " + e + " not found. https://greensock.com", !Y.nullTargetWarn) || [],
                a._ptLookup = [],
                a._overwrite = T,
            w || b || v(m) || v(g)) {
                if (r = a.vars,
                    (o = a.timeline = new qt({
                        data: "nested",
                        defaults: x || {}
                    })).kill(),
                    o.parent = o._dp = _assertThisInitialized(a),
                    o._start = 0,
                    w)
                    ia(o.vars.defaults, {
                        ease: "none"
                    }),
                        b ? A.forEach(function(r, i) {
                            return w.forEach(function(t, e) {
                                return o.to(r, t, e ? ">" : i * b)
                            })
                        }) : w.forEach(function(t) {
                            return o.to(A, t, ">")
                        });
                else {
                    if (l = A.length,
                        c = b ? Xa(b) : Q,
                        s(b))
                        for (f in b)
                            ~jt.indexOf(f) && ((p = p || {})[f] = b[f]);
                    for (u = 0; u < l; u++) {
                        for (f in h = {},
                            r)
                            Wt.indexOf(f) < 0 && (h[f] = r[f]);
                        h.stagger = 0,
                        k && (h.yoyoEase = k),
                        p && mt(h, p),
                            d = A[u],
                            h.duration = +Vt(m, _assertThisInitialized(a), u, d, A),
                            h.delay = (+Vt(g, _assertThisInitialized(a), u, d, A) || 0) - a._delay,
                        !b && 1 === l && h.delay && (a._delay = g = h.delay,
                            a._start += g,
                            h.delay = 0),
                            o.to(d, h, c(u, d, A))
                    }
                    o.duration() ? m = g = 0 : a.timeline = 0
                }
                m || a.duration(m = o.duration())
            } else
                a.timeline = 0;
            return !0 !== T || F || (Yt = _assertThisInitialized(a),
                R.killTweensOf(A),
                Yt = 0),
                Ba(M, _assertThisInitialized(a), i),
            r.reversed && a.reverse(),
            r.paused && a.paused(!0),
            (y || !m && !w && a._start === ca(M._time) && t(y) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== M.data) && (a._tTime = -U,
                a.render(Math.max(0, -g))),
            P && Ca(_assertThisInitialized(a), P),
                a
        }
        _inheritsLoose(Tween, C);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = this._time, c = this._tDur, p = this._dur, _ = c - U < t && 0 <= t ? c : t < U ? 0 : t;
            if (p) {
                if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = _,
                        l = this.timeline,
                        this._repeat) {
                        if (s = p + this._rDelay,
                        this._repeat < -1 && t < 0)
                            return this.totalTime(100 * s + t, e, r);
                        if (i = ca(_ % s),
                            _ === c ? (a = this._repeat,
                                i = p) : ((a = ~~(_ / s)) && a === _ / s && (i = p,
                                a--),
                            p < i && (i = p)),
                        (u = this._yoyo && 1 & a) && (f = this._yEase,
                            i = p - i),
                            o = gt(this._tTime, s),
                        i === d && !r && this._initted)
                            return this;
                        a !== o && (l && this._yEase && Gb(l, u),
                        !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1,
                            this.render(ca(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Da(this, t < 0 ? t : i, r, e))
                            return this._tTime = 0,
                                this;
                        if (p !== this._dur)
                            return this.render(t, e, r)
                    }
                    if (this._tTime = _,
                        this._time = i,
                    !this._act && this._ts && (this._act = 1,
                        this._lazy = 0),
                        this.ratio = h = (f || this._ease)(i / p),
                    this._from && (this.ratio = h = 1 - h),
                    i && !d && !e && (Pt(this, "onStart"),
                    this._tTime !== _))
                        return this;
                    for (n = this._pt; n; )
                        n.r(h, n.d),
                            n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -U : l._dur * h, e, r) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                        Pt(this, "onUpdate")),
                    this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Pt(this, "onRepeat"),
                    _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    !t && p || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || ra(this, 1),
                    e || t < 0 && !d || !_ && !d || (Pt(this, _ === c ? "onComplete" : "onReverseComplete", !0),
                    !this._prom || _ < c && 0 < this.timeScale() || this._prom()))
                }
            } else
                !function _renderZeroDurationTween(t, e, r, i) {
                    var n, a, s, o = t.ratio, u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !vt(t)) ? 0 : 1, h = t._rDelay, l = 0;
                    if (h && t._repeat && (l = Tt(0, t._tDur, e),
                        a = gt(l, h),
                        s = gt(t._tTime, h),
                    t._yoyo && 1 & a && (u = 1 - u),
                    a !== s && (o = 1 - u,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    u !== o || i || t._zTime === U || !e && t._zTime) {
                        if (!t._initted && Da(t, e, i, r))
                            return;
                        for (s = t._zTime,
                                 t._zTime = e || (r ? U : 0),
                                 r = r || e && !s,
                                 t.ratio = u,
                             t._from && (u = 1 - u),
                                 t._time = 0,
                                 t._tTime = l,
                                 n = t._pt; n; )
                            n.r(u, n.d),
                                n = n._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                        t._onUpdate && !r && Pt(t, "onUpdate"),
                        l && t._repeat && !r && t.parent && Pt(t, "onRepeat"),
                        (e >= t._tDur || e < 0) && t.ratio === u && (u && ra(t, 1),
                        r || (Pt(t, u ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()))
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, r);
            return this
        }
            ,
            e.targets = function targets() {
                return this._targets
            }
            ,
            e.invalidate = function invalidate() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
                    this._ptLookup = [],
                this.timeline && this.timeline.invalidate(),
                    C.prototype.invalidate.call(this)
            }
            ,
            e.kill = function kill(t, e) {
                if (void 0 === e && (e = "all"),
                    !(t || e && "all" !== e))
                    return this._lazy = this._pt = 0,
                        this.parent ? kb(this) : this;
                if (this.timeline) {
                    var r = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Yt && !0 !== Yt.vars.overwrite)._first || kb(this),
                    this.parent && r !== this.timeline.totalDuration() && Ia(this, this._dur * this.timeline._tDur / r, 0, 1),
                        this
                }
                var i, n, a, s, u, h, l, f = this._targets, d = t ? xt(t) : f, c = this._ptLookup, p = this._pt;
                if ((!e || "all" === e) && function _arraysMatch(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
                        ;
                    return r < 0
                }(f, d))
                    return "all" === e && (this._pt = 0),
                        kb(this);
                for (i = this._op = this._op || [],
                     "all" !== e && (o(e) && (u = {},
                         ba(e, function(t) {
                             return u[t] = 1
                         }),
                         e = u),
                         e = function _addAliasesToVars(t, e) {
                             var r, i, n, a, s = t[0] ? _(t[0]).harness : 0, o = s && s.aliases;
                             if (!o)
                                 return e;
                             for (i in r = mt({}, e),
                                 o)
                                 if (i in r)
                                     for (n = (a = o[i].split(",")).length; n--; )
                                         r[a[n]] = r[i];
                             return r
                         }(f, e)),
                         l = f.length; l--; )
                    if (~d.indexOf(f[l]))
                        for (u in n = c[l],
                            "all" === e ? (i[l] = e,
                                s = n,
                                a = {}) : (a = i[l] = i[l] || {},
                                s = e),
                            s)
                            (h = n && n[u]) && ("kill"in h.d && !0 !== h.d.kill(u) || qa(this, h, "_pt"),
                                delete n[u]),
                            "all" !== a && (a[u] = 1);
                return this._initted && !this._pt && p && kb(this),
                    this
            }
            ,
            Tween.to = function to(t, e, r) {
                return new Tween(t,e,r)
            }
            ,
            Tween.from = function from(t, e) {
                return Ma(1, arguments)
            }
            ,
            Tween.delayedCall = function delayedCall(t, e, r, i) {
                return new Tween(e,0,{
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: e,
                    onReverseComplete: e,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }
            ,
            Tween.fromTo = function fromTo(t, e, r) {
                return Ma(2, arguments)
            }
            ,
            Tween.set = function set(t, e) {
                return e.duration = 0,
                e.repeatDelay || (e.repeat = 0),
                    new Tween(t,e)
            }
            ,
            Tween.killTweensOf = function killTweensOf(t, e, r) {
                return R.killTweensOf(t, e, r)
            }
            ,
            Tween
    }(Nt);
    ia(Qt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
        ba("staggerTo,staggerFrom,staggerFromTo", function(r) {
            Qt[r] = function() {
                var t = new qt
                    , e = wt.call(arguments, 0);
                return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0),
                    t[r].apply(t, e)
            }
        });
    function bc(t, e, r) {
        return t.setAttribute(e, r)
    }
    function jc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Gt = function _setterPlain(t, e, r) {
        return t[e] = r
    }
        , Kt = function _setterFunc(t, e, r) {
        return t[e](r)
    }
        , $t = function _setterFuncWithParam(t, e, r, i) {
        return t[e](i.fp, r)
    }
        , Jt = function _getSetter(t, e) {
        return p(t[e]) ? Kt : r(t[e]) && t.setAttribute ? bc : Gt
    }
        , Zt = function _renderPlain(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }
        , Ht = function _renderBoolean(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
        , te = function _renderComplexString(t, e) {
        var r = e._pt
            , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; r; )
                i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i,
                    r = r._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
        , ee = function _renderPropTweens(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
                r = r._next
    }
        , re = function _addPluginModifier(t, e, r, i) {
        for (var n, a = this._pt; a; )
            n = a._next,
            a.p === i && a.modifier(t, e, r),
                a = n
    }
        , ie = function _killPropTweensOf(t) {
        for (var e, r, i = this._pt; i; )
            r = i._next,
                i.p === t && !i.op || i.op === t ? qa(this, i, "_pt") : i.dep || (e = 1),
                i = r;
        return !e
    }
        , ne = function _sortPropTweensByPriority(t) {
        for (var e, r, i, n, a = t._pt; a; ) {
            for (e = a._next,
                     r = i; r && r.pr > a.pr; )
                r = r._next;
            (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a,
                (a._next = r) ? r._prev = a : n = a,
                a = e
        }
        t._pt = i
    }
        , ae = (PropTween.prototype.modifier = function modifier(t, e, r) {
        this.mSet = this.mSet || this.set,
            this.set = jc,
            this.m = t,
            this.mt = r,
            this.tween = e
    }
        ,
        PropTween);
    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e,
            this.s = i,
            this.c = n,
            this.p = r,
            this.r = a || Zt,
            this.d = s || this,
            this.set = o || Gt,
            this.pr = u || 0,
        (this._next = t) && (t._prev = this)
    }
    ba(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1
    }),
        ot.TweenMax = ot.TweenLite = Qt,
        ot.TimelineLite = ot.TimelineMax = qt,
        R = new qt({
            sortChildren: !1,
            defaults: L,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }),
        Y.stringFilter = vb;
    var se = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name
                        , r = p(t)
                        , i = e && !r && t.init ? function() {
                            this._props = []
                        }
                        : t
                        , n = {
                        init: Q,
                        render: ee,
                        add: Xt,
                        kill: ie,
                        modifier: re,
                        rawVars: 0
                    }
                        , a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Jt,
                        aliases: {},
                        register: 0
                    };
                    if (Dt(),
                    t !== i) {
                        if (ft[e])
                            return;
                        ia(i, ia(ma(t, n), a)),
                            mt(i.prototype, mt(n, ma(t, a))),
                            ft[i.prop = e] = i,
                        t.targetTest && (pt.push(i),
                            ut[e] = 1),
                            e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    P(e, i),
                    t.register && t.register(oe, i, ae)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new qt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return R.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, r) {
            o(i) && (i = xt(i)[0]);
            var n = _(i || {}).get
                , a = e ? ha : ga;
            return "native" === e && (e = ""),
                i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function(t, e, r) {
                        return a((ft[t] && ft[t].get || n)(i, t, e, r))
                    }
                    : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = xt(r)).length) {
                var n = r.map(function(t) {
                    return oe.quickSetter(t, e, i)
                })
                    , a = n.length;
                return function(t) {
                    for (var e = a; e--; )
                        n[e](t)
                }
            }
            r = r[0] || {};
            var s = ft[e]
                , o = _(r)
                , u = o.harness && (o.harness.aliases || {})[e] || e
                , h = s ? function(t) {
                    var e = new s;
                    d._pt = 0,
                        e.init(r, i ? t + i : t, d, 0, [r]),
                        e.render(1, e),
                    d._pt && ee(1, d)
                }
                : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        isTweening: function isTweening(t) {
            return 0 < R.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Ft(t.ease, L.ease)),
                la(L, t || {})
        },
        config: function config(t) {
            return la(Y, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name
                , n = t.effect
                , e = t.plugins
                , a = t.defaults
                , r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.")
            }),
                dt[i] = function(t, e, r) {
                    return n(xt(t), ia(e || {}, a), r)
                }
                ,
            r && (qt.prototype[i] = function(t, e, r) {
                    return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r)
                }
            )
        },
        registerEase: function registerEase(t, e) {
            zt[t] = Ft(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Ft(t, e) : zt
        },
        getById: function getById(t) {
            return R.getById(t)
        },
        exportRoot: function exportRoot(e, r) {
            void 0 === e && (e = {});
            var i, n, a = new qt(e);
            for (a.smoothChildTiming = t(e.smoothChildTiming),
                     R.remove(a),
                     a._dp = 0,
                     a._time = a._tTime = R._time,
                     i = R._first; i; )
                n = i._next,
                !r && !i._dur && i instanceof Qt && i.vars.onComplete === i._targets[0] || Ba(a, i, i._start - i._delay),
                    i = n;
            return Ba(R, a, 0),
                a
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return H(e) ? cb(e, wrap(0, e.length), t) : Na(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e
                    , n = 2 * i;
                return H(e) ? cb(e, wrapYoyo(0, e.length - 1), t) : Na(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: Xa,
            random: $a,
            snap: Za,
            normalize: function normalize(t, e, r) {
                return Ot(t, e, 0, 1, r)
            },
            getUnit: Pa,
            clamp: function clamp(e, r, t) {
                return Na(t, function(t) {
                    return Tt(e, r, t)
                })
            },
            splitColor: qb,
            toArray: xt,
            selector: function selector(r) {
                return r = xt(r)[0] || O("Invalid scope") || {},
                    function(t) {
                        var e = r.current || r.nativeElement || r;
                        return xt(t, e.querySelectorAll ? e : e === r ? O("Invalid scope") || a.createElement("div") : r)
                    }
            },
            mapRange: Ot,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Pa(t))
                }
            },
            interpolate: function interpolate(e, r, t, i) {
                var n = isNaN(e + r) ? 0 : function(t) {
                        return (1 - t) * e + t * r
                    }
                ;
                if (!n) {
                    var a, s, u, h, l, f = o(e), d = {};
                    if (!0 === t && (i = 1) && (t = null),
                        f)
                        e = {
                            p: e
                        },
                            r = {
                                p: r
                            };
                    else if (H(e) && !H(r)) {
                        for (u = [],
                                 h = e.length,
                                 l = h - 2,
                                 s = 1; s < h; s++)
                            u.push(interpolate(e[s - 1], e[s]));
                        h--,
                            n = function func(t) {
                                t *= h;
                                var e = Math.min(l, ~~t);
                                return u[e](t - e)
                            }
                            ,
                            t = r
                    } else
                        i || (e = mt(H(e) ? [] : {}, e));
                    if (!u) {
                        for (a in r)
                            Xt.call(d, e, a, "get", r[a]);
                        n = function func(t) {
                            return ee(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Na(t, n)
            },
            shuffle: Wa
        },
        install: M,
        effects: dt,
        ticker: St,
        updateRoot: qt.updateRoot,
        plugins: ft,
        globalTimeline: R,
        core: {
            PropTween: ae,
            globals: P,
            Tween: Qt,
            Timeline: qt,
            Animation: Nt,
            getCache: _,
            _removeLinkedListItem: qa,
            suppressOverwrites: function suppressOverwrites(t) {
                return F = t
            }
        }
    };
    ba("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return se[t] = Qt[t]
    }),
        St.add(qt.updateRoot),
        d = se.to({}, {
            duration: 0
        });
    function nc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
        return r
    }
    function pc(t, n) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (o(i) && (e = {},
                        ba(i, function(t) {
                            return e[t] = 1
                        }),
                        i = e),
                        n) {
                        for (r in e = {},
                            i)
                            e[r] = n(i[r]);
                        i = e
                    }
                    !function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--; )
                                (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = nc(n, r)),
                                n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, i)
                }
            }
        }
    }
    var oe = se.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s;
            for (a in e)
                (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a),
                    this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r])
        }
    }, pc("roundProps", Ya), pc("modifiers"), pc("snap", Za)) || se;
    Qt.version = qt.version = oe.version = "3.7.1",
        l = 1,
    u() && Dt();
    function $c(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function _c(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function ad(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }
    function bd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }
    function cd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }
    function dd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }
    function ed(t, e, r) {
        return t.style[e] = r
    }
    function fd(t, e, r) {
        return t.style.setProperty(e, r)
    }
    function gd(t, e, r) {
        return t._gsap[e] = r
    }
    function hd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }
    function id(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r,
            a.renderTransform(n, a)
    }
    function jd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r,
            a.renderTransform(n, a)
    }
    function nd(t, e) {
        var r = he.createElementNS ? he.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : he.createElement(t);
        return r.style ? r : he.createElement(t)
    }
    function od(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Re, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && od(t, Ve(e) || e, 1) || ""
    }
    function rd() {
        (function _windowExists() {
                return "undefined" != typeof window
            }
        )() && window.document && (ue = window,
            he = ue.document,
            le = he.documentElement,
            de = nd("div") || {
                style: {}
            },
            nd("div"),
            Ye = Ve(Ye),
            Xe = Ye + "Origin",
            de.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
            pe = !!Ve("perspective"),
            fe = 1)
    }
    function sd(t) {
        var e, r = nd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, a = this.style.cssText;
        if (le.appendChild(r),
            r.appendChild(this),
            this.style.display = "block",
            t)
            try {
                e = this.getBBox(),
                    this._gsapBBox = this.getBBox,
                    this.getBBox = sd
            } catch (t) {}
        else
            this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
            le.removeChild(r),
            this.style.cssText = a,
            e
    }
    function td(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }
    function ud(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = sd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === sd || (r = sd.call(e, !0)),
            !r || r.width || r.x || r.y ? r : {
                x: +td(e, ["x", "cx", "x1"]) || 0,
                y: +td(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
    }
    function vd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ud(t))
    }
    function wd(t, e) {
        if (e) {
            var r = t.style;
            e in Ie && e !== Xe && (e = Ye),
                r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
                    r.removeProperty(e.replace(Re, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }
    function xd(t, e, r, i, n, a) {
        var s = new ae(t._pt,e,r,0,1,a ? dd : cd);
        return (t._pt = s).b = i,
            s.e = n,
            t._props.push(r),
            s
    }
    function zd(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0, h = (r + "").trim().substr((u + "").length) || "px", l = de.style, f = Le.test(e), d = "svg" === t.tagName.toLowerCase(), c = (d ? "client" : "offset") + (f ? "Width" : "Height"), p = "px" === i, m = "%" === i;
        return i === h || !u || je[i] || je[h] ? u : ("px" === h || p || (u = zd(t, e, r, "px")),
            o = t.getCTM && vd(t),
            !m && "%" !== h || !Ie[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i),
                a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode,
            o && (a = (t.ownerSVGElement || {}).parentNode),
            a && a !== he && a.appendChild || (a = he.body),
                (s = a._gsap) && m && s.width && f && s.time === St.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = od(t, "position")),
                a === t && (l.position = "static"),
                    a.appendChild(de),
                    n = de[c],
                    a.removeChild(de),
                    l.position = "absolute",
                f && m && ((s = _(a)).time = St.time,
                    s.width = a[c]),
                    ca(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[c],
                ca(m ? u / n * 100 : u / 100 * n)))
    }
    function Ad(t, e, r, i) {
        var n;
        return fe || rd(),
        e in qe && "transform" !== e && ~(e = qe[e]).indexOf(",") && (e = e.split(",")[0]),
            Ie[e] && "transform" !== e ? (n = $e(t, i),
                n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Je(od(t, Xe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Qe[e] && Qe[e](t, e, r) || od(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)),
            r && !~(n + "").trim().indexOf(" ") ? zd(t, e, n, r) + r : n
    }
    function Bd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Ve(e, t, 1)
                , a = n && od(t, n, 1);
            a && a !== r ? (e = n,
                r = a) : "borderColor" === e && (r = od(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, c, p, _, m, g, v = new ae(this._pt,t.style,e,0,1,te), y = 0, b = 0;
        if (v.b = r,
            v.e = i,
            r += "",
        "auto" === (i += "") && (t.style[e] = i,
            i = od(t, e) || i,
            t.style[e] = r),
            vb(s = [r, i]),
            i = s[1],
            u = (r = s[0]).match(rt) || [],
            (i.match(rt) || []).length) {
            for (; o = rt.exec(i); )
                d = o[0],
                    p = i.substring(y, o.index),
                    l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1),
                d !== (f = u[b++] || "") && (h = parseFloat(f) || 0,
                    m = f.substr((h + "").length),
                (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)),
                    c = parseFloat(d),
                    _ = d.substr((c + "").length),
                    y = rt.lastIndex - _.length,
                _ || (_ = _ || Y.units[e] || m,
                y === i.length && (i += _,
                    v.e += _)),
                m !== _ && (h = zd(t, e, f, _) || 0),
                    v._pt = {
                        _next: v._pt,
                        p: p || 1 === b ? p : ",",
                        s: h,
                        c: g ? g * c : c - h,
                        m: l && l < 4 || "zIndex" === e ? Math.round : 0
                    });
            v.c = y < i.length ? i.substring(y, i.length) : ""
        } else
            v.r = "display" === e && "none" === i ? dd : cd;
        return nt.test(i) && (v.e = 0),
            this._pt = v
    }
    function Dd(t) {
        var e = t.split(" ")
            , r = e[0]
            , i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r,
            r = i,
            i = t),
            e[0] = We[r] || r,
            e[1] = We[i] || i,
            e.join(" ")
    }
    function Ed(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t, s = a.style, o = e.u, u = a._gsap;
            if ("all" === o || !0 === o)
                s.cssText = "",
                    i = 1;
            else
                for (n = (o = o.split(",")).length; -1 < --n; )
                    r = o[n],
                    Ie[r] && (i = 1,
                        r = "transformOrigin" === r ? Xe : Ye),
                        wd(a, r);
            i && (wd(a, Ye),
            u && (u.svg && a.removeAttribute("transform"),
                $e(a, 1),
                u.uncache = 1))
        }
    }
    function Id(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }
    function Jd(t) {
        var e = od(t, Ye);
        return Id(e) ? Ge : e.substr(7).match(et).map(ca)
    }
    function Kd(t, e) {
        var r, i, n, a, s = t._gsap || _(t), o = t.style, u = Jd(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ge : u : (u !== Ge || t.offsetParent || t === le || s.svg || (n = o.display,
            o.display = "block",
        (r = t.parentNode) && t.offsetParent || (a = 1,
            i = t.nextSibling,
            le.appendChild(t)),
            u = Jd(t),
            n ? o.display = n : wd(t, "display"),
        a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : le.removeChild(t))),
            e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }
    function Ld(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap, l = n || Kd(t, !0), f = h.xOrigin || 0, d = h.yOrigin || 0, c = h.xOffset || 0, p = h.yOffset || 0, _ = l[0], m = l[1], g = l[2], v = l[3], y = l[4], b = l[5], T = e.split(" "), w = parseFloat(T[0]) || 0, x = parseFloat(T[1]) || 0;
        r ? l !== Ge && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * b - m * y) / o,
            w = w * (v / o) + x * (-g / o) + (g * b - v * y) / o,
            x = u) : (w = (s = ud(t)).x + (~T[0].indexOf("%") ? w / 100 * s.width : w),
            x = s.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * s.height : x)),
            i || !1 !== i && h.smooth ? (y = w - f,
                b = x - d,
                h.xOffset = c + (y * _ + b * g) - y,
                h.yOffset = p + (y * m + b * v) - b) : h.xOffset = h.yOffset = 0,
            h.xOrigin = w,
            h.yOrigin = x,
            h.smooth = !!i,
            h.origin = e,
            h.originIsAbsolute = !!r,
            t.style[Xe] = "0px 0px",
        a && (xd(a, h, "xOrigin", f, w),
            xd(a, h, "yOrigin", d, x),
            xd(a, h, "xOffset", c, h.xOffset),
            xd(a, h, "yOffset", p, h.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + x)
    }
    function Od(t, e, r) {
        var i = Pa(e);
        return ca(parseFloat(e) + parseFloat(zd(t, "x", r + "px", i))) + i
    }
    function Vd(t, e, r, i, n, a) {
        var s, u, h = 360, l = o(n), f = parseFloat(n) * (l && ~n.indexOf("rad") ? Ee : 1), d = a ? f * a : f - i, c = i + d + "deg";
        return l && ("short" === (s = n.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h),
            "cw" === s && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === s && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)),
            t._pt = u = new ae(t._pt,e,r,i,d,_c),
            u.e = c,
            u.u = "deg",
            t._props.push(r),
            u
    }
    function Wd(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }
    function Xd(t, e, r) {
        var i, n, a, s, o, u, h, l = Wd({}, r._gsap), f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"),
            r.setAttribute("transform", ""),
            f[Ye] = e,
            i = $e(r, 1),
            wd(r, Ye),
            r.setAttribute("transform", a)) : (a = getComputedStyle(r)[Ye],
            f[Ye] = e,
            i = $e(r, 1),
            f[Ye] = a),
            Ie)
            (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Pa(a) !== (h = Pa(s)) ? zd(r, n, a, h) : parseFloat(a),
                u = parseFloat(s),
                t._pt = new ae(t._pt,i,n,o,u - o,$c),
                t._pt.u = h || 0,
                t._props.push(n));
        Wd(i, l)
    }
    var ue, he, le, fe, de, ce, pe, _e = zt.Power0, me = zt.Power1, ge = zt.Power2, ve = zt.Power3, ye = zt.Power4, be = zt.Linear, Te = zt.Quad, we = zt.Cubic, xe = zt.Quart, Oe = zt.Quint, Pe = zt.Strong, ke = zt.Elastic, Me = zt.Back, Ae = zt.SteppedEase, Ce = zt.Bounce, Se = zt.Sine, De = zt.Expo, ze = zt.Circ, Ie = {}, Ee = 180 / Math.PI, Be = Math.PI / 180, Fe = Math.atan2, Re = /([A-Z])/g, Le = /(?:left|right|width|margin|padding|x)/i, Ne = /[\s,\(]\S/, qe = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Ye = "transform", Xe = Ye + "Origin", Ue = "O,Moz,ms,Ms,Webkit".split(","), Ve = function _checkPropPrefix(t, e, r) {
        var i = (e || de).style
            , n = 5;
        if (t in i && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ue[n] + t in i); )
            ;
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ue[n] : "") + t
    }, je = {
        deg: 1,
        rad: 1,
        turn: 1
    }, We = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Qe = {
        clearProps: function clearProps(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
                var a = t._pt = new ae(t._pt,e,r,0,0,Ed);
                return a.u = i,
                    a.pr = -10,
                    a.tween = n,
                    t._props.push(r),
                    1
            }
        }
    }, Ge = [1, 0, 0, 1, 0, 0], Ke = {}, $e = function _parseTransform(t, e) {
        var r = t._gsap || new Lt(t);
        if ("x"in r && !e && !r.uncache)
            return r;
        var i, n, a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, b, T, w, x, O, P, k, M, A, C, S, D, z, I, E, B = t.style, F = r.scaleX < 0, R = "deg", L = od(t, Xe) || "0";
        return i = n = a = u = h = l = f = d = c = 0,
            s = o = 1,
            r.svg = !(!t.getCTM || !vd(t)),
            m = Kd(t, r.svg),
        r.svg && (k = (!r.uncache || "0px 0px" === L) && !e && t.getAttribute("data-svg-origin"),
            Ld(t, k || L, !!k || r.originIsAbsolute, !1 !== r.smooth, m)),
            p = r.xOrigin || 0,
            _ = r.yOrigin || 0,
        m !== Ge && (b = m[0],
            T = m[1],
            w = m[2],
            x = m[3],
            i = O = m[4],
            n = P = m[5],
            6 === m.length ? (s = Math.sqrt(b * b + T * T),
                o = Math.sqrt(x * x + w * w),
                u = b || T ? Fe(T, b) * Ee : 0,
            (f = w || x ? Fe(w, x) * Ee + u : 0) && (o *= Math.abs(Math.cos(f * Be))),
            r.svg && (i -= p - (p * b + _ * w),
                n -= _ - (p * T + _ * x))) : (E = m[6],
                z = m[7],
                C = m[8],
                S = m[9],
                D = m[10],
                I = m[11],
                i = m[12],
                n = m[13],
                a = m[14],
                h = (g = Fe(E, D)) * Ee,
            g && (k = O * (v = Math.cos(-g)) + C * (y = Math.sin(-g)),
                M = P * v + S * y,
                A = E * v + D * y,
                C = O * -y + C * v,
                S = P * -y + S * v,
                D = E * -y + D * v,
                I = z * -y + I * v,
                O = k,
                P = M,
                E = A),
                l = (g = Fe(-w, D)) * Ee,
            g && (v = Math.cos(-g),
                I = x * (y = Math.sin(-g)) + I * v,
                b = k = b * v - C * y,
                T = M = T * v - S * y,
                w = A = w * v - D * y),
                u = (g = Fe(T, b)) * Ee,
            g && (k = b * (v = Math.cos(g)) + T * (y = Math.sin(g)),
                M = O * v + P * y,
                T = T * v - b * y,
                P = P * v - O * y,
                b = k,
                O = M),
            h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0,
                l = 180 - l),
                s = ca(Math.sqrt(b * b + T * T + w * w)),
                o = ca(Math.sqrt(P * P + E * E)),
                g = Fe(O, P),
                f = 2e-4 < Math.abs(g) ? g * Ee : 0,
                c = I ? 1 / (I < 0 ? -I : I) : 0),
        r.svg && (k = t.getAttribute("transform"),
            r.forceCSS = t.setAttribute("transform", "") || !Id(od(t, Ye)),
        k && t.setAttribute("transform", k))),
        90 < Math.abs(f) && Math.abs(f) < 270 && (F ? (s *= -1,
            f += u <= 0 ? 180 : -180,
            u += u <= 0 ? 180 : -180) : (o *= -1,
            f += f <= 0 ? 180 : -180)),
            r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px",
            r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px",
            r.z = a + "px",
            r.scaleX = ca(s),
            r.scaleY = ca(o),
            r.rotation = ca(u) + R,
            r.rotationX = ca(h) + R,
            r.rotationY = ca(l) + R,
            r.skewX = f + R,
            r.skewY = d + R,
            r.transformPerspective = c + "px",
        (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (B[Xe] = Je(L)),
            r.xOffset = r.yOffset = 0,
            r.force3D = Y.force3D,
            r.renderTransform = r.svg ? ir : pe ? rr : Ze,
            r.uncache = 0,
            r
    }, Je = function _firstTwoOnly(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, Ze = function _renderNon3DTransforms(t, e) {
        e.z = "0px",
            e.rotationY = e.rotationX = "0deg",
            e.force3D = 0,
            rr(t, e)
    }, He = "0deg", tr = "0px", er = ") ", rr = function _renderCSSTransforms(t, e) {
        var r = e || this
            , i = r.xPercent
            , n = r.yPercent
            , a = r.x
            , s = r.y
            , o = r.z
            , u = r.rotation
            , h = r.rotationY
            , l = r.rotationX
            , f = r.skewX
            , d = r.skewY
            , c = r.scaleX
            , p = r.scaleY
            , _ = r.transformPerspective
            , m = r.force3D
            , g = r.target
            , v = r.zOrigin
            , y = ""
            , b = "auto" === m && t && 1 !== t || !0 === m;
        if (v && (l !== He || h !== He)) {
            var T, w = parseFloat(h) * Be, x = Math.sin(w), O = Math.cos(w);
            w = parseFloat(l) * Be,
                T = Math.cos(w),
                a = Od(g, a, x * T * -v),
                s = Od(g, s, -Math.sin(w) * -v),
                o = Od(g, o, O * T * -v + v)
        }
        _ !== tr && (y += "perspective(" + _ + er),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        !b && a === tr && s === tr && o === tr || (y += o !== tr || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + er),
        u !== He && (y += "rotate(" + u + er),
        h !== He && (y += "rotateY(" + h + er),
        l !== He && (y += "rotateX(" + l + er),
        f === He && d === He || (y += "skew(" + f + ", " + d + er),
        1 === c && 1 === p || (y += "scale(" + c + ", " + p + er),
            g.style[Ye] = y || "translate(0, 0)"
    }, ir = function _renderSVGTransforms(t, e) {
        var r, i, n, a, s, o = e || this, u = o.xPercent, h = o.yPercent, l = o.x, f = o.y, d = o.rotation, c = o.skewX, p = o.skewY, _ = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, b = o.xOffset, T = o.yOffset, w = o.forceCSS, x = parseFloat(l), O = parseFloat(f);
        d = parseFloat(d),
            c = parseFloat(c),
        (p = parseFloat(p)) && (c += p = parseFloat(p),
            d += p),
            d || c ? (d *= Be,
                c *= Be,
                r = Math.cos(d) * _,
                i = Math.sin(d) * _,
                n = Math.sin(d - c) * -m,
                a = Math.cos(d - c) * m,
            c && (p *= Be,
                s = Math.tan(c - p),
                n *= s = Math.sqrt(1 + s * s),
                a *= s,
            p && (s = Math.tan(p),
                r *= s = Math.sqrt(1 + s * s),
                i *= s)),
                r = ca(r),
                i = ca(i),
                n = ca(n),
                a = ca(a)) : (r = _,
                a = m,
                i = n = 0),
        (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = zd(g, "x", l, "px"),
            O = zd(g, "y", f, "px")),
        (v || y || b || T) && (x = ca(x + v - (v * r + y * n) + b),
            O = ca(O + y - (v * i + y * a) + T)),
        (u || h) && (s = g.getBBox(),
            x = ca(x + u / 100 * s.width),
            O = ca(O + h / 100 * s.height)),
            s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")",
            g.setAttribute("transform", s),
        w && (g.style[Ye] = s)
    };
    ba("padding,margin,Width,Radius", function(e, r) {
        var t = "Right"
            , i = "Bottom"
            , n = "Left"
            , o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
            return r < 2 ? e + t : "border" + t + e
        });
        Qe[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4)
                return a = o.map(function(t) {
                    return Ad(e, t, r)
                }),
                    5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "),
                s = {},
                o.forEach(function(t, e) {
                    return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
                }),
                e.init(t, s, n)
        }
    });
    var nr, ar, sr, or = {
        name: "css",
        register: rd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, r, i, n) {
            var a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, b = this._props, T = t.style, w = r.vars.startAt;
            for (f in fe || rd(),
                e)
                if ("autoRound" !== f && (s = e[f],
                !ft[f] || !Sb(f, e, r, i, t, n)))
                    if (h = typeof s,
                        l = Qe[f],
                    "function" === h && (h = typeof (s = s.call(r, i, t, n))),
                    "string" === h && ~s.indexOf("random(") && (s = fb(s)),
                        l)
                        l(this, t, f, s, r) && (y = 1);
                    else if ("--" === f.substr(0, 2))
                        a = (getComputedStyle(t).getPropertyValue(f) + "").trim(),
                            s += "",
                            At.lastIndex = 0,
                        At.test(a) || (d = Pa(a),
                            c = Pa(s)),
                            c ? d !== c && (a = zd(t, f, a, c) + c) : d && (s += d),
                            this.add(T, "setProperty", a, s, i, n, 0, 0, f),
                            b.push(f);
                    else if ("undefined" !== h) {
                        if (w && f in w ? (a = "function" == typeof w[f] ? w[f].call(r, i, t, n) : w[f],
                        f in Y.units && !Pa(a) && (a += Y.units[f]),
                        "=" === (a + "").charAt(1) && (a = Ad(t, f))) : a = Ad(t, f),
                            u = parseFloat(a),
                        (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                            o = parseFloat(s),
                        f in qe && ("autoAlpha" === f && (1 === u && "hidden" === Ad(t, "visibility") && o && (u = 0),
                            xd(this, T, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                        "scale" !== f && "transform" !== f && ~(f = qe[f]).indexOf(",") && (f = f.split(",")[0])),
                            _ = f in Ie)
                            if (m || ((g = t._gsap).renderTransform && !e.parseTransform || $e(t, e.parseTransform),
                                v = !1 !== e.smoothOrigin && g.smooth,
                                (m = this._pt = new ae(this._pt,T,Ye,0,1,g.renderTransform,g,0,-1)).dep = 1),
                            "scale" === f)
                                this._pt = new ae(this._pt,g,"scaleY",g.scaleY,(p ? p * o : o - g.scaleY) || 0),
                                    b.push("scaleY", f),
                                    f += "X";
                            else {
                                if ("transformOrigin" === f) {
                                    s = Dd(s),
                                        g.svg ? Ld(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && xd(this, g, "zOrigin", g.zOrigin, c),
                                            xd(this, T, f, Je(a), Je(s)));
                                    continue
                                }
                                if ("svgOrigin" === f) {
                                    Ld(t, s, 1, v, 0, this);
                                    continue
                                }
                                if (f in Ke) {
                                    Vd(this, g, f, u, s, p);
                                    continue
                                }
                                if ("smoothOrigin" === f) {
                                    xd(this, g, "smooth", g.smooth, s);
                                    continue
                                }
                                if ("force3D" === f) {
                                    g[f] = s;
                                    continue
                                }
                                if ("transform" === f) {
                                    Xd(this, s, t);
                                    continue
                                }
                            }
                        else
                            f in T || (f = Ve(f) || f);
                        if (_ || (o || 0 === o) && (u || 0 === u) && !Ne.test(s) && f in T)
                            o = o || 0,
                            (d = (a + "").substr((u + "").length)) !== (c = Pa(s) || (f in Y.units ? Y.units[f] : d)) && (u = zd(t, f, a, c)),
                                this._pt = new ae(this._pt,_ ? g : T,f,u,p ? p * o : o - u,_ || "px" !== c && "zIndex" !== f || !1 === e.autoRound ? $c : bd),
                                this._pt.u = c || 0,
                            d !== c && (this._pt.b = a,
                                this._pt.r = ad);
                        else if (f in T)
                            Bd.call(this, t, f, a, s);
                        else {
                            if (!(f in t)) {
                                N(f, s);
                                continue
                            }
                            this.add(t, f, a || t[f], s, i, n)
                        }
                        b.push(f)
                    }
            y && ne(this)
        },
        get: Ad,
        aliases: qe,
        getSetter: function getSetter(t, e, i) {
            var n = qe[e];
            return n && n.indexOf(",") < 0 && (e = n),
                e in Ie && e !== Xe && (t._gsap.x || Ad(t, "x")) ? i && ce === i ? "scale" === e ? hd : gd : (ce = i || {}) && ("scale" === e ? id : jd) : t.style && !r(t.style[e]) ? ed : ~e.indexOf("-") ? fd : Jt(t, e)
        },
        core: {
            _removeProperty: wd,
            _getMatrix: Kd
        }
    };
    oe.utils.checkPrefix = Ve,
        sr = ba((nr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ar = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
            Ie[t] = 1
        }),
        ba(ar, function(t) {
            Y.units[t] = "deg",
                Ke[t] = 1
        }),
        qe[sr[13]] = nr + "," + ar,
        ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
            var e = t.split(":");
            qe[e[1]] = sr[e[0]]
        }),
        ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
            Y.units[t] = "px"
        }),
        oe.registerPlugin(or);
    var ur = oe.registerPlugin(or) || oe
        , hr = ur.core.Tween;
    e.Back = Me,
        e.Bounce = Ce,
        e.CSSPlugin = or,
        e.Circ = ze,
        e.Cubic = we,
        e.Elastic = ke,
        e.Expo = De,
        e.Linear = be,
        e.Power0 = _e,
        e.Power1 = me,
        e.Power2 = ge,
        e.Power3 = ve,
        e.Power4 = ye,
        e.Quad = Te,
        e.Quart = xe,
        e.Quint = Oe,
        e.Sine = Se,
        e.SteppedEase = Ae,
        e.Strong = Pe,
        e.TimelineLite = qt,
        e.TimelineMax = qt,
        e.TweenLite = Qt,
        e.TweenMax = hr,
        e.default = ur,
        e.gsap = ur;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Splitting = t()
}(this, function() {
    "use strict"
    var u = document
        , l = u.createTextNode.bind(u)
    function d(n, t, e) {
        n.style.setProperty(t, e)
    }
    function f(n, t) {
        return n.appendChild(t)
    }
    function p(n, t, e, r) {
        var i = u.createElement("span")
        return t && (i.className = t),
        e && (!r && i.setAttribute("data-" + t, e),
            i.textContent = e),
        n && f(n, i) || i
    }
    function h(n, t) {
        return n.getAttribute("data-" + t)
    }
    function m(n, t) {
        return n && 0 != n.length ? n.nodeName ? [n] : [].slice.call(n[0].nodeName ? n : (t || u).querySelectorAll(n)) : []
    }
    function o(n) {
        for (var t = []; n--; )
            t[n] = []
        return t
    }
    function g(n, t) {
        n && n.some(t)
    }
    function c(t) {
        return function(n) {
            return t[n]
        }
    }
    var a = {}
    function n(n, t, e, r) {
        return {
            by: n,
            depends: t,
            key: e,
            split: r
        }
    }
    function e(n) {
        return function t(e, n, r) {
            var i = r.indexOf(e)
            if (-1 == i)
                r.unshift(e),
                    g(a[e].depends, function(n) {
                        t(n, e, r)
                    })
            else {
                var u = r.indexOf(n)
                r.splice(i, 1),
                    r.splice(u, 0, e)
            }
            return r
        }(n, 0, []).map(c(a))
    }
    function t(n) {
        a[n.by] = n
    }
    function v(n, r, i, u, o) {
        n.normalize()
        var c = []
            , a = document.createDocumentFragment()
        u && c.push(n.previousSibling)
        var s = []
        return m(n.childNodes).some(function(n) {
            if (!n.tagName || n.hasChildNodes()) {
                if (n.childNodes && n.childNodes.length)
                    return s.push(n),
                        void c.push.apply(c, v(n, r, i, u, o))
                var t = n.wholeText || ""
                    , e = t.trim()
                e.length && (" " === t[0] && s.push(l(" ")),
                    g(e.split(i), function(n, t) {
                        t && o && s.push(p(a, "whitespace", " ", o))
                        var e = p(a, r, n)
                        c.push(e),
                            s.push(e)
                    }),
                " " === t[t.length - 1] && s.push(l(" ")))
            } else
                s.push(n)
        }),
            g(s, function(n) {
                f(a, n)
            }),
            n.innerHTML = "",
            f(n, a),
            c
    }
    var s = 0
    var i = "words"
        , r = n(i, s, "word", function(n) {
        return v(n, "word", /\s+/, 0, 1)
    })
        , y = "chars"
        , w = n(y, [i], "char", function(n, e, t) {
        var r = []
        return g(t[i], function(n, t) {
            r.push.apply(r, v(n, "char", "", e.whitespace && t))
        }),
            r
    })
    function b(t) {
        var f = (t = t || {}).key
        return m(t.target || "[data-splitting]").map(function(a) {
            var s = a["棣冨磼"]
            if (!t.force && s)
                return s
            s = a["棣冨磼"] = {
                el: a
            }
            var n = e(t.by || h(a, "splitting") || y)
                , l = function(n, t) {
                for (var e in t)
                    n[e] = t[e]
                return n
            }({}, t)
            return g(n, function(n) {
                if (n.split) {
                    var t = n.by
                        , e = (f ? "-" + f : "") + n.key
                        , r = n.split(a, l, s)
                    e && (i = a,
                        c = (o = "--" + e) + "-index",
                        g(u = r, function(n, t) {
                            Array.isArray(n) ? g(n, function(n) {
                                d(n, c, t)
                            }) : d(n, c, t)
                        }),
                        d(i, o + "-total", u.length)),
                        s[t] = r,
                        a.classList.add(t)
                }
                var i, u, o, c
            }),
                a.classList.add("splitting"),
                s
        })
    }
    function N(n, t, e) {
        var r = m(t.matching || n.children, n)
            , i = {}
        return g(r, function(n) {
            var t = Math.round(n[e]);
            (i[t] || (i[t] = [])).push(n)
        }),
            Object.keys(i).map(Number).sort(x).map(c(i))
    }
    function x(n, t) {
        return n - t
    }
    b.html = function(n) {
        var t = (n = n || {}).target = p()
        return t.innerHTML = n.content,
            b(n),
            t.outerHTML
    }
        ,
        b.add = t
    var T = n("lines", [i], "line", function(n, t, e) {
        return N(n, {
            matching: e[i]
        }, "offsetTop")
    })
        , L = n("items", s, "item", function(n, t) {
        return m(t.matching || n.children, n)
    })
        , k = n("rows", s, "row", function(n, t) {
        return N(n, t, "offsetTop")
    })
        , A = n("cols", s, "col", function(n, t) {
        return N(n, t, "offsetLeft")
    })
        , C = n("grid", ["rows", "cols"])
        , M = "layout"
        , S = n(M, s, s, function(n, t) {
        var e = t.rows = +(t.rows || h(n, "rows") || 1)
            , r = t.columns = +(t.columns || h(n, "columns") || 1)
        if (t.image = t.image || h(n, "image") || n.currentSrc || n.src,
            t.image) {
            var i = m("img", n)[0]
            t.image = i && (i.currentSrc || i.src)
        }
        t.image && d(n, "background-image", "url(" + t.image + ")")
        for (var u = e * r, o = [], c = p(s, "cell-grid"); u--; ) {
            var a = p(c, "cell")
            p(a, "cell-inner"),
                o.push(a)
        }
        return f(n, c),
            o
    })
        , H = n("cellRows", [M], "row", function(n, t, e) {
        var r = t.rows
            , i = o(r)
        return g(e[M], function(n, t, e) {
            i[Math.floor(t / (e.length / r))].push(n)
        }),
            i
    })
        , O = n("cellColumns", [M], "col", function(n, t, e) {
        var r = t.columns
            , i = o(r)
        return g(e[M], function(n, t) {
            i[t % r].push(n)
        }),
            i
    })
        , j = n("cells", ["cellRows", "cellColumns"], "cell", function(n, t, e) {
        return e[M]
    })
    return t(r),
        t(w),
        t(T),
        t(L),
        t(k),
        t(A),
        t(C),
        t(S),
        t(H),
        t(O),
        t(j),
        b
})

// gsap 3.7.1 js end

//  ScrollTrigger js start
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
                n.configurable = !0,
            "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
        }
    }
    function r() {
        return Se || "undefined" != typeof window && (Se = window.gsap) && Se.registerPlugin && Se
    }
    function z(e, t) {
        return ~Ie.indexOf(e) && Ie[Ie.indexOf(e) + 1][t]
    }
    function A(e) {
        return !!~t.indexOf(e)
    }
    function B(e, t, r, n, o) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!o
        })
    }
    function C(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }
    function F() {
        return Re && Re.isPressed || ze.cache++
    }
    function G(r, n) {
        function ad(e) {
            if (e || 0 === e) {
                o && (Te.history.scrollRestoration = "manual");
                var t = Re && Re.isPressed;
                e = ad.v = Math.round(e) || (Re && Re.iOS ? 1 : 0),
                    r(e),
                    ad.cacheID = ze.cache,
                t && i("ss", e)
            } else
                (n || ze.cache !== ad.cacheID || i("ref")) && (ad.cacheID = ze.cache,
                    ad.v = r());
            return ad.v + ad.offset
        }
        return ad.offset = 0,
        r && ad
    }
    function J(e, t) {
        return (t && t._ctx && t._ctx.selector || Se.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== Se.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }
    function K(t, e) {
        var r = e.s
            , n = e.sc;
        A(t) && (t = Ce.scrollingElement || Pe);
        var o = ze.indexOf(t)
            , i = n === He.sc ? 1 : 2;
        ~o || (o = ze.push(t) - 1),
        ze[o + i] || B(t, "scroll", F);
        var a = ze[o + i]
            , s = a || (ze[o + i] = G(z(t, r), !0) || (A(t) ? n : G(function(e) {
            return arguments.length ? t[r] = e : t[r]
        })));
        return s.target = t,
        a || (s.smooth = "smooth" === Se.getProperty(t, "scrollBehavior")),
            s
    }
    function L(e, t, o) {
        function zd(e, t) {
            var r = Ye();
            t || n < r - s ? (a = i,
                i = e,
                l = s,
                s = r) : o ? i += e : i = a + (e - a) / (r - l) * (s - l)
        }
        var i = e
            , a = e
            , s = Ye()
            , l = s
            , n = t || 50
            , c = Math.max(500, 3 * n);
        return {
            update: zd,
            reset: function reset() {
                a = i = o ? 0 : i,
                    l = s = 0
            },
            getVelocity: function getVelocity(e) {
                var t = l
                    , r = a
                    , n = Ye();
                return !e && 0 !== e || e === i || zd(e),
                    s === l || c < n - l ? 0 : (i + (o ? r : -r)) / ((o ? n : s) - t) * 1e3
            }
        }
    }
    function M(e, t) {
        return t && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
    }
    function N(e) {
        var t = Math.max.apply(Math, e)
            , r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }
    function O() {
        (Ae = Se.core.globals().ScrollTrigger) && Ae.core && function _integrate() {
            var e = Ae.core
                , r = e.bridge || {}
                , t = e._scrollers
                , n = e._proxies;
            t.push.apply(t, ze),
                n.push.apply(n, Ie),
                ze = t,
                Ie = n,
                i = function _bridge(e, t) {
                    return r[e](t)
                }
        }()
    }
    function P(e) {
        return (Se = e || r()) && "undefined" != typeof document && document.body && (Te = window,
            Pe = (Ce = document).documentElement,
            Me = Ce.body,
            t = [Te, Ce, Pe, Me],
            Se.utils.clamp,
            De = Se.core.context || function() {}
            ,
            Oe = "onpointerenter"in Me ? "pointer" : "mouse",
            Ee = E.isTouch = Te.matchMedia && Te.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Te || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0,
            Be = E.eventTypes = ("ontouchstart"in Pe ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Pe ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
            setTimeout(function() {
                return o = 0
            }, 500),
            O(),
            ke = 1),
            ke
    }
    var Se, ke, Te, Ce, Pe, Me, Ee, Oe, Ae, t, Re, Be, De, o = 1, Fe = [], ze = [], Ie = [], Ye = Date.now, i = function _bridge(e, t) {
        return t
    }, n = "scrollLeft", a = "scrollTop", qe = {
        s: n,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: G(function(e) {
            return arguments.length ? Te.scrollTo(e, He.sc()) : Te.pageXOffset || Ce[n] || Pe[n] || Me[n] || 0
        })
    }, He = {
        s: a,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: qe,
        sc: G(function(e) {
            return arguments.length ? Te.scrollTo(qe.sc(), e) : Te.pageYOffset || Ce[a] || Pe[a] || Me[a] || 0
        })
    };
    qe.op = He,
        ze.cache = 0;
    var E = (Observer.prototype.init = function init(e) {
        ke || P(Se) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ae || O();
        var o = e.tolerance
            , a = e.dragMinimum
            , t = e.type
            , i = e.target
            , r = e.lineHeight
            , n = e.debounce
            , s = e.preventDefault
            , l = e.onStop
            , c = e.onStopDelay
            , u = e.ignore
            , f = e.wheelSpeed
            , d = e.event
            , p = e.onDragStart
            , g = e.onDragEnd
            , h = e.onDrag
            , v = e.onPress
            , b = e.onRelease
            , m = e.onRight
            , y = e.onLeft
            , x = e.onUp
            , _ = e.onDown
            , w = e.onChangeX
            , S = e.onChangeY
            , k = e.onChange
            , T = e.onToggleX
            , E = e.onToggleY
            , R = e.onHover
            , D = e.onHoverEnd
            , z = e.onMove
            , I = e.ignoreCheck
            , Y = e.isNormalizer
            , q = e.onGestureStart
            , H = e.onGestureEnd
            , X = e.onWheel
            , W = e.onEnable
            , G = e.onDisable
            , V = e.onClick
            , U = e.scrollSpeed
            , j = e.capture
            , Q = e.allowClicks
            , $ = e.lockAxis
            , Z = e.onLockAxis;
        function $e() {
            return ye = Ye()
        }
        function _e(e, t) {
            return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || I && I(e, t)
        }
        function bf() {
            var e = se.deltaX = N(be)
                , t = se.deltaY = N(me)
                , r = Math.abs(e) >= o
                , n = Math.abs(t) >= o;
            k && (r || n) && k(se, e, t, be, me),
            r && (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            w && w(se),
            T && se.deltaX < 0 != le < 0 && T(se),
                le = se.deltaX,
                be[0] = be[1] = be[2] = 0),
            n && (_ && 0 < se.deltaY && _(se),
            x && se.deltaY < 0 && x(se),
            S && S(se),
            E && se.deltaY < 0 != ce < 0 && E(se),
                ce = se.deltaY,
                me[0] = me[1] = me[2] = 0),
            (ne || re) && (z && z(se),
            re && (h(se),
                re = !1),
                ne = !1),
            ie && !(ie = !1) && Z && Z(se),
            oe && (X(se),
                oe = !1),
                ee = 0
        }
        function cf(e, t, r) {
            be[r] += e,
                me[r] += t,
                se._vx.update(e),
                se._vy.update(t),
                n ? ee = ee || requestAnimationFrame(bf) : bf()
        }
        function df(e, t) {
            $ && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y",
                ie = !0),
            "y" !== ae && (be[2] += e,
                se._vx.update(e, !0)),
            "x" !== ae && (me[2] += t,
                se._vy.update(t, !0)),
                n ? ee = ee || requestAnimationFrame(bf) : bf()
        }
        function ef(e) {
            if (!_e(e, 1)) {
                var t = (e = M(e, s)).clientX
                    , r = e.clientY
                    , n = t - se.x
                    , o = r - se.y
                    , i = se.isDragging;
                se.x = t,
                    se.y = r,
                (i || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0),
                i || (se.isDragging = !0),
                    df(n, o),
                i || p && p(se))
            }
        }
        function hf(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && q(e, se.isDragging)
        }
        function jf() {
            return (se.isGesturing = !1) || H(se)
        }
        function kf(e) {
            if (!_e(e)) {
                var t = ue()
                    , r = fe();
                cf((t - de) * U, (r - pe) * U, 1),
                    de = t,
                    pe = r,
                l && te.restart(!0)
            }
        }
        function lf(e) {
            if (!_e(e)) {
                e = M(e, s),
                X && (oe = !0);
                var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Te.innerHeight : 1) * f;
                cf(e.deltaX * t, e.deltaY * t, 0),
                l && !Y && te.restart(!0)
            }
        }
        function mf(e) {
            if (!_e(e)) {
                var t = e.clientX
                    , r = e.clientY
                    , n = t - se.x
                    , o = r - se.y;
                se.x = t,
                    se.y = r,
                    ne = !0,
                (n || o) && df(n, o)
            }
        }
        function nf(e) {
            se.event = e,
                R(se)
        }
        function of(e) {
            se.event = e,
                D(se)
        }
        function pf(e) {
            return _e(e) || M(e, s) && V(se)
        }
        this.target = i = J(i) || Pe,
            this.vars = e,
            u = u && Se.utils.toArray(u),
            o = o || 1e-9,
            a = a || 0,
            f = f || 1,
            U = U || 1,
            t = t || "wheel,touch,pointer",
            n = !1 !== n,
            r = r || parseFloat(Te.getComputedStyle(Me).lineHeight) || 22;
        var ee, te, re, ne, oe, ie, ae, se = this, le = 0, ce = 0, ue = K(i, qe), fe = K(i, He), de = ue(), pe = fe(), ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Be[0], he = A(i), ve = i.ownerDocument || Ce, be = [0, 0, 0], me = [0, 0, 0], ye = 0, xe = se.onPress = function(e) {
                _e(e, 1) || e && e.button || (se.axis = ae = null,
                    te.pause(),
                    se.isPressed = !0,
                    e = M(e),
                    le = ce = 0,
                    se.startX = se.x = e.clientX,
                    se.startY = se.y = e.clientY,
                    se._vx.reset(),
                    se._vy.reset(),
                    B(Y ? i : ve, Be[1], ef, s, !0),
                    se.deltaX = se.deltaY = 0,
                v && v(se))
            }
            , we = se.onRelease = function(t) {
                if (!_e(t, 1)) {
                    C(Y ? i : ve, Be[1], ef, !0);
                    var e = !isNaN(se.y - se.startY)
                        , r = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY))
                        , n = M(t);
                    !r && e && (se._vx.reset(),
                        se._vy.reset(),
                    s && Q && Se.delayedCall(.08, function() {
                        if (300 < Ye() - ye && !t.defaultPrevented)
                            if (t.target.click)
                                t.target.click();
                            else if (ve.createEvent) {
                                var e = ve.createEvent("MouseEvents");
                                e.initMouseEvent("click", !0, !0, Te, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
                                    t.target.dispatchEvent(e)
                            }
                    })),
                        se.isDragging = se.isGesturing = se.isPressed = !1,
                    l && !Y && te.restart(!0),
                    g && r && g(se),
                    b && b(se, r)
                }
            }
        ;
        te = se._dc = Se.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(),
                se._vy.reset(),
                te.pause(),
            l && l(se)
        }).pause(),
            se.deltaX = se.deltaY = 0,
            se._vx = L(0, 50, !0),
            se._vy = L(0, 50, !0),
            se.scrollX = ue,
            se.scrollY = fe,
            se.isDragging = se.isGesturing = se.isPressed = !1,
            De(this),
            se.enable = function(e) {
                return se.isEnabled || (B(he ? ve : i, "scroll", F),
                0 <= t.indexOf("scroll") && B(he ? ve : i, "scroll", kf, s, j),
                0 <= t.indexOf("wheel") && B(i, "wheel", lf, s, j),
                (0 <= t.indexOf("touch") && Ee || 0 <= t.indexOf("pointer")) && (B(i, Be[0], xe, s, j),
                    B(ve, Be[2], we),
                    B(ve, Be[3], we),
                Q && B(i, "click", $e, !1, !0),
                V && B(i, "click", pf),
                q && B(ve, "gesturestart", hf),
                H && B(ve, "gestureend", jf),
                R && B(i, Oe + "enter", nf),
                D && B(i, Oe + "leave", of),
                z && B(i, Oe + "move", mf)),
                    se.isEnabled = !0,
                e && e.type && xe(e),
                W && W(se)),
                    se
            }
            ,
            se.disable = function() {
                se.isEnabled && (Fe.filter(function(e) {
                    return e !== se && A(e.target)
                }).length || C(he ? ve : i, "scroll", F),
                se.isPressed && (se._vx.reset(),
                    se._vy.reset(),
                    C(Y ? i : ve, Be[1], ef, !0)),
                    C(he ? ve : i, "scroll", kf, j),
                    C(i, "wheel", lf, j),
                    C(i, Be[0], xe, j),
                    C(ve, Be[2], we),
                    C(ve, Be[3], we),
                    C(i, "click", $e, !0),
                    C(i, "click", pf),
                    C(ve, "gesturestart", hf),
                    C(ve, "gestureend", jf),
                    C(i, Oe + "enter", nf),
                    C(i, Oe + "leave", of),
                    C(i, Oe + "move", mf),
                    se.isEnabled = se.isPressed = se.isDragging = !1,
                G && G(se))
            }
            ,
            se.kill = se.revert = function() {
                se.disable();
                var e = Fe.indexOf(se);
                0 <= e && Fe.splice(e, 1),
                Re === se && (Re = 0)
            }
            ,
            Fe.push(se),
        Y && A(i) && (Re = se),
            se.enable(d)
    }
        ,
        function _createClass(e, t, r) {
            return t && _defineProperties(e.prototype, t),
            r && _defineProperties(e, r),
                e
        }(Observer, [{
            key: "velocityX",
            get: function get() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function get() {
                return this._vy.getVelocity()
            }
        }]),
        Observer);
    function Observer(e) {
        this.init(e)
    }
    E.version = "3.12.2",
        E.create = function(e) {
            return new E(e)
        }
        ,
        E.register = P,
        E.getAll = function() {
            return Fe.slice()
        }
        ,
        E.getById = function(t) {
            return Fe.filter(function(e) {
                return e.vars.id === t
            })[0]
        }
        ,
    r() && Se.registerPlugin(E);
    function Aa(e, t, r) {
        var n = ct(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
        return (r["_" + t + "Clamp"] = n) ? e.substr(6, e.length - 7) : e
    }
    function Ba(e, t) {
        return !t || ct(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
    }
    function Da() {
        return Ke = 1
    }
    function Ea() {
        return Ke = 0
    }
    function Fa(e) {
        return e
    }
    function Ga(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }
    function Ha() {
        return "undefined" != typeof window
    }
    function Ia() {
        return Le || Ha() && (Le = window.gsap) && Le.registerPlugin && Le
    }
    function Ja(e) {
        return !!~l.indexOf(e)
    }
    function Ka(e) {
        return ("Height" === e ? S : Ne["inner" + e]) || Je["client" + e] || We["client" + e]
    }
    function La(e) {
        return z(e, "getBoundingClientRect") || (Ja(e) ? function() {
                    return Ot.width = Ne.innerWidth,
                        Ot.height = S,
                        Ot
                }
                : function() {
                    return _t(e)
                }
        )
    }
    function Oa(e, t) {
        var r = t.s
            , n = t.d2
            , o = t.d
            , i = t.a;
        return Math.max(0, (r = "scroll" + n) && (i = z(e, r)) ? i() - La(e)()[o] : Ja(e) ? (Je[r] || We[r]) - Ka(n) : e[r] - e["offset" + n])
    }
    function Pa(e, t) {
        for (var r = 0; r < g.length; r += 3)
            t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2])
    }
    function Ra(e) {
        return "function" == typeof e
    }
    function Sa(e) {
        return "number" == typeof e
    }
    function Ta(e) {
        return "object" == typeof e
    }
    function Ua(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }
    function Va(e, t) {
        if (e.enabled) {
            var r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }
    function kb(e) {
        return Ne.getComputedStyle(e)
    }
    function mb(e, t) {
        for (var r in t)
            r in e || (e[r] = t[r]);
        return e
    }
    function ob(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }
    function pb(e) {
        var t, r = [], n = e.labels, o = e.duration();
        for (t in n)
            r.push(n[t] / o);
        return r
    }
    function rb(o) {
        var i = Le.utils.snap(o)
            , a = Array.isArray(o) && o.slice(0).sort(function(e, t) {
            return e - t
        });
        return a ? function(e, t, r) {
                var n;
                if (void 0 === r && (r = .001),
                    !t)
                    return i(e);
                if (0 < t) {
                    for (e -= r,
                             n = 0; n < a.length; n++)
                        if (a[n] >= e)
                            return a[n];
                    return a[n - 1]
                }
                for (n = a.length,
                         e += r; n--; )
                    if (a[n] <= e)
                        return a[n];
                return a[0]
            }
            : function(e, t, r) {
                void 0 === r && (r = .001);
                var n = i(e);
                return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : i(t < 0 ? e - o : e + o)
            }
    }
    function tb(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }
    function ub(e, t, r, n, o) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!o
        })
    }
    function vb(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }
    function wb(e, t, r) {
        (r = r && r.wheelHandler) && (e(t, "wheel", r),
            e(t, "touchmove", r))
    }
    function Ab(e, t) {
        if (ct(e)) {
            var r = e.indexOf("=")
                , n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100),
                e = e.substr(0, r - 1)),
                e = n + (e in q ? q[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }
    function Bb(e, t, r, n, o, i, a, s) {
        var l = o.startColor
            , c = o.endColor
            , u = o.fontSize
            , f = o.indent
            , d = o.fontWeight
            , p = Xe.createElement("div")
            , g = Ja(r) || "fixed" === z(r, "pinType")
            , h = -1 !== e.indexOf("scroller")
            , v = g ? We : r
            , b = -1 !== e.indexOf("start")
            , m = b ? l : c
            , y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"),
        !h && !s && g || (y += (n === He ? D : I) + ":" + (i + parseFloat(f)) + "px;"),
        a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
            p._isStart = b,
            p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
            p.style.cssText = y,
            p.innerText = t || 0 === t ? e + "-" + t : e,
            v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
            p._offset = p["offset" + n.op.d2],
            H(p, 0, n, b),
            p
    }
    function Gb() {
        return 34 < at() - st && (k = k || requestAnimationFrame(Q))
    }
    function Hb() {
        v && v.isPressed && !(v.startX > We.clientWidth) || (ze.cache++,
            v ? k = k || requestAnimationFrame(Q) : Q(),
        st || V("scrollStart"),
            st = at())
    }
    function Ib() {
        y = Ne.innerWidth,
            m = Ne.innerHeight
    }
    function Jb() {
        ze.cache++,
        je || h || Xe.fullscreenElement || Xe.webkitFullscreenElement || b && y === Ne.innerWidth && !(Math.abs(Ne.innerHeight - m) > .25 * Ne.innerHeight) || c.restart(!0)
    }
    function Mb() {
        return vb(re, "scrollEnd", Mb) || Pt(!0)
    }
    function Pb(e) {
        for (var t = 0; t < U.length; t += 5)
            (!e || U[t + 4] && U[t + 4].query === e) && (U[t].style.cssText = U[t + 1],
            U[t].getBBox && U[t].setAttribute("transform", U[t + 2] || ""),
                U[t + 3].uncache = 1)
    }
    function Qb(e, t) {
        var r;
        for (Qe = 0; Qe < kt.length; Qe++)
            !(r = kt[Qe]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
        t && Pb(t),
        t || V("revert")
    }
    function Rb(e, t) {
        ze.cache++,
        !t && rt || ze.forEach(function(e) {
            return Ra(e) && e.cacheID++ && (e.rec = 0)
        }),
        ct(e) && (Ne.history.scrollRestoration = _ = e)
    }
    function Wb() {
        We.appendChild(w),
            S = w.offsetHeight || Ne.innerHeight,
            We.removeChild(w)
    }
    function dc(e, t, r, n) {
        if (!e._gsap.swappedIn) {
            for (var o, i = $.length, a = t.style, s = e.style; i--; )
                a[o = $[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative",
            "inline" === r.display && (a.display = "inline-block"),
                s[I] = s[D] = "auto",
                a.flexBasis = r.flexBasis || "auto",
                a.overflow = "visible",
                a.boxSizing = "border-box",
                a[ft] = ob(e, qe) + xt,
                a[dt] = ob(e, He) + xt,
                a[bt] = s[mt] = s.top = s.left = "0",
                Et(n),
                s[ft] = s.maxWidth = r[ft],
                s[dt] = s.maxHeight = r[dt],
                s[bt] = r[bt],
            e.parentNode !== t && (e.parentNode.insertBefore(t, e),
                t.appendChild(e)),
                e._gsap.swappedIn = !0
        }
    }
    function gc(e) {
        for (var t = Z.length, r = e.style, n = [], o = 0; o < t; o++)
            n.push(Z[o], r[Z[o]]);
        return n.t = e,
            n
    }
    function jc(e, t, r, n, o, i, a, s, l, c, u, f, d, p) {
        Ra(e) && (e = e(s)),
        ct(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Ab("0" + e.substr(3), r) : 0));
        var g, h, v, b = d ? d.time() : 0;
        if (d && d.seek(0),
        isNaN(e) || (e = +e),
            Sa(e))
            d && (e = Le.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)),
            a && H(a, r, n, !0);
        else {
            Ra(t) && (t = t(s));
            var m, y, x, _, w = (e || "0").split(" ");
            v = J(t, s) || We,
            (m = _t(v) || {}) && (m.left || m.top) || "none" !== kb(v).display || (_ = v.style.display,
                v.style.display = "block",
                m = _t(v),
                _ ? v.style.display = _ : v.style.removeProperty("display")),
                y = Ab(w[0], m[n.d]),
                x = Ab(w[1] || "0", r),
                e = m[n.p] - l[n.p] - c + y + o - x,
            a && H(a, x, n, r - x < 20 || a._isStart && 20 < x),
                r -= r - x
        }
        if (p && (s[p] = e || -.001,
        e < 0 && (e = 0)),
            i) {
            var S = e + r
                , k = i._isStart;
            g = "scroll" + n.d2,
                H(i, S, n, k && 20 < S || !k && (u ? Math.max(We[g], Je[g]) : i.parentNode[g]) <= S + 1),
            u && (l = _t(a),
            u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + xt))
        }
        return d && v && (g = _t(v),
            d.seek(f),
            h = _t(v),
            d._caScrollDist = g[n.p] - h[n.p],
            e = e / d._caScrollDist * f),
        d && d.seek(b),
            d ? e : Math.round(e)
    }
    function lc(e, t, r, n) {
        if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === We) {
                for (o in e._stOrig = a.cssText,
                    i = kb(e))
                    +o || te.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                a.top = r,
                    a.left = n
            } else
                a.cssText = e._stOrig;
            Le.core.getCache(e).uncache = 1,
                t.appendChild(e)
        }
    }
    function mc(r, e, n) {
        var o = e
            , i = o;
        return function(e) {
            var t = Math.round(r());
            return t !== o && t !== i && 3 < Math.abs(t - o) && 3 < Math.abs(t - i) && (e = t,
            n && n()),
                i = o,
                o = e
        }
    }
    function nc(e, t, r) {
        var n = {};
        n[t.p] = "+=" + r,
            Le.set(e, n)
    }
    function oc(c, e) {
        function uk(e, t, r, n, o) {
            var i = uk.tween
                , a = t.onComplete
                , s = {};
            r = r || u();
            var l = mc(u, r, function() {
                i.kill(),
                    uk.tween = 0
            });
            return o = n && o || 0,
                n = n || e - r,
            i && i.kill(),
                t[f] = e,
                (t.modifiers = s)[f] = function() {
                    return l(r + n * i.ratio + o * i.ratio * i.ratio)
                }
                ,
                t.onUpdate = function() {
                    ze.cache++,
                        Q()
                }
                ,
                t.onComplete = function() {
                    uk.tween = 0,
                    a && a.call(i)
                }
                ,
                i = uk.tween = Le.to(c, t)
        }
        var u = K(c, e)
            , f = "_scroll" + e.p2;
        return (c[f] = u).wheelHandler = function() {
            return uk.tween && uk.tween.kill() && (uk.tween = 0)
        }
            ,
            ub(c, "wheel", u.wheelHandler),
        re.isTouch && ub(c, "touchmove", u.wheelHandler),
            uk
    }
    var Le, s, Ne, Xe, Je, We, l, c, Ge, Ve, Ue, u, je, Ke, f, Qe, d, p, g, Ze, et, h, v, b, m, y, R, x, _, w, S, tt, k, rt, nt, ot, it = 1, at = Date.now, T = at(), st = 0, lt = 0, ct = function _isString(e) {
        return "string" == typeof e
    }, ut = Math.abs, D = "right", I = "bottom", ft = "width", dt = "height", pt = "Right", gt = "Left", ht = "Top", vt = "Bottom", bt = "padding", mt = "margin", yt = "Width", Y = "Height", xt = "px", _t = function _getBounds(e, t) {
        var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== kb(e)[f] && Le.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
            , n = e.getBoundingClientRect();
        return r && r.progress(0).kill(),
            n
    }, wt = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, St = {
        toggleActions: "play",
        anticipatePin: 0
    }, q = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, H = function _positionMarker(e, t, r, n) {
        var o = {
            display: "block"
        }
            , i = r[n ? "os2" : "p2"]
            , a = r[n ? "p2" : "os2"];
        e._isFlipped = n,
            o[r.a + "Percent"] = n ? -100 : 0,
            o[r.a] = n ? "1px" : 0,
            o["border" + i + yt] = 1,
            o["border" + a + yt] = 0,
            o[r.p] = t + "px",
            Le.set(e, o)
    }, kt = [], Tt = {}, X = {}, W = [], V = function _dispatch(e) {
        return X[e] && X[e].map(function(e) {
            return e()
        }) || W
    }, U = [], Ct = 0, Pt = function _refreshAll(e, t) {
        if (!st || e) {
            Wb(),
                rt = re.isRefreshing = !0,
                ze.forEach(function(e) {
                    return Ra(e) && ++e.cacheID && (e.rec = e())
                });
            var r = V("refreshInit");
            Ze && re.sort(),
            t || Qb(),
                ze.forEach(function(e) {
                    Ra(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"),
                        e(0))
                }),
                kt.slice(0).forEach(function(e) {
                    return e.refresh()
                }),
                kt.forEach(function(e, t) {
                    if (e._subPinOffset && e.pin) {
                        var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight"
                            , n = e.pin[r];
                        e.revert(!0, 1),
                            e.adjustPinSpacing(e.pin[r] - n),
                            e.refresh()
                    }
                }),
                kt.forEach(function(e) {
                    var t = Oa(e.scroller, e._dir);
                    ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
                }),
                r.forEach(function(e) {
                    return e && e.render && e.render(-1)
                }),
                ze.forEach(function(e) {
                    Ra(e) && (e.smooth && requestAnimationFrame(function() {
                        return e.target.style.scrollBehavior = "smooth"
                    }),
                    e.rec && e(e.rec))
                }),
                Rb(_, 1),
                c.pause(),
                Ct++,
                Q(rt = 2),
                kt.forEach(function(e) {
                    return Ra(e.vars.onRefresh) && e.vars.onRefresh(e)
                }),
                rt = re.isRefreshing = !1,
                V("refresh")
        } else
            ub(re, "scrollEnd", Mb)
    }, j = 0, Mt = 1, Q = function _updateAll(e) {
        if (!rt || 2 === e) {
            re.isUpdating = !0,
            ot && ot.update(0);
            var t = kt.length
                , r = at()
                , n = 50 <= r - T
                , o = t && kt[0].scroll();
            if (Mt = o < j ? -1 : 1,
            rt || (j = o),
            n && (st && !Ke && 200 < r - st && (st = 0,
                V("scrollEnd")),
                Ue = T,
                T = r),
            Mt < 0) {
                for (Qe = t; 0 < Qe--; )
                    kt[Qe] && kt[Qe].update(0, n);
                Mt = 1
            } else
                for (Qe = 0; Qe < t; Qe++)
                    kt[Qe] && kt[Qe].update(0, n);
            re.isUpdating = !1
        }
        k = 0
    }, $ = ["left", "top", I, D, mt + vt, mt + pt, mt + ht, mt + gt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Z = $.concat([ft, dt, "boxSizing", "max" + yt, "max" + Y, "position", mt, bt, bt + ht, bt + pt, bt + vt, bt + gt]), ee = /([A-Z])/g, Et = function _setState(e) {
        if (e) {
            var t, r, n = e.t.style, o = e.length, i = 0;
            for ((e.t._gsap || Le.core.getCache(e.t)).uncache = 1; i < o; i += 2)
                r = e[i + 1],
                    t = e[i],
                    r ? n[t] = r : n[t] && n.removeProperty(t.replace(ee, "-$1").toLowerCase())
        }
    }, Ot = {
        left: 0,
        top: 0
    }, te = /(webkit|moz|length|cssText|inset)/i, re = (ScrollTrigger.prototype.init = function init(E, O) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
            lt) {
            var A, n, p, R, B, D, F, I, Y, q, H, e, L, N, X, W, G, V, t, U, b, j, Q, m, $, y, Z, x, r, _, w, ee, o, g, te, re, ne, S, i, k = (E = mb(ct(E) || Sa(E) || E.nodeType ? {
                trigger: E
            } : E, St)).onUpdate, T = E.toggleClass, a = E.id, C = E.onToggle, oe = E.onRefresh, P = E.scrub, ie = E.trigger, ae = E.pin, se = E.pinSpacing, le = E.invalidateOnRefresh, M = E.anticipatePin, s = E.onScrubComplete, h = E.onSnapComplete, ce = E.once, ue = E.snap, fe = E.pinReparent, l = E.pinSpacer, de = E.containerAnimation, pe = E.fastScrollEnd, ge = E.preventOverlaps, he = E.horizontal || E.containerAnimation && !1 !== E.horizontal ? qe : He, ve = !P && 0 !== P, be = J(E.scroller || Ne), c = Le.core.getCache(be), me = Ja(be), ye = "fixed" === ("pinType"in E ? E.pinType : z(be, "pinType") || me && "fixed"), xe = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack], _e = ve && E.toggleActions.split(" "), we = "markers"in E ? E.markers : St.markers, Se = me ? 0 : parseFloat(kb(be)["border" + he.p2 + yt]) || 0, ke = this, Te = E.onRefreshInit && function() {
                return E.onRefreshInit(ke)
            }
                , Ce = function _getSizeFunc(e, t, r) {
                var n = r.d
                    , o = r.d2
                    , i = r.a;
                return (i = z(e, "getBoundingClientRect")) ? function() {
                        return i()[n]
                    }
                    : function() {
                        return (t ? Ka(o) : e["client" + o]) || 0
                    }
            }(be, me, he), Pe = function _getOffsetsFunc(e, t) {
                return !t || ~Ie.indexOf(e) ? La(e) : function() {
                    return Ot
                }
            }(be, me), Me = 0, Ee = 0, Oe = 0, Ae = K(be, he);
            if (ke._startClamp = ke._endClamp = !1,
                ke._dir = he,
                M *= 45,
                ke.scroller = be,
                ke.scroll = de ? de.time.bind(de) : Ae,
                R = Ae(),
                ke.vars = E,
                O = O || E.animation,
            "refreshPriority"in E && (Ze = 1,
            -9999 === E.refreshPriority && (ot = ke)),
                c.tweenScroll = c.tweenScroll || {
                    top: oc(be, He),
                    left: oc(be, qe)
                },
                ke.tweenTo = A = c.tweenScroll[he.p],
                ke.scrubDuration = function(e) {
                    (o = Sa(e) && e) ? ee ? ee.duration(e) : ee = Le.to(O, {
                        ease: "expo",
                        totalProgress: "+=0",
                        duration: o,
                        paused: !0,
                        onComplete: function onComplete() {
                            return s && s(ke)
                        }
                    }) : (ee && ee.progress(1).kill(),
                        ee = 0)
                }
                ,
            O && (O.vars.lazy = !1,
            O._initted && !ke.isReverted || !1 !== O.vars.immediateRender && !1 !== E.immediateRender && O.duration() && O.render(0, !0, !0),
                ke.animation = O.pause(),
                (O.scrollTrigger = ke).scrubDuration(P),
                _ = 0,
                a = a || O.vars.id),
            ue && (Ta(ue) && !ue.push || (ue = {
                snapTo: ue
            }),
            "scrollBehavior"in We.style && Le.set(me ? [We, Je] : be, {
                scrollBehavior: "auto"
            }),
                ze.forEach(function(e) {
                    return Ra(e) && e.target === (me ? Xe.scrollingElement || Je : be) && (e.smooth = !1)
                }),
                p = Ra(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? function _getClosestLabel(t) {
                    return function(e) {
                        return Le.utils.snap(pb(t), e)
                    }
                }(O) : "labelsDirectional" === ue.snapTo ? function _getLabelAtDirection(r) {
                    return function(e, t) {
                        return rb(pb(r))(e, t.direction)
                    }
                }(O) : !1 !== ue.directional ? function(e, t) {
                        return rb(ue.snapTo)(e, at() - Ee < 500 ? 0 : t.direction)
                    }
                    : Le.utils.snap(ue.snapTo),
                g = ue.duration || {
                    min: .1,
                    max: 2
                },
                g = Ta(g) ? Ve(g.min, g.max) : Ve(g, g),
                te = Le.delayedCall(ue.delay || o / 2 || .1, function() {
                    var e = Ae()
                        , t = at() - Ee < 500
                        , r = A.tween;
                    if (!(t || Math.abs(ke.getVelocity()) < 10) || r || Ke || Me === e)
                        ke.isActive && Me !== e && te.restart(!0);
                    else {
                        var n = (e - D) / N
                            , o = O && !ve ? O.totalProgress() : n
                            , i = t ? 0 : (o - w) / (at() - Ue) * 1e3 || 0
                            , a = Le.utils.clamp(-n, 1 - n, ut(i / 2) * i / .185)
                            , s = n + (!1 === ue.inertia ? 0 : a)
                            , l = Ve(0, 1, p(s, ke))
                            , c = Math.round(D + l * N)
                            , u = ue.onStart
                            , f = ue.onInterrupt
                            , d = ue.onComplete;
                        if (e <= F && D <= e && c !== e) {
                            if (r && !r._initted && r.data <= ut(c - e))
                                return;
                            !1 === ue.inertia && (a = l - n),
                                A(c, {
                                    duration: g(ut(.185 * Math.max(ut(s - o), ut(l - o)) / i / .05 || 0)),
                                    ease: ue.ease || "power3",
                                    data: ut(c - e),
                                    onInterrupt: function onInterrupt() {
                                        return te.restart(!0) && f && f(ke)
                                    },
                                    onComplete: function onComplete() {
                                        ke.update(),
                                            Me = Ae(),
                                            _ = w = O && !ve ? O.totalProgress() : ke.progress,
                                        h && h(ke),
                                        d && d(ke)
                                    }
                                }, e, a * N, c - e - a * N),
                            u && u(ke, A.tween)
                        }
                    }
                }).pause()),
            a && (Tt[a] = ke),
                i = (i = (ie = ke.trigger = J(ie || !0 !== ae && ae)) && ie._gsap && ie._gsap.stRevert) && i(ke),
                ae = !0 === ae ? ie : J(ae),
            ct(T) && (T = {
                targets: ie,
                className: T
            }),
            ae && (!1 === se || se === mt || (se = !(!se && ae.parentNode && ae.parentNode.style && "flex" === kb(ae.parentNode).display) && bt),
                ke.pin = ae,
                (n = Le.core.getCache(ae)).spacer ? X = n.pinState : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement),
                    n.spacerIsNative = !!l,
                l && (n.spacerState = gc(l))),
                    n.spacer = V = l || Xe.createElement("div"),
                    V.classList.add("pin-spacer"),
                a && V.classList.add("pin-spacer-" + a),
                    n.pinState = X = gc(ae)),
            !1 !== E.force3D && Le.set(ae, {
                force3D: !0
            }),
                ke.spacer = V = n.spacer,
                r = kb(ae),
                m = r[se + he.os2],
                U = Le.getProperty(ae),
                b = Le.quickSetter(ae, he.a, xt),
                dc(ae, V, r),
                G = gc(ae)),
                we) {
                e = Ta(we) ? mb(we, wt) : wt,
                    q = Bb("scroller-start", a, be, he, e, 0),
                    H = Bb("scroller-end", a, be, he, e, 0, q),
                    t = q["offset" + he.op.d2];
                var u = J(z(be, "content") || be);
                I = this.markerStart = Bb("start", a, u, he, e, t, 0, de),
                    Y = this.markerEnd = Bb("end", a, u, he, e, t, 0, de),
                de && (S = Le.quickSetter([I, Y], he.a, xt)),
                ye || Ie.length && !0 === z(be, "fixedMarkers") || (function _makePositionable(e) {
                    var t = kb(e).position;
                    e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                }(me ? We : be),
                    Le.set([q, H], {
                        force3D: !0
                    }),
                    y = Le.quickSetter(q, he.a, xt),
                    x = Le.quickSetter(H, he.a, xt))
            }
            if (de) {
                var f = de.vars.onUpdate
                    , d = de.vars.onUpdateParams;
                de.eventCallback("onUpdate", function() {
                    ke.update(0, 0, 1),
                    f && f.apply(de, d || [])
                })
            }
            if (ke.previous = function() {
                return kt[kt.indexOf(ke) - 1]
            }
                ,
                ke.next = function() {
                    return kt[kt.indexOf(ke) + 1]
                }
                ,
                ke.revert = function(e, t) {
                    if (!t)
                        return ke.kill(!0);
                    var r = !1 !== e || !ke.enabled
                        , n = je;
                    r !== ke.isReverted && (r && (re = Math.max(Ae(), ke.scroll.rec || 0),
                        Oe = ke.progress,
                        ne = O && O.progress()),
                    I && [I, Y, q, H].forEach(function(e) {
                        return e.style.display = r ? "none" : "block"
                    }),
                    r && (je = ke).update(r),
                    !ae || fe && ke.isActive || (r ? function _swapPinOut(e, t, r) {
                        Et(r);
                        var n = e._gsap;
                        if (n.spacerIsNative)
                            Et(n.spacerState);
                        else if (e._gsap.swappedIn) {
                            var o = t.parentNode;
                            o && (o.insertBefore(e, t),
                                o.removeChild(t))
                        }
                        e._gsap.swappedIn = !1
                    }(ae, V, X) : dc(ae, V, kb(ae), $)),
                    r || ke.update(r),
                        je = n,
                        ke.isReverted = r)
                }
                ,
                ke.refresh = function(e, t, r, n) {
                    if (!je && ke.enabled || t)
                        if (ae && e && st)
                            ub(ScrollTrigger, "scrollEnd", Mb);
                        else {
                            !rt && Te && Te(ke),
                                je = ke,
                            A.tween && !r && (A.tween.kill(),
                                A.tween = 0),
                            ee && ee.pause(),
                            le && O && O.revert({
                                kill: !1
                            }).invalidate(),
                            ke.isReverted || ke.revert(!0, !0),
                                ke._subPinOffset = !1;
                            var o, i, a, s, l, c, u, f, d, p, g, h, v, b = Ce(), m = Pe(), y = de ? de.duration() : Oa(be, he), x = N <= .01, _ = 0, w = n || 0, S = Ta(r) ? r.end : E.end, k = E.endTrigger || ie, T = Ta(r) ? r.start : E.start || (0 !== E.start && ie ? ae ? "0 0" : "0 100%" : 0), C = ke.pinnedContainer = E.pinnedContainer && J(E.pinnedContainer, ke), P = ie && Math.max(0, kt.indexOf(ke)) || 0, M = P;
                            for (we && Ta(r) && (h = Le.getProperty(q, he.p),
                                v = Le.getProperty(H, he.p)); M--; )
                                (c = kt[M]).end || c.refresh(0, 1) || (je = ke),
                                !(u = c.pin) || u !== ie && u !== ae && u !== C || c.isReverted || ((p = p || []).unshift(c),
                                    c.revert(!0, !0)),
                                c !== kt[M] && (P--,
                                    M--);
                            for (Ra(T) && (T = T(ke)),
                                     T = Aa(T, "start", ke),
                                     D = jc(T, ie, b, he, Ae(), I, q, ke, m, Se, ye, y, de, ke._startClamp && "_startClamp") || (ae ? -.001 : 0),
                                 Ra(S) && (S = S(ke)),
                                 ct(S) && !S.indexOf("+=") && (~S.indexOf(" ") ? S = (ct(T) ? T.split(" ")[0] : "") + S : (_ = Ab(S.substr(2), b),
                                     S = ct(T) ? T : (de ? Le.utils.mapRange(0, de.duration(), de.scrollTrigger.start, de.scrollTrigger.end, D) : D) + _,
                                     k = ie)),
                                     S = Aa(S, "end", ke),
                                     F = Math.max(D, jc(S || (k ? "100% 0" : y), k, b, he, Ae() + _, Y, H, ke, m, Se, ye, y, de, ke._endClamp && "_endClamp")) || -.001,
                                     _ = 0,
                                     M = P; M--; )
                                (u = (c = kt[M]).pin) && c.start - c._pinPush <= D && !de && 0 < c.end && (o = c.end - (ke._startClamp ? Math.max(0, c.start) : c.start),
                                (u === ie && c.start - c._pinPush < D || u === C) && isNaN(T) && (_ += o * (1 - c.progress)),
                                u === ae && (w += o));
                            if (D += _,
                                F += _,
                            ke._startClamp && (ke._startClamp += _),
                            ke._endClamp && !rt && (ke._endClamp = F || -.001,
                                F = Math.min(F, Oa(be, he))),
                                N = F - D || (D -= .01) && .001,
                            x && (Oe = Le.utils.clamp(0, 1, Le.utils.normalize(D, F, re))),
                                ke._pinPush = w,
                            I && _ && ((o = {})[he.a] = "+=" + _,
                            C && (o[he.p] = "-=" + Ae()),
                                Le.set([I, Y], o)),
                                ae)
                                o = kb(ae),
                                    s = he === He,
                                    a = Ae(),
                                    j = parseFloat(U(he.a)) + w,
                                !y && 1 < F && (g = {
                                    style: g = (me ? Xe.scrollingElement || Je : be).style,
                                    value: g["overflow" + he.a.toUpperCase()]
                                },
                                me && "scroll" !== kb(We)["overflow" + he.a.toUpperCase()] && (g.style["overflow" + he.a.toUpperCase()] = "scroll")),
                                    dc(ae, V, o),
                                    G = gc(ae),
                                    i = _t(ae, !0),
                                    f = ye && K(be, s ? qe : He)(),
                                se && (($ = [se + he.os2, N + w + xt]).t = V,
                                (M = se === bt ? ob(ae, he) + N + w : 0) && $.push(he.d, M + xt),
                                    Et($),
                                C && kt.forEach(function(e) {
                                    e.pin === C && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                                }),
                                ye && Ae(re)),
                                ye && ((l = {
                                    top: i.top + (s ? a - D : f) + xt,
                                    left: i.left + (s ? f : a - D) + xt,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                })[ft] = l.maxWidth = Math.ceil(i.width) + xt,
                                    l[dt] = l.maxHeight = Math.ceil(i.height) + xt,
                                    l[mt] = l[mt + ht] = l[mt + pt] = l[mt + vt] = l[mt + gt] = "0",
                                    l[bt] = o[bt],
                                    l[bt + ht] = o[bt + ht],
                                    l[bt + pt] = o[bt + pt],
                                    l[bt + vt] = o[bt + vt],
                                    l[bt + gt] = o[bt + gt],
                                    W = function _copyState(e, t, r) {
                                        for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2)
                                            n = e[a],
                                                o.push(n, n in t ? t[n] : e[a + 1]);
                                        return o.t = e.t,
                                            o
                                    }(X, l, fe),
                                rt && Ae(0)),
                                    O ? (d = O._initted,
                                        et(1),
                                        O.render(O.duration(), !0, !0),
                                        Q = U(he.a) - j + N + w,
                                        Z = 1 < Math.abs(N - Q),
                                    ye && Z && W.splice(W.length - 2, 2),
                                        O.render(0, !0, !0),
                                    d || O.invalidate(!0),
                                    O.parent || O.totalTime(O.totalTime()),
                                        et(0)) : Q = N,
                                g && (g.value ? g.style["overflow" + he.a.toUpperCase()] = g.value : g.style.removeProperty("overflow-" + he.a));
                            else if (ie && Ae() && !de)
                                for (i = ie.parentNode; i && i !== We; )
                                    i._pinOffset && (D -= i._pinOffset,
                                        F -= i._pinOffset),
                                        i = i.parentNode;
                            p && p.forEach(function(e) {
                                return e.revert(!1, !0)
                            }),
                                ke.start = D,
                                ke.end = F,
                                R = B = rt ? re : Ae(),
                            de || rt || (R < re && Ae(re),
                                ke.scroll.rec = 0),
                                ke.revert(!1, !0),
                                Ee = at(),
                            te && (Me = -1,
                                te.restart(!0)),
                                je = 0,
                            O && ve && (O._initted || ne) && O.progress() !== ne && O.progress(ne || 0, !0).render(O.time(), !0, !0),
                            (x || Oe !== ke.progress || de) && (O && !ve && O.totalProgress(de && D < -.001 && !Oe ? Le.utils.normalize(D, F, 0) : Oe, !0),
                                ke.progress = x || (R - D) / N === Oe ? 0 : Oe),
                            ae && se && (V._pinOffset = Math.round(ke.progress * Q)),
                            ee && ee.invalidate(),
                            isNaN(h) || (h -= Le.getProperty(q, he.p),
                                v -= Le.getProperty(H, he.p),
                                nc(q, he, h),
                                nc(I, he, h - (n || 0)),
                                nc(H, he, v),
                                nc(Y, he, v - (n || 0))),
                            x && !rt && ke.update(),
                            !oe || rt || L || (L = !0,
                                oe(ke),
                                L = !1)
                        }
                }
                ,
                ke.getVelocity = function() {
                    return (Ae() - B) / (at() - Ue) * 1e3 || 0
                }
                ,
                ke.endAnimation = function() {
                    Ua(ke.callbackAnimation),
                    O && (ee ? ee.progress(1) : O.paused() ? ve || Ua(O, ke.direction < 0, 1) : Ua(O, O.reversed()))
                }
                ,
                ke.labelToScroll = function(e) {
                    return O && O.labels && (D || ke.refresh() || D) + O.labels[e] / O.duration() * N || 0
                }
                ,
                ke.getTrailing = function(t) {
                    var e = kt.indexOf(ke)
                        , r = 0 < ke.direction ? kt.slice(0, e).reverse() : kt.slice(e + 1);
                    return (ct(t) ? r.filter(function(e) {
                        return e.vars.preventOverlaps === t
                    }) : r).filter(function(e) {
                        return 0 < ke.direction ? e.end <= D : e.start >= F
                    })
                }
                ,
                ke.update = function(e, t, r) {
                    if (!de || r || e) {
                        var n, o, i, a, s, l, c, u = !0 === rt ? re : ke.scroll(), f = e ? 0 : (u - D) / N, d = f < 0 ? 0 : 1 < f ? 1 : f || 0, p = ke.progress;
                        if (t && (B = R,
                            R = de ? Ae() : u,
                        ue && (w = _,
                            _ = O && !ve ? O.totalProgress() : d)),
                        M && !d && ae && !je && !it && st && D < u + (u - B) / (at() - Ue) * M && (d = 1e-4),
                        d !== p && ke.enabled) {
                            if (a = (s = (n = ke.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p,
                                ke.direction = p < d ? 1 : -1,
                                ke.progress = d,
                            a && !je && (o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3,
                            ve && (i = !s && "none" !== _e[o + 1] && _e[o + 1] || _e[o],
                                c = O && ("complete" === i || "reset" === i || i in O))),
                            ge && (s || c) && (c || P || !O) && (Ra(ge) ? ge(ke) : ke.getTrailing(ge).forEach(function(e) {
                                return e.endAnimation()
                            })),
                            ve || (!ee || je || it ? O && O.totalProgress(d, !(!je || !Ee && !e)) : (ee._dp._time - ee._start !== ee._time && ee.render(ee._dp._time - ee._start),
                                ee.resetTo ? ee.resetTo("totalProgress", d, O._tTime / O._tDur) : (ee.vars.totalProgress = d,
                                    ee.invalidate().restart()))),
                                ae)
                                if (e && se && (V.style[se + he.os2] = m),
                                    ye) {
                                    if (a) {
                                        if (l = !e && p < d && u < F + 1 && u + 1 >= Oa(be, he),
                                            fe)
                                            if (e || !n && !l)
                                                lc(ae, V);
                                            else {
                                                var g = _t(ae, !0)
                                                    , h = u - D;
                                                lc(ae, We, g.top + (he === He ? h : 0) + xt, g.left + (he === He ? 0 : h) + xt)
                                            }
                                        Et(n || l ? W : G),
                                        Z && d < 1 && n || b(j + (1 !== d || l ? 0 : Q))
                                    }
                                } else
                                    b(Ga(j + Q * d));
                            !ue || A.tween || je || it || te.restart(!0),
                            T && (s || ce && d && (d < 1 || !tt)) && Ge(T.targets).forEach(function(e) {
                                return e.classList[n || ce ? "add" : "remove"](T.className)
                            }),
                            !k || ve || e || k(ke),
                                a && !je ? (ve && (c && ("complete" === i ? O.pause().totalProgress(1) : "reset" === i ? O.restart(!0).pause() : "restart" === i ? O.restart(!0) : O[i]()),
                                k && k(ke)),
                                !s && tt || (C && s && Va(ke, C),
                                xe[o] && Va(ke, xe[o]),
                                ce && (1 === d ? ke.kill(!1, 1) : xe[o] = 0),
                                s || xe[o = 1 === d ? 1 : 3] && Va(ke, xe[o])),
                                pe && !n && Math.abs(ke.getVelocity()) > (Sa(pe) ? pe : 2500) && (Ua(ke.callbackAnimation),
                                    ee ? ee.progress(1) : Ua(O, "reverse" === i ? 1 : !d, 1))) : ve && k && !je && k(ke)
                        }
                        if (x) {
                            var v = de ? u / de.duration() * (de._caScrollDist || 0) : u;
                            y(v + (q._isFlipped ? 1 : 0)),
                                x(v)
                        }
                        S && S(-u / de.duration() * (de._caScrollDist || 0))
                    }
                }
                ,
                ke.enable = function(e, t) {
                    ke.enabled || (ke.enabled = !0,
                        ub(be, "resize", Jb),
                    me || ub(be, "scroll", Hb),
                    Te && ub(ScrollTrigger, "refreshInit", Te),
                    !1 !== e && (ke.progress = Oe = 0,
                        R = B = Me = Ae()),
                    !1 !== t && ke.refresh())
                }
                ,
                ke.getTween = function(e) {
                    return e && A ? A.tween : ee
                }
                ,
                ke.setPositions = function(e, t, r, n) {
                    if (de) {
                        var o = de.scrollTrigger
                            , i = de.duration()
                            , a = o.end - o.start;
                        e = o.start + a * e / i,
                            t = o.start + a * t / i
                    }
                    ke.refresh(!1, !1, {
                        start: Ba(e, r && !!ke._startClamp),
                        end: Ba(t, r && !!ke._endClamp)
                    }, n),
                        ke.update()
                }
                ,
                ke.adjustPinSpacing = function(e) {
                    if ($ && e) {
                        var t = $.indexOf(he.d) + 1;
                        $[t] = parseFloat($[t]) + e + xt,
                            $[1] = parseFloat($[1]) + e + xt,
                            Et($)
                    }
                }
                ,
                ke.disable = function(e, t) {
                    if (ke.enabled && (!1 !== e && ke.revert(!0, !0),
                        ke.enabled = ke.isActive = !1,
                    t || ee && ee.pause(),
                        re = 0,
                    n && (n.uncache = 1),
                    Te && vb(ScrollTrigger, "refreshInit", Te),
                    te && (te.pause(),
                    A.tween && A.tween.kill() && (A.tween = 0)),
                        !me)) {
                        for (var r = kt.length; r--; )
                            if (kt[r].scroller === be && kt[r] !== ke)
                                return;
                        vb(be, "resize", Jb),
                        me || vb(be, "scroll", Hb)
                    }
                }
                ,
                ke.kill = function(e, t) {
                    ke.disable(e, t),
                    ee && !t && ee.kill(),
                    a && delete Tt[a];
                    var r = kt.indexOf(ke);
                    0 <= r && kt.splice(r, 1),
                    r === Qe && 0 < Mt && Qe--,
                        r = 0,
                        kt.forEach(function(e) {
                            return e.scroller === ke.scroller && (r = 1)
                        }),
                    r || rt || (ke.scroll.rec = 0),
                    O && (O.scrollTrigger = null,
                    e && O.revert({
                        kill: !1
                    }),
                    t || O.kill()),
                    I && [I, Y, q, H].forEach(function(e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }),
                    ot === ke && (ot = 0),
                    ae && (n && (n.uncache = 1),
                        r = 0,
                        kt.forEach(function(e) {
                            return e.pin === ae && r++
                        }),
                    r || (n.spacer = 0)),
                    E.onKill && E.onKill(ke)
                }
                ,
                kt.push(ke),
                ke.enable(!1, !1),
            i && i(ke),
            O && O.add && !N) {
                var v = ke.update;
                ke.update = function() {
                    ke.update = v,
                    D || F || ke.refresh()
                }
                    ,
                    Le.delayedCall(.01, ke.update),
                    N = .01,
                    D = F = 0
            } else
                ke.refresh();
            ae && function _queueRefreshAll() {
                if (nt !== Ct) {
                    var e = nt = Ct;
                    requestAnimationFrame(function() {
                        return e === Ct && Pt(!0)
                    })
                }
            }()
        } else
            this.update = this.refresh = this.kill = Fa
    }
        ,
        ScrollTrigger.register = function register(e) {
            return s || (Le = e || Ia(),
            Ha() && window.document && ScrollTrigger.enable(),
                s = lt),
                s
        }
        ,
        ScrollTrigger.defaults = function defaults(e) {
            if (e)
                for (var t in e)
                    St[t] = e[t];
            return St
        }
        ,
        ScrollTrigger.disable = function disable(t, r) {
            lt = 0,
                kt.forEach(function(e) {
                    return e[r ? "kill" : "disable"](t)
                }),
                vb(Ne, "wheel", Hb),
                vb(Xe, "scroll", Hb),
                clearInterval(u),
                vb(Xe, "touchcancel", Fa),
                vb(We, "touchstart", Fa),
                tb(vb, Xe, "pointerdown,touchstart,mousedown", Da),
                tb(vb, Xe, "pointerup,touchend,mouseup", Ea),
                c.kill(),
                Pa(vb);
            for (var e = 0; e < ze.length; e += 3)
                wb(vb, ze[e], ze[e + 1]),
                    wb(vb, ze[e], ze[e + 2])
        }
        ,
        ScrollTrigger.enable = function enable() {
            if (Ne = window,
                Xe = document,
                Je = Xe.documentElement,
                We = Xe.body,
            Le && (Ge = Le.utils.toArray,
                Ve = Le.utils.clamp,
                x = Le.core.context || Fa,
                et = Le.core.suppressOverwrites || Fa,
                _ = Ne.history.scrollRestoration || "auto",
                j = Ne.pageYOffset,
                Le.core.globals("ScrollTrigger", ScrollTrigger),
                We)) {
                lt = 1,
                    (w = document.createElement("div")).style.height = "100vh",
                    w.style.position = "absolute",
                    Wb(),
                    function _rafBugFix() {
                        return lt && requestAnimationFrame(_rafBugFix)
                    }(),
                    E.register(Le),
                    ScrollTrigger.isTouch = E.isTouch,
                    R = E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                    ub(Ne, "wheel", Hb),
                    l = [Ne, Xe, Je, We],
                    Le.matchMedia ? (ScrollTrigger.matchMedia = function(e) {
                        var t, r = Le.matchMedia();
                        for (t in e)
                            r.add(t, e[t]);
                        return r
                    }
                        ,
                        Le.addEventListener("matchMediaInit", function() {
                            return Qb()
                        }),
                        Le.addEventListener("matchMediaRevert", function() {
                            return Pb()
                        }),
                        Le.addEventListener("matchMedia", function() {
                            Pt(0, 1),
                                V("matchMedia")
                        }),
                        Le.matchMedia("(orientation: portrait)", function() {
                            return Ib(),
                                Ib
                        })) : console.warn("Requires GSAP 3.11.0 or later"),
                    Ib(),
                    ub(Xe, "scroll", Hb);
                var e, t, r = We.style, n = r.borderTopStyle, o = Le.core.Animation.prototype;
                for (o.revert || Object.defineProperty(o, "revert", {
                    value: function value() {
                        return this.time(-.01, !0)
                    }
                }),
                         r.borderTopStyle = "solid",
                         e = _t(We),
                         He.m = Math.round(e.top + He.sc()) || 0,
                         qe.m = Math.round(e.left + qe.sc()) || 0,
                         n ? r.borderTopStyle = n : r.removeProperty("border-top-style"),
                         u = setInterval(Gb, 250),
                         Le.delayedCall(.5, function() {
                             return it = 0
                         }),
                         ub(Xe, "touchcancel", Fa),
                         ub(We, "touchstart", Fa),
                         tb(ub, Xe, "pointerdown,touchstart,mousedown", Da),
                         tb(ub, Xe, "pointerup,touchend,mouseup", Ea),
                         f = Le.utils.checkPrefix("transform"),
                         Z.push(f),
                         s = at(),
                         c = Le.delayedCall(.2, Pt).pause(),
                         g = [Xe, "visibilitychange", function() {
                             var e = Ne.innerWidth
                                 , t = Ne.innerHeight;
                             Xe.hidden ? (d = e,
                                 p = t) : d === e && p === t || Jb()
                         }
                             , Xe, "DOMContentLoaded", Pt, Ne, "load", Pt, Ne, "resize", Jb],
                         Pa(ub),
                         kt.forEach(function(e) {
                             return e.enable(0, 1)
                         }),
                         t = 0; t < ze.length; t += 3)
                    wb(vb, ze[t], ze[t + 1]),
                        wb(vb, ze[t], ze[t + 2])
            }
        }
        ,
        ScrollTrigger.config = function config(e) {
            "limitCallbacks"in e && (tt = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(u) || (u = t) && setInterval(Gb, t),
            "ignoreMobileResize"in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
            "autoRefreshEvents"in e && (Pa(vb) || Pa(ub, e.autoRefreshEvents || "none"),
                h = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        ,
        ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
            var r = J(e)
                , n = ze.indexOf(r)
                , o = Ja(r);
            ~n && ze.splice(n, o ? 6 : 2),
            t && (o ? Ie.unshift(Ne, t, We, t, Je, t) : Ie.unshift(r, t))
        }
        ,
        ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
            kt.forEach(function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            })
        }
        ,
        ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
            var n = (ct(e) ? J(e) : e).getBoundingClientRect()
                , o = n[r ? ft : dt] * t || 0;
            return r ? 0 < n.right - o && n.left + o < Ne.innerWidth : 0 < n.bottom - o && n.top + o < Ne.innerHeight
        }
        ,
        ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
            ct(e) && (e = J(e));
            var n = e.getBoundingClientRect()
                , o = n[r ? ft : dt]
                , i = null == t ? o / 2 : t in q ? q[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
            return r ? (n.left + i) / Ne.innerWidth : (n.top + i) / Ne.innerHeight
        }
        ,
        ScrollTrigger.killAll = function killAll(e) {
            if (kt.slice(0).forEach(function(e) {
                return "ScrollSmoother" !== e.vars.id && e.kill()
            }),
            !0 !== e) {
                var t = X.killAll || [];
                X = {},
                    t.forEach(function(e) {
                        return e()
                    })
            }
        }
        ,
        ScrollTrigger);
    function ScrollTrigger(e, t) {
        s || ScrollTrigger.register(Le) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            x(this),
            this.init(e, t)
    }
    re.version = "3.12.2",
        re.saveStyles = function(e) {
            return e ? Ge(e).forEach(function(e) {
                if (e && e.style) {
                    var t = U.indexOf(e);
                    0 <= t && U.splice(t, 5),
                        U.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Le.core.getCache(e), x())
                }
            }) : U
        }
        ,
        re.revert = function(e, t) {
            return Qb(!e, t)
        }
        ,
        re.create = function(e, t) {
            return new re(e,t)
        }
        ,
        re.refresh = function(e) {
            return e ? Jb() : (s || re.register()) && Pt(!0)
        }
        ,
        re.update = function(e) {
            return ++ze.cache && Q(!0 === e ? 2 : 0)
        }
        ,
        re.clearScrollMemory = Rb,
        re.maxScroll = function(e, t) {
            return Oa(e, t ? qe : He)
        }
        ,
        re.getScrollFunc = function(e, t) {
            return K(J(e), t ? qe : He)
        }
        ,
        re.getById = function(e) {
            return Tt[e]
        }
        ,
        re.getAll = function() {
            return kt.filter(function(e) {
                return "ScrollSmoother" !== e.vars.id
            })
        }
        ,
        re.isScrolling = function() {
            return !!st
        }
        ,
        re.snapDirectional = rb,
        re.addEventListener = function(e, t) {
            var r = X[e] || (X[e] = []);
            ~r.indexOf(t) || r.push(t)
        }
        ,
        re.removeEventListener = function(e, t) {
            var r = X[e]
                , n = r && r.indexOf(t);
            0 <= n && r.splice(n, 1)
        }
        ,
        re.batch = function(e, t) {
            function up(e, t) {
                var r = []
                    , n = []
                    , o = Le.delayedCall(i, function() {
                    t(r, n),
                        r = [],
                        n = []
                }).pause();
                return function(e) {
                    r.length || o.restart(!0),
                        r.push(e.trigger),
                        n.push(e),
                    a <= r.length && o.progress(1)
                }
            }
            var r, n = [], o = {}, i = t.interval || .016, a = t.batchMax || 1e9;
            for (r in t)
                o[r] = "on" === r.substr(0, 2) && Ra(t[r]) && "onRefreshInit" !== r ? up(0, t[r]) : t[r];
            return Ra(a) && (a = a(),
                ub(re, "refresh", function() {
                    return a = t.batchMax()
                })),
                Ge(e).forEach(function(e) {
                    var t = {};
                    for (r in o)
                        t[r] = o[r];
                    t.trigger = e,
                        n.push(re.create(t))
                }),
                n
        }
    ;
    function qc(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0),
            n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }
    function rc(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (E.isTouch ? " pinch-zoom" : "") : "none",
        e === Je && rc(We, t)
    }
    function tc(e) {
        var t, r = e.event, n = e.target, o = e.axis, i = (r.changedTouches ? r.changedTouches[0] : r).target, a = i._gsap || Le.core.getCache(i), s = at();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for (; i && i !== We && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !oe[(t = kb(i)).overflowY] && !oe[t.overflowX]); )
                i = i.parentNode;
            a._isScroll = i && i !== n && !Ja(i) && (oe[(t = kb(i)).overflowY] || oe[t.overflowX]),
                a._isScrollT = s
        }
        !a._isScroll && "x" !== o || (r.stopPropagation(),
            r._gsapAllow = !0)
    }
    function uc(e, t, r, n) {
        return E.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && tc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && ub(Xe, E.eventTypes[0], ae, !1, !0)
            },
            onDisable: function onDisable() {
                return vb(Xe, E.eventTypes[0], ae, !0)
            }
        })
    }
    function yc(e) {
        function rq() {
            return o = !1
        }
        function uq() {
            i = Oa(p, He),
                T = Ve(R ? 1 : 0, i),
            f && (k = Ve(0, Oa(p, qe))),
                l = Ct
        }
        function vq() {
            v._gsap.y = Ga(parseFloat(v._gsap.y) + b.offset) + "px",
                v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)",
                b.offset = b.cacheID = 0
        }
        function Bq() {
            uq(),
            a.isActive() && a.vars.scrollY > i && (b() > i ? a.progress(1) && b(i) : a.resetTo("scrollY", i))
        }
        Ta(e) || (e = {}),
            e.preventDefault = e.isNormalizer = e.allowClicks = !0,
        e.type || (e.type = "wheel,touch"),
            e.debounce = !!e.debounce,
            e.id = e.id || "normalizer";
        var n, i, l, o, a, c, u, s, f = e.normalizeScrollX, t = e.momentum, r = e.allowNestedScroll, d = e.onRelease, p = J(e.target) || Je, g = Le.core.globals().ScrollSmoother, h = g && g.get(), v = R && (e.content && J(e.content) || h && !1 !== e.content && !h.smooth() && h.content()), b = K(p, He), m = K(p, qe), y = 1, x = (E.isTouch && Ne.visualViewport ? Ne.visualViewport.scale * Ne.visualViewport.width : Ne.outerWidth) / Ne.innerWidth, _ = 0, w = Ra(t) ? function() {
                return t(n)
            }
            : function() {
                return t || 2.8
            }
            , S = uc(p, e.type, !0, r), k = Fa, T = Fa;
        return v && Le.set(v, {
            y: "+=0"
        }),
            e.ignoreCheck = function(e) {
                return R && "touchmove" === e.type && function ignoreDrag() {
                    if (o) {
                        requestAnimationFrame(rq);
                        var e = Ga(n.deltaY / 2)
                            , t = T(b.v - e);
                        if (v && t !== b.v + b.offset) {
                            b.offset = t - b.v;
                            var r = Ga((parseFloat(v && v._gsap.y) || 0) - b.offset);
                            v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)",
                                v._gsap.y = r + "px",
                                b.cacheID = ze.cache,
                                Q()
                        }
                        return !0
                    }
                    b.offset && vq(),
                        o = !0
                }() || 1.05 < y && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length
            }
            ,
            e.onPress = function() {
                o = !1;
                var e = y;
                y = Ga((Ne.visualViewport && Ne.visualViewport.scale || 1) / x),
                    a.pause(),
                e !== y && rc(p, 1.01 < y || !f && "x"),
                    c = m(),
                    u = b(),
                    uq(),
                    l = Ct
            }
            ,
            e.onRelease = e.onGestureStart = function(e, t) {
                if (b.offset && vq(),
                    t) {
                    ze.cache++;
                    var r, n, o = w();
                    f && (n = (r = m()) + .05 * o * -e.velocityX / .227,
                        o *= qc(m, r, n, Oa(p, qe)),
                        a.vars.scrollX = k(n)),
                        n = (r = b()) + .05 * o * -e.velocityY / .227,
                        o *= qc(b, r, n, Oa(p, He)),
                        a.vars.scrollY = T(n),
                        a.invalidate().duration(o).play(.01),
                    (R && a.vars.scrollY >= i || i - 1 <= r) && Le.to({}, {
                        onUpdate: Bq,
                        duration: o
                    })
                } else
                    s.restart(!0);
                d && d(e)
            }
            ,
            e.onWheel = function() {
                a._ts && a.pause(),
                1e3 < at() - _ && (l = 0,
                    _ = at())
            }
            ,
            e.onChange = function(e, t, r, n, o) {
                if (Ct !== l && uq(),
                t && f && m(k(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])),
                    r) {
                    b.offset && vq();
                    var i = o[2] === r
                        , a = i ? u + e.startY - e.y : b() + r - o[1]
                        , s = T(a);
                    i && a !== s && (u += s - a),
                        b(s)
                }
                (r || t) && Q()
            }
            ,
            e.onEnable = function() {
                rc(p, !f && "x"),
                    re.addEventListener("refresh", Bq),
                    ub(Ne, "resize", Bq),
                b.smooth && (b.target.style.scrollBehavior = "auto",
                    b.smooth = m.smooth = !1),
                    S.enable()
            }
            ,
            e.onDisable = function() {
                rc(p, !0),
                    vb(Ne, "resize", Bq),
                    re.removeEventListener("refresh", Bq),
                    S.kill()
            }
            ,
            e.lockAxis = !1 !== e.lockAxis,
        ((n = new E(e)).iOS = R) && !b() && b(1),
        R && Le.ticker.add(Fa),
            s = n._dc,
            a = Le.to(n, {
                ease: "power4",
                paused: !0,
                scrollX: f ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                    scrollY: mc(b, b(), function() {
                        return a.pause()
                    })
                },
                onUpdate: Q,
                onComplete: s.vars.onComplete
            }),
            n
    }
    var ne, oe = {
        auto: 1,
        scroll: 1
    }, ie = /(input|label|select|textarea)/i, ae = function _captureInputs(e) {
        var t = ie.test(e.target.tagName);
        (t || ne) && (e._gsapAllow = !0,
            ne = t)
    };
    re.sort = function(e) {
        return kt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        }
        )
    }
        ,
        re.observe = function(e) {
            return new E(e)
        }
        ,
        re.normalizeScroll = function(e) {
            if (void 0 === e)
                return v;
            if (!0 === e && v)
                return v.enable();
            if (!1 === e)
                return v && v.kill();
            var t = e instanceof E ? e : yc(e);
            return v && v.target === t.target && v.kill(),
            Ja(t.target) && (v = t),
                t
        }
        ,
        re.core = {
            _getVelocityProp: L,
            _inputObserver: uc,
            _scrollers: ze,
            _proxies: Ie,
            bridge: {
                ss: function ss() {
                    st || V("scrollStart"),
                        st = at()
                },
                ref: function ref() {
                    return je
                }
            }
        },
    Ia() && Le.registerPlugin(re),
        e.ScrollTrigger = re,
        e.default = re;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
//  ScrollTrigger js end

//  SplitText js start
/*!
 * VERSION: beta 0.2.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(function(t) {
        "use strict";
        var e = t.GreenSockGlobals || t
            , i = function(t) {
            var i, s = t.split("."), r = e;
            for (i = 0; s.length > i; i++)
                r[s[i]] = r = r[s[i]] || {};
            return r
        }
            , s = i("com.greensock.utils")
            , r = function(t) {
            var e = t.nodeType
                , i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent)
                    return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling)
                    i += r(t)
            } else if (3 === e || 4 === e)
                return t.nodeValue;
            return i
        }
            , n = document
            , a = n.defaultView ? n.defaultView.getComputedStyle : function() {}
            , o = /([A-Z])/g
            , h = function(t, e, i, s) {
            var r;
            return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()),
                r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle,
                r = i[e]),
                s ? r : parseInt(r, 10) || 0
        }
            , l = function(t) {
            return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
        }
            , _ = function(t) {
            var e, i, s, r = [], n = t.length;
            for (e = 0; n > e; e++)
                if (i = t[e],
                    l(i))
                    for (s = i.length,
                             s = 0; i.length > s; s++)
                        r.push(i[s]);
                else
                    r.push(i);
            return r
        }
            , u = ")eefec303079ad17405c"
            , c = /(?:<br>|<br\/>|<br \/>)/gi
            , p = n.all && !n.addEventListener
            , f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'")
            , m = function(t) {
            t = t || "";
            var e = -1 !== t.indexOf("++")
                , i = 1;
            return e && (t = t.split("++").join("")),
                function() {
                    return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                }
        }
            , d = s.SplitText = e.SplitText = function(t, e) {
            if ("string" == typeof t && (t = d.selector(t)),
                !t)
                throw "cannot split a null element.";
            this.elements = l(t) ? _(t) : [t],
                this.chars = [],
                this.words = [],
                this.lines = [],
                this._originals = [],
                this.vars = e || {},
                this.split(e)
        }
            , g = function(t, e, i, s, o) {
            c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));
            var l, _, p, f, d, g, v, y, T, w, b, x, P, S = r(t), C = e.type || e.split || "chars,words,lines", k = -1 !== C.indexOf("lines") ? [] : null, R = -1 !== C.indexOf("words"), A = -1 !== C.indexOf("chars"), D = "absolute" === e.position || e.absolute === !0, O = D ? "&#173; " : " ", M = -999, L = a(t), z = h(t, "paddingLeft", L), I = h(t, "borderBottomWidth", L) + h(t, "borderTopWidth", L), E = h(t, "borderLeftWidth", L) + h(t, "borderRightWidth", L), N = h(t, "paddingTop", L) + h(t, "paddingBottom", L), F = h(t, "paddingLeft", L) + h(t, "paddingRight", L), X = h(t, "textAlign", L, !0), U = t.clientHeight, B = t.clientWidth, j = S.length, Y = "</div>", q = m(e.wordsClass), G = m(e.charsClass), V = -1 !== (e.linesClass || "").indexOf("++"), Q = e.linesClass;
            for (V && (Q = Q.split("++").join("")),
                     p = q(),
                     f = 0; j > f; f++)
                g = S.charAt(f),
                    ")" === g && S.substr(f, 20) === u ? (p += Y + "<BR/>",
                    f !== j - 1 && (p += " " + q()),
                        f += 19) : " " === g && " " !== S.charAt(f - 1) && f !== j - 1 ? (p += Y,
                    f !== j - 1 && (p += O + q())) : p += A && " " !== g ? G() + g + "</div>" : g;
            for (t.innerHTML = p + Y,
                     d = t.getElementsByTagName("*"),
                     j = d.length,
                     v = [],
                     f = 0; j > f; f++)
                v[f] = d[f];
            if (k || D)
                for (f = 0; j > f; f++)
                    y = v[f],
                        _ = y.parentNode === t,
                    (_ || D || A && !R) && (T = y.offsetTop,
                    k && _ && T !== M && "BR" !== y.nodeName && (l = [],
                        k.push(l),
                        M = T),
                    D && (y._x = y.offsetLeft,
                        y._y = T,
                        y._w = y.offsetWidth,
                        y._h = y.offsetHeight),
                    k && (R !== _ && A || (l.push(y),
                        y._x -= z),
                    _ && f && (v[f - 1]._wordEnd = !0)));
            for (f = 0; j > f; f++)
                y = v[f],
                    _ = y.parentNode === t,
                    "BR" !== y.nodeName ? (D && (b = y.style,
                    R || _ || (y._x += y.parentNode._x,
                        y._y += y.parentNode._y),
                        b.left = y._x + "px",
                        b.top = y._y + "px",
                        b.position = "absolute",
                        b.display = "block",
                        b.width = y._w + 1 + "px",
                        b.height = y._h + "px"),
                        R ? _ ? s.push(y) : A && i.push(y) : _ ? (t.removeChild(y),
                            v.splice(f--, 1),
                            j--) : !_ && A && (T = !k && !D && y.nextSibling,
                            t.appendChild(y),
                        T || t.appendChild(n.createTextNode(" ")),
                            i.push(y))) : k || D ? (t.removeChild(y),
                        v.splice(f--, 1),
                        j--) : R || t.appendChild(y);
            if (k) {
                for (D && (w = n.createElement("div"),
                    t.appendChild(w),
                    x = w.offsetWidth + "px",
                    T = w.offsetParent === t ? 0 : t.offsetLeft,
                    t.removeChild(w)),
                         b = t.style.cssText,
                         t.style.cssText = "display:none;"; t.firstChild; )
                    t.removeChild(t.firstChild);
                for (P = !D || !R && !A,
                         f = 0; k.length > f; f++) {
                    for (l = k[f],
                             w = n.createElement("div"),
                             w.style.cssText = "display:block;text-align:" + X + ";position:" + (D ? "absolute;" : "relative;"),
                         Q && (w.className = Q + (V ? f + 1 : "")),
                             o.push(w),
                             j = l.length,
                             d = 0; j > d; d++)
                        "BR" !== l[d].nodeName && (y = l[d],
                            w.appendChild(y),
                        P && (y._wordEnd || R) && w.appendChild(n.createTextNode(" ")),
                        D && (0 === d && (w.style.top = y._y + "px",
                            w.style.left = z + T + "px"),
                            y.style.top = "0px",
                        T && (y.style.left = y._x - T + "px")));
                    R || A || (w.innerHTML = r(w).split(String.fromCharCode(160)).join(" ")),
                    D && (w.style.width = x,
                        w.style.height = y._h + "px"),
                        t.appendChild(w)
                }
                t.style.cssText = b
            }
            D && (U > t.clientHeight && (t.style.height = U - N + "px",
            U > t.clientHeight && (t.style.height = U + I + "px")),
            B > t.clientWidth && (t.style.width = B - F + "px",
            B > t.clientWidth && (t.style.width = B + E + "px")))
        }
            , v = d.prototype;
        v.split = function(t) {
            this.isSplit && this.revert(),
                this.vars = t || this.vars,
                this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var e = 0; this.elements.length > e; e++)
                this._originals[e] = this.elements[e].innerHTML,
                    g(this.elements[e], this.vars, this.chars, this.words, this.lines);
            return this.isSplit = !0,
                this
        }
            ,
            v.revert = function() {
                if (!this._originals)
                    throw "revert() call wasn't scoped properly.";
                for (var t = this._originals.length; --t > -1; )
                    this.elements[t].innerHTML = this._originals[t];
                return this.chars = [],
                    this.words = [],
                    this.lines = [],
                    this.isSplit = !1,
                    this
            }
            ,
            d.selector = t.$ || t.jQuery || function(e) {
                return t.$ ? (d.selector = t.$,
                    t.$(e)) : n ? n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
            }
            ,
            d.version = "0.2.4"
    }
)(_gsScope),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e())
    }("SplitText");

// SplitText js end

window.addEventListener('load',function(){
    if (document.documentElement.clientWidth > 1024) {
        var Bar = document.createElement('div');
        Bar.className = '_scroll_y';
        Bar.innerHTML = '<div></div>';

        document.body.appendChild(Bar);


        var customScrollBar = document.querySelector('._scroll_y div');
        function updateScrollBarHeight() {
            var scrollBarHeight = (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight;
            customScrollBar.style.height = scrollBarHeight + 'px';
        }
        var isDragging = false;
        var startY;
        var startScrollTop;
        var scrollSpeedMultiplier = 2;
        var hideTimer;

        updateScrollBarHeight();

        window.addEventListener('scroll', function() {
            var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

            var scrollBarPosition = scrollPercentage * (window.innerHeight - customScrollBar.offsetHeight);

            customScrollBar.style.transform = `translateY(${scrollBarPosition}px)`;

            customScrollBar.style.opacity = 0.5;

            clearTimeout(hideTimer);

            hideTimer = setTimeout(function() {
                customScrollBar.style.opacity = 0;
            }, 300);
        });

        window.addEventListener('resize', function() {
            updateScrollBarHeight();
        });

        function disableTextSelection() {
            document.body.style.userSelect = 'none';
            document.body.style.webkitUserSelect = 'none';
            document.body.style.mozUserSelect = 'none';
        }

        function enableTextSelection() {
            document.body.style.userSelect = '';
            document.body.style.webkitUserSelect = '';
            document.body.style.mozUserSelect = '';
        }

        customScrollBar.addEventListener('mousedown', function(e) {
            isDragging = true;
            startY = e.clientY;
            startScrollTop = window.scrollY;
            customScrollBar.style.opacity = 1;
            disableTextSelection();
            // 禁止选中内容
        });

        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                var deltaY = (e.clientY - startY) * scrollSpeedMultiplier;
                var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                var scrollTop = startScrollTop + deltaY * (scrollHeight / window.innerHeight);

                if (scrollTop < 0)
                    scrollTop = 0;
                if (scrollTop > scrollHeight)
                    scrollTop = scrollHeight;

                lenis.scrollTo(scrollTop);
            }
        });

        document.addEventListener('mouseup', function() {
            if (isDragging) {
                isDragging = false;
                customScrollBar.style.opacity = 0.5;
                enableTextSelection();
            }
        });

        window.addEventListener('resize', updateScrollBarHeight);

        window.addEventListener('scroll', function() {
            if (!isDragging) {
                var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                var scrollPercentage = window.scrollY / scrollHeight;
                var scrollBarPosition = scrollPercentage * (window.innerHeight - customScrollBar.offsetHeight);
                customScrollBar.style.transform = `translateY(${scrollBarPosition}px)`;
            }
        });

        updateScrollBarHeight();

        function handleScroll(event) {
            let newScrollY = window.scrollY;
            const activeEl = document.activeElement;
            const isTyping =
                activeEl.tagName === 'INPUT' ||
                activeEl.tagName === 'TEXTAREA' ||
                activeEl.isContentEditable;

            if (isTyping) return;

            switch (event.key) {
                case ' ':
                    newScrollY += 1500;
                    break;
                case 'ArrowDown':
                    newScrollY += 80;
                    break;
                case 'ArrowUp':
                    newScrollY -= 80;
                    break;
                case 'PageUp':
                    newScrollY -= 3500;
                    break;
                case 'PageDown':
                    newScrollY += 3500;
                    break;
                default:
                    return;
            }

            event.preventDefault();
            lenis.scrollTo(newScrollY);
        }

        document.addEventListener('keydown', handleScroll);
    }
})
