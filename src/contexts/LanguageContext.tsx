import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "es";

interface Translations {
  nav: {
    about: string;
    projects: string;
    experience: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    badge: string;
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    description: string;
    name: string;
    contactMe: string;
    downloadCV: string;
    followMe: string;
    available: string;
    yearsExp: string;
    techTitle: string;
  };
  about: {
    label: string;
    title1: string;
    titleHighlight: string;
    bio1: string;
    bio2: string;
    bio3: string;
    quote: string;
    values: { title: string; description: string }[];
  };
  projects: {
    label: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    viewAll: string;
    items: { title: string; subtitle: string; description: string }[];
  };
  experience: {
    label: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    certTitle: string;
    certLabel: string;
    certTitle1: string;
    certTitleHighlight: string;
    certSubtitle: string;
    viewCert: string;
    items: { period: string; title: string; company: string; description: string; tags: string[] }[];
    certs: { title: string; institution: string; period: string; description: string; url?: string }[];
  };
  testimonials: {
    label: string;
    title1: string;
    titleHighlight: string;
    items: { quote: string; name: string; role: string; initials: string }[];
  };
  footer: {
    rights: string;
  };
}

const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      badge: "Software Engineer · Full Stack",
      heading1: "Crafting ",
      heading2: "digital",
      heading3: "experiences with",
      heading4: "precision.",
      description: "— a Full Stack Software Engineering student at UCC, passionate about building modern, scalable, and efficient web applications with strong attention to detail and user experience.",
      name: "Valentina Burbano",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
      followMe: "Follow me:",
      available: "Available for work",
      yearsExp: "Years Exp.",
      techTitle: "Technologies I work with",
    },
    about: {
      label: "About Me",
      title1: "Building the future, ",
      titleHighlight: "one component at a time.",
      bio1: "I'm a passionate Software Engineering student with a focus on full-stack web and mobile development. My journey started with a curiosity for how things work on the web, and it has evolved into a deep commitment to modern frontend and backend technologies.",
      bio2: "I specialize in React, TypeScript, SpringBoot, and MongoDB — building everything from interactive learning platforms to 3D mathematical visualizers. My approach combines technical excellence with a keen eye for design and user experience.",
      bio3: "Beyond coding, I serve as Engineering Faculty Representative at UCC (2025–2027), compete in chess at national university tournaments (ASCUN 2025), and mentor fellow students as an academic monitor.",
      quote: "\"A software engineer in training, committed to continuous learning and with a mindset of constant progress when facing new challenges.\"",
      values: [
        { title: "Clean Code", description: "Writing maintainable, scalable code that stands the test of time." },
        { title: "Performance", description: "Optimizing for speed and delivering lightning-fast user experiences." },
        { title: "Collaboration", description: "Working closely with teams to bring ideas to life." },
        { title: "Innovation", description: "Staying ahead with the latest technologies and best practices." },
      ],
    },
    projects: {
      label: "Featured Work",
      title1: "Projects that ",
      titleHighlight: "make an impact.",
      subtitle: "A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.",
      viewAll: "View All Projects",
      items: [
        {
          title: "Vector Field Simulator",
          subtitle: "Degree Project — Unity 3D",
          description: "An interactive 3D vector field application built in Unity, designed as a degree project to visualize and explore mathematical vector fields in real-time. Supports dynamic field generation, camera controls, and educational overlays.",
        },
        {
          title: "Math Learning Game",
          subtitle: "2D Educational Videogame",
          description: "A 2D educational videogame designed to make learning mathematics fun and engaging. Features multiple levels, scoring system, and adaptive difficulty. Full-stack project with a separate backend API for progress tracking.",
        },
        {
          title: "3D Surface Calculator",
          subtitle: "GeoGebra-style 3D Visualizer",
          description: "A GeoGebra-inspired 3D calculator for visualizing mathematical surfaces and functions. Allows users to input equations and see real-time 3D renderings with rotation, zoom, and interactive exploration.",
        },
      ],
    },
    experience: {
      label: "Career Journey",
      title1: "Experience that ",
      titleHighlight: "speaks volumes.",
      subtitle: "A timeline of my professional growth, from curious student to active contributor building products and leading communities.",
      certTitle: "Certifications",
      certLabel: "Certifications",
      certTitle1: "Credentials that ",
      certTitleHighlight: "validate my path.",
      certSubtitle: "A collection of certifications and courses that reflect my commitment to continuous learning and professional growth.",
      viewCert: "View certificate",
      items: [
        {
          period: "2024 — Present",
          title: "Software Engineering Student",
          company: "Universidad Cooperativa de Colombia — Full Stack",
          description: "Full-stack development with React, TypeScript, SpringBoot, and MongoDB. Building cross-platform solutions with multidisciplinary teams.",
          tags: ["React", "TypeScript", "SpringBoot", "MongoDB"],
        },
        {
          period: "2025 — 2027",
          title: "Engineering Faculty Representative",
          company: "UCC — Student Government + Tutoring",
          description: "Elected student representative for the Engineering Faculty. Managing university well-being initiatives and academic tutoring programs.",
          tags: ["Leadership", "Communication", "Management"],
        },
        {
          period: "2025",
          title: "Freelance Development Assistant",
          company: "Independent Project",
          description: "Freelance web development focused on performance and user experience. Delivering responsive, modern applications for clients.",
          tags: ["Freelance", "Web Development", "UX"],
        },
        {
          period: "2025",
          title: "Professional Chess Player",
          company: "ASCUN XXXII University Games — Bucaramanga",
          description: "Represented UCC at the ASCUN DAF National University Games. Managing a university chess club and competing at national level.",
          tags: ["Chess", "Strategy", "Competition"],
        },
      ],
      certs: [
        { title: "English B1", institution: "Servicio Nacional de Aprendizaje · Levels 1–13", period: "2023 – 2024", description: "Completed 13 levels of English at SENA, reaching B1 proficiency in reading, writing, listening, and speaking.", url: "https://campusuccedu-my.sharepoint.com/:f:/r/personal/valentina_burbanos_campusucc_edu_co/Documents/Certificados/English?csf=1&web=1&e=YW9ZLE" },
        { title: "Software Engineering Seminar", institution: "Universidad Cooperativa de Colombia", period: "2024 – 2026", description: "Participated in academic seminars covering advanced topics in software engineering, architecture, and emerging technologies.", url: "https://campusuccedu-my.sharepoint.com/:f:/r/personal/valentina_burbanos_campusucc_edu_co/Documents/Certificados/Seminar?csf=1&web=1&e=Ud6CDi" },
        { title: "ASCUN XXXII National University Games", institution: "Official chess participant — ASCUN DAF Bucaramanga 2025", period: "2025", description: "Competed as official chess representative for UCC at the national ASCUN DAF university games held in Bucaramanga.", url: "https://campusuccedu-my.sharepoint.com/:f:/r/personal/valentina_burbanos_campusucc_edu_co/Documents/Certificados/Chess?csf=1&web=1&e=Dn5SEo" },
        { title: "University Academic Tutoring", institution: "Faculty of Software Engineering · UCC", period: "2025", description: "Served as academic monitor for the Faculty of Software Engineering, supporting fellow students in their coursework.", url: "https://campusuccedu-my.sharepoint.com/:f:/r/personal/valentina_burbanos_campusucc_edu_co/Documents/Certificados/Chess%20tutor?csf=1&web=1&e=mYmZNL" },
        { title: "Other Courses", institution: "Cybersecurity · UCC · Practical Journalism · Libre Aprendizaje", period: "2025", description: "Completed short courses in cybersecurity fundamentals and practical journalism, broadening technical and communication skills.", url: "https://campusuccedu-my.sharepoint.com/:f:/r/personal/valentina_burbanos_campusucc_edu_co/Documents/Certificados/Courses?csf=1&web=1&e=Ex8wUz" },
        { title: "Coming Soon", institution: "Research Article", period: "2026", description: "An upcoming research article currently in development. Details will be shared upon publication." },
      ],
    },
    testimonials: {
      label: "What People Say",
      title1: "Kind words from ",
      titleHighlight: "amazing people.",
      items: [
        {
          quote: "Valentina demonstrates an exceptional ability to solve complex problems. Her dedication to continuous learning and her focus on teamwork make her stand out in any project.",
          name: "Braulio Esteban Burbano",
          role: "Systems Engineer",
          initials: "BB",
        },
        {
          quote: "Her passion for software development is genuine and contagious. She always brings innovative ideas and has a growth mindset that inspires everyone around her.",
          name: "Aedel Fernando Suárez",
          role: "Systems Engineer",
          initials: "AS",
        },
        {
          quote: "Working with Valentina is enriching. Her attention to detail and ability to translate complex requirements into elegant solutions is truly remarkable.",
          name: "Juan Manuel Imachi",
          role: "Software Developer",
          initials: "JI",
        },
      ],
    },
    footer: {
      rights: "© 2026 Valentina Burbano. All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Sobre Mí",
      projects: "Proyectos",
      experience: "Experiencia",
      testimonials: "Testimonios",
      contact: "Contacto",
    },
    hero: {
      badge: "Ingeniera de Software · Full Stack",
      heading1: "Creando ",
      heading2: "experiencias",
      heading3: "digitales con",
      heading4: "precisión.",
      description: "— estudiante de Ingeniería de Software Full Stack en la UCC, apasionada por construir aplicaciones web modernas, escalables y eficientes con gran atención al detalle y la experiencia del usuario.",
      name: "Valentina Burbano",
      contactMe: "Contáctame",
      downloadCV: "Descargar CV",
      followMe: "Sígueme:",
      available: "Disponible para trabajar",
      yearsExp: "Años Exp.",
      techTitle: "Tecnologías con las que trabajo",
    },
    about: {
      label: "Sobre Mí",
      title1: "Construyendo el futuro, ",
      titleHighlight: "un componente a la vez.",
      bio1: "Soy una apasionada estudiante de Ingeniería de Software con enfoque en desarrollo full-stack web y móvil. Mi camino comenzó con curiosidad por cómo funcionan las cosas en la web, y ha evolucionado hacia un compromiso profundo con las tecnologías modernas de frontend y backend.",
      bio2: "Me especializo en React, TypeScript, SpringBoot y MongoDB — construyendo desde plataformas de aprendizaje interactivas hasta visualizadores matemáticos 3D. Mi enfoque combina excelencia técnica con un buen ojo para el diseño y la experiencia del usuario.",
      bio3: "Más allá del código, soy Representante de la Facultad de Ingeniería en la UCC (2025–2027), compito en ajedrez en torneos universitarios nacionales (ASCUN 2025) y soy monitora académica de mis compañeros.",
      quote: "\"Una ingeniera de software en formación, comprometida con el aprendizaje continuo y con una mentalidad de progreso constante al enfrentar nuevos desafíos.\"",
      values: [
        { title: "Código Limpio", description: "Escribiendo código mantenible y escalable que resiste la prueba del tiempo." },
        { title: "Rendimiento", description: "Optimizando la velocidad y entregando experiencias ultrarrápidas." },
        { title: "Colaboración", description: "Trabajando de cerca con equipos para dar vida a las ideas." },
        { title: "Innovación", description: "Manteniéndome a la vanguardia con las últimas tecnologías y mejores prácticas." },
      ],
    },
    projects: {
      label: "Trabajo Destacado",
      title1: "Proyectos que ",
      titleHighlight: "generan impacto.",
      subtitle: "Una selección de mi trabajo reciente, desde aplicaciones web complejas hasta herramientas innovadoras que resuelven problemas reales.",
      viewAll: "Ver Todos los Proyectos",
      items: [
        {
          title: "Simulador de Campos Vectoriales",
          subtitle: "Trabajo de Grado — Unity 3D",
          description: "Una aplicación 3D interactiva de campos vectoriales construida en Unity, diseñada como trabajo de grado para visualizar y explorar campos vectoriales matemáticos en tiempo real. Soporta generación dinámica de campos, controles de cámara y superposiciones educativas.",
        },
        {
          title: "Videojuego Matemático",
          subtitle: "Videojuego Educativo 2D",
          description: "Un videojuego educativo 2D diseñado para hacer el aprendizaje de matemáticas divertido y atractivo. Incluye múltiples niveles, sistema de puntuación y dificultad adaptativa. Proyecto full-stack con API backend separada para seguimiento del progreso.",
        },
        {
          title: "Calculadora de Superficies 3D",
          subtitle: "Visualizador 3D estilo GeoGebra",
          description: "Una calculadora 3D inspirada en GeoGebra para visualizar superficies y funciones matemáticas. Permite ingresar ecuaciones y ver renderizados 3D en tiempo real con rotación, zoom y exploración interactiva.",
        },
      ],
    },
    experience: {
      label: "Trayectoria Profesional",
      title1: "Experiencia que ",
      titleHighlight: "habla por sí sola.",
      subtitle: "Una línea de tiempo de mi crecimiento profesional, desde estudiante curiosa hasta contribuidora activa construyendo productos y liderando comunidades.",
      certTitle: "Certificaciones",
      certLabel: "Certificaciones",
      certTitle1: "Credenciales que ",
      certTitleHighlight: "validan mi camino.",
      certSubtitle: "Una colección de certificaciones y cursos que reflejan mi compromiso con el aprendizaje continuo y el crecimiento profesional.",
      viewCert: "Ver certificado",
      items: [
        {
          period: "2024 — Presente",
          title: "Estudiante de Ingeniería de Software",
          company: "Universidad Cooperativa de Colombia — Full Stack",
          description: "Desarrollo full-stack con React, TypeScript, SpringBoot y MongoDB. Construyendo soluciones multiplataforma con equipos multidisciplinarios.",
          tags: ["React", "TypeScript", "SpringBoot", "MongoDB"],
        },
        {
          period: "2025 — 2027",
          title: "Representante de Facultad de Ingeniería",
          company: "UCC — Gobierno Estudiantil + Tutorías",
          description: "Representante estudiantil electa de la Facultad de Ingeniería. Gestionando iniciativas de bienestar universitario y programas de tutorías académicas.",
          tags: ["Liderazgo", "Comunicación", "Gestión"],
        },
        {
          period: "2025",
          title: "Asistente de Desarrollo Freelance",
          company: "Proyecto Independiente",
          description: "Desarrollo web freelance enfocado en rendimiento y experiencia del usuario. Entregando aplicaciones modernas y responsivas para clientes.",
          tags: ["Freelance", "Desarrollo Web", "UX"],
        },
        {
          period: "2025",
          title: "Ajedrecista Profesional",
          company: "Juegos ASCUN XXXII — Bucaramanga",
          description: "Representé a la UCC en los Juegos Universitarios Nacionales ASCUN DAF. Gestionando un club de ajedrez universitario y compitiendo a nivel nacional.",
          tags: ["Ajedrez", "Estrategia", "Competencia"],
        },
      ],
      certs: [
        { title: "Inglés B1", institution: "Servicio Nacional de Aprendizaje · Niveles 1–13", period: "2023 – 2024", description: "Completé 13 niveles de inglés en el SENA, alcanzando el nivel B1 en lectura, escritura, escucha y expresión oral.", url: "https://campusuccedu-my.sharepoint.com/:f:/r/personal/valentina_burbanos_campusucc_edu_co/Documents/Certificados/English?csf=1&web=1&e=YW9ZLE" },
        { title: "Seminario de Ingeniería de Software", institution: "Universidad Cooperativa de Colombia", period: "2024 – 2026", description: "Participé en seminarios académicos sobre temas avanzados de ingeniería de software, arquitectura y tecnologías emergentes.", url: "https://campusuccedu-my.sharepoint.com/:f:/r/personal/valentina_burbanos_campusucc_edu_co/Documents/Certificados/Seminar?csf=1&web=1&e=Ud6CDi" },
        { title: "Juegos Universitarios Nacionales ASCUN XXXII", institution: "Participante oficial de ajedrez — ASCUN DAF Bucaramanga 2025", period: "2025", description: "Competí como representante oficial de ajedrez de la UCC en los juegos universitarios nacionales ASCUN DAF en Bucaramanga.", url: "https://campusuccedu-my.sharepoint.com/:f:/r/personal/valentina_burbanos_campusucc_edu_co/Documents/Certificados/Chess?csf=1&web=1&e=Dn5SEo" },
        { title: "Tutoría Académica Universitaria", institution: "Facultad de Ingeniería de Software · UCC", period: "2025", description: "Fui monitora académica de la Facultad de Ingeniería de Software, apoyando a compañeros en sus materias universitarias.", url: "https://campusuccedu-my.sharepoint.com/:f:/r/personal/valentina_burbanos_campusucc_edu_co/Documents/Certificados/Chess%20tutor?csf=1&web=1&e=mYmZNL" },
        { title: "Otros Cursos", institution: "Ciberseguridad · UCC · Periodismo Práctico · Libre Aprendizaje", period: "2025", description: "Realicé cursos cortos en fundamentos de ciberseguridad y periodismo práctico, ampliando habilidades técnicas y de comunicación.", url: "https://campusuccedu-my.sharepoint.com/:f:/r/personal/valentina_burbanos_campusucc_edu_co/Documents/Certificados/Courses?csf=1&web=1&e=Ex8wUz" },
        { title: "Próximamente", institution: "Artículo de Investigación", period: "2026", description: "Un artículo de investigación actualmente en desarrollo. Los detalles se compartirán al momento de su publicación." },
      ],
    },
    testimonials: {
      label: "Lo Que Dicen",
      title1: "Palabras amables de ",
      titleHighlight: "personas increíbles.",
      items: [
        {
          quote: "Valentina demuestra una capacidad excepcional para resolver problemas complejos. Su dedicación al aprendizaje continuo y su enfoque en el trabajo en equipo la hacen destacar en cualquier proyecto.",
          name: "Braulio Esteban Burbano",
          role: "Ingeniero de Sistemas",
          initials: "BB",
        },
        {
          quote: "Su pasión por el desarrollo de software es genuina y contagiosa. Siempre trae ideas innovadoras y tiene una mentalidad de crecimiento que inspira a todos a su alrededor.",
          name: "Aedel Fernando Suárez",
          role: "Ingeniero de Sistemas",
          initials: "AS",
        },
        {
          quote: "Trabajar con Valentina es enriquecedor. Su atención al detalle y su capacidad para traducir requisitos complejos en soluciones elegantes es verdaderamente notable.",
          name: "Juan Manuel Imachi",
          role: "Desarrollador de Software",
          initials: "JI",
        },
      ],
    },
    footer: {
      rights: "© 2026 Valentina Burbano. Todos los derechos reservados.",
    },
  },
};

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = (): void => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang must be used within LanguageProvider");
  return context;
};
