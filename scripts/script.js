"use strict";

/*
=========================================
ELEMENTOS PRINCIPALES
=========================================
*/

const sidebarButtons = document.querySelectorAll(".sidebar-button");
const dashboardViews = document.querySelectorAll(".dashboard-view");
const internalNavigationButtons = document.querySelectorAll(
  ".internal-navigation"
);

const dashboard = document.querySelector(".dashboard");
const searchInput = document.getElementById("dashboardSearch");

const homeSkillButtons = document.querySelectorAll(".home-skill");
const fullSkillButtons = document.querySelectorAll(".skill-card");


/*
=========================================
CAMBIAR LA VISTA DEL DASHBOARD
=========================================
*/

function showDashboardView(viewId) {
  const selectedView = document.getElementById(viewId);

  if (!selectedView) {
    console.error(`No existe una vista con el ID: ${viewId}`);
    return;
  }

  /*
  Ocultamos todas las vistas y mostramos únicamente
  la que fue seleccionada.
  */

  dashboardViews.forEach((view) => {
    view.classList.remove("active");
  });

  selectedView.classList.add("active");


  /*
  Quitamos la iluminación de todos los botones
  del menú lateral.
  */

  sidebarButtons.forEach((button) => {
    button.classList.remove("active");
  });


  /*
  Iluminamos únicamente el botón relacionado
  con la vista seleccionada.
  */

  const activeSidebarButton = document.querySelector(
    `.sidebar-button[data-view="${viewId}"]`
  );

  if (activeSidebarButton) {
    activeSidebarButton.classList.add("active");
  }


  /*
  Limpiamos el buscador cada vez que se cambia
  de sección.
  */

  searchInput.value = "";
  resetSearchResults();


  /*
  Regresamos el contenido del dashboard
  a la parte superior.
  */

  dashboard.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/*
=========================================
BOTONES DEL MENÚ LATERAL
=========================================
*/

sidebarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const viewId = button.dataset.view;

    showDashboardView(viewId);
  });
});


/*
=========================================
BOTONES INTERNOS
=========================================
Estos son botones como:
- Ver estudios
- Ver habilidades
- Contactar
- Ver proyectos
=========================================
*/

internalNavigationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const destinationView = button.dataset.go;

    if (destinationView) {
      showDashboardView(destinationView);
    }
  });
});


/*
=========================================
SELECCIONAR HABILIDADES DEL INICIO
=========================================
Solo una habilidad queda iluminada.
No hay ninguna iluminada inicialmente.
=========================================
*/

homeSkillButtons.forEach((button) => {
  button.addEventListener("click", () => {

    homeSkillButtons.forEach((skill) => {
      skill.classList.remove("selected");
    });

    button.classList.add("selected");
  });
});


/*
=========================================
SELECCIONAR HABILIDADES COMPLETAS
=========================================
*/

fullSkillButtons.forEach((button) => {
  button.addEventListener("click", () => {

    fullSkillButtons.forEach((skill) => {
      skill.classList.remove("selected");
    });

    button.classList.add("selected");
  });
});


/*
=========================================
BUSCADOR
=========================================
El buscador filtra únicamente los elementos
de la sección que se encuentra visible.
=========================================
*/

function resetSearchResults() {
  const filterItems = document.querySelectorAll(".filter-item");

  filterItems.forEach((item) => {
    item.classList.remove("search-hidden");
  });
}


function filterCurrentView() {
  const searchText = searchInput.value
    .trim()
    .toLowerCase();

  const activeView = document.querySelector(
    ".dashboard-view.active"
  );

  if (!activeView) {
    return;
  }

  const items = activeView.querySelectorAll(".filter-item");

  items.forEach((item) => {
    const itemText = item.textContent
      .trim()
      .toLowerCase();

    const matchesSearch = itemText.includes(searchText);

    item.classList.toggle(
      "search-hidden",
      !matchesSearch
    );
  });
}


searchInput.addEventListener("input", filterCurrentView);


/*
=========================================
EVITAR QUE LOS ENLACES VACÍOS RECARGUEN
LA PÁGINA
=========================================
Cuando reemplaces # por enlaces reales,
funcionarán normalmente.
=========================================
*/

const emptyLinks = document.querySelectorAll('a[href="#"]');

emptyLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});