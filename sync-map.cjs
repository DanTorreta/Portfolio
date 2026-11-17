const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const CODE_DIRS = ['src'].filter((d) => fs.existsSync(path.join(ROOT, d)));
const EXT_REGEX = /\.(tsx?|jsx?|mjs|cjs|css)$/;
const IGNORE_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', 'coverage']);

function readLines(fullPath) {
  if (!fs.existsSync(fullPath)) return [];
  return fs.readFileSync(fullPath, 'utf8').split(/\r?\n/);
}

// Auto-detector de secciones para archivos grandes (>350 líneas)
function autoSections(fullPath, lines) {
  const total = lines.length;
  const hits = [];

  for (let i = 0; i < total; i++) {
    const line = lines[i];
    // Detección de constantes mayores, exportaciones, interfaces y componentes
    const m = line.match(/export\s+(?:const|interface|type|function|default\s+function)\s+([A-Za-z0-9_]+)/);
    if (m) {
      if (hits.length === 0 || i + 1 - hits[hits.length - 1].line >= 40) {
        hits.push({ label: m[1].slice(0, 24), line: i + 1 });
      }
    }
  }

  if (hits.length === 0) {
    return `**${path.relative(ROOT, fullPath).replace(/\\/g, '/')}**(${total}L): main[1-${total}]`;
  }

  const parts = hits.map((cur, idx, arr) => {
    const end = idx + 1 < arr.length ? arr[idx + 1].line - 1 : total;
    return `${cur.label}[${cur.line}-${end}]`;
  });

  return `**${path.relative(ROOT, fullPath).replace(/\\/g, '/')}**(${total}L): ${parts.join(' ')}`;
}

const monoliths = [];
const groupedSmall = {};

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (EXT_REGEX.test(entry.name)) {
      const lines = readLines(full);
      const rel = path.relative(ROOT, full).replace(/\\/g, '/');
      if (lines.length >= 350) {
        monoliths.push(autoSections(full, lines));
      } else {
        const topDir = rel.split('/').slice(0, 2).join('/');
        if (!groupedSmall[topDir]) groupedSmall[topDir] = [];
        groupedSmall[topDir].push(`${rel.slice(topDir.length + 1) || entry.name}(${lines.length}L)`);
      }
    }
  }
}

for (const d of CODE_DIRS) walk(path.join(ROOT, d));

const smallSection = Object.entries(groupedSmall)
  .map(([dir, items]) => `- **${dir}/**: ${items.join(' | ')}`)
  .join('\n');

const md = `# ⚡ PROTOCOLO ZERO-WASTE (-95% TOKENS, AUTO-INDEXADO)

## 1. REGLAS ESTRICTAS DE EJECUCIÓN (INQUEBRANTABLES)
1. **Pensamiento Telegráfico**: Razonamiento interno (\`thinking\`) de máx. 1-3 frases directas. Prohibido divagar o repetir el prompt.
2. **Regla 1-Hop (Cero Rondas Extra)**:
   - **Si está en el Mapa**: Ve DIRECTO a \`read_file\` (ventana de 40-70 líneas con \`StartLine\`/\`EndLine\`) y edita con \`edit_file\`.
   - **Si buscas algo puntual** (en PowerShell): Usa 1 comando con contexto para evitar lecturas intermedias:
     \`Select-String -Path <ruta> -Pattern "<regex>" -Context 6,12 | Select-Object -First 5\`
   - **Paralelismo**: Ejecuta lecturas o ediciones independientes en paralelo en el MISMO turno.
3. **Prohibiciones**: Jamás leas archivos completos sin \`StartLine\`/\`EndLine\` salvo que sean <70L. Cero planes extensos ni subagentes salvo orden explícita.
4. **Respuestas de 1-3 líneas**: Directo al grano. Si creas archivos o sumas/restas >30 líneas, ejecuta \`node sync-map.cjs\`.

## 2. 🗺️ MAPA AUTO-SINCRONIZADO (\`node sync-map.cjs\`)
### Archivos Grandes (>350L) — Coordenadas Quirúrgicas
${monoliths.length ? monoliths.map((m) => `- ${m}`).join('\n') : '- (Ninguno >350L)'}

### Índice Compacto del Proyecto
${smallSection}
`;

fs.writeFileSync(path.join(ROOT, 'GEMINI.md'), md, 'utf8');
console.log('GEMINI.md auto-synced (' + md.split('\n').length + ' lines)');
