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
    foto: "assets/Foto-perfil.png",
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
      fecha: "Mayo 2026 - agosto 2026",
      icono: "bi-code-square",
      iconoInicio: "bi-laptop",
      habilidades: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java","Node.js","Docker","AWS", "MySQL", "Git", "GitHub"],
      mostrarEnInicio: true
    },
    {
      titulo: "Ingeniería de Sistemas (8.º semestre)",
      tituloInicio: "Ingeniería de Sistemas",
      institucion: "Fundación Universitaria Compensar",
      resumenInicio: "Formación profesional",
      fecha: "Enero 2026 - Actualidad",
      icono: "bi-mortarboard",
      habilidades: ["Java", "Python", "MySQL", "Git", "Power BI","Análisis de sistemas","Desarrollo web","Metodologías ágiles", "Excel"],
      mostrarEnInicio: true
    },
    {
      titulo: "Tecnología en Análisis y Desarrollo de Sistemas de Información",
      institucion: "Fundación Universitaria Compensar",
      resumenInicio: "Formación tecnológica",
      fecha: "Enero 2025 - Diciembre 2025",
      icono: "bi-laptop",
      habilidades: [ "Análisis de sistemas","Desarrollo web","Metodologías ágiles", "Excel", "Power BI", "MySQL"],
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
    { nombre: "Python", nombreInicio: "Python y SQL", descripcion: "Automatización", icono: "bi-filetype-py", mostrarEnInicio: true },
    { nombre: "PHP", descripcion: "Desarrollo backend", icono: "bi-filetype-php", mostrarEnInicio: false },
    { nombre: "Java", descripcion: "Programación orientada a objetos", icono: "bi-cup-hot", mostrarEnInicio: true },
    { nombre: "MySQL", nombreInicio: "SQL y MySQL", descripcion: "Bases de datos", icono: "bi-database", mostrarEnInicio: false },
    { nombre: "Git", descripcion: "Control de versiones", icono: "bi-git", mostrarEnInicio: false },
    { nombre: "GitHub", descripcion: "Repositorios", icono: "bi-github", mostrarEnInicio: false },
    { nombre: "Power BI", descripcion: "Visualización de datos", icono: "bi-bar-chart", mostrarEnInicio: false },
    { nombre: "ETL", descripcion: "Transformación de datos", icono: "bi-diagram-3", mostrarEnInicio: false },
    { nombre: "API", descripcion: "consumir una api", icono: "bi bi-cloud", mostrarEnInicio: false },
    { nombre: "Node.js", descripcion: "Backend con Node.js", icono: "bi bi-hdd-network", mostrarEnInicio: false },
    { nombre: "LocalStorage", descripcion: "Almacenamiento en el navegador", icono: "bi bi-database", mostrarEnInicio: false },
    { nombre: "Fetch API", descripcion: "Consumo de APIs mediante peticiones HTTP", icono: "bi bi-cloud-download", mostrarEnInicio: false },
    { nombre: "DOM", descripcion: "Manipulación dinámica del contenido HTML", icono: "bi bi-diagram-3", mostrarEnInicio: false },
    { nombre: "Java Swing", descripcion: "Desarrollo de interfaces gráficas de escritorio", icono: "bi bi-window", mostrarEnInicio: false },
    { nombre: "MVC", descripcion: "Arquitectura Modelo - Vista - Controlador", icono: "bi bi-diagram-2", mostrarEnInicio: false },
    { nombre: "POO", descripcion: "Programación Orientada a Objetos", icono: "bi bi-boxes", mostrarEnInicio: false },
    { nombre: "Responsive Design", descripcion: "Diseño adaptable para diferentes dispositivos", icono: "bi bi-phone", mostrarEnInicio: false },
    { nombre: "Inteligencia Artificial", descripcion: "Uso de IA como apoyo para el desarrollo y optimización de aplicaciones", icono: "bi bi-stars", mostrarEnInicio: false },
    { nombre: "Node.js", descripcion: "Entorno de ejecución para desarrollar aplicaciones del lado del servidor", icono: "bi bi-node-plus", mostrarEnInicio: false },
    { nombre: "Docker", descripcion: "Contenerización y despliegue de aplicaciones", icono: "bi bi-box-seam", mostrarEnInicio: false },
    { nombre: "AWS", descripcion: "Servicios de computación y despliegue en la nube", icono: "bi bi-cloud", mostrarEnInicio: false },
    { nombre: "Análisis de sistemas", descripcion: "Análisis y diseño de soluciones tecnológicas", icono: "bi bi-diagram-3", mostrarEnInicio: false },
    { nombre: "Desarrollo web", descripcion: "Desarrollo de aplicaciones y sitios web", icono: "bi bi-code-slash", mostrarEnInicio: false },
    { nombre: "Metodologías ágiles", descripcion: "Trabajo colaborativo mediante metodologías ágiles", icono: "bi bi-kanban", mostrarEnInicio: false },
    { nombre: "Excel", descripcion: "Análisis, organización y gestión de datos", icono: "bi bi-file-earmark-spreadsheet", mostrarEnInicio: false }
  ],

  proyectos: [
    {
      nombre: "Plataforma de adopción de mascotas",
      nombreInicio: "Adopción de mascotas",
      categoria: "Desarrollo web",
      descripcion: `
        Plataforma web desarrollada para optimizar el proceso de adopción y la gestión logística de una fundación de mascotas. <br>
        <strong>Mi aporte:</strong>  desarrollé el backend, implementé autenticación de la api de la Nasa y Guardar favoritos. <br>
        <strong>Resultado:</strong> Centraliza la información, reduce el trabajo manual y mejora el seguimiento del proceso de adopción.
        `,
      imagen: "assets/hogarAP.gif",
      video: "https://www.youtube.com/watch?v=ecGg3PdtQg8",
      enlace: "https://nathalia010.github.io/hogarAmigoPeludo-SGL/index.html",
      github: "https://github.com/Nathalia010/hogarAmigoPeludo-SGL",
      habilidades: ["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub"],
      mostrarEnInicio: true
    },
    {
      nombre: "Api Nasa",
      categoria: "Desarrollo web",
      categoriaInicio: "Desarrollo web",
      descripcion: `
        Aplicación web que consume la API de la NASA para mostrar imágenes e información astronómica en tiempo real. <br>
        <strong>Mi aporte:</strong> Implementé la integración con la API mediante JavaScript, el manejo de respuestas asíncronas, el tratamiento de errores y una interfaz responsive. <br>
        <strong>Resultado:</strong> Facilita la consulta de contenido espacial con una experiencia de usuario clara y dinámica.        `,
      imagen: "assets/apiNasa1.gif",
      video: "https://youtu.be/JTO6g5usE10",
      enlace: "https://jua039.github.io/api_nasa/",
      github: "https://github.com/jua039/api_nasa",
      habilidades: ["HTML","CSS","JavaScript","API","GitHub","Node.js","LocalStorage"],
      mostrarEnInicio: true
    },
    {
      nombre: "Web Pokemon",
      categoria: "Desarrollo web",
      categoriaInicio: "Desarrollo web",
      descripcion: `
        Aplicación web desarrollada para consultar información de Pokémon utilizando la <strong>PokéAPI</strong>. Permite realizar búsquedas por nombre, visualizar imágenes, estadísticas, habilidades y características de cada Pokémon mediante una interfaz intuitiva y responsive. <br>
        <strong>Mi aporte:</strong> Implementé el consumo de la API REST utilizando JavaScript, gestioné peticiones asíncronas con Fetch API y async/await, desarrollé el manejo de errores, la actualización dinámica del contenido y una interfaz adaptable a diferentes dispositivos. <br>
        <strong>Resultado:</strong> Se obtuvo una aplicación interactiva que facilita la exploración de información de Pokémon, fortaleciendo conocimientos en consumo de APIs, manipulación del DOM y desarrollo web responsive.
      `,
      imagen: "assets/web Pokemon.gif",
      video: "https://youtu.be/Gkxn5ldsd9U",
      enlace: "https://nathalia010.github.io/25.2WebPokemon/",
      github: "https://github.com/Nathalia010/25.2WebPokemon",
      habilidades: ["HTML","CSS","JavaScript","API","Fetch API","DOM","GitHub"],
      mostrarEnInicio: true
    },
    {
      nombre: "Agenta Telefonica java",
      categoria: "Desarrollo de aplicaciones",
      descripcion: `
        Aplicación de escritorio desarrollada en <strong>Java Swing</strong> para la gestión de contactos telefónicos. Permite registrar, consultar, editar y eliminar contactos mediante una interfaz gráfica intuitiva, siguiendo el patrón de arquitectura <strong>Modelo - Vista - Controlador (MVC)</strong>. <br>
        <strong>Mi aporte:</strong> Participé en el desarrollo de la interfaz gráfica, la implementación de la lógica de negocio, la gestión de eventos y la organización del proyecto bajo el patrón MVC, aplicando principios de programación orientada a objetos. <br>
        <strong>Resultado:</strong> Se obtuvo una aplicación funcional y estructurada que facilita la administración de contactos, fortaleciendo conocimientos en Java, arquitectura MVC y desarrollo de aplicaciones de escritorio.
      `,
      imagen: "assets/agenda.gif",
      video: "https://youtu.be/kHyILBwpS9E",
      enlace: "https://github.com/Ale20222/agenda-telefonica/tree/main",
      github: "https://github.com/Ale20222/agenda-telefonica/tree/main",
      habilidades: ["Java","Java Swing","MVC","POO","Git","GitHub"],
      mostrarEnInicio: true
    },
    {
      nombre: "TrendyShop",
      categoria: "Desarrollo web",
      categoriaInicio: "Desarrollo web",
      descripcion: `
        Plataforma web de comercio electrónico diseñada para ofrecer una experiencia de compra moderna e intuitiva. Permite explorar un catálogo de productos, consultar información detallada y gestionar el proceso de compra mediante una interfaz responsive y fácil de usar. <br>
        <strong>Mi aporte:</strong> Participé en el diseño y desarrollo del frontend, implementé la navegación entre secciones, la visualización dinámica de productos,carrito de compras y una interfaz adaptable a dispositivos móviles. <br>
        <strong>Resultado:</strong> Se obtuvo un prototipo funcional de e-commerce que aplica buenas prácticas de desarrollo web, organización del código y diseño de interfaces centradas en la experiencia del usuario.
      `,
      imagen: "assets/TrendyShop.gif",
      video: "https://youtu.be/dT264Mre3bE",
      enlace: "https://github.com/girleykinnux-pixel/-trendyShop",
      github: "https://github.com/girleykinnux-pixel/-trendyShop",
      habilidades: ["HTML","CSS","JavaScript","Bootstrap","Responsive Design","GitHub"],
      mostrarEnInicio: true
    },
    {
      nombre: "Task Manager",
      categoria: "Desarrollo web",
      categoriaInicio: "Desarrollo web",
      descripcion: `
        Aplicación web desarrollada para la gestión de tareas diarias, que permite crear, organizar y administrar actividades mediante una interfaz intuitiva. Los usuarios pueden agregar tareas con título, descripción y categoría, visualizar el listado completo con estados diferenciados, marcarlas como completadas o urgentes y eliminarlas con confirmación. <br>
        <strong>Mi aporte:</strong> Desarrollé la lógica de gestión de tareas utilizando JavaScript, implementé la manipulación dinámica del DOM, el manejo de eventos, el almacenamiento de datos con LocalStorage y un contador en tiempo real que muestra el número total de tareas y las completadas. Además, diseñé una interfaz responsive enfocada en mejorar la experiencia del usuario. <br>
        <strong>Resultado:</strong> Se obtuvo una aplicación funcional que facilita la organización de actividades diarias, aplicando buenas prácticas de desarrollo web, persistencia de datos y programación interactiva.
      `,
      imagen: "assets/taskManager.gif",
      video: "https://youtu.be/WdM8hu1aQ3w",
      enlace: "https://nathalia010.github.io/19.2Interaccion/",
      github: "https://github.com/Nathalia010/19.2Interaccion",
      habilidades: ["HTML","CSS","JavaScript","DOM","LocalStorage","Git","GitHub"],
      mostrarEnInicio: true
    },
    {
      nombre: "Pronóstico del clima",
      categoria: "Manejo de IA",
      categoriaInicio: "IA",
      descripcion: `
        Aplicación web desarrollada con apoyo de inteligencia artificial para consultar y visualizar el pronóstico del clima de diferentes ciudades. Los usuarios pueden buscar una ubicación y obtener información meteorológica como temperatura, condiciones climáticas, humedad, velocidad del viento y pronóstico de los próximos días mediante una interfaz intuitiva y responsive. <br>
        <strong>Mi aporte:</strong> Desarrollé la lógica de consulta y visualización de información utilizando JavaScript, implementé el consumo de una API meteorológica mediante Fetch y programación asíncrona, la manipulación dinámica del DOM y la actualización de los datos según la ciudad seleccionada. Además, utilicé inteligencia artificial como herramienta de apoyo para optimizar el desarrollo, resolver problemas y mejorar la funcionalidad de la aplicación. <br>
        <strong>Resultado:</strong> Se obtuvo una aplicación funcional e interactiva que permite consultar fácilmente las condiciones meteorológicas y el pronóstico, aplicando conceptos de desarrollo web, consumo de APIs, programación asíncrona, manipulación del DOM e integración de herramientas de inteligencia artificial.
      `,
      imagen: "assets/taskManager.gif",
      video: "https://www.youtube.com/watch?v=atL2yFTDd44&t=1s",
      enlace: "https://github.com/Nathalia010/Clima-IA",
      github: "https://github.com/Nathalia010/Clima-IA",
      habilidades: ["HTML","CSS","JavaScript","DOM","Inteligencia Artificial","GitHub"],
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
