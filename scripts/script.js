"use strict";

/*
=========================================================
AYUDAS GENERALES
=========================================================
*/

const obtenerElemento = (selector) => document.querySelector(selector);
const obtenerElementos = (selector) => document.querySelectorAll(selector);

/* Guarda qué proyecto está destacado y la posición del carrusel de Inicio. */
const estadoProyectos = {
  indiceDestacado: 0,
  inicioCarrusel: 0,
  cantidadVisible: 3,
  habilidadesSeleccionadas: new Set(),
  filtrosAbiertos: false,
  busquedaFiltro: "",
  tipoSeleccionado: "web"
};

const tiposProyecto = [
  { id: "web", nombre: "Proyectos web", icono: "bi-globe2" },
  { id: "movil", nombre: "Aplicaciones móviles", icono: "bi-phone" },
  { id: "base-datos", nombre: "Bases de datos", icono: "bi-database" }
];

/* Permite recordar qué estudio se abrió desde la tarjeta de Inicio. */
const estadoEstudios = {
  indiceSeleccionado: null
};

function obtenerDato(ruta) {
  return ruta
    .split(".")
    .reduce((objeto, propiedad) => objeto?.[propiedad], infoPersonal) ?? "";
}

function colocarHTML(selector, contenido) {
  const elemento = obtenerElemento(selector);
  if (elemento) elemento.innerHTML = contenido;
}

function enlaceDisponible(enlace) {
  return Boolean(enlace && enlace !== "#");
}

function atributosEnlace(enlace, descargar = "") {
  if (!enlaceDisponible(enlace)) {
    return 'href="#" aria-disabled="true"';
  }

  const nombreArchivo = descargar.replace(/\.[^/.]+$/, "");
  const atributoDescarga = descargar ? `download="${descargar}"` : "";
  const tooltip = descargar ? `data-tooltip="Descargar CV.pdf"` : "";
  const nuevaVentana = descargar
    ? ""
    : 'target="_blank" rel="noopener noreferrer"';

  return `href="${enlace}" ${atributoDescarga} ${tooltip} ${nuevaVentana}`;
}

function aplicarTema(tema) {
  const temaClaro = tema === "light";
  document.documentElement.dataset.theme = temaClaro ? "light" : "dark";

  obtenerElementos("[data-theme-toggle]").forEach((botonTema) => {
    botonTema.setAttribute("aria-pressed", String(temaClaro));
    botonTema.setAttribute(
      "aria-label",
      temaClaro ? "Cambiar a tema oscuro" : "Cambiar a tema claro"
    );
    const iconoTema = botonTema.querySelector(".theme-icon");
    if (iconoTema) {
      iconoTema.className = `bi ${temaClaro ? "bi-sun" : "bi-moon"} theme-icon`;
    }
  });
}

function inicializarTema() {
  let temaGuardado = "dark";

  try {
    temaGuardado = localStorage.getItem("portfolio-theme") || "dark";
  } catch {
    temaGuardado = "dark";
  }

  aplicarTema(temaGuardado);
}

function alternarTema() {
  const nuevoTema =
    document.documentElement.dataset.theme === "light" ? "dark" : "light";

  aplicarTema(nuevoTema);
  try {
    localStorage.setItem("portfolio-theme", nuevoTema);
  } catch {
    /* El tema sigue funcionando aunque el navegador bloquee el almacenamiento. */
  }
}
/*
=========================================================
RENDERIZAR INFORMACIÓN PERSONAL Y MENÚ
=========================================================
*/

function renderizarInformacionPersonal() {
  const { persona, enlaces } = infoPersonal;

  colocarHTML(
    "#portfolioLogo",
    "<span>♡ </span>PORTAFOLIO"
  );

  const logo = obtenerElemento("#portfolioLogo");
  if (logo) {
    logo.href = enlaces.github || "#";
    if (enlaceDisponible(enlaces.github)) {
      logo.target = "_blank";
      logo.rel = "noopener noreferrer";
    }
  }

  const foto = persona.foto
    ? `<img src="${persona.foto}" alt="${persona.nombreCompleto}" />`
    : '<i class="bi bi-person"></i>';

  const resumenExperiencia = infoPersonal.experiencia
    .slice(0, 2)
    .map(
      (experiencia) =>
        `<button type="button" class="about-experience-row internal-navigation" data-go="experiencia-view" aria-label="Ver experiencia: ${experiencia.cargo}">
           <span class="about-experience-information">
             <strong>${experiencia.cargo}</strong>
             <small>${experiencia.empresa}</small>
           </span>
         </button>`
    )
    .join("");

  colocarHTML(
    "#profileContainer",
    `<div class="profile-photo">${foto}</div>
     <h2>${persona.nombreCompleto}</h2>
     <p>${persona.cargo}</p>`
  );

  colocarHTML(
    "#homeHeading",
    `<p>${persona.saludo}</p><h1>${persona.nombrePortada}</h1>`
  );

  colocarHTML(
    "#aboutContent",
    `<button type="button" class="about-flip-card about-flip-card-wide" data-flip-card aria-pressed="false" aria-label="Girar tarjeta de presentación">
       <span class="about-flip-inner">
         <span class="about-face about-face-front about-presentation-front">
           <i class="bi bi-arrow-repeat flip-indicator" aria-hidden="true"></i>
           <span class="about-face-label"></span>
           <span class="about-face-text">${persona.sobreMi.presentacion}</span>
           <small></small>
         </span>
         <span class="about-face about-face-back">
           <i class="bi bi-arrow-repeat flip-indicator" aria-hidden="true"></i>
           <span class="about-face-heading">
             <i class="bi bi-person-vcard about-face-heading-icon" aria-hidden="true"></i>
             <span class="about-face-label">Información personal</span>
           </span>
           <span class="about-face-text">${persona.sobreMi.datosPersonales}</span>
           <span class="about-back-divider"></span>
           <span class="about-motivation-label">Motivación</span>
           <span class="about-motivation">${persona.sobreMi.motivacion}</span>
           <small></small>
         </span>
       </span>
     </button>

     <div class="about-experience-summary">
       <div class="about-experience-header">
         <span>Experiencia laboral</span>
         <button type="button" class="internal-navigation" data-go="experiencia-view"></button>
       </div>
       <div class="about-experience-list">${resumenExperiencia}</div>
     </div>`
  );

  colocarHTML(
    "#topbarActions",
    `<button type="button" class="topbar-button theme-toggle-button" data-theme-toggle aria-label="Cambiar a tema claro" aria-pressed="false">
       <i class="bi bi-moon theme-icon" aria-hidden="true"></i>
     </button>
     <button type="button" class="topbar-button internal-navigation" data-go="contacto-view" aria-label="Ir a contacto">
       <i class="bi bi-envelope"></i>
     </button>
     <a ${atributosEnlace(persona.hojaDeVida, persona.nombreDescargaCV)} class="topbar-button topbar-hv-desktop" aria-label="Descargar hoja de vida">
       <i class="bi bi-download"></i>
     </a>
     <a ${atributosEnlace(persona.hojaDeVida)} class="topbar-button topbar-hv-mobile" aria-label="Abrir hoja de vida en una pestaña nueva" data-tooltip="Abrir hoja de vida">
       <i class="bi bi-file-earmark-person"></i>
       <span></span>
     </a>`
  );
}

function renderizarMenu() {
  colocarHTML(
    "#sidebarMenu",
    infoPersonal.menu
      .map(
        (item, indice) =>
          `<button type="button" class="sidebar-button ${indice === 0 ? "active" : ""}" data-view="${item.vista}">
             <i class="bi ${item.icono}"></i><span>${item.texto}</span>
           </button>`
      )
      .join("")
  );

  colocarHTML(
    "#sidebarFooter",
    `<a ${atributosEnlace(infoPersonal.enlaces.linkedin)}><i class="bi bi-linkedin"></i><span>LinkedIn</span></a>
     <a ${atributosEnlace(infoPersonal.enlaces.github)}><i class="bi bi-github"></i><span>GitHub</span></a>`
  );
}

/*
=========================================================
RENDERIZAR ESTUDIOS
=========================================================
*/

function crearHabilidadesEstudio(estudio) {
  const nombresHabilidades = Array.isArray(estudio.habilidades)
    ? estudio.habilidades
    : [];

  return nombresHabilidades
    .map((nombreHabilidad) =>
      infoPersonal.habilidades.find(
        (habilidad) => habilidad.nombre === nombreHabilidad
      )
    )
    .filter(Boolean)
    .map(
      (habilidad) =>
        `<span class="study-skill" tabindex="0" aria-label="Habilidad aprendida: ${habilidad.nombre}">
           <i class="bi ${habilidad.icono}" aria-hidden="true"></i>
           <span class="study-skill-tooltip" role="tooltip">${habilidad.nombre}</span>
         </span>`
    )
    .join("");
}

function renderizarEstudios() {
  const estudiosInicio = infoPersonal.estudios
    .map((estudio, indiceEstudio) => ({ estudio, indiceEstudio }))
    .filter((item) => item.estudio.mostrarEnInicio)
    .slice(0, 3);

  colocarHTML(
    "#homeStudies",
    estudiosInicio
      .map(
        ({ estudio, indiceEstudio }) =>
          `<div class="compact-item filter-item">
             <div class="compact-icon"><i class="bi ${estudio.iconoInicio || estudio.icono}"></i></div>
             <div class="compact-information">
               <h3>${estudio.tituloInicio || estudio.titulo}</h3>
               <p>${estudio.resumenInicio || estudio.institucion}</p>
             </div>
             <button type="button" class="small-link internal-navigation" data-go="estudios-view" data-study-index="${indiceEstudio}" aria-label="Ver ${estudio.titulo}">Ver</button>
           </div>`
      )
      .join("")
  );

  colocarHTML(
    "#studiesContainer",
    infoPersonal.estudios
      .map(
        (estudio, indiceEstudio) =>
          `<div class="col-lg-6">
             <article class="information-card filter-item ${estadoEstudios.indiceSeleccionado === indiceEstudio ? "selected" : ""}"
                      data-study-index="${indiceEstudio}"
                      tabindex="0"
                      role="button"
                      aria-label="Seleccionar ${estudio.titulo}"
                      aria-selected="${estadoEstudios.indiceSeleccionado === indiceEstudio}">
               <div class="information-icon"><i class="bi ${estudio.icono}"></i></div>
               <div class="information-content">
                 <span>${estudio.fecha}</span>
                 <h2>${estudio.titulo}</h2>
                 <p>${estudio.institucion}</p><br>
                 <span>Habilidades adquiridas:</span>
                 <div class="study-skills" aria-label="Habilidades aprendidas">
                  ${crearHabilidadesEstudio(estudio)}
                 </div>
               </div>
             </article>
           </div>`
      )
      .join("")
  );
}

/*
=========================================================
RENDERIZAR EXPERIENCIA LABORAL
=========================================================
*/

function crearFuncionesExperiencia(funciones = []) {
  return `<div class="experience-functions" hidden>
            <strong>Funciones principales</strong>
            <ul>${funciones.map((funcion) => `<li>${funcion}</li>`).join("")}</ul>
          </div>`;
}

function renderizarExperiencia() {
  colocarHTML(
    "#experienceContainer",
    infoPersonal.experiencia
      .map(
        (experiencia, indice) =>
          `<article class="experience-card filter-item"
                    data-experience-toggle
                    tabindex="0"
                    role="button"
                    aria-expanded="false"
                    aria-label="Mostrar funciones de ${experiencia.cargo} en ${experiencia.empresa}">
             <span class="experience-number">${String(indice + 1).padStart(2, "0")}</span>
             <div class="experience-icon"><i class="bi ${experiencia.icono}"></i></div>
             <div class="experience-content">
               <span class="experience-company">${experiencia.empresa}</span>
               <h2>${experiencia.cargo}</h2>
               <p><i class="bi bi-geo-alt"></i>${experiencia.ubicacion}</p>
               <p><i class="bi bi-calendar3"></i>${experiencia.periodo}</p>
             </div>
             <div class="experience-duration">
               <strong>${experiencia.meses}</strong>
               <span>${experiencia.meses === 1 ? "mes" : "meses"}</span>
             </div>
             <span class="experience-toggle-hint"><span>Ver funciones</span><i class="bi bi-chevron-down" aria-hidden="true"></i></span>
             ${crearFuncionesExperiencia(experiencia.funciones)}
           </article>`
      )
      .join("")
  );

  colocarHTML(
    "#otherExperienceContainer",
    `<section class="other-experience-section" aria-labelledby="otherExperienceTitle">
       <div class="other-experience-header">
         <div>
           <div class="other-experience-title-row">
             <h2 id="otherExperienceTitle">Otras experiencias</h2>
           </div>
           <p>Experiencia laboral adicional en diferentes áreas</p>
         </div>
         <span class="other-experience-label">Trayectoria complementaria</span>
       </div>
       <div class="other-experience-timeline-scroll">
         <div class="other-experience-timeline"
              style="--timeline-columns: ${infoPersonal.otrasExperiencias.length}; --timeline-min-width: ${infoPersonal.otrasExperiencias.length * 210 + (infoPersonal.otrasExperiencias.length - 1) * 18 + 8}px;">
           ${infoPersonal.otrasExperiencias
           .map(
             (experiencia) =>
               `<article class="other-experience-item filter-item"
                         data-experience-toggle
                         tabindex="0"
                         role="button"
                         aria-expanded="false"
                         aria-label="Mostrar funciones de ${experiencia.cargo} en ${experiencia.empresa}">
                  <span class="other-experience-date">${experiencia.periodo}</span>
                  <span class="other-experience-marker" aria-hidden="true"></span>
                  <div class="other-experience-card">
                    <span class="other-experience-icon"><i class="bi ${experiencia.icono}" aria-hidden="true"></i></span>
                    <span class="other-experience-content">
                      <strong>${experiencia.empresa}</strong>
                      <small>${experiencia.cargo}</small>
                    </span>
                    <span class="experience-toggle-hint" aria-hidden="true"><i class="bi bi-chevron-down"></i></span>
                    ${crearFuncionesExperiencia(experiencia.funciones)}
                  </div>
                </article>`
           )
             .join("")}
         </div>
       </div>
     </section>`
  );
}

/*
=========================================================
RENDERIZAR HABILIDADES
=========================================================
*/

function renderizarHabilidades() {
  const habilidadesInicio = infoPersonal.habilidades
    .filter((habilidad) => habilidad.mostrarEnInicio)
    .slice(0, 4);

  colocarHTML(
    "#homeSkills",
    habilidadesInicio
      .map(
        (habilidad) =>
          `<button type="button" class="home-skill filter-item" data-project-skill="${habilidad.nombre}">
             <span class="home-skill-icon"><i class="bi ${habilidad.icono}"></i></span>
             <span class="home-skill-information">
               <strong>${habilidad.nombreInicio || habilidad.nombre}</strong>
               <small>${habilidad.descripcionInicio || habilidad.descripcion}</small>
             </span>
             <span class="home-skill-arrow"><i class="bi bi-arrow-right"></i></span>
           </button>`
      )
      .join("")
  );

  colocarHTML(
    "#skillsContainer",
    infoPersonal.habilidades
      .map((habilidad) => {
        const nivel = habilidad.nivel || "Intermedio";
        const claseNivel = nivel
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLocaleLowerCase("es");

        return `<button type="button" class="skill-card filter-item" data-project-skill="${habilidad.nombre}">
             <i class="bi ${habilidad.icono}"></i>
             <h2>${habilidad.nombre}</h2>
             <p>${habilidad.descripcion}</p>
             <span class="skill-level skill-level-${claseNivel}" aria-label="Nivel ${nivel}">Nivel: ${nivel}</span>
           </button>`;
      })
      .join("")
  );
}

/*
=========================================================
RENDERIZAR PROYECTOS
=========================================================
*/

function obtenerIdYoutube(enlace) {
  if (!enlace) return "";

  try {
    const url = new URL(enlace, window.location.href);
    const host = url.hostname.replace(/^www\./, "");
    let id = "";

    if (host === "youtu.be") {
      id = url.pathname.split("/").filter(Boolean)[0] || "";
    } else if (host === "youtube.com" || host.endsWith(".youtube.com")) {
      if (url.pathname === "/watch") {
        id = url.searchParams.get("v") || "";
      } else {
        const coincidencia = url.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/);
        id = coincidencia?.[1] || "";
      }
    }

    return /^[\w-]{6,}$/.test(id) ? id : "";
  } catch {
    return "";
  }
}

function crearImagenProyecto(proyecto, claseImagen = "project-image", texto = "Imagen") {
  const idYoutube = obtenerIdYoutube(proyecto.video);

  if (idYoutube) {
    return `<img
              src="https://i.ytimg.com/vi/${idYoutube}/hqdefault.jpg"
              alt="Miniatura del video de ${proyecto.nombre}"
              class="${claseImagen} project-youtube-thumbnail"
              loading="lazy">`;
  }

  if (proyecto.imagen) {
    return `<img src="${proyecto.imagen}" alt="${proyecto.nombre}" class="${claseImagen}">`;
  }
  return `<i class="bi bi-image"></i><span>${texto}</span>`;
}

function crearVideoProyecto(proyecto) {
  if (proyecto.tipoContenido === "powerbi") {
    if (proyecto.powerBiEmbed) {
      return `<iframe
        class="project-powerbi-frame"
        src="${proyecto.powerBiEmbed}"
        title="Informe interactivo de ${proyecto.nombre}"
        frameborder="0"
        allowfullscreen>
      </iframe>`;
    }

    return `<div class="project-powerbi-placeholder">
      <i class="bi bi-bar-chart-fill" aria-hidden="true"></i>
      <strong>Informe interactivo de Power BI</strong>
      <span>Abre el informe en Power BI con el botón que aparece debajo. El servicio puede solicitar que inicies sesión.</span>
    </div>`;
  }

  if (Array.isArray(proyecto.imagenes) && proyecto.imagenes.length) {
    return `<div class="project-image-gallery" data-project-gallery>
      <div class="project-gallery-slides" aria-live="polite">
        ${proyecto.imagenes
          .map(
            (imagen, indice) =>
              `<img src="${imagen}"
                    alt="Captura ${indice + 1} de ${proyecto.nombre}"
                    class="project-gallery-slide ${indice === 0 ? "active" : ""}"
                    data-gallery-slide="${indice}"
                    ${indice === 0 ? "" : "hidden"}
                    loading="lazy">`
          )
          .join("")}
      </div>
      <button type="button" class="project-gallery-button previous"
              data-project-gallery-direction="previous" aria-label="Ver imagen anterior">
        <i class="bi bi-chevron-left" aria-hidden="true"></i>
      </button>
      <button type="button" class="project-gallery-button next"
              data-project-gallery-direction="next" aria-label="Ver imagen siguiente">
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </button>
      <div class="project-gallery-status">
        <span data-gallery-counter>1 / ${proyecto.imagenes.length}</span>
        <div class="project-gallery-dots" aria-hidden="true">
          ${proyecto.imagenes
            .map(
              (_, indice) =>
                `<span class="${indice === 0 ? "active" : ""}" data-gallery-dot="${indice}"></span>`
            )
            .join("")}
        </div>
      </div>
    </div>`;
  }

  const fuenteVideo = proyecto.video;

  if (!fuenteVideo) {
    if (proyecto.imagen) {
      return `<img src="${proyecto.imagen}"
                   alt="Logo de ${proyecto.nombre}"
                   class="project-static-image"
                   loading="lazy">`;
    }
    return '<i class="bi bi-play-circle"></i><span>Video del proyecto</span>';
  }

  const esArchivoDeVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(fuenteVideo);

  if (esArchivoDeVideo) {
    return `
      <video controls preload="metadata" playsinline aria-label="Video de ${proyecto.nombre}">
        <source src="${fuenteVideo}" type="video/mp4">
        Tu navegador no permite reproducir este video.
      </video>
    `;
  }

  const idYoutube = obtenerIdYoutube(proyecto.video);

  if (idYoutube) {
    const urlReproductor = proyecto.videoEmbed || `https://www.youtube.com/embed/${idYoutube}`;

    return `
      <iframe
        width="560"
        height="315"
        src="${urlReproductor}"
        title="Video de ${proyecto.nombre}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    `;
  }

  return `
    <iframe
      src="${proyecto.video}"
      title="Video de ${proyecto.nombre}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
  `;
}

function moverGaleriaProyecto(boton, direccion) {
  const galeria = boton.closest("[data-project-gallery]");
  if (!galeria) return;

  const imagenes = [...galeria.querySelectorAll("[data-gallery-slide]")];
  const indiceActual = imagenes.findIndex((imagen) => imagen.classList.contains("active"));
  const movimiento = direccion === "next" ? 1 : -1;
  const indiceSiguiente = (indiceActual + movimiento + imagenes.length) % imagenes.length;

  imagenes.forEach((imagen, indice) => {
    const activa = indice === indiceSiguiente;
    imagen.classList.toggle("active", activa);
    imagen.hidden = !activa;
  });

  galeria.querySelectorAll("[data-gallery-dot]").forEach((punto, indice) => {
    punto.classList.toggle("active", indice === indiceSiguiente);
  });

  const contador = galeria.querySelector("[data-gallery-counter]");
  if (contador) contador.textContent = `${indiceSiguiente + 1} / ${imagenes.length}`;
}

function crearProyectoInicio(proyecto) {
  return `<article class="home-project filter-item">
    <div class="project-placeholder">
      ${crearImagenProyecto(proyecto)}
      <button type="button" class="play-button internal-navigation" data-go="proyectos-view"
              data-home-project="${escaparAtributo(proyecto.nombre)}" aria-label="Ver proyecto ${proyecto.nombre}">
        <i class="bi bi-play-fill"></i>
      </button>
    </div>
    <div class="project-line"><span></span></div>
    <div class="home-project-content">
      <span>${proyecto.categoriaInicio || proyecto.categoria}</span>
      <h3>${proyecto.nombreInicio || proyecto.nombre}</h3>
    </div>
  </article>`;
}

function crearProyectoPrincipal(proyecto, indiceOriginal) {
  return `<div class="project-grid-item project-grid-item-expanded" style="view-transition-name: project-${indiceOriginal}">
    <article class="project-detail-card filter-item" data-project-index="${indiceOriginal}" tabindex="0" role="button" aria-label="Proyecto destacado: ${proyecto.nombre}" aria-current="true">
      <div class="project-video-placeholder">${crearVideoProyecto(proyecto)}</div>
      <div class="project-detail-content">
        <div class="project-detail-heading">
          <span class="category-label">${proyecto.categoria}</span>
          <button type="button" class="project-collapse-button" aria-label="Reducir el proyecto ${proyecto.nombre}" title="Volver a vista pequeña">
            <i class="bi bi-arrows-angle-contract" aria-hidden="true"></i>
            <span>Reducir</span>
          </button>
        </div>
        <h2>${proyecto.nombre}</h2>
        <p>${proyecto.descripcion}</p>
        <div class="information-content">
        <span>Habilidades adquiridas:</span>
          <div class="study-skills" aria-label="Habilidades aprendidas">
            ${crearHabilidadesEstudio(proyecto)} 
            <br><br>
         </div>
        </div>
        <div class="project-buttons">
          ${enlaceDisponible(proyecto.enlace)
            ? `<a ${atributosEnlace(proyecto.enlace)} class="gradient-button">${proyecto.textoEnlace || "Ver proyecto"} <i class="bi bi-box-arrow-up-right"></i></a>`
            : ""}
          ${enlaceDisponible(proyecto.github)
            ? `<a ${atributosEnlace(proyecto.github)} class="secondary-button">GitHub <i class="bi bi-github"></i></a>`
            : ""}
        </div>
      </div>
    </article>
  </div>`;
}

function crearProyectoHorizontal(proyecto, indiceOriginal) {
  return `<div class="project-grid-item project-grid-item-compact" style="view-transition-name: project-${indiceOriginal}">
    <article class="horizontal-project-card filter-item" data-project-index="${indiceOriginal}" tabindex="0" role="button" aria-label="Destacar el proyecto ${proyecto.nombre}">
      <div class="horizontal-image">${crearImagenProyecto(proyecto, "project-image", "")}</div>
      <div><span>${proyecto.categoria}</span><h2>${proyecto.nombre}</h2>${enlaceDisponible(proyecto.enlace)
        ? `<a ${atributosEnlace(proyecto.enlace)}>${proyecto.textoEnlace || "Ver proyecto"}</a>`
        : `<button type="button" class="project-open-detail">Ver detalles</button>`}</div>
    </article>
  </div>`;
}

function obtenerVentanaCircular(lista, inicio, cantidad) {
  if (!lista.length) return [];

  const limite = Math.min(cantidad, lista.length);
  return Array.from(
    { length: limite },
    (_, posicion) => lista[(inicio + posicion) % lista.length]
  );
}

function renderizarProyectosInicio(animar = false) {
  const proyectosInicio = infoPersonal.proyectos.filter(
    (proyecto) => proyecto.mostrarEnInicio
  );

  if (estadoProyectos.inicioCarrusel >= proyectosInicio.length) {
    estadoProyectos.inicioCarrusel = 0;
  }

  const proyectosVisibles = obtenerVentanaCircular(
    proyectosInicio,
    estadoProyectos.inicioCarrusel,
    estadoProyectos.cantidadVisible
  );

  colocarHTML(
    "#homeProjects",
    proyectosVisibles.map(crearProyectoInicio).join("")
  );

  const linea = obtenerElemento(".projects-navigation-line span");
  if (linea && proyectosInicio.length) {
    const progreso = ((estadoProyectos.inicioCarrusel + 1) / proyectosInicio.length) * 100;
    linea.style.width = `${Math.max(18, progreso)}%`;
  }

  if (animar) animarTarjetas("#homeProjects .home-project", "horizontal");
}

function renderizarProyectosDetalle(animar = false) {
  if (!infoPersonal.proyectos.length) {
    colocarHTML("#projectsContainer", "");
    return;
  }

  const proyectosVisibles = infoPersonal.proyectos
    .map((proyecto, indiceOriginal) => ({ proyecto, indiceOriginal }))
    .filter(({ proyecto }) =>
      obtenerTipoProyecto(proyecto) === estadoProyectos.tipoSeleccionado &&
      [...estadoProyectos.habilidadesSeleccionadas].every((habilidad) =>
        proyecto.habilidades?.includes(habilidad)
      )
    );

  if (!proyectosVisibles.length) {
    const tipoActivo = tiposProyecto.find(
      (tipo) => tipo.id === estadoProyectos.tipoSeleccionado
    );
    const hayFiltros = estadoProyectos.habilidadesSeleccionadas.size > 0;
    colocarHTML(
      "#projectsContainer",
      `<div class="projects-empty-state">
         <i class="bi ${hayFiltros ? "bi-funnel" : tipoActivo?.icono || "bi-folder"}" aria-hidden="true"></i>
         <h2>${hayFiltros ? "No hay proyectos con estas habilidades" : `Aún no hay ${tipoActivo?.nombre.toLocaleLowerCase("es") || "proyectos"}`}</h2>
         <p>${hayFiltros ? "Prueba quitando uno de los filtros seleccionados." : "Esta categoría está lista para tus próximos proyectos."}</p>
       </div>`
    );
    return;
  }

  const destacadoEsVisible = proyectosVisibles.some(
    ({ indiceOriginal }) => indiceOriginal === estadoProyectos.indiceDestacado
  );
  if (estadoProyectos.indiceDestacado !== null && !destacadoEsVisible) {
    estadoProyectos.indiceDestacado = proyectosVisibles[0].indiceOriginal;
  }

  colocarHTML(
    "#projectsContainer",
    proyectosVisibles
      .map(({ proyecto, indiceOriginal }) => {
        const esDestacado = indiceOriginal === estadoProyectos.indiceDestacado;
        return esDestacado
          ? crearProyectoPrincipal(proyecto, indiceOriginal)
          : crearProyectoHorizontal(proyecto, indiceOriginal);
      })
      .join("")
  );

  if (animar) animarTarjetas("#projectsContainer [data-project-index]", "vertical");
}

function obtenerHabilidadesDeProyectos() {
  const nombresUsados = new Set(
    infoPersonal.proyectos.flatMap((proyecto) => proyecto.habilidades || [])
  );
  estadoProyectos.habilidadesSeleccionadas.forEach((nombre) =>
    nombresUsados.add(nombre)
  );

  return infoPersonal.habilidades.filter(
    (habilidad, indice, habilidades) =>
      nombresUsados.has(habilidad.nombre) &&
      habilidades.findIndex((item) => item.nombre === habilidad.nombre) === indice
  );
}

function normalizarTexto(valor) {
  return String(valor)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

function obtenerTipoProyecto(proyecto) {
  if (proyecto.tipoProyecto) return proyecto.tipoProyecto;

  const contenido = normalizarTexto(
    [proyecto.nombre, proyecto.categoria, ...(proyecto.habilidades || [])].join(" ")
  );

  if (/\b(android|flutter|react native|kotlin|movil|mobile)\b/.test(contenido)) {
    return "movil";
  }

  if (/\b(base de datos|database|mysql|postgresql|sql|etl)\b/.test(contenido)) {
    return "base-datos";
  }

  return "web";
}

function renderizarPestanasProyectos() {
  const cantidades = infoPersonal.proyectos.reduce((conteo, proyecto) => {
    const tipo = obtenerTipoProyecto(proyecto);
    conteo[tipo] = (conteo[tipo] || 0) + 1;
    return conteo;
  }, {});

  colocarHTML(
    "#projectTypeTabs",
    `<div class="project-type-tabs" role="tablist" aria-label="Cambiar categoría de proyectos">
       ${tiposProyecto
         .map((tipo) => {
           const activa = tipo.id === estadoProyectos.tipoSeleccionado;
           return `<button type="button" class="project-type-tab ${activa ? "active" : ""}"
                           data-project-type="${tipo.id}" role="tab" aria-selected="${activa}">
                     <i class="bi ${tipo.icono}" aria-hidden="true"></i>
                     <span>${tipo.nombre}</span>
                     <small aria-label="${cantidades[tipo.id] || 0} proyectos">${cantidades[tipo.id] || 0}</small>
                   </button>`;
         })
         .join("")}
     </div>`
  );
}

function escaparAtributo(valor) {
  return String(valor)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderizarFiltrosProyectos() {
  const filtros = obtenerHabilidadesDeProyectos();
  const hayFiltros = estadoProyectos.habilidadesSeleccionadas.size > 0;
  const busquedaNormalizada = normalizarTexto(estadoProyectos.busquedaFiltro);
  const filtrosDisponibles = filtros.filter(
    (habilidad) => !estadoProyectos.habilidadesSeleccionadas.has(habilidad.nombre)
  );
  const hayCoincidencias = filtrosDisponibles.some((habilidad) =>
    normalizarTexto(habilidad.nombre).includes(busquedaNormalizada)
  );

  colocarHTML(
    "#projectFilters",
    `<div class="project-filters-heading">
       <div>
         <span>Filtrar por habilidad</span>
         <small>Busca y selecciona una o varias opciones</small>
       </div>
       <button type="button" class="project-filter-clear ${hayFiltros ? "visible" : ""}" data-clear-project-filters>
         Limpiar filtros
       </button>
     </div>
     <div class="project-selected-filters" aria-live="polite">
       ${filtros
         .map((habilidad, indice) => {
           const seleccionada = estadoProyectos.habilidadesSeleccionadas.has(habilidad.nombre);
           if (!seleccionada) return "";
           return `<button type="button" class="project-skill-filter selected"
                           data-remove-project-filter="${indice}"
                           aria-label="Quitar filtro ${habilidad.nombre}">
                     <i class="bi ${habilidad.icono}" aria-hidden="true"></i>
                     <span>${habilidad.nombre}</span>
                     <i class="bi bi-x-lg project-filter-remove-icon" aria-hidden="true"></i>
                   </button>`;
         })
         .join("")}
     </div>
     <div class="project-filter-selector ${estadoProyectos.filtrosAbiertos ? "is-open" : ""}">
       <button type="button" class="project-filter-trigger" data-toggle-project-filters
               aria-expanded="${estadoProyectos.filtrosAbiertos}" aria-controls="projectFilterDropdown">
         <span><i class="bi bi-funnel" aria-hidden="true"></i> Buscar habilidades</span>
         <i class="bi bi-chevron-down project-filter-chevron" aria-hidden="true"></i>
       </button>
       <div id="projectFilterDropdown" class="project-filter-dropdown" ${estadoProyectos.filtrosAbiertos ? "" : "hidden"}>
         <label class="project-filter-search">
           <i class="bi bi-search" aria-hidden="true"></i>
           <input type="search" value="${escaparAtributo(estadoProyectos.busquedaFiltro)}"
                  placeholder="Buscar una habilidad..." autocomplete="off"
                  data-project-filter-search aria-label="Buscar habilidades para filtrar">
           <button type="button" class="project-filter-search-clear ${estadoProyectos.busquedaFiltro ? "visible" : ""}"
                   data-clear-filter-search aria-label="Borrar búsqueda">
             <i class="bi bi-x-lg" aria-hidden="true"></i>
           </button>
         </label>
         <div class="project-filter-options" role="listbox" aria-label="Habilidades disponibles">
           ${filtrosDisponibles
             .map((habilidad) => {
               const indice = filtros.indexOf(habilidad);
               const oculta = !normalizarTexto(habilidad.nombre).includes(busquedaNormalizada);
               return `<button type="button" class="project-filter-option ${oculta ? "is-filter-hidden" : ""}"
                               data-project-filter-index="${indice}" role="option" aria-selected="false">
                         <i class="bi ${habilidad.icono}" aria-hidden="true"></i>
                         <span>${habilidad.nombre}</span>
                         <i class="bi bi-plus-lg" aria-hidden="true"></i>
                       </button>`;
             })
             .join("")}
           <p class="project-filter-empty" ${hayCoincidencias ? "hidden" : ""}>No se encontraron habilidades.</p>
         </div>
       </div>
     </div>`
  );
}

function actualizarProyectosFiltrados(animar = true) {
  renderizarFiltrosProyectos();
  renderizarPestanasProyectos();
  renderizarProyectosDetalle(animar);
}

function abrirProyectosPorHabilidad(nombreHabilidad) {
  estadoProyectos.habilidadesSeleccionadas.clear();
  estadoProyectos.habilidadesSeleccionadas.add(nombreHabilidad);
  estadoProyectos.filtrosAbiertos = false;
  estadoProyectos.busquedaFiltro = "";
  estadoProyectos.indiceDestacado = null;
  const proyectoCoincidente = infoPersonal.proyectos.find((proyecto) =>
    proyecto.habilidades?.includes(nombreHabilidad)
  );
  if (proyectoCoincidente) {
    estadoProyectos.tipoSeleccionado = obtenerTipoProyecto(proyectoCoincidente);
  }
  actualizarProyectosFiltrados();
  showDashboardView("proyectos-view");
}

function renderizarProyectos() {
  renderizarProyectosInicio();
  renderizarFiltrosProyectos();
  renderizarPestanasProyectos();
  renderizarProyectosDetalle();
}

function animarTarjetas(selector, direccion) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const desplazamiento = direccion === "horizontal" ? "translateX(10px)" : "translateY(8px)";
  obtenerElementos(selector).forEach((tarjeta, indice) => {
    tarjeta.animate(
      [
        { opacity: 0.45, transform: desplazamiento },
        { opacity: 1, transform: "translate(0)" }
      ],
      { duration: 220, delay: indice * 35, easing: "ease-out" }
    );
  });
}

function destacarProyecto(indiceProyecto) {
  if (!Number.isInteger(indiceProyecto) || !infoPersonal.proyectos[indiceProyecto]) {
    return;
  }

  const actualizarProyecto = (animacionAlternativa = false) => {
    estadoProyectos.indiceDestacado =
      estadoProyectos.indiceDestacado === indiceProyecto ? null : indiceProyecto;
    renderizarProyectosDetalle(animacionAlternativa);
    obtenerElemento(
      estadoProyectos.indiceDestacado === null
        ? `#projectsContainer [data-project-index="${indiceProyecto}"]`
        : "#projectsContainer .project-detail-card"
    )?.focus({
      preventScroll: true
    });
  };

  /*
   * Los navegadores compatibles animan el cambio de tamaño en la misma
   * posición. Los demás conservan la animación sencilla anterior.
   */
  if (typeof document.startViewTransition === "function") {
    document.startViewTransition(() => actualizarProyecto(false));
  } else {
    actualizarProyecto(true);
  }
}

function moverCarruselProyectos(direccion) {
  const proyectosInicio = infoPersonal.proyectos.filter(
    (proyecto) => proyecto.mostrarEnInicio
  );
  if (proyectosInicio.length <= 1) return;

  const movimiento = direccion === "next" ? 1 : -1;
  estadoProyectos.inicioCarrusel =
    (estadoProyectos.inicioCarrusel + movimiento + proyectosInicio.length) %
    proyectosInicio.length;

  renderizarProyectosInicio(true);
}

/*
=========================================================
RENDERIZAR CONTACTOS
=========================================================
*/

function prepararContacto(contacto) {
  const texto = contacto.textoFijo || obtenerDato(contacto.texto);
  const valorEnlace = contacto.enlace ? obtenerDato(contacto.enlace) : "";

  if (contacto.tipo === "email") return { texto, href: `mailto:${valorEnlace}` };
  if (contacto.tipo === "whatsapp") return { texto, href: `https://wa.me/${valorEnlace}` };
  if (contacto.tipo === "tel") {
    return { texto, href: `tel:${valorEnlace.replace(/[^\d+]/g, "")}` };
  }
  if (contacto.tipo === "url") return { texto, href: valorEnlace };
  return { texto, href: "" };
}

function renderizarContactos() {
  colocarHTML(
    "#contactsContainer",
    infoPersonal.contactos
      .map((contacto) => {
        const datos = prepararContacto(contacto);
        const informacion = `<div class="contact-icon"><i class="bi ${contacto.icono}"></i></div>
          <div><span>${contacto.etiqueta}</span><h2>${datos.texto}</h2></div>`;

        if (contacto.tipo === "email") {
          return `<div class="col-lg-6">
            <article class="contact-card contact-card-email filter-item">
              ${informacion}
              <div class="contact-actions">
                <button type="button" class="contact-action contact-action-copy" data-copy-value="${datos.texto}" data-copy-label="Correo electrónico" aria-label="Copiar correo electrónico">
                  <i class="bi bi-copy"></i><span></span>
                </button>
                <a href="${datos.href}" class="contact-action contact-action-send" aria-label="Enviar un correo electrónico">
                  <i class="bi bi-send"></i><span></span>
                </a>
              </div>
            </article>
          </div>`;
        }

        if (contacto.tipo === "tel") {
          return `<div class="col-lg-6">
            <article class="contact-card contact-card-phone filter-item">
              ${informacion}
              <div class="contact-actions contact-actions-phone" aria-label="Acciones del teléfono">
                <button type="button" class="contact-action contact-action-copy" data-copy-value="${datos.texto}" data-copy-label="Número de teléfono" aria-label="Copiar número de teléfono">
                  <i class="bi bi-copy"></i>
                </button>
                <a href="${datos.href}" class="contact-action contact-action-call" aria-label="Llamar al ${datos.texto}">
                  <i class="bi bi-telephone-outbound"></i>
                </a>
              </div>
            </article>
          </div>`;
        }

        const contenido = `${informacion}
          ${datos.href ? '<i class="bi bi-arrow-up-right contact-arrow"></i>' : ""}`;

        return datos.href
          ? `<div class="col-lg-6"><a href="${datos.href}" ${contacto.tipo === "url" || contacto.tipo === "whatsapp" ? 'target="_blank" rel="noopener noreferrer"' : ""} class="contact-card filter-item">${contenido}</a></div>`
          : `<div class="col-lg-6"><div class="contact-card filter-item">${contenido}</div></div>`;
      })
      .join("")
  );
}

async function copiarContacto(boton) {
  const valor = boton?.dataset.copyValue;
  const etiqueta = boton?.dataset.copyLabel || "Dato";
  if (!valor) return;

  const contenidoOriginal = boton.innerHTML;

  try {
    let copiado = false;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await Promise.race([
          navigator.clipboard.writeText(valor),
          new Promise((_, rechazar) =>
            window.setTimeout(() => rechazar(new Error("Tiempo de copia agotado")), 800)
          )
        ]);
        copiado = true;
      } catch {
        copiado = false;
      }
    }

    if (!copiado) {
      const campoTemporal = document.createElement("textarea");
      campoTemporal.value = valor;
      campoTemporal.setAttribute("readonly", "");
      campoTemporal.style.position = "fixed";
      campoTemporal.style.opacity = "0";
      document.body.appendChild(campoTemporal);
      campoTemporal.select();

      copiado = document.execCommand("copy");
      campoTemporal.remove();
      if (!copiado) throw new Error("El navegador no permitió copiar el dato.");
    }

    boton.classList.add("copied");
    boton.innerHTML = '<i class="bi bi-check-lg"></i><span>Copiado</span>';
    boton.setAttribute("aria-label", `${etiqueta} copiado`);
  } catch (error) {
    console.error(error);
    boton.innerHTML = '<i class="bi bi-exclamation-circle"></i><span>Reintentar</span>';
  }

  window.setTimeout(() => {
    boton.classList.remove("copied");
    boton.innerHTML = contenidoOriginal;
    boton.setAttribute("aria-label", `Copiar ${etiqueta.toLocaleLowerCase("es")}`);
  }, 2200);
}

/*
=========================================================
NAVEGACIÓN, SELECCIÓN Y BUSCADOR
=========================================================
*/

function showDashboardView(viewId) {
  const selectedView = document.getElementById(viewId);
  if (!selectedView) {
    console.error(`No existe una vista con el ID: ${viewId}`);
    return;
  }

  obtenerElementos(".dashboard-view").forEach((view) => view.classList.remove("active"));
  selectedView.classList.add("active");

  obtenerElementos(".sidebar-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });

  const searchInput = document.getElementById("dashboardSearch");
  if (searchInput) searchInput.value = "";
  resetSearchResults();

  obtenerElemento(".dashboard")?.scrollTo({ top: 0, behavior: "smooth" });
}

function resetSearchResults() {
  obtenerElementos(".filter-item").forEach((item) => item.classList.remove("search-hidden"));
}

function filterCurrentView() {
  const searchInput = document.getElementById("dashboardSearch");
  const activeView = obtenerElemento(".dashboard-view.active");
  if (!searchInput || !activeView) return;

  const searchText = searchInput.value.trim().toLocaleLowerCase("es");
  activeView.querySelectorAll(".filter-item").forEach((item) => {
    const itemText = item.textContent.trim().toLocaleLowerCase("es");
    item.classList.toggle("search-hidden", !itemText.includes(searchText));
  });
}

function activarSeleccionUnica(selector) {
  obtenerElementos(selector).forEach((button) => {
    button.addEventListener("click", () => {
      obtenerElementos(selector).forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
    });
  });
}

function seleccionarEstudio(indiceEstudio) {
  if (!Number.isInteger(indiceEstudio) || !infoPersonal.estudios[indiceEstudio]) {
    return;
  }

  estadoEstudios.indiceSeleccionado = indiceEstudio;

  obtenerElementos(".information-card[data-study-index]").forEach((tarjeta) => {
    const seleccionada = Number(tarjeta.dataset.studyIndex) === indiceEstudio;
    tarjeta.classList.toggle("selected", seleccionada);
    tarjeta.setAttribute("aria-selected", String(seleccionada));
  });

  showDashboardView("estudios-view");

  /* Espera a que la vista sea visible antes de llevar la tarjeta al centro. */
  window.setTimeout(() => {
    obtenerElemento(`.information-card[data-study-index="${indiceEstudio}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 120);
}

function alternarFuncionesExperiencia(tarjeta) {
  const detalles = tarjeta?.querySelector(".experience-functions");
  if (!detalles) return;

  const expandida = tarjeta.getAttribute("aria-expanded") === "true";
  tarjeta.setAttribute("aria-expanded", String(!expandida));
  tarjeta.classList.toggle("is-expanded", !expandida);
  detalles.hidden = expandida;

  const textoAccion = tarjeta.querySelector(".experience-toggle-hint span");
  if (textoAccion) textoAccion.textContent = expandida ? "Ver funciones" : "Ocultar funciones";
}

function agregarEventos() {
  obtenerElementos("[data-theme-toggle]").forEach((botonTema) => {
    botonTema.addEventListener("click", alternarTema);
  });

  obtenerElementos(".sidebar-button").forEach((button) => {
    button.addEventListener("click", () => showDashboardView(button.dataset.view));
  });

  obtenerElementos(".internal-navigation").forEach((button) => {
    if (button.closest("#homeProjects")) return;
    button.addEventListener("click", () => {
      if (button.dataset.studyIndex !== undefined) {
        seleccionarEstudio(Number(button.dataset.studyIndex));
        return;
      }

      if (button.dataset.go) showDashboardView(button.dataset.go);
    });
  });

  obtenerElementos("[data-project-skill]").forEach((button) => {
    button.addEventListener("click", () => {
      abrirProyectosPorHabilidad(button.dataset.projectSkill);
    });
  });

  obtenerElemento("#experiencia-view")?.addEventListener("click", (event) => {
    const tarjeta = event.target.closest("[data-experience-toggle]");
    if (tarjeta) alternarFuncionesExperiencia(tarjeta);
  });

  obtenerElemento("#experiencia-view")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const tarjeta = event.target.closest("[data-experience-toggle]");
    if (tarjeta && event.target === tarjeta) {
      event.preventDefault();
      alternarFuncionesExperiencia(tarjeta);
    }
  });

  obtenerElementos("[data-flip-card]").forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
      const estaGirada = tarjeta.classList.toggle("is-flipped");
      tarjeta.setAttribute("aria-pressed", String(estaGirada));
    });
  });

  document.getElementById("dashboardSearch")?.addEventListener("input", filterCurrentView);

  obtenerElemento("#projectFilters")?.addEventListener("click", (event) => {
    const botonAlternar = event.target.closest("[data-toggle-project-filters]");
    if (botonAlternar) {
      estadoProyectos.filtrosAbiertos = !estadoProyectos.filtrosAbiertos;
      renderizarFiltrosProyectos();
      if (estadoProyectos.filtrosAbiertos) {
        window.setTimeout(() => obtenerElemento("[data-project-filter-search]")?.focus(), 0);
      }
      return;
    }

    const botonQuitar = event.target.closest("[data-remove-project-filter]");
    if (botonQuitar) {
      const habilidad = obtenerHabilidadesDeProyectos()[Number(botonQuitar.dataset.removeProjectFilter)];
      if (habilidad) estadoProyectos.habilidadesSeleccionadas.delete(habilidad.nombre);
      actualizarProyectosFiltrados();
      return;
    }

    const botonLimpiarBusqueda = event.target.closest("[data-clear-filter-search]");
    if (botonLimpiarBusqueda) {
      estadoProyectos.busquedaFiltro = "";
      renderizarFiltrosProyectos();
      window.setTimeout(() => obtenerElemento("[data-project-filter-search]")?.focus(), 0);
      return;
    }

    const botonLimpiar = event.target.closest("[data-clear-project-filters]");
    if (botonLimpiar) {
      estadoProyectos.habilidadesSeleccionadas.clear();
      actualizarProyectosFiltrados();
      return;
    }

    const botonFiltro = event.target.closest("[data-project-filter-index]");
    if (!botonFiltro) return;

    const habilidad = obtenerHabilidadesDeProyectos()[Number(botonFiltro.dataset.projectFilterIndex)];
    if (!habilidad) return;

    estadoProyectos.habilidadesSeleccionadas.add(habilidad.nombre);
    actualizarProyectosFiltrados();
    window.setTimeout(() => obtenerElemento("[data-project-filter-search]")?.focus(), 0);
  });

  obtenerElemento("#projectFilters")?.addEventListener("input", (event) => {
    if (!event.target.matches("[data-project-filter-search]")) return;

    estadoProyectos.busquedaFiltro = event.target.value;
    const busqueda = normalizarTexto(event.target.value.trim());
    let coincidencias = 0;

    obtenerElementos("#projectFilters .project-filter-option").forEach((opcion) => {
      const coincide = normalizarTexto(opcion.textContent).includes(busqueda);
      opcion.classList.toggle("is-filter-hidden", !coincide);
      if (coincide) coincidencias += 1;
    });

    const mensajeVacio = obtenerElemento("#projectFilters .project-filter-empty");
    if (mensajeVacio) mensajeVacio.hidden = coincidencias > 0;

    obtenerElemento("#projectFilters .project-filter-search-clear")
      ?.classList.toggle("visible", Boolean(event.target.value));
  });

  obtenerElemento("#projectTypeTabs")?.addEventListener("click", (event) => {
    const pestana = event.target.closest("[data-project-type]");
    if (!pestana || pestana.dataset.projectType === estadoProyectos.tipoSeleccionado) return;

    estadoProyectos.tipoSeleccionado = pestana.dataset.projectType;
    estadoProyectos.indiceDestacado = null;
    renderizarPestanasProyectos();
    renderizarProyectosDetalle(true);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !estadoProyectos.filtrosAbiertos) return;
    estadoProyectos.filtrosAbiertos = false;
    renderizarFiltrosProyectos();
    obtenerElemento("[data-toggle-project-filters]")?.focus();
  });

  document.addEventListener("click", (event) => {
    const contenedorFiltros = obtenerElemento("#projectFilters");
    if (
      !estadoProyectos.filtrosAbiertos ||
      event.composedPath().includes(contenedorFiltros)
    ) return;
    estadoProyectos.filtrosAbiertos = false;
    renderizarFiltrosProyectos();
  });

  /*
   * La delegación de eventos permite que los clics sigan funcionando
   * aunque las tarjetas de proyectos se vuelvan a crear con innerHTML.
   */
  obtenerElemento("#projectsContainer")?.addEventListener("click", (event) => {
    const botonGaleria = event.target.closest("[data-project-gallery-direction]");
    if (botonGaleria) {
      event.stopPropagation();
      moverGaleriaProyecto(botonGaleria, botonGaleria.dataset.projectGalleryDirection);
      return;
    }

    const enlace = event.target.closest("a");
    if (enlace) {
      if (enlace.getAttribute("href") === "#") {
        event.preventDefault();
        const tarjetaDelEnlace = enlace.closest("[data-project-index]");
        if (tarjetaDelEnlace) {
          destacarProyecto(Number(tarjetaDelEnlace.dataset.projectIndex));
        }
      }
      return;
    }

    const tarjeta = event.target.closest("[data-project-index]");
    if (tarjeta) destacarProyecto(Number(tarjeta.dataset.projectIndex));
  });

  obtenerElemento("#projectsContainer")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (event.target.closest("a, button, video, iframe")) return;

    const tarjeta = event.target.closest("[data-project-index]");
    if (tarjeta) {
      event.preventDefault();
      destacarProyecto(Number(tarjeta.dataset.projectIndex));
    }
  });

  obtenerElementos("[data-carousel-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      moverCarruselProyectos(button.dataset.carouselDirection);
    });
  });

  /* Los botones de reproducción se recrean al mover el carrusel. */
  obtenerElemento("#homeProjects")?.addEventListener("click", (event) => {
    const boton = event.target.closest(".internal-navigation");
    if (!boton?.dataset.go) return;

    const indiceProyecto = infoPersonal.proyectos.findIndex(
      (proyecto) => proyecto.nombre === boton.dataset.homeProject
    );

    if (indiceProyecto >= 0) {
      const proyecto = infoPersonal.proyectos[indiceProyecto];
      estadoProyectos.habilidadesSeleccionadas.clear();
      estadoProyectos.filtrosAbiertos = false;
      estadoProyectos.busquedaFiltro = "";
      estadoProyectos.tipoSeleccionado = obtenerTipoProyecto(proyecto);
      estadoProyectos.indiceDestacado = indiceProyecto;
      actualizarProyectosFiltrados(false);
    }

    showDashboardView(boton.dataset.go);
  });

  /* Cualquier tarjeta académica puede cambiar la selección. */
  obtenerElemento("#studiesContainer")?.addEventListener("click", (event) => {
    const tarjeta = event.target.closest(".information-card[data-study-index]");
    if (tarjeta) seleccionarEstudio(Number(tarjeta.dataset.studyIndex));
  });

  obtenerElemento("#studiesContainer")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const tarjeta = event.target.closest(".information-card[data-study-index]");
    if (tarjeta && event.target === tarjeta) {
      event.preventDefault();
      seleccionarEstudio(Number(tarjeta.dataset.studyIndex));
    }
  });

  obtenerElementos("[data-copy-value]").forEach((botonCopiar) => {
    botonCopiar.addEventListener("click", () => copiarContacto(botonCopiar));
  });

  obtenerElementos('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });
}

/*
=========================================================
INICIAR EL PORTAFOLIO
=========================================================
El orden es importante: primero creamos el contenido y después
agregamos los eventos a los botones que acaba de crear JavaScript.
*/

function iniciarPortafolio() {
  if (typeof infoPersonal === "undefined") {
    console.error("No se encontró scripts/infoPersonal.js");
    return;
  }

  renderizarInformacionPersonal();
  inicializarTema();
  renderizarMenu();
  renderizarEstudios();
  renderizarExperiencia();
  renderizarHabilidades();
  renderizarProyectos();
  renderizarContactos();
  agregarEventos();
}

document.addEventListener("DOMContentLoaded", iniciarPortafolio);
