# Portfolio Profesional - Dante Verdi Gutierrez

Portfolio web moderno, minimalista y responsivo diseñado para ingeniería de software y desarrollo full-stack. Desarrollado con **Next.js 15 (App Router)**, **Tailwind CSS v4** y arquitectura modular por componentes.

## ✨ Características Principales

- **Diseño Minimalista de Ingeniería**: Interfaz sobria, elegante y moderna pensada para reclutadores y líderes técnicos.
- **100% Responsivo**: Adaptado para móviles, tablets y monitores de alta resolución sin scrolling forzado ni saltos de pantalla.
- **Dark / Light Mode**: Selector de tema con persistencia automática en `localStorage` y adaptación a preferencias del sistema.
- **Bilingüe (Español / Inglés)**: Switch de idioma instantáneo con contenido adaptado tanto en tono técnico como persuasivo.
- **Descarga de CV integrada**: Botón directo para descargar `cv.pdf` desde el header, hero y sección de contacto.
- **Copia de Email al Portapapeles**: Interacción ágil con un solo clic y feedback visual instantáneo.
- **Casos de Estudio y Proyectos**:
  - **Hangover**: Red social y e-commerce con diseñador interactivo de indumentaria (React, Node, PostgreSQL).
  - **Branches Chat**: Mensajería con branching chat e hilos jerárquicos, acelerado con Antigravity.
  - **Carrera de Caballos**: Simulación concurrente en Java/C# aplicando POO, multithreading y principios SOLID (UADE).
  - **Power Platform Business Suite**: Caso corporativo de automatización de procesos con PowerApps, Power Automate y SharePoint (Softtek).
- **Enfoque en AI-Augmented Engineering**: Sección dedicada a destacar flujos de desarrollo acelerado con herramientas de IA (Antigravity, Prompt Engineering quirúrgico y LLMs) respaldadas por criterio ingenieril.

---

## 🚀 Cómo Ejecutar en Local

1. Clona el repositorio si aún no lo hiciste:
   ```bash
   git clone https://github.com/danosqui/miportfolio.git
   cd miportfolio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

5. Para crear la versión de producción optimizada:
   ```bash
   npm run build
   npm run start
   ```

---

## 📂 Estructura del Proyecto

```text
miportfolio/
├── public/
│   ├── cv.pdf             # Tu archivo de CV descargable (reemplazable en cualquier momento)
│   ├── hangoverLogo.png   # Imagen del proyecto Hangover
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css    # Tailwind CSS v4 y variables de tema claro/oscuro
│   │   ├── layout.js      # Layout raíz y metadatos SEO
│   │   └── page.js        # Página principal con estado de idioma y tema
│   ├── components/
│   │   ├── Navbar.jsx      # Barra de navegación fija con switches de idioma y tema
│   │   ├── Hero.jsx        # Presentación principal con CTAs y redes
│   │   ├── Stats.jsx       # Métricas destacadas
│   │   ├── About.jsx       # Historia formativa, ORT, UADE y filosofía
│   │   ├── Experience.jsx  # Línea de tiempo de educación y práctica en Softtek
│   │   ├── Projects.jsx    # Grilla de proyectos destacados con badges y GitHub
│   │   ├── AIHighlight.jsx # Sección de desarrollo asistido por IA y flujos
│   │   ├── Skills.jsx      # Habilidades categorizadas por área
│   │   ├── Contact.jsx     # Tarjeta de contacto con copia rápida de mail y links
│   │   ├── Footer.jsx      # Pie de página y enlace volver arriba
│   │   └── Icons.jsx       # Iconos SVG vectoriales (GitHub, LinkedIn)
│   └── data/
│       └── content.js      # Diccionario completo de textos y datos bilingüe (ES / EN)
```

---

## 📝 Personalización y Actualización

- **Actualizar textos, skills o proyectos**: Edita el archivo `src/data/content.js`. Todo el contenido de la web está centralizado ahí tanto en español como en inglés.
- **Actualizar tu CV**: Simplemente reemplaza el archivo `public/cv.pdf` con tu nuevo PDF manteniendo el nombre `cv.pdf`.

---

Desarrollado con pasión por **Dante Verdi Gutierrez**
