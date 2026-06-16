const PROJECTS_ENDPOINT = "./projects.json?v=31-2";
const LANGUAGE_STORAGE_KEY = "skepsisAppsLanguage";
const SUPPORTED_LANGUAGES = ["es", "en", "fr", "nb"];
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
    zoomButton: "Ampliar arquitectura",
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
    languageButtonAria: "Change language to French",
    languageLabel: "Français",
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
    zoomButton: "Zoom architecture",
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
  },
  fr: {
    documentTitle: "Sképsis Apps | IA, science des données et automatisation",
    metaDescription: "Sképsis Apps développe des services technologiques intelligents pour transformer les données, les idées et les processus en solutions numériques utiles, mesurables et techniquement solides.",
    ogTitle: "Sképsis Apps | Solutions technologiques intelligentes",
    ogDescription: "IA appliquée, science des données, automatisation, applications métier, tableaux de bord, API, modèles prédictifs et flux de données.",
    skipPortfolio: "Aller au portefeuille",
    mainNavigation: "Navigation principale",
    goHome: "Aller à l’accueil de Sképsis Apps",
    navServices: "Services",
    navMethodology: "Méthodologie",
    navSolutions: "Solutions",
    navPortfolio: "Portefeuille",
    navContact: "Contact",
    languageButtonAria: "Passer la langue au norvégien",
    languageLabel: "Norsk",
    navToggleOpen: "Ouvrir le menu",
    navToggleClose: "Fermer le menu",
    heroEyebrow: "Intelligence artificielle • Science des données • Automatisation",
    heroTitle: "Nous développons des services technologiques intelligents pour transformer les données, les idées et les processus en solutions numériques utiles, mesurables et techniquement solides.",
    heroDescription: "Chez <strong>Sképsis Apps</strong>, nous traitons les données afin de générer des informations de valeur pour soutenir la prise de décision. Nous concevons et développons des applications, tableaux de bord, API, modèles prédictifs, flux d’extraction, transformation et chargement de données, automatisations et prototypes fonctionnels destinés à résoudre des problèmes réels avec clarté, rigueur technique et approche d’ingénierie.",
    heroServicesButton: "Voir les services",
    heroTalkButton: "Parlons-en",
    metricsAria: "Indicateurs généraux",
    metricSolutions: "Solutions documentées",
    metricApps: "Applications / démos",
    metricRepos: "Dépôts techniques",
    metricArticles: "Cas et publications",
    servicesEyebrow: "Ce que nous faisons",
    servicesTitle: "Services et capacités principales",
    servicesDescription: "Nous traitons les données pour générer des informations de valeur qui soutiennent la prise de décision et permettent de construire des solutions technologiques utiles, mesurables et techniquement solides.",
    serviceAiTitle: "IA appliquée",
    serviceAiText: "Nous concevons des prototypes et des solutions avec des modèles prédictifs, des agents et une automatisation intelligente pour classifier l’information, anticiper des scénarios et recommander des actions.",
    serviceDataTitle: "Science des données",
    serviceDataText: "Nous traitons, analysons et visualisons les données pour transformer des informations dispersées en indicateurs, modèles et connaissances exploitables.",
    serviceAutomationTitle: "Automatisation",
    serviceAutomationText: "Nous numérisons les flux de travail, intégrons des outils et réduisons les tâches répétitives ou critiques grâce à des processus automatiques, validations et rapports.",
    serviceAppsTitle: "Applications d’entreprise",
    serviceAppsText: "Nous développons des applications, tableaux de bord, démos techniques, API et produits légers déployables dans des environnements web, cloud ou de validation.",
    methodologyEyebrow: "Comment nous travaillons",
    methodologyTitle: "Méthodologie de conception et développement",
    methodologyDescription: "Chaque solution est construite avec une logique claire : comprendre le problème, concevoir l’architecture, construire l’actif technologique et valider son résultat.",
    methodDiagnosisTitle: "1. Diagnostic",
    methodDiagnosisText: "Nous comprenons le problème, les données disponibles, les processus concernés et le résultat attendu.",
    methodArchitectureTitle: "2. Architecture",
    methodArchitectureText: "Nous définissons le flux de données, les composants technologiques, les intégrations et la feuille de route technique de mise en œuvre.",
    methodBuildTitle: "3. Construction technologique",
    methodBuildText: "Nous développons l’actif requis : application, tableau de bord, API, flux ETL, modèle prédictif ou prototype fonctionnel pour valider la solution.",
    methodValidationTitle: "4. Validation",
    methodValidationText: "Nous testons la solution, examinons les résultats, documentons les constats et définissons les prochaines étapes de déploiement ou d’évolution.",
    solutionsEyebrow: "Solutions que nous développons",
    solutionsTitle: "Actifs technologiques pour valider et faire évoluer les idées",
    solution1: "Applications d’entreprise",
    solution2: "Tableaux de bord intelligents",
    solution3: "API prédictives",
    solution4: "Modèles de machine learning",
    solution5: "Flux d’extraction, transformation et chargement de données",
    solution6: "Automatisation des rapports",
    solution7: "Prototypes fonctionnels",
    solution8: "Architectures cloud",
    solution9: "Solutions d’analyse et visualisation de données",
    solution10: "Systèmes légers pour validation et déploiement",
    techEyebrow: "Technologies principales",
    techTitle: "Stack technique",
    techAria: "Technologies principales",
    valueEyebrow: "Valeur différentielle",
    valueTitle: "Clarté technique orientée résultats",
    value1: "Solutions technologiques simples, claires et mesurables.",
    value2: "Développement de bout en bout.",
    value3: "Intégration de données, modèles, applications et déploiement.",
    value4: "Code modulaire, documenté et reproductible.",
    value5: "Approche pratique orientée résultats.",
    value6: "Prototypes prêts à valider les idées avant le passage à l’échelle.",
    positioning: "Sképsis Apps transforme données, idées et processus en solutions technologiques intelligentes.",
    portfolioEyebrow: "Portefeuille",
    portfolioTitle: "Solutions, cas et démonstrateurs techniques",
    portfolioDescription: "Explorez le portefeuille de Sképsis Apps : chaque fiche inclut résumé exécutif, objectif, fonctionnalités pertinentes, architecture technologique et liens associés.",
    searchLabel: "Rechercher des projets",
    searchPlaceholder: "Rechercher par nom, catégorie ou technologie...",
    searchAria: "Rechercher des solutions",
    sortLabel: "Trier",
    sortAria: "Trier les projets",
    sortDateDesc: "Plus récents",
    sortDateAsc: "Plus anciens",
    sortTitleAsc: "Titre A-Z",
    sortTitleDesc: "Titre Z-A",
    categoryTitle: "Catégories",
    categoryAria: "Filtres par catégorie",
    allCategories: "Toutes",
    contactEyebrow: "Contact",
    contactTitle: "Parlons de votre prochain projet",
    contactDescription: "Si vous cherchez à développer une solution d’IA appliquée, une application démonstrative, un tableau de bord, une API ou un flux de données, Sképsis Apps peut vous aider à le structurer et à l’amener vers une version fonctionnelle, mesurable et prête à être validée.",
    whatsappMexico: "WhatsApp Mexique",
    whatsappVenezuela: "WhatsApp Venezuela",
    emailButton: "Courriel",
    explorePortfolio: "Explorer le portefeuille",
    contactDataAria: "Coordonnées",
    mexicoLabel: "Mexique :",
    venezuelaLabel: "Venezuela :",
    emailLabel: "Courriel :",
    closeDetail: "Fermer le détail",
    footerText: "Solutions technologiques intelligentes.",
    linkApp: "Application",
    linkGithub: "GitHub",
    linkDataset: "Dataset",
    linkArticle: "Article",
    linkDesign: "Design",
    detailButton: "Voir le résumé",
    zoomHint: "Cliquer pour agrandir",
    zoomButton: "Agrandir l’architecture",
    zoomClose: "Fermer",
    zoomArchitecture: "Architecture technologique de",
    zoomView: "Vue agrandie",
    emptyTitle: "Aucun projet trouvé",
    emptyText: "Essayez une autre recherche ou catégorie.",
    statusLoadError: "Impossible de charger les projets. Vérifiez le fichier projects.json.",
    statusNoResults: "Aucun projet ne correspond aux filtres.",
    statusShowing: "Affichage de {shown} projet(s) sur {total}.",
    dialogPurpose: "Objectif",
    dialogDescription: "Description",
    dialogArchitecture: "Architecture d’intégration technologique",
    dialogFeatures: "Fonctionnalités pertinentes",
    dialogOutcome: "Résultat / impact",
    dialogStack: "Stack technologique",
    dialogEvidence: "Preuves publiques",
    openApp: "Ouvrir l’application",
    githubRepository: "Dépôt GitHub",
    linkedinArticle: "Article LinkedIn",
    designSolution: "Design de la solution",
    genericLink: "Lien"
  },
  nb: {
    documentTitle: "Sképsis Apps | KI, datavitenskap og automatisering",
    metaDescription: "Sképsis Apps utvikler intelligente teknologitjenester for å omdanne data, ideer og prosesser til nyttige, målbare og teknisk solide digitale løsninger.",
    ogTitle: "Sképsis Apps | Intelligente teknologiløsninger",
    ogDescription: "Anvendt KI, datavitenskap, automatisering, forretningsapplikasjoner, dashbord, API-er, prediktive modeller og dataflyter.",
    skipPortfolio: "Gå til porteføljen",
    mainNavigation: "Hovednavigasjon",
    goHome: "Gå til Sképsis Apps startside",
    navServices: "Tjenester",
    navMethodology: "Metodikk",
    navSolutions: "Løsninger",
    navPortfolio: "Portefølje",
    navContact: "Kontakt",
    languageButtonAria: "Bytt språk til spansk",
    languageLabel: "Español",
    navToggleOpen: "Åpne meny",
    navToggleClose: "Lukk meny",
    heroEyebrow: "Kunstig intelligens • Datavitenskap • Automatisering",
    heroTitle: "Vi utvikler intelligente teknologitjenester som omdanner data, ideer og prosesser til nyttige, målbare og teknisk solide digitale løsninger.",
    heroDescription: "Hos <strong>Sképsis Apps</strong> behandler vi data for å skape verdifull informasjon som støtter beslutningstaking. Vi designer og utvikler applikasjoner, dashbord, API-er, prediktive modeller, dataflyter for ekstraksjon, transformasjon og lasting, automatiseringer og funksjonelle prototyper for å løse reelle problemer med klarhet, teknisk vurdering og ingeniørmessig tilnærming.",
    heroServicesButton: "Se tjenester",
    heroTalkButton: "La oss snakke",
    metricsAria: "Generelle indikatorer",
    metricSolutions: "Dokumenterte løsninger",
    metricApps: "Apper / demoer",
    metricRepos: "Tekniske repositorier",
    metricArticles: "Casestudier og publikasjoner",
    servicesEyebrow: "Hva vi gjør",
    servicesTitle: "Kjernetjenester og kapasiteter",
    servicesDescription: "Vi behandler data for å skape verdifull informasjon som støtter beslutningstaking og gjør det mulig å bygge nyttige, målbare og teknisk solide teknologiløsninger.",
    serviceAiTitle: "Anvendt KI",
    serviceAiText: "Vi designer prototyper og løsninger med prediktive modeller, agenter og intelligent automatisering for å klassifisere informasjon, forutse scenarier og anbefale handlinger.",
    serviceDataTitle: "Datavitenskap",
    serviceDataText: "Vi behandler, analyserer og visualiserer data for å gjøre spredt informasjon om til indikatorer, mønstre og handlingsrettet kunnskap.",
    serviceAutomationTitle: "Automatisering",
    serviceAutomationText: "Vi digitaliserer arbeidsflyter, integrerer verktøy og reduserer repeterende eller kritiske oppgaver gjennom automatiske prosesser, valideringer og rapporter.",
    serviceAppsTitle: "Forretningsapplikasjoner",
    serviceAppsText: "Vi utvikler applikasjoner, dashbord, tekniske demoer, API-er og lette produkter som kan distribueres i web-, sky- eller valideringsmiljøer.",
    methodologyEyebrow: "Hvordan vi jobber",
    methodologyTitle: "Metodikk for design og utvikling",
    methodologyDescription: "Hver løsning bygges med en klar logikk: forstå problemet, designe arkitekturen, bygge den teknologiske komponenten og validere resultatet.",
    methodDiagnosisTitle: "1. Diagnose",
    methodDiagnosisText: "Vi forstår problemet, tilgjengelige data, involverte prosesser og forventet resultat.",
    methodArchitectureTitle: "2. Arkitektur",
    methodArchitectureText: "Vi definerer dataflyten, teknologikomponentene, integrasjonene og den tekniske implementeringsruten.",
    methodBuildTitle: "3. Teknologisk bygging",
    methodBuildText: "Vi utvikler den nødvendige komponenten: applikasjon, dashbord, API, ETL-flyt, prediktiv modell eller funksjonell prototype for å validere løsningen.",
    methodValidationTitle: "4. Validering",
    methodValidationText: "Vi tester løsningen, gjennomgår resultatene, dokumenterer funn og definerer neste steg for distribusjon eller videreutvikling.",
    solutionsEyebrow: "Løsninger vi utvikler",
    solutionsTitle: "Teknologiske ressurser for å validere og skalere ideer",
    solution1: "Forretningsapplikasjoner",
    solution2: "Intelligente dashbord",
    solution3: "Prediktive API-er",
    solution4: "Maskinlæringsmodeller",
    solution5: "Dataflyter for ekstraksjon, transformasjon og lasting",
    solution6: "Automatisering av rapporter",
    solution7: "Funksjonelle prototyper",
    solution8: "Skyarkitekturer",
    solution9: "Løsninger for dataanalyse og visualisering",
    solution10: "Lette systemer for validering og distribusjon",
    techEyebrow: "Hovedteknologier",
    techTitle: "Teknisk stack",
    techAria: "Hovedteknologier",
    valueEyebrow: "Differensierende verdi",
    valueTitle: "Teknisk klarhet rettet mot resultater",
    value1: "Enkle, tydelige og målbare teknologiløsninger.",
    value2: "Ende-til-ende-utvikling.",
    value3: "Integrasjon av data, modeller, applikasjoner og distribusjon.",
    value4: "Modulær, dokumentert og reproduserbar kode.",
    value5: "Praktisk tilnærming rettet mot resultater.",
    value6: "Prototyper klare for å validere ideer før skalering.",
    positioning: "Sképsis Apps omdanner data, ideer og prosesser til intelligente teknologiløsninger.",
    portfolioEyebrow: "Portefølje",
    portfolioTitle: "Løsninger, caser og tekniske demonstratorer",
    portfolioDescription: "Utforsk Sképsis Apps-porteføljen: hvert kort inkluderer sammendrag, formål, relevante funksjoner, teknologisk arkitektur og tilknyttede lenker.",
    searchLabel: "Søk i prosjekter",
    searchPlaceholder: "Søk etter navn, kategori eller teknologi...",
    searchAria: "Søk i løsninger",
    sortLabel: "Sorter",
    sortAria: "Sorter prosjekter",
    sortDateDesc: "Nyeste",
    sortDateAsc: "Eldste",
    sortTitleAsc: "Tittel A-Z",
    sortTitleDesc: "Tittel Z-A",
    categoryTitle: "Kategorier",
    categoryAria: "Kategorifiltre",
    allCategories: "Alle",
    contactEyebrow: "Kontakt",
    contactTitle: "La oss snakke om ditt neste prosjekt",
    contactDescription: "Hvis du ønsker å utvikle en anvendt KI-løsning, en demonstrasjonsapplikasjon, et dashbord, en API eller en dataflyt, kan Sképsis Apps hjelpe deg med å strukturere den og ta den til en funksjonell, målbar og valideringsklar versjon.",
    whatsappMexico: "WhatsApp Mexico",
    whatsappVenezuela: "WhatsApp Venezuela",
    emailButton: "E-post",
    explorePortfolio: "Utforsk porteføljen",
    contactDataAria: "Kontaktinformasjon",
    mexicoLabel: "Mexico:",
    venezuelaLabel: "Venezuela:",
    emailLabel: "E-post:",
    closeDetail: "Lukk detaljer",
    footerText: "Intelligente teknologiløsninger.",
    linkApp: "App",
    linkGithub: "GitHub",
    linkDataset: "Datasett",
    linkArticle: "Artikkel",
    linkDesign: "Design",
    detailButton: "Se sammendrag",
    zoomHint: "Klikk for å forstørre",
    zoomButton: "Forstørr arkitektur",
    zoomClose: "Lukk",
    zoomArchitecture: "Teknologisk arkitektur for",
    zoomView: "Forstørret visning",
    emptyTitle: "Ingen prosjekter funnet",
    emptyText: "Prøv et annet søk eller en annen kategori.",
    statusLoadError: "Kunne ikke laste prosjektene. Sjekk projects.json-filen.",
    statusNoResults: "Ingen prosjekter samsvarer med filtrene.",
    statusShowing: "Viser {shown} av {total} prosjekt(er).",
    dialogPurpose: "Formål",
    dialogDescription: "Beskrivelse",
    dialogArchitecture: "Teknologisk integrasjonsarkitektur",
    dialogFeatures: "Relevante funksjoner",
    dialogOutcome: "Resultat / effekt",
    dialogStack: "Teknologisk stack",
    dialogEvidence: "Offentlig dokumentasjon",
    openApp: "Åpne app",
    githubRepository: "GitHub-repositorium",
    linkedinArticle: "LinkedIn-artikkel",
    designSolution: "Løsningsdesign",
    genericLink: "Lenke"
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

  if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguage = (navigator.language || "es").toLowerCase();

  if (browserLanguage.startsWith("fr")) {
    return "fr";
  }

  if (browserLanguage.startsWith("no") || browserLanguage.startsWith("nb") || browserLanguage.startsWith("nn")) {
    return "nb";
  }

  if (browserLanguage.startsWith("en")) {
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

  const nextLanguageLabelMap = {
    es: "English",
    en: "Français",
    fr: "Norsk",
    nb: "Español"
  };

  const nextLanguageAriaMap = {
    es: "Cambiar idioma a inglés",
    en: "Switch language to French",
    fr: "Changer la langue en norvégien",
    nb: "Bytt språk til spansk"
  };

  if (elements.languageLabel) {
    elements.languageLabel.textContent = nextLanguageLabelMap[state.language] || "English";
  }

  if (elements.languageToggle) {
    elements.languageToggle.setAttribute("aria-label", nextLanguageAriaMap[state.language] || t("languageButtonAria"));
    elements.languageToggle.setAttribute("title", nextLanguageLabelMap[state.language] || "English");
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
  if (state.language === "es") {
    return { ...project };
  }

  const translations = project.translations && project.translations[state.language];
  if (typeof translations !== "object" || translations === null) {
    return { ...project };
  }

  return {
    ...project,
    ...translations,
    features: Array.isArray(translations.features) ? translations.features : project.features,
    techStack: Array.isArray(translations.techStack) ? translations.techStack : project.techStack,
    extraLinks: Array.isArray(translations.extraLinks) ? translations.extraLinks : project.extraLinks
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

  const controls = document.createElement("div");
  controls.className = "image-zoom-controls";

  const zoomOutButton = document.createElement("button");
  zoomOutButton.type = "button";
  zoomOutButton.className = "image-zoom-control";
  zoomOutButton.setAttribute("aria-label", "Reducir zoom");
  zoomOutButton.textContent = "−";

  const zoomResetButton = document.createElement("button");
  zoomResetButton.type = "button";
  zoomResetButton.className = "image-zoom-control image-zoom-reset";
  zoomResetButton.setAttribute("aria-label", "Restablecer zoom");
  zoomResetButton.textContent = "100%";

  const zoomInButton = document.createElement("button");
  zoomInButton.type = "button";
  zoomInButton.className = "image-zoom-control";
  zoomInButton.setAttribute("aria-label", "Aumentar zoom");
  zoomInButton.textContent = "+";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "image-zoom-close";
  closeButton.setAttribute("aria-label", t("zoomClose"));
  closeButton.textContent = "×";

  controls.appendChild(zoomOutButton);
  controls.appendChild(zoomResetButton);
  controls.appendChild(zoomInButton);
  controls.appendChild(closeButton);
  header.appendChild(controls);

  const canvas = document.createElement("div");
  canvas.className = "image-zoom-canvas";

  const image = document.createElement("img");
  image.className = "image-zoom-img";
  image.src = source;
  image.alt = title;

  canvas.appendChild(image);
  panel.appendChild(header);
  panel.appendChild(canvas);
  overlay.appendChild(panel);

  const activeDialog = document.querySelector("dialog[open]");
  const zoomHost = activeDialog || document.body;
  zoomHost.appendChild(overlay);
  if (activeDialog) {
    activeDialog.classList.add("dialog-zoom-open");
  }
  document.body.classList.add("image-zoom-open");

  let zoomLevel = 1;
  const minZoom = 1;
  const maxZoom = 5;
  const stepZoom = 0.25;

  const applyZoom = () => {
    const boundedZoom = Math.min(maxZoom, Math.max(minZoom, zoomLevel));
    zoomLevel = boundedZoom;

    const previousScrollRatio = canvas.scrollWidth > canvas.clientWidth
      ? canvas.scrollLeft / Math.max(1, canvas.scrollWidth - canvas.clientWidth)
      : 0;

    image.style.width = `${boundedZoom * 100}%`;
    image.style.maxWidth = "none";
    image.style.transform = "none";
    zoomResetButton.textContent = `${Math.round(boundedZoom * 100)}%`;
    canvas.classList.toggle("is-zoomed", boundedZoom > 1);

    window.requestAnimationFrame(() => {
      const maxScrollLeft = Math.max(0, canvas.scrollWidth - canvas.clientWidth);
      canvas.scrollLeft = boundedZoom === 1 ? 0 : Math.round(maxScrollLeft * previousScrollRatio);
      canvas.scrollTop = boundedZoom === 1 ? 0 : canvas.scrollTop;
    });
  };

  const changeZoom = (delta) => {
    zoomLevel += delta;
    applyZoom();
  };

  const closeZoom = () => {
    overlay.remove();
    const activeDialog = document.querySelector("dialog.dialog-zoom-open");
    if (activeDialog) {
      activeDialog.classList.remove("dialog-zoom-open");
    }
    document.body.classList.remove("image-zoom-open");
  };

  zoomOutButton.addEventListener("click", () => changeZoom(-stepZoom));
  zoomInButton.addEventListener("click", () => changeZoom(stepZoom));
  zoomResetButton.addEventListener("click", () => {
    zoomLevel = 1;
    applyZoom();
  });

  canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    const direction = event.deltaY < 0 ? stepZoom : -stepZoom;
    changeZoom(direction);
  }, { passive: false });

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

  applyZoom();
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

  const architectureZoomTitle = `${t("zoomArchitecture")} ${project.title}`;
  enableImageZoom(image, image.src, architectureZoomTitle);
  architectureFigure.appendChild(image);

  const zoomButton = document.createElement("button");
  zoomButton.type = "button";
  zoomButton.className = "architecture-zoom-button";
  zoomButton.textContent = t("zoomButton");
  zoomButton.addEventListener("click", () => openImageZoom(image.src, architectureZoomTitle));
  architectureFigure.appendChild(zoomButton);

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
 * @param {"es" | "en" | "fr" | "nb"} language Idioma destino.
 * @returns {void}
 */
function setLanguage(language) {
  if (!SUPPORTED_LANGUAGES.includes(language)) {
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
 * Alterna entre Español, English, Français y Norsk.
 *
 * @returns {void}
 */
function toggleLanguage() {
  const currentIndex = SUPPORTED_LANGUAGES.indexOf(state.language);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % SUPPORTED_LANGUAGES.length : 0;
  setLanguage(SUPPORTED_LANGUAGES[nextIndex]);
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
  logEvent("INFO", "Inicializando landing page multilingüe.");
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
