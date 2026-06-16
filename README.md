# Sképsis Apps — Landing corporativa y portafolio de soluciones IA

Landing corporativa estática para **Sképsis Apps**, orientada a presentar servicios tecnológicos, metodología de trabajo y un portafolio dinámico de soluciones de inteligencia artificial, ciencia de datos, automatización, analítica, dashboards, APIs, percepción computacional, soluciones industriales, aplicaciones web y prototipos funcionales.

El proyecto está diseñado para desplegarse en **GitHub Pages** sin backend. El portafolio se administra desde `projects.json`, lo que permite agregar, editar o retirar proyectos sin modificar la estructura principal de `index.html`.

---

## Información general

| Elemento | Detalle |
|---|---|
| Proyecto | Sképsis Apps — Landing corporativa |
| Versión documental | v31-2 |
| Repositorio | `https://github.com/Skepsis-Apps/landing_page` |
| Sitio público | `https://skepsis-apps.github.io/landing_page/` |
| Tipo | Sitio estático + portafolio dinámico |
| Hosting recomendado | GitHub Pages |
| Tecnologías base | HTML5, CSS3, JavaScript, JSON |
| Última actualización documental | 2026-06-10 |

---

## Objetivo del proyecto

Presentar a **Sképsis Apps** como una organización especializada en transformar datos, ideas y procesos en soluciones tecnológicas inteligentes, mediante una landing clara, minimalista, funcional y multilingüe.

El sitio permite:

- Comunicar la propuesta de valor corporativa.
- Mostrar capacidades en inteligencia artificial, ciencia de datos, automatización, aplicaciones empresariales e integración industrial.
- Documentar portafolios técnicos con resumen ejecutivo, propósito, descripción, funcionalidades, arquitectura tecnológica y enlaces.
- Exponer demos, repositorios, datasets, artículos, infografías y diseños visuales.
- Facilitar contacto comercial mediante WhatsApp y correo electrónico.
- Publicar el portafolio en GitHub Pages sin servidor propio.

---

## Propuesta de valor

**Sképsis Apps transforma datos, ideas y procesos en soluciones tecnológicas inteligentes.**

La landing presenta servicios orientados a:

- Inteligencia artificial aplicada.
- Ciencia de datos.
- Automatización de procesos.
- Desarrollo de aplicaciones empresariales.
- Dashboards inteligentes.
- APIs predictivas.
- Modelos de Machine Learning.
- Soluciones de percepción computacional.
- Integración industrial y soluciones tipo SCADA.
- Flujos ETL.
- Prototipos funcionales.
- Arquitecturas cloud.
- Soluciones de análisis, visualización y trazabilidad de datos.

---

## Idiomas disponibles

La landing soporta cuatro idiomas dentro del mismo proyecto estático:

- Español.
- English.
- Français.
- Norsk.

El botón de idioma se encuentra en la barra superior y permite recorrer los idiomas disponibles. La preferencia del usuario se conserva mediante `localStorage`.

La internacionalización se administra desde:

- `STATIC_TRANSLATIONS` en `app.js`, para textos fijos de la interfaz.
- `translations` dentro de `projects.json`, para textos de portafolio.
- Rutas específicas de arquitectura por idioma cuando estén disponibles.

La documentación de este `README.md` se mantiene únicamente en **español**.

---

## Tecnologías del sitio

Este repositorio no requiere framework de frontend ni proceso de compilación.

| Capa | Tecnología |
|---|---|
| Estructura | HTML5 |
| Estilos | CSS3 |
| Interactividad | JavaScript |
| Datos del portafolio | JSON |
| Hosting | GitHub Pages |
| Validación auxiliar | Python |
| Activos visuales | SVG, PNG |
| Control de versiones | Git + GitHub |

---

## Stack técnico representado en el portafolio

El portafolio documenta soluciones construidas con tecnologías como:

- Python.
- R.
- Streamlit.
- R Shiny.
- shinyapps.io.
- FastAPI.
- Flask.
- Node-RED.
- MQTT.
- HiveMQ Cloud.
- Docker.
- Render.
- Hugging Face Spaces.
- OpenCV.
- YuNet.
- SFace.
- ONNX.
- Git LFS.
- scikit-learn.
- Random Forest.
- Elastic Net.
- K-Means.
- Algoritmos Genéticos.
- Pandas.
- NumPy.
- Plotly.
- Matplotlib.
- ggplot2.
- SQLite.
- PostgreSQL / Neon.
- Google Sheets.
- APIs REST.
- GitHub Pages.
- Streamlit Community Cloud.

---

## Estructura del repositorio

```text
.
├── index.html
├── styles.css
├── app.js
├── projects.json
├── README.md
├── PORTAFOLIOS_INCLUIDOS.md
├── .nojekyll
├── assets/
│   ├── images/
│   │   ├── skepsis-logo.png
│   │   ├── favicon.svg
│   │   ├── og-image.svg
│   │   ├── hero-bg.svg
│   │   ├── placeholder-project.svg
│   │   └── profile-placeholder.svg
│   ├── architectures/
│   │   ├── openlogi-rfid-iot-ml-architecture.svg
│   │   ├── openlogi-rfid-iot-ml-architecture-en.svg
│   │   ├── retailops-bi-ml-architecture.svg
│   │   ├── retailops-bi-ml-architecture-en.svg
│   │   ├── optiscada-ml-complete-architecture.svg
│   │   ├── optiscada-ml-complete-architecture-en.svg
│   │   ├── ames-housing-streamlit-architecture.svg
│   │   ├── ames-housing-streamlit-architecture-en.svg
│   │   ├── ames-housing-python-r-cloud-architecture.svg
│   │   ├── ames-housing-python-r-cloud-architecture-en.svg
│   │   ├── stockpredict-mvp-ml-architecture.svg
│   │   ├── stockpredict-mvp-ml-architecture-en.svg
│   │   ├── industrial-ai-prototype-architecture.svg
│   │   ├── industrial-ai-prototype-architecture-en.svg
│   │   ├── genadiag-architecture.svg
│   │   ├── genadiag-architecture-en.svg
│   │   ├── bioverify-zero-v2-architecture.svg
│   │   └── bioverify-zero-v2-architecture-en.svg
│   └── designs/
│       ├── OpenLogi_RFDI_IoT_ML.png
│       ├── retailops-bi-olist_ML.png
│       ├── OptiSCADA_ML_UPDATED.PNG
│       ├── Arquitectura Ames Housing Streamlit.PNG
│       ├── Arquitectura Ames Housing Render.PNG
│       ├── Arquitectura Stock Predict MVP ML.PNG
│       └── Industrial AI Prototype.PNG
└── tools/
    └── validate_projects.py
```

---

## Archivos principales

### `index.html`

Define la estructura general del sitio:

- Navegación principal.
- Hero corporativo.
- Indicadores.
- Servicios.
- Metodología.
- Soluciones desarrolladas.
- Tecnologías principales.
- Valor diferencial.
- Portafolio dinámico.
- Contacto.
- Modal de resumen.
- Visor de arquitectura.

### `styles.css`

Contiene el diseño visual del sitio:

- Layout responsivo.
- Tarjetas de servicios y portafolio.
- Modal de resumen.
- Visor ampliado de arquitectura.
- Botón de idioma.
- Botones de acción.
- Etiquetas de tecnología.
- Secciones corporativas.
- Ajustes para evitar solapes en escritorio y móvil.
- Estilos para zoom de arquitectura.

### `app.js`

Controla la lógica del sitio:

- Carga dinámica de `projects.json`.
- Renderizado de tarjetas de portafolio.
- Cambio de idioma.
- Traducción de interfaz.
- Traducción de portafolios.
- Filtros por categoría.
- Búsqueda.
- Ordenamiento.
- Métricas dinámicas.
- Modal de resumen ejecutivo.
- Zoom de arquitectura dentro de **Ver resumen**.
- Botón **Diseño** como enlace separado hacia imagen PNG.
- Botones para App, GitHub, Dataset, Infografía, Artículo y enlaces adicionales.

### `projects.json`

Fuente principal de datos del portafolio. Cada objeto representa un proyecto y contiene información técnica, narrativa, visual, multilingüe y enlaces externos.

### `tools/validate_projects.py`

Script auxiliar para validar que `projects.json` sea un JSON correcto y que los proyectos mantengan una estructura mínima esperada.

---

## Portafolios incluidos

| Nº | Proyecto | Categoría |
|---:|---|---|
| 1 | OpenLogi RFID IoT ML | Logística / IoT / Machine Learning |
| 2 | RetailOps BI ML | Retail / BI / Machine Learning |
| 3 | OptiSCADA ML Complete | Industria 4.0 / IoT / Machine Learning |
| 4 | Ames Housing Price Predictor | Inmobiliario / Machine Learning / Streamlit |
| 5 | Ames Housing Price Predictor — Python + R Cloud Edition | Python + R / FastAPI / Machine Learning |
| 6 | StockPredict MVP | Inventarios / Demanda / Machine Learning |
| 7 | Industrial AI Prototype | Industria 4.0 / FastAPI / Streamlit / ML |
| 8 | GenaDiag | IA evolutiva / R Shiny / Google Sheets |
| 9 | BioVerify-Zero v2 | Percepción computacional / FastAPI / Biométrico |

---

## Resumen técnico de los portafolios

### 1. OpenLogi RFID IoT ML

Demo web end-to-end para convertir datos logísticos de e-commerce retail en una torre de control con trazabilidad RFID simulada, monitoreo IoT, inventario WMS sintético y predicción de riesgo de entrega tardía.

**Tecnologías:** Python, Streamlit, Pandas, scikit-learn, RFID simulado, IoT simulado, GitHub, Streamlit Cloud.

**Enlaces principales:**

- App: `https://openlogi-rfid-iot-demo-ml.streamlit.app/`
- GitHub: `https://github.com/antoniot73/openlogi-rfid-iot-demo-ml`
- Dataset: `https://www.kaggle.com/datasets/shashwatwork/dataco-smart-supply-chain-for-big-data-analysis?resource=download`
- Artículo: `https://www.linkedin.com/posts/antonio-toro-vzla_datascience-machinelearning-logistics-activity-7469426033159553024-l7al`

### 2. RetailOps BI ML

Solución analítica para transformar datos crudos de e-commerce en indicadores comerciales, análisis logístico, control de calidad y predicción de entregas tardías.

**Tecnologías:** Python, Streamlit, PostgreSQL, Neon, SQL, Pandas, scikit-learn, GitHub, Streamlit Cloud.

**Enlaces principales:**

- App: `https://retailops-bi-ml.streamlit.app/`
- GitHub: `https://github.com/antoniot73/retailops-bi-ml`
- Dataset: `https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?phase=FinishSSORegistration`
- Artículo: `https://www.linkedin.com/posts/antonio-toro-vzla_dataanalytics-businessintelligence-machinelearning-activity-7469264507815661568-fIBA`

### 3. OptiSCADA ML Complete

Plataforma demostrativa de Industria 4.0 con SCADA virtual, telemetría IoT, MQTT, Machine Learning, optimización y retroalimentación inteligente.

**Tecnologías:** Node-RED, MQTT, HiveMQ Cloud, Python, Streamlit, Plotly, scikit-learn, Random Forest, Isolation Forest, Render, GitHub.

**Enlaces principales:**

- App: `https://optiscada-ml.streamlit.app/`
- SCADA: `https://processmind-scada-ml.onrender.com/`
- GitHub: `https://github.com/antoniot73/OptiSCADA_ML_Complete`
- Artículo: `https://www.linkedin.com/posts/antonio-toro-vzla_industria40-machinelearning-iot-activity-7466738871968538624-ApkT`

### 4. Ames Housing Price Predictor

Aplicación Streamlit 100 % Python para estimar precios inmobiliarios con Elastic Net Regression y exportación de historial de predicciones.

**Tecnologías:** Python, Streamlit, Pandas, NumPy, scikit-learn, Elastic Net, Matplotlib, OpenPyXL, CSV, GitHub, Streamlit Cloud.

**Enlaces principales:**

- App: `https://ames-housing-predictor.streamlit.app/`
- GitHub: `https://github.com/antoniot73/ames_housing_streamlit_demo`
- Dataset: `https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques?utm_source=chatgpt.com`
- Artículo: `https://www.linkedin.com/posts/antonio-toro-vzla_machinelearning-datascience-artificialintelligence-activity-7466589186507218944-h92F`

### 5. Ames Housing Price Predictor — Python + R Cloud Edition

Arquitectura distribuida con FastAPI en Python y R Plumber para exponer un servicio analítico con modelo Elastic Net desarrollado con `glmnet`.

**Tecnologías:** Python, R, FastAPI, Jinja2, Pydantic, Plumber, glmnet, ggplot2, REST API, JSON, Docker, Render, GitHub.

**Enlaces principales:**

- App: `https://ames-python-web-app.onrender.com/`
- R Plumber: `https://ames-r-service.onrender.com/`
- GitHub: `https://github.com/antoniot73/ames-housing-price-predictor`
- Dataset: `https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques`
- Artículo: `https://www.linkedin.com/posts/antonio-toro-vzla_machinelearning-datascience-python-activity-7470498339340591104-lisB`

### 6. StockPredict MVP

Sistema inteligente para gestión de inventarios, predicción de demanda, análisis ABC, punto de reorden, riesgo de quiebre y segmentación automática de SKU.

**Tecnologías:** Python, Streamlit, Pandas, NumPy, Plotly, Random Forest Regressor, K-Means Clustering, Statsmodels, Pytest, GitHub.

**Enlaces principales:**

- App: `https://stockpredict-mvp-ml.streamlit.app/`
- GitHub: `https://github.com/antoniot73/stockpredict_mvp_ml`
- Artículo: `https://www.linkedin.com/posts/antonio-toro-vzla_artificialintelligence-machinelearning-datascience-activity-7466534727055966208-Uq2i`

### 7. Industrial AI Prototype

Prototipo SCADA-like para monitoreo industrial en tiempo real, historian SQLite, API FastAPI, dashboard Streamlit y predicción de temperatura industrial con Machine Learning.

**Tecnologías:** Python, FastAPI, Streamlit, SQLite, scikit-learn, RandomForestRegressor, Docker, Render, GitHub.

**Enlaces principales:**

- Dashboard: `https://industrial-ai-dashboard-qqdn.onrender.com/`
- API: `https://industrial-ai-api-5ypf.onrender.com/`
- GitHub: `https://github.com/antoniot73/industrial-ai-prototype`
- Artículo: `https://www.linkedin.com/posts/antonio-toro-vzla_artificialintelligence-machinelearning-python-activity-7465641588292038656-CbZP`

### 8. GenaDiag

Prototipo académico y tecnológico orientado a clasificación exploratoria de cáncer de mama mediante inteligencia artificial, ciencia de datos, selección evolutiva de variables, R Shiny, reportes HTML y trazabilidad persistente con Google Sheets.

El proyecto no sustituye evaluación médica profesional ni constituye diagnóstico clínico.

**Tecnologías:** R, R Shiny, Random Forest, CART, Algoritmo Genético, Google Sheets, shinyapps.io, HTML, CSV, modelo serializado `.rds`.

**Enlaces principales:**

- App: `https://antoniot73.shinyapps.io/genadiag/`
- Dataset: `https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data`
- Infografía: `https://infographygenadiag.netlify.app/`
- Artículo: `https://www.linkedin.com/feed/update/urn:li:activity:7472542338591014912/`

### 9. BioVerify-Zero v2

Prototipo académico de verificación facial 1:1 orientado a demostrar una integración tecnológica completa entre frontend web, backend API, visión computacional, embeddings faciales y despliegue cloud.

El sistema no almacena deliberadamente imágenes, documentos ni embeddings, y está diseñado como prototipo académico, no como sistema legal de validación de identidad.

**Tecnologías:** Python, JavaScript, HTML, CSS, FastAPI, Uvicorn, Pydantic, OpenCV, YuNet, SFace, ONNX, Docker, Hugging Face Spaces, Git LFS.

**Enlaces principales:**

- App: `https://antoniot73-bioverify-zero-v2.hf.space`
- Health check: `https://antoniot73-bioverify-zero-v2.hf.space/health`
- GitHub: `https://github.com/antoniot73/bioverify-zero-v2`
- Hugging Face: `https://huggingface.co/spaces/antoniot73/bioverify-zero-v2`
- Infografía: `https://bioverifyzerov2.netlify.app/`
- Artículo: `https://www.linkedin.com/feed/update/urn:li:activity:7472557292962516992/`

---

## Arquitecturas tecnológicas

Cada proyecto puede incluir una imagen SVG de arquitectura tecnológica. Las arquitecturas se muestran:

- En la tarjeta del portafolio.
- En el modal **Ver resumen**.
- En un visor ampliado con zoom.

El visor de arquitectura incluye:

- Botón `+` para acercar.
- Botón `−` para alejar.
- Botón `100%` para restablecer escala.
- Rueda del mouse para acercamiento o alejamiento.
- Desplazamiento horizontal y vertical cuando la imagen supera el área visible.

La versión estable v30 corrigió el solape visual del título interno de las arquitecturas con el borde del fondo. La versión v31-2 conserva esa base estable.

---

## Modelo de datos de `projects.json`

Cada proyecto puede usar los siguientes campos:

```json
{
  "id": "identificador-unico",
  "title": "Nombre del proyecto",
  "category": "Categoría técnica",
  "summary": "Resumen corto para tarjeta",
  "description": "Descripción extendida para modal",
  "purpose": "Propósito del proyecto",
  "features": [
    "Funcionalidad 1",
    "Funcionalidad 2"
  ],
  "architectureImage": "assets/architectures/archivo.svg",
  "designImage": "assets/designs/archivo.png",
  "techStack": [
    "Python",
    "Streamlit"
  ],
  "appUrl": "https://...",
  "githubUrl": "https://...",
  "datasetUrl": "https://...",
  "infographicUrl": "https://...",
  "linkedinUrl": "https://...",
  "extraLinks": [
    {
      "label": "API",
      "url": "https://..."
    }
  ],
  "date": "YYYY-MM-DD",
  "outcome": "Resultado o impacto del proyecto",
  "articleTitle": "Título del artículo",
  "translations": {
    "en": {},
    "fr": {},
    "no": {}
  }
}
```

### Campos obligatorios recomendados

- `id`
- `title`
- `category`
- `summary`
- `description`
- `purpose`
- `features`
- `architectureImage`
- `techStack`

### Campos opcionales

- `designImage`
- `appUrl`
- `githubUrl`
- `datasetUrl`
- `infographicUrl`
- `linkedinUrl`
- `extraLinks`
- `date`
- `outcome`
- `articleTitle`
- `translations`

---

## Cómo agregar un nuevo portafolio

1. Crear o guardar la imagen de arquitectura en:

```text
assets/architectures/
```

2. Guardar el diseño visual, si existe, en:

```text
assets/designs/
```

3. Agregar un nuevo objeto en `projects.json`.

4. Validar el JSON:

```powershell
py tools/validate_projects.py
```

5. Probar localmente:

```powershell
py -m http.server 8000
```

6. Abrir:

```text
http://localhost:8000/
```

7. Recargar con:

```text
Ctrl + F5
```

---

## Ejecución local

Desde PowerShell:

```powershell
cd "D:\DISCO C\Antonio Toro\Proyectos_IA\Proyecto_1_LP_Skepsis_Apps\LP_Skepsis_Apps"
py -m http.server 8000
```

Abrir en el navegador:

```text
http://localhost:8000/
```

Para forzar actualización de caché:

```text
Ctrl + F5
```

---

## Validación de portafolios

Ejecutar:

```powershell
py tools/validate_projects.py
```

Resultado esperado:

```text
projects.json es válido
```

Si el JSON tiene errores, revisar especialmente:

- Comas faltantes o sobrantes.
- Comillas mal cerradas.
- Rutas de imágenes incorrectas.
- Campos `features` o `techStack` que no sean listas.
- URLs vacías donde debería existir un enlace.
- Traducciones incompletas o mal estructuradas.

---

## Despliegue en GitHub Pages

### 1. Confirmar cambios

```powershell
git status
git add .
git commit -m "Actualizar landing integral de Skepsis Apps"
```

### 2. Subir al repositorio

```powershell
git push
```

### 3. Configurar GitHub Pages

En GitHub:

```text
Settings
→ Pages
→ Build and deployment
→ Source: Deploy from a branch
→ Branch: main
→ Folder: /root
→ Save
```

### 4. URL pública

```text
https://skepsis-apps.github.io/landing_page/
```

---

## Flujo de actualización desde laptop hacia GitHub Cloud

Cuando la carpeta local representa la versión que se desea publicar:

```powershell
cd "D:\DISCO C\Antonio Toro\Proyectos_IA\Proyecto_1_LP_Skepsis_Apps\LP_Skepsis_Apps"

git status
git add .
git commit -m "Actualizar landing page Skepsis Apps"
git push
```

Si la carpeta fue reconstruida y no tiene `.git`, inicializar con cuidado:

```powershell
git init
git branch -M main
git remote add origin https://github.com/Skepsis-Apps/landing_page.git
git add .
git commit -m "Subir landing page Skepsis Apps desde laptop"
git push -u origin main
```

No usar comandos destructivos como:

```text
git clean
git reset --hard
Remove-Item
rm -rf
```

salvo que exista una copia de seguridad y una razón explícita para hacerlo.

---

## Reglas de mantenimiento

- No reemplazar `architectureImage` por `designImage`.
- La arquitectura se muestra en tarjeta, modal y visor ampliado.
- El botón **Diseño** debe abrir la imagen PNG aparte.
- Mantener nombres de archivos consistentes con las rutas declaradas en `projects.json`.
- Evitar espacios problemáticos en nuevos archivos; si se usan espacios, deben coincidir exactamente en JSON.
- Validar siempre `projects.json` antes de subir a GitHub.
- Probar en local antes de hacer `git push`.
- Usar `Ctrl + F5` para evitar problemas de caché en navegador.
- Mantener `.nojekyll` para que GitHub Pages publique correctamente carpetas y archivos estáticos.
- Conservar como base estable la corrección visual de arquitecturas aplicada en v30.
- Cualquier cambio multilingüe debe conservar los 9 portafolios visibles.

---

## Flujo de trabajo recomendado

```text
Editar contenido
     ↓
Actualizar projects.json
     ↓
Agregar imágenes en assets/
     ↓
Validar projects.json
     ↓
Probar localmente
     ↓
Commit en Git
     ↓
Push a GitHub
     ↓
Verificar GitHub Pages
```

---

## Contacto comercial configurado en la landing

- México: `+52 55 6574 1576`
- Venezuela: `+58 424 403 55 99`
- Correo: `skepsis.apps@gmail.com`

---

## Historial técnico reciente

### v22

- Incorporación de portafolios 8 y 9: GenaDiag y BioVerify-Zero v2.
- Inclusión de nuevas arquitecturas tecnológicas.

### v24

- Corrección de enlaces LinkedIn de GenaDiag y BioVerify-Zero v2.
- Homologación visual de arquitectura tecnológica.
- Ampliación de tipografía en arquitecturas.
- Zoom de acercamiento en imágenes de arquitectura.

### v25

- Corrección del enlace de infografía de GenaDiag.
- Incorporación de zoom dentro de **Ver resumen**.

### v26

- Corrección del zoom dentro del modal nativo `<dialog>`.

### v27

- Corrección del recorte de títulos en arquitecturas.
- Mejora del comportamiento de zoom con desplazamiento real.

### v28

- Actualización del stack técnico principal.
- Ajustes de margen superior en visor de arquitectura.

### v29

- Compactación visual de arquitecturas para reducir aire superior.

### v30

- Corrección del solape entre título interno de arquitectura y borde del fondo.
- Versión visual estable para arquitecturas.

### v31

- Incorporación de idiomas Français y Norsk desde la base estable v30.

### v31-1

- Corrección del texto visible del botón de idioma.

### v31-2

- Corrección de codificación UTF-8 en español.
- Corrección de traducciones de portafolios para Français y Norsk.
- Conservación de los 9 portafolios.

---

## Licencia y uso

Este repositorio corresponde a la landing corporativa y portafolio técnico de **Sképsis Apps**. Su contenido, identidad visual, textos, diseños, arquitecturas y referencias de portafolio deben gestionarse conforme a los criterios internos del propietario del proyecto.

---

## Autoría

**Sképsis Apps**  
Soluciones tecnológicas inteligentes basadas en inteligencia artificial, ciencia de datos, automatización y desarrollo aplicado.

Portafolio técnico desarrollado y documentado por:

**Antonio Nicolás Toro González**
