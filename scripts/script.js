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
  cantidadVisible: 3
};

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
  if (!enlaceDisponible(enlace)) return 'href="#"';
  const atributoDescarga = descargar ? `download="${descargar}"` : "";
  const nuevaVentana = descargar ? "" : 'target="_blank" rel="noopener noreferrer"';
  return `href="${enlace}" ${atributoDescarga} ${nuevaVentana}`;
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
    "<span>♡ </span>PORTFOLIO"
  );
/* Por si en algun momento manejo logo */
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
           <span class="about-face-label">Presentación</span>
           <span class="about-face-text">${persona.sobreMi.presentacion}</span>
           <small>Haz clic para conocer más</small>
         </span>
         <span class="about-face about-face-back">
           <i class="bi bi-arrow-repeat flip-indicator" aria-hidden="true"></i>
           <span class="about-face-label">Información personal</span>
           <i class="bi bi-mortarboard about-face-icon" aria-hidden="true"></i>
           <span class="about-face-text">${persona.sobreMi.datosPersonales}</span>
           <small>Haz clic para volver</small>
         </span>
       </span>
     </button>

     <button type="button" class="about-flip-card" data-flip-card aria-pressed="false" aria-label="Girar tarjeta de perfil profesional">
       <span class="about-flip-inner">
         <span class="about-face about-face-front about-profile-front">
           <i class="bi bi-arrow-repeat flip-indicator" aria-hidden="true"></i>
           <span class="about-face-label">Perfil profesional</span>
           <i class="bi bi-lightning-charge about-face-icon" aria-hidden="true"></i>
           <span class="about-face-title">${persona.sobreMi.perfilProfesional}</span>
           <small>Haz clic para conocer mi motivación</small>
         </span>
         <span class="about-face about-face-back">
           <i class="bi bi-arrow-repeat flip-indicator" aria-hidden="true"></i>
           <span class="about-face-label">Lo que me impulsa</span>
           <i class="bi bi-quote about-face-icon" aria-hidden="true"></i>
           <span class="about-face-text">${persona.sobreMi.motivacion}</span>
           <small>Haz clic para volver</small>
         </span>
       </span>
     </button>`
  );

  colocarHTML(
    "#topbarActions",
    `<button type="button" class="topbar-button internal-navigation" data-go="contacto-view" aria-label="Ir a contacto">
       <i class="bi bi-envelope"></i>
     </button>
     <a ${atributosEnlace(persona.hojaDeVida, persona.nombreDescargaCV)} class="topbar-button" aria-label="Descargar hoja de vida">
       <i class="bi bi-download"></i>
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
                 <p>${estudio.institucion}</p>
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
          `<button type="button" class="home-skill filter-item">
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
      .map(
        (habilidad) =>
          `<button type="button" class="skill-card filter-item">
             <i class="bi ${habilidad.icono}"></i>
             <h2>${habilidad.nombre}</h2>
             <p>${habilidad.descripcion}</p>
           </button>`
      )
      .join("")
  );
}

/*
=========================================================
RENDERIZAR PROYECTOS
=========================================================
*/

function crearImagenProyecto(proyecto, claseImagen = "project-image", texto = "Imagen") {
  if (proyecto.imagen) {
    return `<img src="${proyecto.imagen}" alt="${proyecto.nombre}" class="${claseImagen}">`;
  }
  return `<i class="bi bi-image"></i><span>${texto}</span>`;
}

function crearVideoProyecto(proyecto) {
  if (!proyecto.video) {
    return '<i class="bi bi-play-circle"></i><span>Video del proyecto</span>';
  }

  const esArchivoDeVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(proyecto.video);
  if (esArchivoDeVideo) {
    return `<video controls preload="metadata"><source src="${proyecto.video}">Tu navegador no permite reproducir este video.</video>`;
  }

  return `<iframe src="${proyecto.video}" title="Video de ${proyecto.nombre}" allowfullscreen></iframe>`;
}

function crearProyectoInicio(proyecto) {
  return `<article class="home-project filter-item">
    <div class="project-placeholder">
      ${crearImagenProyecto(proyecto)}
      <button type="button" class="play-button internal-navigation" data-go="proyectos-view" aria-label="Ver proyecto">
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
        <span class="category-label">${proyecto.categoria}</span>
        <h2>${proyecto.nombre}</h2>
        <p>${proyecto.descripcion}</p>
        <div class="project-buttons">
          <a ${atributosEnlace(proyecto.enlace)} class="gradient-button">Ver proyecto <i class="bi bi-box-arrow-up-right"></i></a>
          <a ${atributosEnlace(proyecto.github)} class="secondary-button">GitHub <i class="bi bi-github"></i></a>
        </div>
      </div>
    </article>
  </div>`;
}

function crearProyectoHorizontal(proyecto, indiceOriginal) {
  return `<div class="project-grid-item project-grid-item-compact" style="view-transition-name: project-${indiceOriginal}">
    <article class="horizontal-project-card filter-item" data-project-index="${indiceOriginal}" tabindex="0" role="button" aria-label="Destacar el proyecto ${proyecto.nombre}">
      <div class="horizontal-image">${crearImagenProyecto(proyecto, "project-image", "")}</div>
      <div><span>${proyecto.categoria}</span><h2>${proyecto.nombre}</h2><a ${atributosEnlace(proyecto.enlace)}>Ver proyecto</a></div>
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

  if (!infoPersonal.proyectos[estadoProyectos.indiceDestacado]) {
    estadoProyectos.indiceDestacado = 0;
  }

  colocarHTML(
    "#projectsContainer",
    infoPersonal.proyectos
      .map((proyecto, indiceOriginal) => {
        const esDestacado = indiceOriginal === estadoProyectos.indiceDestacado;
        return esDestacado
          ? crearProyectoPrincipal(proyecto, indiceOriginal)
          : crearProyectoHorizontal(proyecto, indiceOriginal);
      })
      .join("")
  );

  if (animar) animarTarjetas("#projectsContainer [data-project-index]", "vertical");
}

function renderizarProyectos() {
  renderizarProyectosInicio();
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

  if (estadoProyectos.indiceDestacado === indiceProyecto) return;

  const actualizarProyecto = (animacionAlternativa = false) => {
    estadoProyectos.indiceDestacado = indiceProyecto;
    renderizarProyectosDetalle(animacionAlternativa);
    obtenerElemento("#projectsContainer .project-detail-card")?.focus({
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
                <button type="button" class="contact-action contact-action-copy" data-copy-email="${datos.texto}" aria-label="Copiar correo electrónico">
                  <i class="bi bi-copy"></i><span></span>
                </button>
                <a href="${datos.href}" class="contact-action contact-action-send" aria-label="Enviar un correo electrónico">
                  <i class="bi bi-send"></i><span></span>
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

async function copiarCorreo(boton) {
  const correo = boton?.dataset.copyEmail;
  if (!correo) return;

  const contenidoOriginal = boton.innerHTML;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(correo);
    } else {
      const campoTemporal = document.createElement("textarea");
      campoTemporal.value = correo;
      campoTemporal.setAttribute("readonly", "");
      campoTemporal.style.position = "fixed";
      campoTemporal.style.opacity = "0";
      document.body.appendChild(campoTemporal);
      campoTemporal.select();

      const copiado = document.execCommand("copy");
      campoTemporal.remove();
      if (!copiado) throw new Error("El navegador no permitió copiar el correo.");
    }

    boton.classList.add("copied");
    boton.innerHTML = '<i class="bi bi-check-lg"></i><span>Copiado</span>';
    boton.setAttribute("aria-label", "Correo copiado");
  } catch (error) {
    console.error(error);
    boton.innerHTML = '<i class="bi bi-exclamation-circle"></i><span>Reintentar</span>';
  }

  window.setTimeout(() => {
    boton.classList.remove("copied");
    boton.innerHTML = contenidoOriginal;
    boton.setAttribute("aria-label", "Copiar correo electrónico");
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

function agregarEventos() {
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

  activarSeleccionUnica(".home-skill");
  activarSeleccionUnica(".skill-card");

  obtenerElementos("[data-flip-card]").forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
      const estaGirada = tarjeta.classList.toggle("is-flipped");
      tarjeta.setAttribute("aria-pressed", String(estaGirada));
    });
  });

  document.getElementById("dashboardSearch")?.addEventListener("input", filterCurrentView);

  /*
   * La delegación de eventos permite que los clics sigan funcionando
   * aunque las tarjetas de proyectos se vuelvan a crear con innerHTML.
   */
  obtenerElemento("#projectsContainer")?.addEventListener("click", (event) => {
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
    if (boton?.dataset.go) showDashboardView(boton.dataset.go);
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

  obtenerElemento("#contactsContainer")?.addEventListener("click", (event) => {
    const botonCopiar = event.target.closest("[data-copy-email]");
    if (botonCopiar) copiarCorreo(botonCopiar);
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
  renderizarMenu();
  renderizarEstudios();
  renderizarHabilidades();
  renderizarProyectos();
  renderizarContactos();
  agregarEventos();
}

document.addEventListener("DOMContentLoaded", iniciarPortafolio);
