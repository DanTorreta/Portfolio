# ⚡ INSTRUCCIÓN MAESTRA PARA IA: INSTALAR PROTOCOLO "ZERO-WASTE" (-95% TOKENS, AUTO-INDEXADO)

> **Cómo usar este archivo en otro proyecto**: Pásale este archivo (o copia su contenido) a la IA de tu nuevo proyecto en Antigravity y dile: *"Ejecuta las instrucciones de este archivo para instalar el Protocolo Zero-Waste en este repositorio"*.

---

## 🎯 OBJETIVO PARA EL AGENTE IA
Debes configurar en la raíz de este repositorio un sistema **100% automático de ahorro extremo de tokens (-95%)** para Antigravity, compuesto por:
1. **`sync-map.cjs`**: Un script local en Node.js (0 dependencias externas) que escanea automáticamente las carpetas de código del proyecto, detecta los archivos monolíticos/grandes (>350 líneas) extrayendo automáticamente sus secciones/funciones/estados con sus rangos de líneas exactos `[inicio-fin]`, y lista de forma compacta el resto de archivos con su total de líneas `(NL)`.
2. **`GEMINI.md` Telegráfico (~30-40 líneas máx.)**: Generado automáticamente por `sync-map.cjs` en la raíz del proyecto con las **Reglas 1-Hop** y el **Mapa Auto-Sincronizado**.
3. **Automatización a Coste 0 Tokens**: Conectar `node sync-map.cjs` al `.git/hooks/pre-commit` y a los scripts principales (`dev` / `build`) del `package.json` (si existe), para que el mapa de líneas siempre esté actualizado sin gastar ni 1 token de IA.

---

## 🛠️ PASO 1: ANALIZAR LA ESTRUCTURA DEL PROYECTO RÁPIDAMENTE
1. Ejecuta un único comando rápido para listar las carpetas principales de código (ej. `src/`, `frontend/src/`, `backend/`, `app/`, `lib/`) e identificar qué archivos superan las 350 líneas.
2. Para los archivos grandes (>350 líneas), identifica sus bloques lógicos (estados, handlers, funciones principales, secciones de UI o comentarios divisores `===`) o haz un detector automático de funciones/bloques en `sync-map.cjs`.

---

## 🛠️ PASO 2: CREAR `sync-map.cjs` EN LA RAÍZ DEL REPOSITORIO
Crea el archivo `sync-map.cjs` en la raíz adaptando las rutas a la estructura real del proyecto. Usa esta arquitectura base (que soporta tanto anclas manuales como detección automática de bloques en archivos grandes):

```js
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
// Ajusta aquí las carpetas de código de este proyecto:
const CODE_DIRS = ['src', 'frontend/src', 'backend', 'app', 'lib', 'server'].filter((d) =>
  fs.existsSync(path.join(ROOT, d))
);
const EXT_REGEX = /\.(tsx?|jsx?|py|vue|svelte|go|rs|cs|sql|php|rb|dart)$/;
const IGNORE_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', '__pycache__', 'venv', '.venv', 'coverage']);

function readLines(fullPath) {
  if (!fs.existsSync(fullPath)) return [];
  return fs.readFileSync(fullPath, 'utf8').split(/\r?\n/);
}

// Auto-detector de secciones para archivos grandes (>350 líneas)
function autoSections(fullPath, lines) {
  const total = lines.length;
  const hits = [];
  const sectionRegex = /^(?:\s*\/\/\s*={3,}|\s*\{\/\*\s*={3,}|\s*#\s*={3,}|\s*(?:export\s+)?(?:async\s+)?function\s+(\w+)|\s*const\s+(handle\w+|use\w+)\s*=|\s*return\s*\(|\s*class\s+(\w+)|\s*def\s+(\w+))/;

  for (let i = 0; i < total; i++) {
    const line = lines[i];
    if (/={3,}/.test(line) && lines[i + 1]) {
      const label = lines[i + 1].replace(/^[\s/*#{}-]+/, '').trim().slice(0, 28).replace(/\s+/g, '_');
      if (label) hits.push({ label, line: i + 1 });
    } else if (/^\s*return\s*\(/.test(line) && i > total * 0.25 && !hits.some((h) => h.label === 'uiRender')) {
      hits.push({ label: 'uiRender', line: i + 1 });
    } else {
      const m = line.match(/(?:function|const|class|def)\s+([A-Za-z0-9_]+)/);
      if (m && (m[1].startsWith('handle') || m[1].startsWith('use') || i < 150)) {
        if (hits.length === 0 || i + 1 - hits[hits.length - 1].line >= 80) {
          hits.push({ label: m[1].slice(0, 24), line: i + 1 });
        }
      }
    }
  }

  // Si no hay suficientes anclas, dividir en bloques uniformes o usar las encontradas
  if (hits.length === 0) {
    return `**${path.basename(fullPath)}**(${total}L): main[1-${total}]`;
  }
  const filtered = [];
  for (const h of hits) {
    if (!filtered.length || h.line - filtered[filtered.length - 1].line >= 45) {
      filtered.push(h);
    }
  }
  const parts = filtered.slice(0, 12).map((cur, idx, arr) => {
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
   - **Si está en el Mapa**: Ve DIRECTO a \`view_file\` (ventana de 40-70 líneas con \`StartLine\`/\`EndLine\`) y edita con \`replace_file_content\`.
   - **Si buscas algo puntual** (en PowerShell): Usa 1 comando con contexto para evitar \`view_file\` intermedio:
     \`Select-String -Path <ruta> -Pattern "<regex>" -Context 6,12 | Select-Object -First 5 | ForEach-Object { "L$($_.LineNumber): $($_.Line)"; $_.Context.PostContext }\`
   - **Paralelismo**: Ejecuta lecturas o ediciones independientes en paralelo en el MISMO turno.
3. **Prohibiciones**: Jamás uses \`view_file\` sin \`StartLine\`/\`EndLine\`. Jamás pidas rutas al usuario. Cero artefactos (\`task.md\`, planes) ni subagentes salvo orden explícita.
4. **Respuestas de 1-3 líneas**: Directo al grano. Si creas archivos o sumas/restas >30 líneas, ejecuta \`node sync-map.cjs\`.

## 2. 🗺️ MAPA AUTO-SINCRONIZADO (\`node sync-map.cjs\`)
### Archivos Grandes (>350L) — Coordenadas Quirúrgicas
${monoliths.length ? monoliths.map((m) => `- ${m}`).join('\n') : '- (Ninguno >350L)'}

### Índice Compacto del Proyecto
${smallSection}
`;

fs.writeFileSync(path.join(ROOT, 'GEMINI.md'), md, 'utf8');
console.log('GEMINI.md auto-synced (' + md.split('\n').length + ' lines)');
```

*(Nota para la IA: Personaliza las anclas de `sync-map.cjs` con los nombres exactos de las secciones/tabs de los archivos monolíticos del proyecto para que el mapa sea aún más descriptivo).*

---

## 🛠️ PASO 3: AUTOMATIZAR EN GIT Y SCRIPTS (COSTE 0 TOKENS)
1. Ejecuta `node sync-map.cjs` para generar el `GEMINI.md` inicial y verifica que tenga menos de 45 líneas.
2. Crea `.git/hooks/pre-commit` con:
   ```sh
   #!/bin/sh
   node sync-map.cjs
   git add GEMINI.md
   ```
3. Si existe un `package.json` con scripts `dev` o `build`, antepón `node sync-map.cjs && ` (o `node ../sync-map.cjs && ` si está en subcarpeta) para que se sincronice solo al desarrollar o compilar.

