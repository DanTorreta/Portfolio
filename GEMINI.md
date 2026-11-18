# ⚡ PROTOCOLO ZERO-WASTE (-95% TOKENS, AUTO-INDEXADO)

## 1. REGLAS ESTRICTAS DE EJECUCIÓN (INQUEBRANTABLES)
1. **Pensamiento Telegráfico**: Razonamiento interno (`thinking`) de máx. 1-3 frases directas. Prohibido divagar o repetir el prompt.
2. **Regla 1-Hop (Cero Rondas Extra)**:
   - **Si está en el Mapa**: Ve DIRECTO a `read_file` (ventana de 40-70 líneas con `StartLine`/`EndLine`) y edita con `edit_file`.
   - **Si buscas algo puntual** (en PowerShell): Usa 1 comando con contexto para evitar lecturas intermedias:
     `Select-String -Path <ruta> -Pattern "<regex>" -Context 6,12 | Select-Object -First 5`
   - **Paralelismo**: Ejecuta lecturas o ediciones independientes en paralelo en el MISMO turno.
3. **Prohibiciones**: Jamás leas archivos completos sin `StartLine`/`EndLine` salvo que sean <70L. Cero planes extensos ni subagentes salvo orden explícita.
4. **Respuestas de 1-3 líneas**: Directo al grano. Si creas archivos o sumas/restas >30 líneas, ejecuta `node sync-map.cjs`.

## 2. 🗺️ MAPA AUTO-SINCRONIZADO (`node sync-map.cjs`)
### Archivos Grandes (>350L) — Coordenadas Quirúrgicas
- **src/app/projects/[slug]/page.tsx**(466L): ProjectDetailPage[53-466]
- **src/components/ContactSection.tsx**(365L): ContactSection[15-365]
- **src/components/ProjectArchitectureDrawer.tsx**(537L): ProjectArchitectureDrawe[18-537]
- **src/data/projects.ts**(926L): TechSkillItem[3-54] WORK_EXPERIENCE[55-782] TECH_SKILLS[783-926]

### Índice Compacto del Proyecto
- **src/app/**: globals.css(207L) | layout.tsx(61L) | page.tsx(6L)
- **src/components/**: AppProviders.tsx(137L) | CommandPalette.tsx(217L) | ExecutiveSummaryModal.tsx(147L) | ExperienceSection.tsx(237L) | Footer.tsx(86L) | GenerativeArtwork.tsx(265L) | Hero.tsx(150L) | HomeView.tsx(30L) | InteractiveAppPreview.tsx(320L) | KineticCanvas.tsx(251L) | LiveFPSMonitor.tsx(82L) | MagneticButton.tsx(66L) | MonetizationSection.tsx(228L) | Navbar.tsx(210L) | ProjectCard.tsx(142L) | ProjectDetailModal.tsx(263L) | ProjectShowcase.tsx(187L) | SpotlightCard.tsx(34L) | TechStackSection.tsx(160L)
- **src/lib/**: utils.ts(39L)
- **src/types/**: project.ts(137L)
