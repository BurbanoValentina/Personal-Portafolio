# Personal Portfolio — Valentina Burbano

Portfolio personal construido con **React 19 + TypeScript + Tailwind CSS v4 + Vite**.

## Tech Stack

```mermaid
graph TB
    A["React 19.2.0<br/>TypeScript"] --> B["Vite 8<br/>Build Tool"]
    A --> C["Tailwind CSS v4.1.18<br/>Styling"]
    A --> D["Lucide React<br/>Icons"]
    B --> E["ESLint<br/>Linting"]
    C --> F["Dark/Light Mode"]
    A --> G["React Context<br/>Theme & Language"]
```

## Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build producción
npm run build

# Preview de producción
npm run preview

# Lint
npm run lint
```

## Estructura del Proyecto

```mermaid
graph TB
    Root["src/"]
    
    Root --> Components["components/"]
    Root --> Config["config/"]
    Root --> Contexts["contexts/"]
    Root --> Hooks["hooks/"]
    Root --> i18n["i18n/"]
    Root --> Types["types/"]
    Root --> Utils["utils/"]
    Root --> Files["App.tsx<br/>main.tsx<br/>index.css"]
    
    Components --> Common["common/<br/>Button, AnimatedBorderButton"]
    Components --> Layout["layout/<br/>Navbar, Footer"]
    Components --> Sections["sections/<br/>Hero, About, Experience<br/>Projects, Testimonials"]
    
    Contexts --> ThemeCtx["ThemeContext<br/>Modo Oscuro/Claro"]
    Contexts --> LangCtx["LanguageContext<br/>ES/EN"]
    
    Hooks --> UseTheme["useTheme"]
    Hooks --> UseLang["useLanguage"]
    
    i18n --> ES["es.tsx"]
    i18n --> EN["en.tsx"]
    
    Config --> Constants["constants.tsx"]
    Types --> TypeDef["TypeScript Definitions"]
    Utils --> Utilities["Helper Functions"]
```

## Flujo de la Aplicación

```mermaid
sequenceDiagram
    participant Main as main.tsx
    participant App as App.tsx
    participant Providers as Providers<br/>Theme & Language
    participant Layout as Layout<br/>Navbar + Footer
    participant Sections as Sections<br/>Hero/About/Exp/etc
    
    Main->>App: Bootstrap
    App->>Providers: Initialize Context
    Providers->>Layout: Apply Theme
    Providers->>Sections: Provide i18n
    Sections-->>Layout: Render
    Layout-->>App: Composite App
```

## Arquitectura de Componentes

```mermaid
graph TD
    App["App.tsx"]
    
    App --> Navbar["Navbar<br/>Layout"]
    App --> Hero["Hero<br/>Section"]
    App --> About["About<br/>Section"]
    App --> Experience["Experience<br/>Section"]
    App --> Projects["Projects<br/>Section"]
    App --> Testimonials["Testimonials<br/>Section"]
    App --> Footer["Footer<br/>Layout"]
    
    Navbar --> NBtn["Buttons<br/>Navigation"]
    Projects --> PCard["Project Cards<br/>Common"]
    Experience --> ECard["Experience Cards"]
    
    NBtn --> ThemeToggle["ThemeToggle<br/>Context Consumer"]
    NBtn --> LangToggle["LanguageToggle<br/>Context Consumer"]
    
    style App fill:#4f46e5,color:#fff
    style Navbar fill:#7c3aed,color:#fff
    style Footer fill:#7c3aed,color:#fff
    style ThemeToggle fill:#ec4899,color:#fff
    style LangToggle fill:#ec4899,color:#fff
```

## Características Principales

| Característica | Estado | Descripción |
|---|---|---|
| Modo Oscuro/Claro | Habilitado | Tema alternante con Context API |
| Internacionalización | Habilitada | ES/EN soportados |
| Responsive Design | Habilitado | Tailwind CSS + Mobile-first |
| Type-Safe | Habilitado | TypeScript en 100% del código |
| Rendimiento | Optimizado | Vite + Optimizaciones |
| Accesibilidad | Habilitada | Semántica HTML correcta |

## Dependencias Clave

```mermaid
pie title Composición del Proyecto
    "React & Core" : 40
    "Styling (Tailwind)" : 25
    "Utils & Icons (Lucide)" : 15
    "Dev Tools (ESLint, Vite)" : 20
```

## Despliegue

El proyecto está optimizado para despliegue en plataformas modernas:
- Vercel (Recomendado)
- Netlify
- GitHub Pages
- AWS Amplify

---

**Desarrollado por Valentina Burbano** | 2026
