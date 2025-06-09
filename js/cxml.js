// Utility to convert camelCase to kebab-case
function camelToKebab(str) {
  return str.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
}

function transformCXML(code) {
  // Remove JSX-style block comments {/* ... */}
  code = code.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');

  // Transform variable/object definitions to be properties of the window object
  code = code.replace(/(?:const|let|var)\s+([\w$]+)\s*=\s*(\{[\s\S]*?\}|'[\s\S]*?'|"[\s\S]*?"|`[\s\S]*?`)(;?)/g, 'window.$1 = $2;');

  // Transform <Name config={{ ... }} /> to ${Name({...})}
  code = code.replace(
    /<(\w+)\s+config=\{\{([\s\S]*?)\}\}\s*\/>/g,
    (_, name, configBody) => {
      const config = configBody.trim();
      return `\${${name}({ ${config} })}`;
    }
  );
// style={{obj}}} to useable inline
code = code.replace(/style=\{\{([\s\S]*?)\}\}/g, (_, styleContent) => {
  const cleaned = styleContent
    .replace(/[\n\r]+/g, '')
    .replace(/\s+/g, ' ')
    .replace(/,\s*}/, '}')
    .trim();

  const props = cleaned
    .split(',')
    .map(x => x.trim())
    .filter(Boolean);

  const styles = props.map(pair => {
    const colonIndex = pair.indexOf(':');
    if (colonIndex === -1) return ''; // invalid pair

    const key = pair.slice(0, colonIndex).trim();
    let val = pair.slice(colonIndex + 1).trim();

    // Strip quotes, escape quotes
    val = val.replace(/^['"]+|['"]+$/g, '').replace(/"/g, '&quot;');

    return `${camelToKebab(key)}:${val}`;
  }).filter(Boolean);

  return `style="${styles.join(';')};"`;
});

  // Transform onEvent={handler} to onevent="handler()"
  code = code.replace(/on([a-zA-Z]+)=\{(\w+)\}/g, (_, event, handler) => {
    return `on${event.toLowerCase()}="${handler}()"`;
  });

  // Transform <name/> or <db.user.name/> to ${window.name} or ${window.db.user.name}
  code = code.replace(/<([\w.]+)\s*\/>/g, (_, path) => `\${window.${path}}`);

  // Transform: const Name = (...) to window.Name = `...`
  code = code.replace(/const\s+(\w+)\s*=\s*\(([\s\S]*?)\);/g, (_, name, jsx) => {
    return `window.${name} = \`\n${jsx.trim()}\n\`;`;
  });

  return code;
}

// Injects rendered HTML into the DOM
function renderHTML(html) {
  document.getElementById("app").innerHTML = html;
}

// Main render function to fetch, transform, and render CXML
async function render(filename, componentName) {
  try {
    const response = await fetch(filename);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const cxml = await response.text();
    const transformed = transformCXML(cxml);

    // Evaluate the transformed code in global scope
    new Function(transformed)();

    if (window[componentName]) {
      renderHTML(window[componentName]);
    } else {
      //throw new Error(`Component '${componentName}' not found in window object.`);
      window.location.href = "/js/noData.html";
      //noData.html page means component not find in your js
    }
  } catch (error) {
    //console.error('Error loading or rendering CXML:', error);
    //document.getElementById("app").innerText = "Failed to load content.";
  window.location.href = "/js/error.html";
  //error.html page means no js exist

  }
}
