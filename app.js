const PROJECTS_ENDPOINT = "./projects.json";
const LANGUAGE_STORAGE_KEY = "skepsisAppsLanguage";
const ALL_CATEGORIES = "__all__";

const REQUIRED_FIELDS = ["id", "title", "category", "summary", "description", "purpose"];

const STATIC_TRANSLATIONS = {
  es: {
    documentTitle: "Sképsis Apps | IA, ciencia de datos y automatización",
    metaDescription: "Sképsis Apps desarrolla servicios tecnológicos inteligentes para transformar datos, ideas y procesos en soluciones digitales útiles, medibles y técnicamente sólidas.",
    ogTitle: "Sképsis Apps | Soluciones tecnológicas inteligentes",
    ogDescription: "IA aplicada, ciencia de datos, automatización, aplicaciones empresariales, dashboards, APIs, modelos predictivos y flujos de datos.",
    skipPortfolio: "Saltar al portafolio",
    mainNavigation: "Navegación principal",
    goHome: "Ir al inicio de Sképsis Apps",
    navServices: "Servicios",
    navMethodology: "Metodología",
    navSolutions: "Soluciones",
    navPortfolio: "Portafolio",
    navContact: "Contacto",
    languageButtonAria: "Cambiar idioma a inglés",
    languageLabel: "English",
    navToggleOpen: "Abrir menú",
    navToggleClose: "Cerrar menú",
    heroEyebrow: "Inteligencia artificial • Ciencia de datos • Automatización",
    heroTitle: "Desarrollamos servicios tecnológicos inteligentes para transformar datos, ideas y procesos en soluciones digitales útiles, medibles y técnicamente sólidas.",
    heroDescription: "En <strong>Sképsis Apps</strong> procesamos datos para generar información de valor que apoye la toma de decisiones. Diseñamos y desarrollamos aplicaciones, dashboards, APIs, modelos predictivos, flujos de extracción, transformación y carga de datos, automatizaciones y prototipos funcionales orientados a resolver problemas reales con claridad, criterio técnico y enfoque de ingeniería.",
    heroServicesButton: "Ver servicios",
    heroTalkButton: "Hablemos",
    metricsAria: "Indicadores generales",
    metricSolutions: "Soluciones documentadas",
    metricApps: "Apps / demos",
    metricRepos: "Repositorios técnicos",
    metricArticles: "Casos y publicaciones",
    servicesEyebrow: "Qué hacemos",
    servicesTitle: "Servicios y capacidades principales",
    servicesDescription: "Procesamos datos para generar información de valor que apoye la toma de decisiones y permita construir soluciones tecnológicas útiles, medibles y técnicamente sólidas.",
    serviceAiTitle: "IA aplicada",
    serviceAiText: "Diseñamos prototipos y soluciones con modelos predictivos, agentes y automatización inteligente para clasificar información, anticipar escenarios y recomendar acciones.",
    serviceDataTitle: "Ciencia de datos",
    serviceDataText: "Procesamos, analizamos y visualizamos datos para convertir información dispersa en indicadores, patrones y conocimiento accionable.",
    serviceAutomationTitle: "Automatización",
    serviceAutomationText: "Digitalizamos flujos, integramos herramientas y reducimos tareas repetitivas o críticas mediante procesos automáticos, validaciones y reportes.",
    serviceAppsTitle: "Aplicaciones empresariales",
    serviceAppsText: "Desarrollamos aplicaciones, dashboards, demos técnicas, APIs y productos ligeros desplegables en entornos web, cloud o plataformas de validación.",
    methodologyEyebrow: "Cómo trabajamos",
    methodologyTitle: "Metodología de diseño y desarrollo",
    methodologyDescription: "Cada solución se construye con una lógica clara: entender el problema, diseñar la arquitectura, construir el activo tecnológico y validar su resultado.",
    methodDiagnosisTitle: "1. Diagnóstico",
    methodDiagnosisText: "Entendemos el problema, los datos disponibles, los procesos involucrados y el resultado esperado.",
    methodArchitectureTitle: "2. Arquitectura",
    methodArchitectureText: "Definimos el flujo de datos, los componentes tecnológicos, las integraciones y la ruta técnica de implementación.",
    methodBuildTitle: "3. Construcción tecnológica",
    methodBuildText: "Desarrollamos el activo requerido: aplicación, dashboard, API, flujo ETL, modelo predictivo, prototipo funcional para validar la solución.",
    methodValidationTitle: "4. Validación",
    methodValidationText: "Probamos la solución, revisamos resultados, documentamos hallazgos y definimos próximos pasos de despliegue o evolución.",
    solutionsEyebrow: "Soluciones que desarrollamos",
    solutionsTitle: "Activos tecnológicos para validar y escalar ideas",
    solution1: "Aplicaciones empresariales",
    solution2: "Dashboards inteligentes",
    solution3: "APIs predictivas",
    solution4: "Modelos de machine learning",
    solution5: "Flujos de extracción, transformación y carga de datos",
    solution6: "Automatización de reportes",
    solution7: "Prototipos funcionales",
    solution8: "Arquitecturas cloud",
    solution9: "Soluciones de análisis y visualización de datos",
    solution10: "Sistemas ligeros para validación y despliegue",
    techEyebrow: "Tecnologías principales",
    techTitle: "Stack técnico",
    techAria: "Tecnologías principales",
    valueEyebrow: "Valor diferencial",
    valueTitle: "Claridad técnica orientada a resultados",
    value1: "Soluciones tecnológicas simples, claras y medibles.",
    value2: "Desarrollo de extremo a extremo.",
    value3: "Integración de datos, modelos, aplicaciones y despliegue.",
    value4: "Código modular, documentado y reproducible.",
    value5: "Enfoque práctico orientado a resultados.",
    value6: "Prototipos listos para validar ideas antes de escalar.",
    positioning: "Sképsis Apps transforma datos, ideas y procesos en soluciones tecnológicas inteligentes.",
    portfolioEyebrow: "Portafolio",
    portfolioTitle: "Soluciones, casos y demostradores técnicos",
    portfolioDescription: "Explora el portafolio de Sképsis Apps: cada ficha incluye resumen ejecutivo, propósito, funcionalidades relevantes, arquitectura tecnológica y enlaces asociados.",
    searchLabel: "Buscar proyectos",
    searchPlaceholder: "Buscar por nombre, categoría o tecnología...",
    searchAria: "Buscar soluciones",
    sortLabel: "Ordenar",
    sortAria: "Ordenar proyectos",
    sortDateDesc: "Más recientes",
    sortDateAsc: "Más antiguos",
    sortTitleAsc: "Título A-Z",
    sortTitleDesc: "Título Z-A",
    categoryTitle: "Categorías",
    categoryAria: "Filtros por categoría",
    allCategories: "Todos",
    contactEyebrow: "Contacto",
    contactTitle: "Hablemos de tu próximo proyecto",
    contactDescription: "Si buscas desarrollar una solución de IA aplicada, una aplicación demostrativa, un dashboard, una API o un flujo de datos, en Sképsis Apps podemos ayudarte a estructurarlo y llevarlo a una versión funcional, medible y lista para validación.",
    whatsappMexico: "WhatsApp México",
    whatsappVenezuela: "WhatsApp Venezuela",
    emailButton: "Correo",
    explorePortfolio: "Explorar portafolio",
    contactDataAria: "Datos de contacto",
    mexicoLabel: "México:",
    venezuelaLabel: "Venezuela:",
    emailLabel: "Correo:",
    closeDetail: "Cerrar detalle",
    footerText: "Soluciones tecnológicas inteligentes.",
    linkApp: "App",
    linkGithub: "GitHub",
    linkDataset: "Dataset",
    linkArticle: "Artículo",
    linkDesign: "Diseño",
    detailButton: "Ver resumen",
    zoomHint: "Click para ampliar",
    zoomClose: "Cerrar zoom",
    zoomArchitecture: "Arquitectura tecnológica de",
    zoomView: "Vista ampliada",
    emptyTitle: "No hay proyectos con estos filtros",
    emptyText: "Ajusta la búsqueda, cambia la categoría o agrega nuevos proyectos en projects.json.",
    statusLoadError: "No fue posible cargar projects.json. Revisa formato JSON y rutas.",
    statusNoResults: "No se encontraron proyectos con los filtros actuales.",
    statusShowing: "Mostrando {shown} de {total} proyecto(s).",
    dialogPurpose: "Propósito",
    dialogDescription: "Descripción",
    dialogArchitecture: "Arquitectura de integración tecnológica",
    dialogFeatures: "Funcionalidades relevantes",
    dialogOutcome: "Resultado / impacto",
    dialogStack: "Stack tecnológico",
    dialogEvidence: "Evidencia pública",
    openApp: "Abrir app",
    githubRepository: "Repositorio GitHub",
    linkedinArticle: "Artículo LinkedIn",
    designSolution: "Diseño de la solución",
    genericLink: "Enlace"
  },
  en: {
    documentTitle: "Sképsis Apps | AI, data science and automation",
    metaDescription: "Sképsis Apps develops intelligent technology services to transform data, ideas and processes into useful, measurable and technically solid digital solutions.",
    ogTitle: "Sképsis Apps | Intelligent technology solutions",
    ogDescription: "Applied AI, data science, automation, business applications, dashboards, APIs, predictive models and data flows.",
    skipPortfolio: "Skip to portfolio",
    mainNavigation: "Main navigation",
    goHome: "Go to Sképsis Apps home",
    navServices: "Services",
    navMethodology: "Methodology",
    navSolutions: "Solutions",
    navPortfolio: "Portfolio",
    navContact: "Contact",
    languageButtonAria: "Switch language to Spanish",
    languageLabel: "Español",
    navToggleOpen: "Open menu",
    navToggleClose: "Close menu",
    heroEyebrow: "Artificial intelligence • Data science • Automation",
    heroTitle: "We develop intelligent technology services to transform data, ideas and processes into useful, measurable and technically solid digital solutions.",
    heroDescription: "At <strong>Sképsis Apps</strong>, we process data to generate valuable information that supports decision-making. We design and develop applications, dashboards, APIs, predictive models, extraction, transformation and loading flows, automations and functional prototypes aimed at solving real problems with clarity, technical judgment and an engineering approach.",
    heroServicesButton: "View services",
    heroTalkButton: "Let's talk",
    metricsAria: "General indicators",
    metricSolutions: "Documented solutions",
    metricApps: "Apps / demos",
    metricRepos: "Technical repositories",
    metricArticles: "Cases and publications",
    servicesEyebrow: "What we do",
    servicesTitle: "Core services and capabilities",
    servicesDescription: "We process data to generate valuable information that supports decision-making and enables the creation of useful, measurable and technically solid technology solutions.",
    serviceAiTitle: "Applied AI",
    serviceAiText: "We design prototypes and solutions with predictive models, agents and intelligent automation to classify information, anticipate scenarios and recommend actions.",
    serviceDataTitle: "Data science",
    serviceDataText: "We process, analyze and visualize data to turn scattered information into indicators, patterns and actionable knowledge.",
    serviceAutomationTitle: "Automation",
    serviceAutomationText: "We digitize workflows, integrate tools and reduce repetitive or critical tasks through automated processes, validations and reports.",
    serviceAppsTitle: "Business applications",
    serviceAppsText: "We develop applications, dashboards, technical demos, APIs and lightweight products deployable in web, cloud or validation platforms.",
    methodologyEyebrow: "How we work",
    methodologyTitle: "Design and development methodology",
    methodologyDescription: "Each solution is built with a clear logic: understand the problem, design the architecture, build the technology asset and validate its result.",
    methodDiagnosisTitle: "1. Diagnosis",
    methodDiagnosisText: "We understand the problem, available data, involved processes and expected outcome.",
    methodArchitectureTitle: "2. Architecture",
    methodArchitectureText: "We define the data flow, technology components, integrations and technical implementation path.",
    methodBuildTitle: "3. Technology build",
    methodBuildText: "We develop the required asset: application, dashboard, API, ETL flow, predictive model or functional prototype to validate the solution.",
    methodValidationTitle: "4. Validation",
    methodValidationText: "We test the solution, review results, document findings and define next steps for deployment or evolution.",
    solutionsEyebrow: "Solutions we develop",
    solutionsTitle: "Technology assets to validate and scale ideas",
    solution1: "Business applications",
    solution2: "Intelligent dashboards",
    solution3: "Predictive APIs",
    solution4: "Machine learning models",
    solution5: "Data extraction, transformation and loading flows",
    solution6: "Report automation",
    solution7: "Functional prototypes",
    solution8: "Cloud architectures",
    solution9: "Data analysis and visualization solutions",
    solution10: "Lightweight systems for validation and deployment",
    techEyebrow: "Main technologies",
    techTitle: "Technical stack",
    techAria: "Main technologies",
    valueEyebrow: "Differential value",
    valueTitle: "Technical clarity focused on results",
    value1: "Simple, clear and measurable technology solutions.",
    value2: "End-to-end development.",
    value3: "Integration of data, models, applications and deployment.",
    value4: "Modular, documented and reproducible code.",
    value5: "Practical approach focused on results.",
    value6: "Prototypes ready to validate ideas before scaling.",
    positioning: "Sképsis Apps transforms data, ideas and processes into intelligent technology solutions.",
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Solutions, cases and technical demonstrators",
    portfolioDescription: "Explore the Sképsis Apps portfolio: each card includes an executive summary, purpose, relevant features, technology architecture and associated links.",
    searchLabel: "Search projects",
    searchPlaceholder: "Search by name, category or technology...",
    searchAria: "Search solutions",
    sortLabel: "Sort",
    sortAria: "Sort projects",
    sortDateDesc: "Newest",
    sortDateAsc: "Oldest",
    sortTitleAsc: "Title A-Z",
    sortTitleDesc: "Title Z-A",
    categoryTitle: "Categories",
    categoryAria: "Category filters",
    allCategories: "All",
    contactEyebrow: "Contact",
    contactTitle: "Let's talk about your next project",
    contactDescription: "If you want to develop an applied AI solution, a demonstrative application, a dashboard, an API or a data flow, Sképsis Apps can help you structure it and take it to a functional, measurable version ready for validation.",
    whatsappMexico: "WhatsApp Mexico",
    whatsappVenezuela: "WhatsApp Venezuela",
    emailButton: "Email",
    explorePortfolio: "Explore portfolio",
    contactDataAria: "Contact information",
    mexicoLabel: "Mexico:",
    venezuelaLabel: "Venezuela:",
    emailLabel: "Email:",
    closeDetail: "Close details",
    footerText: "Intelligent technology solutions.",
    linkApp: "App",
    linkGithub: "GitHub",
    linkDataset: "Dataset",
    linkArticle: "Article",
    linkDesign: "Design",
    detailButton: "View summary",
    zoomHint: "Click to enlarge",
    zoomClose: "Close zoom",
    zoomArchitecture: "Technology architecture of",
    zoomView: "Enlarged view",
    emptyTitle: "No projects match these filters",
    emptyText: "Adjust the search, change the category or add new projects in projects.json.",
    statusLoadError: "projects.json could not be loaded. Check JSON format and paths.",
    statusNoResults: "No projects were found with the current filters.",
    statusShowing: "Showing {shown} of {total} project(s).",
    dialogPurpose: "Purpose",
    dialogDescription: "Description",
    dialogArchitecture: "Technology integration architecture",
    dialogFeatures: "Relevant features",
    dialogOutcome: "Outcome / impact",
    dialogStack: "Technology stack",
    dialogEvidence: "Public evidence",
    openApp: "Open app",
    githubRepository: "GitHub repository",
    linkedinArticle: "LinkedIn article",
    designSolution: "Solution design",
    genericLink: "Link"
  }
};

const state = {
  projects: [],
  activeCategory: ALL_CATEGORIES,
  searchTerm: "",
  sortMode: "date-desc",
  language: getInitialLanguage()
};

const elements = {
  navToggle: document.querySelector("#navToggle"),
  navLinks: document.querySelector("#navLinks"),
  languageToggle: document.querySelector("#languageToggle"),
  languageLabel: document.querySelector("#languageLabel"),
  grid: document.querySelector("#projectGrid"),
  categoryFilters: document.querySelector("#categoryFilters"),
  searchInput: document.querySelector("#searchInput"),
  sortSelect: document.querySelector("#sortSelect"),
  statusMessage: document.querySelector("#statusMessage"),
  currentYear: document.querySelector("#currentYear"),
  metricTotalProjects: document.querySelector("#metricTotalProjects"),
  metricPublishedApps: document.querySelector("#metricPublishedApps"),
  metricRepositories: document.querySelector("#metricRepositories"),
  metricArticles: document.querySelector("#metricArticles"),
  dialog: document.querySelector("#projectDialog"),
  dialogContent: document.querySelector("#dialogContent"),
  dialogCloseButton: document.querySelector("#dialogCloseButton")
};

/**
 * Registra eventos de ejecución en consola con marca temporal.
 *
 * @param {"INFO" | "WARN" | "ERROR"} level Nivel del evento.
 * @param {string} message Descripción del evento.
 * @returns {void}
 */
function logEvent(level, message) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} | ${level} | ${message}`);
}

/**
 * Obtiene el idioma inicial desde localStorage o desde el navegador.
 *
 * @returns {"es" | "en"} Idioma inicial soportado.
 */
function getInitialLanguage() {
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage === "en" || storedLanguage === "es") {
    return storedLanguage;
  }

  const browserLanguage = navigator.language || "es";
  if (browserLanguage.toLowerCase().startsWith("en")) {
    return "en";
  }

  return "es";
}

/**
 * Obtiene un texto traducido según el idioma activo.
 *
 * @param {string} key Clave de traducción.
 * @returns {string} Texto traducido.
 */
function t(key) {
  const dictionary = STATIC_TRANSLATIONS[state.language] || STATIC_TRANSLATIONS.es;
  return dictionary[key] || STATIC_TRANSLATIONS.es[key] || key;
}

/**
 * Normaliza texto para búsquedas insensibles a mayúsculas y acentos.
 *
 * @param {string | undefined | null} value Texto de entrada.
 * @returns {string} Texto normalizado.
 */
function normalizeText(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .normalize("NFD")
    .replaceAll(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

/**
 * Evalúa si una URL externa es segura para renderizarse como enlace.
 *
 * @param {string | undefined | null} value URL candidata.
 * @returns {boolean} Verdadero si es una URL http/https válida.
 */
function isValidExternalUrl(value) {
  if (typeof value !== "string" || value.trim() === "") {
    return false;
  }

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch (error) {
    logEvent("WARN", `URL inválida omitida: ${value}`);
    return false;
  }
}

/**
 * Crea un elemento DOM con texto seguro.
 *
 * @param {string} tagName Nombre de etiqueta HTML.
 * @param {string} text Texto a insertar con textContent.
 * @param {string | undefined} className Clase CSS opcional.
 * @returns {HTMLElement} Elemento construido.
 */
function createTextElement(tagName, text, className = undefined) {
  const element = document.createElement(tagName);
  element.textContent = text || "";

  if (className) {
    element.className = className;
  }

  return element;
}

/**
 * Aplica textos estáticos según el idioma activo.
 *
 * @returns {void}
 */
function applyStaticTranslations() {
  document.documentElement.lang = state.language;
  document.title = t("documentTitle");

  const descriptionMeta = document.querySelector('meta[name="description"]');
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", t("metaDescription"));
  }

  if (ogTitleMeta) {
    ogTitleMeta.setAttribute("content", t("ogTitle"));
  }

  if (ogDescriptionMeta) {
    ogDescriptionMeta.setAttribute("content", t("ogDescription"));
  }

  for (const node of document.querySelectorAll("[data-i18n]")) {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  }

  for (const node of document.querySelectorAll("[data-i18n-html]")) {
    const key = node.getAttribute("data-i18n-html");
    node.innerHTML = t(key);
  }

  for (const node of document.querySelectorAll("[data-i18n-placeholder]")) {
    const key = node.getAttribute("data-i18n-placeholder");
    node.setAttribute("placeholder", t(key));
  }

  for (const node of document.querySelectorAll("[data-i18n-aria-label]")) {
    const key = node.getAttribute("data-i18n-aria-label");
    node.setAttribute("aria-label", t(key));
  }

  if (elements.languageLabel) {
    elements.languageLabel.textContent = t("languageLabel");
  }

  if (elements.languageToggle) {
    elements.languageToggle.setAttribute("aria-label", t("languageButtonAria"));
  }

  if (elements.navToggle) {
    const isOpen = elements.navLinks.classList.contains("open");
    elements.navToggle.setAttribute("aria-label", isOpen ? t("navToggleClose") : t("navToggleOpen"));
  }
}

/**
 * Valida un proyecto individual.
 *
 * @param {object} project Proyecto leído desde JSON.
 * @param {number} index Índice del proyecto en el arreglo.
 * @returns {boolean} Verdadero si el proyecto cumple la estructura mínima.
 * @throws {Error} Lanza error cuando falta un campo requerido.
 */
function validateProject(project, index) {
  if (typeof project !== "object" || project === null || Array.isArray(project)) {
    throw new Error(`El proyecto en posición ${index} debe ser un objeto JSON.`);
  }

  for (const field of REQUIRED_FIELDS) {
    if (typeof project[field] !== "string" || project[field].trim() === "") {
      throw new Error(`El proyecto en posición ${index} no tiene el campo requerido: ${field}.`);
    }
  }

  if (!Array.isArray(project.features)) {
    throw new Error(`El proyecto "${project.title}" debe incluir features como lista.`);
  }

  if (!Array.isArray(project.techStack)) {
    throw new Error(`El proyecto "${project.title}" debe incluir techStack como lista.`);
  }

  return true;
}

/**
 * Valida la colección de proyectos.
 *
 * @param {Array<object>} projects Proyectos leídos desde JSON.
 * @returns {boolean} Verdadero si todos son válidos.
 */
function validateProjects(projects) {
  if (!Array.isArray(projects)) {
    throw new Error("projects.json debe contener un arreglo de proyectos.");
  }

  for (let index = 0; index < projects.length; index += 1) {
    validateProject(projects[index], index);
  }

  return true;
}

/**
 * Carga proyectos desde el archivo JSON.
 *
 * @returns {Promise<Array<object>>} Lista de proyectos.
 */
async function loadProjects() {
  try {
    const response = await fetch(PROJECTS_ENDPOINT);

    if (!response.ok) {
      throw new Error(`No se pudo leer ${PROJECTS_ENDPOINT}. HTTP ${response.status}.`);
    }

    const projects = await response.json();
    validateProjects(projects);
    logEvent("INFO", `Proyectos cargados correctamente: ${projects.length}`);
    return projects;
  } catch (error) {
    logEvent("ERROR", error.message);
    showStatus(t("statusLoadError"), true);
    return [];
  }
}

/**
 * Muestra mensajes operativos en pantalla.
 *
 * @param {string} message Mensaje visible.
 * @param {boolean} isError Indica si el mensaje representa error.
 * @returns {void}
 */
function showStatus(message, isError = false) {
  elements.statusMessage.textContent = message;
  elements.statusMessage.classList.toggle("error", isError);
}

/**
 * Obtiene una versión localizada de un proyecto.
 *
 * @param {object} project Proyecto base.
 * @returns {object} Proyecto con campos del idioma activo cuando existan.
 */
function localizeProject(project) {
  if (state.language !== "en") {
    return { ...project };
  }

  const translations = project.translations && project.translations.en;
  if (typeof translations !== "object" || translations === null) {
    return { ...project };
  }

  return {
    ...project,
    ...translations,
    features: Array.isArray(translations.features) ? translations.features : project.features,
    techStack: Array.isArray(translations.techStack) ? translations.techStack : project.techStack
  };
}

/**
 * Localiza todos los proyectos.
 *
 * @returns {Array<object>} Proyectos localizados.
 */
function getLocalizedProjects() {
  return state.projects.map((project) => localizeProject(project));
}

/**
 * Obtiene categorías únicas desde los proyectos localizados.
 *
 * @param {Array<object>} projects Lista de proyectos localizados.
 * @returns {Array<string>} Categorías ordenadas.
 */
function getUniqueCategories(projects) {
  const values = new Set();

  for (const project of projects) {
    if (typeof project.category === "string" && project.category.trim() !== "") {
      values.add(project.category);
    }
  }

  return Array.from(values).sort((a, b) => a.localeCompare(b, state.language));
}

/**
 * Renderiza botones de filtro reutilizables.
 *
 * @param {HTMLElement} container Contenedor DOM.
 * @param {Array<string>} values Valores de filtro.
 * @param {string} activeValue Valor activo.
 * @param {(value: string) => void} onSelect Callback al seleccionar.
 * @returns {void}
 */
function renderFilterButtons(container, values, activeValue, onSelect) {
  container.textContent = "";

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = `filter-button${activeValue === ALL_CATEGORIES ? " active" : ""}`;
  allButton.textContent = t("allCategories");
  allButton.setAttribute("aria-pressed", activeValue === ALL_CATEGORIES ? "true" : "false");
  allButton.addEventListener("click", () => onSelect(ALL_CATEGORIES));
  container.appendChild(allButton);

  for (const value of values) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${value === activeValue ? " active" : ""}`;
    button.textContent = value;
    button.setAttribute("aria-pressed", value === activeValue ? "true" : "false");

    button.addEventListener("click", () => {
      onSelect(value);
    });

    container.appendChild(button);
  }
}

/**
 * Renderiza filtros de categoría.
 *
 * @returns {void}
 */
function renderFilters() {
  const categories = getUniqueCategories(getLocalizedProjects());

  renderFilterButtons(elements.categoryFilters, categories, state.activeCategory, (value) => {
    state.activeCategory = value;
    renderFilters();
    renderProjects();
  });
}

/**
 * Calcula métricas de alto nivel para el portafolio.
 *
 * @param {Array<object>} projects Lista de proyectos.
 * @returns {{ total: number, apps: number, repositories: number, articles: number }} Métricas.
 */
function calculateMetrics(projects) {
  const metrics = {
    total: projects.length,
    apps: 0,
    repositories: 0,
    articles: 0
  };

  for (const project of projects) {
    if (isValidExternalUrl(project.appUrl)) {
      metrics.apps += 1;
    }

    if (isValidExternalUrl(project.githubUrl)) {
      metrics.repositories += 1;
    }

    if (isValidExternalUrl(project.linkedinUrl)) {
      metrics.articles += 1;
    }
  }

  return metrics;
}

/**
 * Renderiza indicadores principales.
 *
 * @returns {void}
 */
function renderMetrics() {
  const metrics = calculateMetrics(state.projects);
  elements.metricTotalProjects.textContent = String(metrics.total);
  elements.metricPublishedApps.textContent = String(metrics.apps);
  elements.metricRepositories.textContent = String(metrics.repositories);
  elements.metricArticles.textContent = String(metrics.articles);
}

/**
 * Evalúa si un proyecto localizado cumple búsqueda y filtros activos.
 *
 * @param {object} project Proyecto localizado.
 * @returns {boolean} Verdadero si debe mostrarse.
 */
function matchesFilters(project) {
  const categoryMatches = state.activeCategory === ALL_CATEGORIES || project.category === state.activeCategory;

  const searchable = [
    project.title,
    project.category,
    project.summary,
    project.description,
    project.purpose,
    project.outcome,
    ...(Array.isArray(project.features) ? project.features : []),
    ...(Array.isArray(project.techStack) ? project.techStack : [])
  ].join(" ");

  const searchMatches = state.searchTerm === "" || normalizeText(searchable).includes(normalizeText(state.searchTerm));

  return categoryMatches && searchMatches;
}

/**
 * Ordena proyectos de acuerdo con la preferencia activa.
 *
 * @param {Array<object>} projects Lista de proyectos filtrada.
 * @returns {Array<object>} Nueva lista ordenada.
 */
function sortProjects(projects) {
  const sortedProjects = [...projects];

  sortedProjects.sort((a, b) => {
    if (state.sortMode === "title-asc") {
      return a.title.localeCompare(b.title, state.language);
    }

    if (state.sortMode === "title-desc") {
      return b.title.localeCompare(a.title, state.language);
    }

    const dateA = Date.parse(a.date || "1900-01-01");
    const dateB = Date.parse(b.date || "1900-01-01");

    if (state.sortMode === "date-asc") {
      return dateA - dateB;
    }

    return dateB - dateA;
  });

  return sortedProjects;
}

/**
 * Agrega chips del stack tecnológico.
 *
 * @param {HTMLElement} container Contenedor destino.
 * @param {Array<string>} techStack Tecnologías del proyecto.
 * @returns {void}
 */
function appendTechStack(container, techStack) {
  const stack = document.createElement("div");
  stack.className = "stack";

  for (const tech of techStack.slice(0, 6)) {
    stack.appendChild(createTextElement("span", tech));
  }

  container.appendChild(stack);
}

/**
 * Agrega un enlace externo si existe y es válido.
 *
 * @param {HTMLElement} container Contenedor destino.
 * @param {string} label Texto visible.
 * @param {string | undefined | null} url URL externa.
 * @param {boolean} isPrimary Estilo principal.
 * @returns {void}
 */
function appendExternalLink(container, label, url, isPrimary = false) {
  if (!isValidExternalUrl(url)) {
    return;
  }

  const link = document.createElement("a");
  link.className = `action-link${isPrimary ? " primary-link" : ""}`;
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  container.appendChild(link);
}

/**
 * Agrega un enlace interno hacia un recurso del sitio, como una imagen de diseño.
 *
 * @param {HTMLElement} container Contenedor destino.
 * @param {string} label Texto visible del enlace.
 * @param {string | undefined | null} path Ruta relativa del recurso.
 * @returns {void}
 */
function appendAssetLink(container, label, path) {
  if (typeof path !== "string" || path.trim() === "") {
    return;
  }

  const isUnsafePath = path.startsWith("javascript:") || path.startsWith("data:");
  if (isUnsafePath) {
    logEvent("WARN", `Ruta interna inválida omitida: ${path}`);
    return;
  }

  const link = document.createElement("a");
  link.className = "action-link";
  link.href = path;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = label;
  container.appendChild(link);
}

/**
 * Agrega enlaces adicionales declarados en el proyecto.
 *
 * @param {HTMLElement} container Contenedor destino.
 * @param {Array<object> | undefined | null} links Lista de enlaces {label, url}.
 * @returns {void}
 */
function appendExtraLinks(container, links) {
  if (!Array.isArray(links)) {
    return;
  }

  for (const linkItem of links) {
    if (typeof linkItem !== "object" || linkItem === null) {
      continue;
    }

    const label = typeof linkItem.label === "string" && linkItem.label.trim() !== ""
      ? linkItem.label.trim()
      : t("genericLink");

    appendExternalLink(container, label, linkItem.url);
  }
}

/**
 * Abre una vista ampliada de una imagen interna del portafolio.
 *
 * @param {string | undefined | null} source Ruta relativa de la imagen.
 * @param {string} title Título descriptivo de la imagen.
 * @returns {void}
 */
function openImageZoom(source, title) {
  if (typeof source !== "string" || source.trim() === "") {
    return;
  }

  const isUnsafePath = source.startsWith("javascript:") || source.startsWith("data:");
  if (isUnsafePath) {
    logEvent("WARN", `Ruta de imagen inválida omitida: ${source}`);
    return;
  }

  const previousOverlay = document.querySelector(".image-zoom-overlay");
  if (previousOverlay) {
    previousOverlay.remove();
  }

  const overlay = document.createElement("div");
  overlay.className = "image-zoom-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", `${t("zoomView")}: ${title}`);

  const panel = document.createElement("div");
  panel.className = "image-zoom-panel";

  const header = document.createElement("div");
  header.className = "image-zoom-header";
  header.appendChild(createTextElement("h3", title));

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "image-zoom-close";
  closeButton.setAttribute("aria-label", t("zoomClose"));
  closeButton.textContent = "×";

  const image = document.createElement("img");
  image.className = "image-zoom-img";
  image.src = source;
  image.alt = title;

  header.appendChild(closeButton);
  panel.appendChild(header);
  panel.appendChild(image);
  overlay.appendChild(panel);
  document.body.appendChild(overlay);
  document.body.classList.add("image-zoom-open");

  const closeZoom = () => {
    overlay.remove();
    document.body.classList.remove("image-zoom-open");
  };

  closeButton.addEventListener("click", closeZoom);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeZoom();
    }
  });

  document.addEventListener("keydown", function handleZoomEscape(event) {
    if (event.key === "Escape" && document.body.contains(overlay)) {
      closeZoom();
      document.removeEventListener("keydown", handleZoomEscape);
    }
  });
}

/**
 * Agrega comportamiento de zoom a una imagen o contenedor visual.
 *
 * @param {HTMLElement} target Elemento clicable.
 * @param {string | undefined | null} source Ruta relativa de la imagen.
 * @param {string} title Título descriptivo.
 * @returns {void}
 */
function enableImageZoom(target, source, title) {
  if (typeof source !== "string" || source.trim() === "") {
    return;
  }

  target.classList.add("zoomable-image");
  target.setAttribute("role", "button");
  target.setAttribute("tabindex", "0");
  target.setAttribute("aria-label", title);

  target.addEventListener("click", () => openImageZoom(source, title));
  target.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImageZoom(source, title);
    }
  });
}

/**
 * Construye tarjeta visual para un proyecto.
 *
 * @param {object} project Proyecto localizado.
 * @returns {HTMLElement} Tarjeta renderizada.
 */
function buildProjectCard(project) {
  const card = document.createElement("article");
  card.className = "card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "card-image-wrap";

  const image = document.createElement("img");
  image.className = "card-image";
  image.src = project.architectureImage || "assets/images/placeholder-project.svg";
  image.alt = `${t("dialogArchitecture")} - ${project.title}`;
  image.loading = "lazy";
  image.onerror = () => {
    image.src = "assets/images/placeholder-project.svg";
  };

  const zoomHint = document.createElement("span");
  zoomHint.className = "zoom-hint";
  zoomHint.textContent = t("zoomHint");
  imageWrap.appendChild(image);
  imageWrap.appendChild(zoomHint);
  enableImageZoom(imageWrap, image.src, `${t("zoomArchitecture")} ${project.title}`);
  card.appendChild(imageWrap);

  const body = document.createElement("div");
  body.className = "card-body";

  const meta = document.createElement("div");
  meta.className = "card-meta";
  meta.appendChild(createTextElement("span", project.category || t("navPortfolio"), "badge"));
  body.appendChild(meta);

  body.appendChild(createTextElement("h3", project.title));
  body.appendChild(createTextElement("p", project.summary, "card-summary"));

  appendTechStack(body, Array.isArray(project.techStack) ? project.techStack : []);

  const actions = document.createElement("div");
  actions.className = "card-actions";

  appendExternalLink(actions, t("linkApp"), project.appUrl, true);
  appendExtraLinks(actions, project.extraLinks);
  appendExternalLink(actions, t("linkGithub"), project.githubUrl);
  appendExternalLink(actions, t("linkDataset"), project.datasetUrl);
  appendExternalLink(actions, t("linkArticle"), project.linkedinUrl);
  appendAssetLink(actions, t("linkDesign"), project.designImage);

  const detailsButton = document.createElement("button");
  detailsButton.type = "button";
  detailsButton.className = "details-button";
  detailsButton.textContent = t("detailButton");
  detailsButton.addEventListener("click", () => openProjectDialog(project));

  actions.appendChild(detailsButton);
  body.appendChild(actions);
  card.appendChild(body);

  return card;
}

/**
 * Renderiza estado vacío cuando no hay resultados.
 *
 * @returns {HTMLElement} Elemento de estado vacío.
 */
function buildEmptyState() {
  const empty = document.createElement("div");
  empty.className = "empty-state";
  empty.appendChild(createTextElement("h3", t("emptyTitle")));
  empty.appendChild(createTextElement("p", t("emptyText")));
  return empty;
}

/**
 * Renderiza proyectos en la grilla.
 *
 * @returns {void}
 */
function renderProjects() {
  const localizedProjects = getLocalizedProjects();
  const filtered = sortProjects(localizedProjects.filter(matchesFilters));
  elements.grid.textContent = "";

  if (filtered.length === 0) {
    elements.grid.appendChild(buildEmptyState());
    showStatus(t("statusNoResults"));
    return;
  }

  for (const project of filtered) {
    elements.grid.appendChild(buildProjectCard(project));
  }

  const status = t("statusShowing")
    .replace("{shown}", String(filtered.length))
    .replace("{total}", String(state.projects.length));
  showStatus(status);
}

/**
 * Crea lista HTML de funcionalidades.
 *
 * @param {Array<string>} features Lista de funcionalidades.
 * @returns {HTMLElement} Lista construida.
 */
function buildFeatureList(features) {
  const list = document.createElement("ul");
  list.className = "feature-list";

  for (const feature of features) {
    list.appendChild(createTextElement("li", feature));
  }

  return list;
}

/**
 * Construye una sección del diálogo de detalle.
 *
 * @param {string} title Título de sección.
 * @param {string | HTMLElement} content Contenido textual o nodo.
 * @returns {HTMLElement} Sección renderizada.
 */
function buildDialogSection(title, content) {
  const section = document.createElement("section");
  section.className = "dialog-section";
  section.appendChild(createTextElement("h3", title));

  if (typeof content === "string") {
    section.appendChild(createTextElement("p", content));
  } else {
    section.appendChild(content);
  }

  return section;
}

/**
 * Abre el modal de resumen ejecutivo del proyecto.
 *
 * @param {object} project Proyecto localizado.
 * @returns {void}
 */
function openProjectDialog(project) {
  elements.dialogContent.textContent = "";

  const layout = document.createElement("div");
  layout.className = "dialog-layout";

  const body = document.createElement("div");
  body.className = "dialog-body";

  body.appendChild(createTextElement("p", project.category, "eyebrow"));

  const title = createTextElement("h2", project.title);
  title.id = "dialogTitle";
  body.appendChild(title);

  body.appendChild(createTextElement("p", project.summary));

  body.appendChild(buildDialogSection(t("dialogPurpose"), project.purpose));
  body.appendChild(buildDialogSection(t("dialogDescription"), project.description));

  const architectureFigure = document.createElement("figure");
  architectureFigure.className = "dialog-architecture";

  architectureFigure.appendChild(createTextElement("h3", t("dialogArchitecture")));

  const image = document.createElement("img");
  image.className = "dialog-image";
  image.src = project.architectureImage || "assets/images/placeholder-project.svg";
  image.alt = `${t("dialogArchitecture")} - ${project.title}`;
  image.loading = "lazy";
  image.onerror = () => {
    image.src = "assets/images/placeholder-project.svg";
  };

  enableImageZoom(image, image.src, `${t("zoomArchitecture")} ${project.title}`);
  architectureFigure.appendChild(image);
  body.appendChild(architectureFigure);

  if (Array.isArray(project.features) && project.features.length > 0) {
    body.appendChild(buildDialogSection(t("dialogFeatures"), buildFeatureList(project.features)));
  }

  if (project.outcome) {
    body.appendChild(buildDialogSection(t("dialogOutcome"), project.outcome));
  }

  const stackContainer = document.createElement("div");
  appendTechStack(stackContainer, Array.isArray(project.techStack) ? project.techStack : []);
  body.appendChild(buildDialogSection(t("dialogStack"), stackContainer));

  const linkList = document.createElement("div");
  linkList.className = "link-list";
  appendExternalLink(linkList, t("openApp"), project.appUrl, true);
  appendExtraLinks(linkList, project.extraLinks);
  appendExternalLink(linkList, t("githubRepository"), project.githubUrl);
  appendExternalLink(linkList, t("linkDataset"), project.datasetUrl);
  appendExternalLink(linkList, t("linkedinArticle"), project.linkedinUrl);
  appendAssetLink(linkList, t("designSolution"), project.designImage);

  if (linkList.children.length > 0) {
    body.appendChild(buildDialogSection(t("dialogEvidence"), linkList));
  }

  layout.appendChild(body);
  elements.dialogContent.appendChild(layout);

  try {
    elements.dialog.showModal();
    document.body.classList.add("dialog-open");
  } catch (error) {
    logEvent("WARN", `No se pudo abrir dialog nativo: ${error.message}`);
    elements.dialog.setAttribute("open", "open");
    document.body.classList.add("dialog-open");
  }
}

/**
 * Cierra el modal de detalle.
 *
 * @returns {void}
 */
function closeProjectDialog() {
  try {
    elements.dialog.close();
  } catch (error) {
    elements.dialog.removeAttribute("open");
  }

  document.body.classList.remove("dialog-open");
}

/**
 * Cambia el idioma activo y re-renderiza la interfaz.
 *
 * @param {"es" | "en"} language Idioma destino.
 * @returns {void}
 */
function setLanguage(language) {
  if (language !== "es" && language !== "en") {
    return;
  }

  state.language = language;
  state.activeCategory = ALL_CATEGORIES;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

  applyStaticTranslations();
  renderFilters();
  renderProjects();
}

/**
 * Alterna entre español e inglés.
 *
 * @returns {void}
 */
function toggleLanguage() {
  const nextLanguage = state.language === "es" ? "en" : "es";
  setLanguage(nextLanguage);
}

window.skepsisToggleLanguage = toggleLanguage;

/**
 * Inicializa eventos de interfaz.
 *
 * @returns {void}
 */
function initializeEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    renderProjects();
  });

  elements.sortSelect.addEventListener("change", (event) => {
    state.sortMode = event.target.value;
    renderProjects();
  });

  elements.dialogCloseButton.addEventListener("click", closeProjectDialog);

  elements.dialog.addEventListener("click", (event) => {
    if (event.target === elements.dialog) {
      closeProjectDialog();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && elements.dialog.open) {
      closeProjectDialog();
    }
  });

  elements.navToggle.addEventListener("click", () => {
    const isOpen = elements.navLinks.classList.toggle("open");
    elements.navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    elements.navToggle.setAttribute("aria-label", isOpen ? t("navToggleClose") : t("navToggleOpen"));
  });

  if (elements.languageToggle) {
    elements.languageToggle.addEventListener("click", toggleLanguage);
  }

  for (const link of elements.navLinks.querySelectorAll("a")) {
    link.addEventListener("click", () => {
      elements.navLinks.classList.remove("open");
      elements.navToggle.setAttribute("aria-expanded", "false");
      elements.navToggle.setAttribute("aria-label", t("navToggleOpen"));
    });
  }
}

/**
 * Función principal de ejecución de la landing.
 *
 * @returns {Promise<void>}
 */
async function main() {
  logEvent("INFO", "Inicializando landing page bilingüe.");
  elements.currentYear.textContent = String(new Date().getFullYear());

  applyStaticTranslations();
  initializeEvents();

  state.projects = await loadProjects();

  renderMetrics();
  renderFilters();
  renderProjects();

  logEvent("INFO", "Landing page bilingüe lista.");
}

main().catch((error) => {
  logEvent("ERROR", `Error crítico de inicialización: ${error.message}`);
});
