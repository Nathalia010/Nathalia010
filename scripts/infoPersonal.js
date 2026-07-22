"use strict";
/*
=========================================================
información PERSONAL visible para todo el portafolio
=========================================================
*/

const infoPersonal = {
  persona: {
    nombreCompleto: "Karen Nathalia Martinez Biscunda",
    nombrePortada: "Nathalia Martinez",
    saludo: "Hola, soy",
    cargo: "Desarrolladora Full Stack",
    especialidad: "Full Stack",
    nivelProfesional: "Junior",
    descripcionCorta: "Desarrollo de aplicaciones web modernas.",
    frasePerfil: "Aprendizaje continuo",
    sobreMi: {
      presentacion: "Soy Tecnóloga en Análisis y Desarrollo de Sistemas de Información y estudiante de Ingeniería de Sistemas. Desarrollo aplicaciones web y bases de datos con SQL, Python, PHP y JavaScript, enfocada en crear soluciones eficientes.",
      datosPersonales: "Ingeniería de Sistemas (8.º semestre). Ubicada en Bogotá D. C., Colombia. <br> Edad: 26 años.",
      perfilProfesional: "Desarrolladora Full Stack Junior",
      motivacion: "Me impulsa la posibilidad de convertir ideas en soluciones reales que faciliten procesos y mejoren experiencias."
    },
    correo: "k.nathalia.martinez.b@gmail.com",
    telefono: "+57 301 325 8684",
    whatsapp: "573013258684",
    ubicacion: "Bogotá, Colombia",
    foto: "https://media.licdn.com/dms/image/v2/D4E03AQGY2z8NiG7lCg/profile-displayphoto-crop_800_800/B4EZ6Kf7KqIUAQ-/0/1780440089553?e=1785974400&v=beta&t=V9XSz5UzgKlnAE4CUIoQJUHGEZvQ53UC3IH0QMlkL68",
    hojaDeVida: "assets/CV Karen Martinez 2026 Español DES.pdf",
    nombreDescargaCV: "Karen_Nathalia_Martinez_2026-CV.pdf"
  },

  enlaces: {
    linkedin: "https://www.linkedin.com/in/karen-nathalia-martinez-biscunda-full-stack/",
    github: "https://github.com/Nathalia010"
  },

  menu: [
    { texto: "Inicio", vista: "inicio-view", icono: "bi-house-door" },
    { texto: "Estudios", vista: "estudios-view", icono: "bi-mortarboard" },
    { texto: "Experiencia laboral", vista: "experiencia-view", icono: "bi-briefcase" },
    { texto: "Habilidades", vista: "habilidades-view", icono: "bi-code-slash" },
    { texto: "Proyectos", vista: "proyectos-view", icono: "bi-play-btn" },
    { texto: "Contacto", vista: "contacto-view", icono: "bi-envelope" }
  ],

  estudios: [
    {
      titulo: "Desarrollo Full Stack Jr",
      tituloInicio: "Desarrollo Full Stack",
      institucion: "Generation Colombia",
      resumenInicio: "Generation Colombia",
      fecha: "Mayo 2026 - Actualidad",
      icono: "bi-code-square",
      iconoInicio: "bi-laptop",
      habilidades: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java", "MySQL", "Git", "GitHub"],
      mostrarEnInicio: true
    },
    {
      titulo: "Ingeniería de Sistemas (8.º semestre)",
      tituloInicio: "Ingeniería de Sistemas",
      institucion: "Fundación Universitaria Compensar",
      resumenInicio: "Formación profesional",
      fecha: "Enero 2026 - Actualidad",
      icono: "bi-mortarboard",
      habilidades: ["Java", "Python", "MySQL", "Git", "Power BI"],
      mostrarEnInicio: true
    },
    {
      titulo: "Tecnología en Análisis y Desarrollo de Sistemas de Información",
      institucion: "Fundación Universitaria Compensar",
      resumenInicio: "Formación tecnológica",
      fecha: "Enero 2025 - Diciembre 2025",
      icono: "bi-laptop",
      habilidades: ["HTML", "CSS", "JavaScript", "Java", "MySQL", "Git", "GitHub"],
      mostrarEnInicio: false
    },
    {
      titulo: "Técnica Profesional en Operación y Mantenimiento de Bases de Datos",
      tituloInicio: "Bases de datos",
      institucion: "Fundación Universitaria Compensar",
      resumenInicio: "Formación técnica",
      fecha: "Enero 2023 - Diciembre 2024",
      icono: "bi-database",
      habilidades: ["MySQL", "Power BI", "ETL"],
      mostrarEnInicio: true
    },
    {
      titulo: "Oracle Next Education - Back-End",
      institucion: "Oracle Next Education",
      resumenInicio: "Formación Back-End",
      fecha: "Agosto 2022 - Enero 2023",
      icono: "bi-file-earmark-code",
      habilidades: ["Java", "MySQL", "Git", "GitHub"],
      mostrarEnInicio: false
    }
  ],

  experiencia: [
    {
      cargo: "Desarrollo de Sistemas - Prácticas",
      empresa: "Grupo Corporativo San Juan Bosco",
      periodo: "Junio 2025 - Enero 2026",
      meses: 8,
      ubicacion: "Bogotá, Colombia",
      icono: "bi-code-square"
    },
    {
      cargo: "Auxiliar de análisis de datos",
      empresa: "E-Factura Plus S.A.S.",
      periodo: "Marzo 2024 - Mayo 2025",
      meses: 15,
      ubicacion: "Bogotá, Colombia",
      icono: "bi-database-check"
    }
  ],

  habilidades: [
    { nombre: "HTML", nombreInicio: "HTML y CSS", descripcion: "Estructura web", descripcionInicio: "Diseño web", icono: "bi-filetype-html", mostrarEnInicio: true },
    { nombre: "CSS", descripcion: "Diseño responsivo", icono: "bi-filetype-css", mostrarEnInicio: false },
    { nombre: "JavaScript", descripcion: "Desarrollo frontend", icono: "bi-filetype-js", mostrarEnInicio: true },
    { nombre: "Bootstrap", descripcion: "Interfaces responsivas", icono: "bi-bootstrap", mostrarEnInicio: false },
    { nombre: "Python", descripcion: "Automatización", icono: "bi-filetype-py", mostrarEnInicio: true },
    { nombre: "PHP", descripcion: "Desarrollo backend", icono: "bi-filetype-php", mostrarEnInicio: false },
    { nombre: "Java", descripcion: "Programación orientada a objetos", icono: "bi-cup-hot", mostrarEnInicio: false },
    { nombre: "MySQL", nombreInicio: "SQL y MySQL", descripcion: "Bases de datos", icono: "bi-database", mostrarEnInicio: true },
    { nombre: "Git", descripcion: "Control de versiones", icono: "bi-git", mostrarEnInicio: false },
    { nombre: "GitHub", descripcion: "Repositorios", icono: "bi-github", mostrarEnInicio: false },
    { nombre: "Power BI", descripcion: "Visualización de datos", icono: "bi-bar-chart", mostrarEnInicio: false },
    { nombre: "ETL", descripcion: "Transformación de datos", icono: "bi-diagram-3", mostrarEnInicio: false }
  ],

  proyectos: [
    {
      nombre: "Plataforma de adopción de mascotas",
      nombreInicio: "Adopción de mascotas",
      categoria: "Desarrollo web",
      descripcion: "Proyecto de desarrollo web orientado a optimizar la gestión logística de una fundación de mascotas mediante una plataforma moderna, intuitiva y fácil de usar.",
      imagen: " assets/hogarAP.gif",
      video: "https://www.youtube.com/watch?v=ecGg3PdtQg8",
      enlace: "https://nathalia010.github.io/hogarAmigoPeludo-SGL/index.html",
      github: "https://github.com/Nathalia010/hogarAmigoPeludo-SGL",
      mostrarEnInicio: true
    },
    {
      nombre: "Api Nasa",
      categoria: "Desarrollo web",
      categoriaInicio: "Desarrollo web",
      descripcion: "Aplicación para consultar información de la API de la NASA.",
      imagen: "",
      video: "",
      enlace: "https://jua039.github.io/api_nasa/",
      github: "https://github.com/jua039/api_nasa",
      mostrarEnInicio: true
    },
    {
      nombre: "Web Pokemon",
      categoria: "Desarrollo web",
      categoriaInicio: "Desarrollo web",
      descripcion: "Proyecto relacionado con apis y consulta de datos de pokemones.",
      imagen: "",
      video: "https://youtu.be/Gkxn5ldsd9U",
      enlace: "https://nathalia010.github.io/25.2WebPokemon/",
      github: "https://github.com/Nathalia010/25.2WebPokemon",
      mostrarEnInicio: true
    },
    {
      nombre: "Agenta Telefonica java",
      categoria: "Desarrollo de aplicaciones",
      descripcion: "Aplicación de escritorio desarrollada en Java Swing utilizando el patrón de arquitectura Modelo - Vista - Controlador.",
      imagen: "assets/agenda.gif",
      video: "https://youtu.be/kHyILBwpS9E",
      enlace: "https://github.com/Ale20222/agenda-telefonica/tree/main",
      github: "https://github.com/Ale20222/agenda-telefonica/tree/main",
      mostrarEnInicio: true
    }
  ],

  /*
   si cambia persona.correo arriba, el contacto se actualiza solo.
   */
  contactos: [
    { etiqueta: "Correo electrónico", texto: "persona.correo", enlace: "persona.correo", tipo: "email", icono: "bi-envelope" },
    { etiqueta: "Perfil profesional", textoFijo: "LinkedIn", enlace: "enlaces.linkedin", tipo: "url", icono: "bi-linkedin" },
    { etiqueta: "Repositorios", textoFijo: "GitHub", enlace: "enlaces.github", tipo: "url", icono: "bi-github" },
    { etiqueta: "Ubicación", texto: "persona.ubicacion", tipo: "texto", icono: "bi-geo-alt" },
    { etiqueta: "WhatsApp", texto: "persona.telefono", enlace: "persona.whatsapp", tipo: "whatsapp", icono: "bi-whatsapp" }
  ]
};
