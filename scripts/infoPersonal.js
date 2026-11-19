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
      presentacion: "Soy Tecnóloga en Análisis y Desarrollo de Sistemas de Información y estudiante de Ingeniería de Sistemas. Desarrollo aplicaciones web y bases de datos con SQL, Python, JavaScript y java, enfocada en crear soluciones eficientes.",
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
      icono: "bi-code-square",
      Responsabilidades: "Diseñé e implementé consultas SQL para la consulta, actualización y control de datos, garantizando la integridad de los registros y optimizando el rendimiento de los procesos del sistema. ",
      funciones: [
        "Desarrollé una aplicación web conectada a bases de datos relacionales, mejorando la gestión y validación de información institucional.",
        "Diseñé consultas SQL para consultar, transformar, actualizar y controlar datos, garantizando su integridad y optimizando los procesos.",
        "Validación y control de información para garantizar la confiabilidad de los datos utilizados por diferentes áreas de la organización.",
        "Desarrollo de scripts en Python para automatizar tareas y facilitar el procesamiento de información.",
        "Elaboración de documentación técnica y funcional de los procesos y funcionalidades del sistema"
      ]
    },
    {
      cargo: "Auxiliar de análisis de datos",
      empresa: "E-Factura Plus S.A.S.",
      periodo: "Marzo 2024 - Mayo 2025",
      meses: 15,
      ubicacion: "Bogotá, Colombia",
      icono: "bi-database-check",
      Responsabilidades:"Gestioné y validé más de 10.000 registros en bases de datos relacionales mediante consultas SQL, garantizando la calidad y consistencia de la información utilizada por distintas áreas de la empresa",
      funciones: [
        "Gestioné y validé más de 10.000 registros con SQL y procesos ETL, asegurando la calidad e integridad de la información.",
        "Apoyé la implementación de controles de ciberseguridad y la administración de usuarios, accesos y permisos.",
        "Realicé soporte básico en Linux y documenté procedimientos de seguridad y gestión de accesos.",
        "Seguimiento a novedades y requerimientos de información, identificando inconsistencias y apoyando la toma de decisiones",
        "Elaboré reportes y consolidé información para facilitar el seguimiento y control de procesos internos"
      ]
    }
  ],

  otrasExperiencias: [
    {
      empresa: "Huellitas CatDog",
      cargo: "Encargada de tienda de artículos para mascotas",
      periodo: "Sep. 2018 – Jun. 2019",
      icono: "bi-shop",
      funciones: [
        "Abrí y cerré el local, verificando diariamente el orden y la seguridad de la tienda.",
        "Atendí y asesoré a los clientes en la compra de alimentos, accesorios y artículos para mascotas.",
        "Controlé el inventario, revisé existencias y apoyé la reposición oportuna de productos.",
        "Realicé la apertura, el manejo y el cierre de caja, verificando ingresos y ventas del día.",
        "Organicé la mercancía y mantuve limpios y presentables los espacios de exhibición y atención."
      ]
    },
    {
      empresa: "Grupo Éxito",
      cargo: "Auxiliar de cocina",
      periodo: "Jul. 2019 – Jul. 2020",
      icono: "bi-egg-fried",
      funciones: [
        "Preparé y manipulé alimentos siguiendo estándares de calidad.",
        "Organicé insumos y coordiné tareas en momentos de alta demanda.",
        "Cumplí tiempos de entrega mediante trabajo colaborativo.",
        "Coordinación de actividades y distribución de tareas dentro del área.",
        "Gestión eficiente del tiempo, priorización de actividades y trabajo colaborativo."
      ]
    },
    {
      empresa: "RobinFood",
      cargo: "Auxiliar de punto y caja",
      periodo: "Abr. – Sep. 2021",
      icono: "bi-cart",
      funciones: [
        "Atendí clientes y gestioné pedidos y operaciones de caja.",
        "Control y seguimiento de inventarios, verificando existencias, entradas y salidas de productos.",
        "Gestión de pedidos a proveedores y seguimiento de requerimientos de abastecimiento.",
        "Apoyo en el control de gastos operativos, gestión de pagos de servicios y organización de información administrativa."
      ]
    },
    {
      empresa: "Cine Colombia",
      cargo: "Auxiliar operativo",
      periodo: "Oct. 2021 – Ene. 2022",
      icono: "bi-film",
      funciones: [
        "Orienté y atendí clientes, incluyendo grupos numerosos.",
        "Apoyé actividades operativas y resolví novedades en diferentes áreas.",
        "Fortalecí la comunicación efectiva, la adaptabilidad y el trabajo colaborativo.",
        "Resolución de novedades y comunicación efectiva con equipos de trabajo."
      ]
    },
    {
      empresa: "Avant Assurance",
      cargo: "Asesora de call center",
      periodo: "Ene. – Feb. 2023",
      icono: "bi-headset",
      funciones: [
        "Atendí y asesoré clientes por canales telefónicos.",
        "Gestioné solicitudes, seguimiento y solución de requerimientos.",
        "Manejé situaciones difíciles y cumplí indicadores de servicio.",
        "Manejo y actualización de información de clientes.",
        "Análisis de necesidades y comunicación de soluciones."
      ]
    }
  ],

  habilidades: [
    { nombre: "HTML", nombreInicio: "HTML y CSS", descripcion: "Estructura web", descripcionInicio: "Diseño web", icono: "bi-filetype-html", nivel: "Intermedio", mostrarEnInicio: true },
    { nombre: "CSS", descripcion: "Diseño responsivo", icono: "bi-filetype-css", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "JavaScript", descripcion: "Desarrollo frontend", icono: "bi-filetype-js", nivel: "Intermedio", mostrarEnInicio: true },
    { nombre: "Bootstrap", descripcion: "Interfaces responsivas", icono: "bi-bootstrap", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Python", nombreInicio: "Python y SQL", descripcion: "Automatización", icono: "bi-filetype-py", nivel: "Básico", mostrarEnInicio: true },
    { nombre: "PHP", descripcion: "Desarrollo backend", icono: "bi-filetype-php", nivel: "Básico", mostrarEnInicio: false },
    { nombre: "Java", descripcion: "Programación orientada a objetos", icono: "bi-cup-hot", nivel: "Básico", mostrarEnInicio: true },
    { nombre: "MySQL", nombreInicio: "SQL y MySQL", descripcion: "Bases de datos", icono: "bi-database", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Git", descripcion: "Control de versiones", icono: "bi-git", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "GitHub", descripcion: "Repositorios", icono: "bi-github", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Power BI", descripcion: "Visualización de datos", icono: "bi-bar-chart", nivel: "Básico", mostrarEnInicio: false },
    { nombre: "ETL", descripcion: "Transformación de datos", icono: "bi-diagram-3", nivel: "Básico", mostrarEnInicio: false },
    { nombre: "API", descripcion: "consumir una api", icono: "bi bi-cloud", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Node.js", descripcion: "Backend con Node.js", icono: "bi bi-hdd-network", nivel: "Básico", mostrarEnInicio: false },
    { nombre: "LocalStorage", descripcion: "Almacenamiento en el navegador", icono: "bi bi-database", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Fetch API", descripcion: "Consumo de APIs mediante peticiones HTTP", icono: "bi bi-cloud-download", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "DOM", descripcion: "Manipulación dinámica del contenido HTML", icono: "bi bi-diagram-3", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Java Swing", descripcion: "Desarrollo de interfaces gráficas de escritorio", icono: "bi bi-window", nivel: "Básico", mostrarEnInicio: false },
    { nombre: "MVC", descripcion: "Arquitectura Modelo - Vista - Controlador", icono: "bi bi-diagram-2", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "POO", descripcion: "Programación Orientada a Objetos", icono: "bi bi-boxes", nivel: "Básico", mostrarEnInicio: false },
    { nombre: "Responsive Design", descripcion: "Diseño adaptable para diferentes dispositivos", icono: "bi bi-phone", nivel: "Avanzado", mostrarEnInicio: false },
    { nombre: "Inteligencia Artificial", descripcion: "Uso de IA como apoyo para el desarrollo y optimización de aplicaciones", icono: "bi bi-stars", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Node.js", descripcion: "Entorno de ejecución para desarrollar aplicaciones del lado del servidor", icono: "bi bi-node-plus", nivel: "Básico", mostrarEnInicio: false },
    { nombre: "Docker", descripcion: "Contenerización y despliegue de aplicaciones", icono: "bi bi-box-seam", nivel: "Básico", mostrarEnInicio: false },
    { nombre: "AWS", descripcion: "Servicios de computación y despliegue en la nube", icono: "bi bi-cloud", nivel: "Básico", mostrarEnInicio: false },
    { nombre: "Análisis de sistemas", descripcion: "Análisis y diseño de soluciones tecnológicas", icono: "bi bi-diagram-3", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Desarrollo web", descripcion: "Desarrollo de aplicaciones y sitios web", icono: "bi bi-code-slash", nivel: "Avanzado", mostrarEnInicio: false },
    { nombre: "Metodologías ágiles", descripcion: "Trabajo colaborativo mediante metodologías ágiles", icono: "bi bi-kanban", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Excel", descripcion: "Análisis, organización y gestión de datos", icono: "bi bi-file-earmark-spreadsheet", nivel: "Avanzado", mostrarEnInicio: false },
    { nombre: "Pytest", descripcion: "Automatización de pruebas unitarias e integración backend (QA)", icono: "bi bi-check2-square", nivel: "Intermedio", mostrarEnInicio: true },
    { nombre: "Postman", descripcion: "Pruebas, validación y documentación de endpoints HTTP/REST", icono: "bi bi-send", nivel: "Intermedio", mostrarEnInicio: true },
    { nombre: "FastAPI", descripcion: "Creación de APIs REST de alto rendimiento y documentación interactiva", icono: "bi bi-lightning-charge", nivel: "Intermedio", mostrarEnInicio: true },
    { nombre: "n8n", descripcion: "Automatización de procesos y orquestación de workflows", icono: "bi bi-diagram-3-fill", nivel: "Intermedio", mostrarEnInicio: true },
    { nombre: "Google Gemini", descripcion: "Integración de modelos de IA para interpretar lenguaje natural y ejecutar acciones", icono: "bi bi-stars", nivel: "Intermedio", mostrarEnInicio: true },
    { nombre: "WhatsApp Business Cloud", descripcion: "Integración de mensajería automatizada mediante la API oficial de WhatsApp", icono: "bi bi-whatsapp", nivel: "Intermedio", mostrarEnInicio: true },
    { nombre: "Google Calendar API", descripcion: "Creación, consulta y gestión automatizada de eventos de calendario", icono: "bi bi-calendar-event", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Google Sheets", descripcion: "Registro y gestión automatizada de información en hojas de cálculo", icono: "bi bi-file-earmark-spreadsheet", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Data Tables", descripcion: "Almacenamiento persistente de datos dentro de workflows de automatización", icono: "bi bi-table", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Webhooks", descripcion: "Comunicación entre servicios y activación de automatizaciones mediante eventos HTTP", icono: "bi bi-broadcast", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "REST API", descripcion: "Integración entre servicios mediante peticiones HTTP y APIs REST", icono: "bi bi-cloud-arrow-down", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Automatización", descripcion: "Diseño de flujos automáticos para integrar servicios y reducir tareas manuales", icono: "bi bi-gear-wide-connected", nivel: "Intermedio", mostrarEnInicio: true },
    { nombre: "Agentes IA", descripcion: "Diseño de agentes capaces de interpretar solicitudes y ejecutar herramientas automáticamente", icono: "bi bi-robot", nivel: "Intermedio", mostrarEnInicio: true },
    { nombre: "Android", descripcion: "Desarrollo de aplicaciones móviles nativas para Android", icono: "bi bi-android2", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "Bluetooth", descripcion: "Conexión y gestión de dispositivos Bluetooth", icono: "bi bi-bluetooth", nivel: "Intermedio", mostrarEnInicio: false },
    { nombre: "SQL Server", descripcion: "Bases de datos, consultas y validación de información", icono: "bi bi-database", nivel: "Intermedio", mostrarEnInicio: false }

  ],

  proyectos: [
   {
      nombre: "Peper Assistant · Automatización Personal con IA",
      nombreInicio: "Peper Assistant",
      categoria: "Automatización e IA",
      descripcion: `
          Asistente personal inteligente desarrollado con n8n, WhatsApp Business Cloud y Google Gemini, diseñado para gestionar tareas cotidianas mediante lenguaje natural.<br>
          <strong>Mi aporte:</strong> Diseñé la arquitectura completa de automatización, configuré la integración con WhatsApp Business Cloud, construí el agente de IA en n8n y desarrollé flujos para registrar gastos, gestionar eventos en Google Calendar y programar recordatorios automáticos mediante workflows con nodos Wait.<br>
          <strong>Resultado:</strong> El sistema permite centralizar desde WhatsApp la gestión de finanzas personales, agenda y recordatorios, almacenando información de forma persistente y ejecutando acciones automáticas sin intervención manual.
        `,
      // imagen: "assets/peper.gif",
      video: "https://www.youtube.com/watch?v=Sd2UNtQnjhs",
      videoEmbed: "https://www.youtube.com/embed/Sd2UNtQnjhs?si=h0Iq1SQSH-usFIQm",
      enlace: "https://github.com/Nathalia010/n8n-AsistentePeper",
      github: "https://github.com/Nathalia010/n8n-AsistentePeper",
      habilidades: ["n8n","Google Gemini","WhatsApp Business Cloud","Google Calendar API","Google Sheets","Data Tables","Webhooks","REST API","Automatización","Agentes IA"],
      mostrarEnInicio: true
    },
    {
      nombre: "Juntos Bluetooth",
      categoria: "Aplicación móvil",
      tipoProyecto: "movil",
      descripcion: `
        Aplicación para Android 8 o superior que permite conectar dos audífonos o intercomunicadores Bluetooth y reproducir sonido en ambos al mismo tiempo desde un solo celular compatible. Es fácil e intuitiva, incluye widgets y permite elegir entre modo claro y oscuro.<br>
        <strong>Mi aporte:</strong> Desarrollé la gestión de permisos y conexiones Bluetooth, los controles de volumen disponibles según las capacidades del dispositivo, el widget compacto y la notificación persistente para consultar el estado de los equipos.<br>
        <strong>Resultado:</strong> Facilita la vinculación, supervisión y administración de dispositivos de audio Bluetooth, respetando las limitaciones públicas de enrutamiento y volumen de Android.
      `,
      imagen: "https://raw.githubusercontent.com/Nathalia010/app2bluetooth/main/assets/logo-original.png",
      imagenes: [
        "assets/juntos-bluetooth-8.jpeg",
        "assets/juntos-bluetooth-7.jpeg",
        "assets/juntos-bluetooth-6.jpeg",
        "assets/juntos-bluetooth-5.jpeg",
        "assets/juntos-bluetooth-4.jpeg",
        "assets/juntos-bluetooth-3.jpeg",
        "assets/juntos-bluetooth-2.jpeg",
        "assets/juntos-bluetooth-1.jpeg"
      ],
      video: "",
      enlace: "https://github.com/Nathalia010/app2bluetooth",
      github: "https://github.com/Nathalia010/app2bluetooth",
      habilidades: ["Android", "Java", "Bluetooth", "Git", "GitHub"],
      mostrarEnInicio: true
    },
    {
      nombre: "Reserva · Sistema Central de Gestión & Analítica",
      nombreInicio: "Reservas,Gestión & Analítica",
      categoria: "Desarrollo aplicaciones",
      descripcion: `
        Sistema integral de gestión de reservas desarrollado como una API REST robusta en Python (FastAPI/Uvicorn), respaldado por una base de datos relacional SQL optimizada y alineado con buenas prácticas de Testing (QA).<br>
        <strong>Mi aporte:</strong> Diseñé el modelo de datos relacional (DDL/DML/TCL), desarrollé la API REST para la gestión de reservas/transacciones, e implementé suites de pruebas automatizadas con Pytest.<br>
        <strong>Resultado:</strong> Garantiza la integridad de datos transaccionales, elimina la duplicidad de reservas mediante transacciones SQL y automatiza la validación mediante pruebas de integración.
        `,
      imagen: "",
      video: "",
      enlace: "https://github.com/Nathalia010/Sistema-Central-de-Gesti-n",
      github: "https://github.com/Nathalia010/Sistema-Central-de-Gesti-n",
      habilidades: ["Python", "FastAPI", "MySQL", "Pytest", "Postman", "GitHub", "Docker", ""],
      mostrarEnInicio: false
    },
    {
      nombre: "Power BI · Gestión y pronósticos",
      nombreInicio: "Gestión y pronósticos",
      categoria: "Análisis de datos",
      tipoProyecto: "base-datos",
      tipoContenido: "powerbi",
      descripcion: `
        Proyecto de análisis de datos que simula una empresa mayorista de tecnología. Permite estudiar las ventas, los productos, el inventario, las importaciones y la demanda esperada. Todos los datos utilizados son ficticios y no representan información real.<br>
        <strong>Objetivo:</strong> Identificar los productos más vendidos, alertas de poco inventario, valor del inventario, tiempos de entrega de proveedores, tendencias de ventas y posibles necesidades para los próximos meses.<br>
        <strong>Solución:</strong> Los datos se organizan en Excel, se almacenan y validan en SQL Server y se presentan en Power BI mediante cinco páginas: resumen ejecutivo, productos e inventario, importaciones, pronósticos e indicadores de gestión. Python se utilizará como apoyo para los modelos de pronóstico.<br>
        <strong>Datos analizados:</strong> 150 productos, 20 proveedores, aproximadamente 15.000 ventas, 3.300 registros de inventario, 500 importaciones y un calendario de 669 registros, entre enero de 2025 y octubre de 2026.
      `,
      imagen: "assets/powerbi-gestion-pronosticos.png",
      powerBiEmbed: "https://app.powerbi.com/reportEmbed?reportId=70e3b878-9c59-4be2-9f7e-84df6e8f65cf&autoAuth=true&ctid=4bf38ea2-832d-4552-b508-421570da43ff&pageName=mps00000000000000004",
      enlace: "https://app.powerbi.com/links/WOT51JNGnl?ctid=4bf38ea2-832d-4552-b508-421570da43ff&pbi_source=linkShare",
      textoEnlace: "Abrir en Power BI",
      github: "https://github.com/Nathalia010/Gestion_Pronostico",
      habilidades: ["Power BI", "SQL Server", "Excel", "Python", "ETL"],
      mostrarEnInicio: true
    },
    {
      nombre: "Mundo Catálogo",
      categoria: "Desarrollo web",
      tipoProyecto: "web",
      descripcion: `
        Plataforma web para publicar y consultar catálogos digitales en formato PDF desde computador o celular. Permite recorrer cada catálogo página a página, avanzar, retroceder y abrir el documento completo. Incluye inicio de sesión para acceder de forma segura a las funciones administrativas.<br>
        <strong>Mi aporte:</strong> Desarrollé una interfaz adaptable a diferentes pantallas, un visor de doble página para escritorio y una vista optimizada para celular. También implementé el inicio de sesión y un panel administrativo para agregar, ordenar, reemplazar y eliminar catálogos.<br>
        <strong>Resultado:</strong> Centraliza varios catálogos en un solo sitio y facilita su administración y consulta sin tener que descargar primero cada archivo.
      `,
      imagen: "assets/mundo-catalogo-lector-escritorio.png",
      imagenes: [
        "assets/mundo-catalogo-inicio-escritorio.png",
        "assets/mundo-catalogo-administracion-escritorio.png",
        "assets/mundo-catalogo-lector-escritorio.png",
        "assets/mundo-catalogo-portada-movil.png",
        "assets/mundo-catalogo-administracion-movil.png",
        "assets/mundo-catalogo-lector-movil.png"
      ],
      video: "",
      enlace: "https://mundocatalogo.onrender.com/",
      github: "https://github.com/Nathalia010/MundoCatalogo",
      habilidades: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      mostrarEnInicio: false
    },
    {
      nombre: "Plataforma de adopción de mascotas",
      nombreInicio: "Adopción de mascotas",
      categoria: "Desarrollo web",
      descripcion: `
        Plataforma web desarrollada para optimizar el proceso de adopción y la gestión logística de una fundación de mascotas. <br>
        <strong>Mi aporte:</strong>  desarrollé el backend, implementé autenticación de la api de la Nasa y Guardar favoritos. <br>
        <strong>Resultado:</strong> Centraliza la información, reduce el trabajo manual y mejora el seguimiento del proceso de adopción.
        `,
      // imagen: "assets/hogarAP.gif",
      video: "https://www.youtube.com/watch?v=ecGg3PdtQg8",
      enlace: "https://nathalia010.github.io/hogarAmigoPeludo-SGL/index.html",
      github: "https://github.com/Nathalia010/hogarAmigoPeludo-SGL",
      habilidades: ["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub", "Postman"],
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
      // imagen: "assets/apiNasa1.gif",
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
      // imagen: "assets/web Pokemon.gif",
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
      // imagen: "assets/agenda.gif",
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
      // imagen: "assets/TrendyShop.gif",
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
      // imagen: "assets/taskManager.gif",
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
      // imagen: "assets/#",
      video: "https://www.youtube.com/watch?v=atL2yFTDd44&t=1s",
      enlace: "https://nathalia010.github.io/Clima-IA/",
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
    { etiqueta: "WhatsApp", texto: "persona.telefono", enlace: "persona.whatsapp", tipo: "whatsapp", icono: "bi-whatsapp" },
    { etiqueta: "Teléfono", texto: "persona.telefono", enlace: "persona.telefono", tipo: "tel", icono: "bi-telephone" }
  ]
};
