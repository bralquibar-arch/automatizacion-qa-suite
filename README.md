# 🧪 Proyecto de Pruebas de Carga y Rendimiento con Apache JMeter

## 📋 Descripción General
Este proyecto contiene una serie de pruebas de carga automatizadas utilizando **Apache JMeter**, enfocadas en evaluar el rendimiento de APIs públicas mediante escenarios reproducibles.  
El propósito es medir **tiempos de respuesta**, **tolerancia al estrés** y **comportamiento bajo múltiples usuarios simultáneos**.

---

## 🧱 Estructura del Proyecto


## ⚙️ Configuración del Entorno

### 1️⃣ Requisitos previos
- Java JDK 8 o superior  
- Apache JMeter 5.6.x  
- Variables de entorno configuradas:
  JMETER_HOME = C:\apache-jmeter-5.6.3
  PATH += %JMETER_HOME%\bin

Para verificar:
jmeter -v

---

## 🚀 Escenarios de Prueba

### 🧩 1. JSONPlaceholder – Prueba de rendimiento
**Archivo:** JSONPlaceholderPerformanceTest.jmx  
**Objetivo:** Evaluar la respuesta de la API `/posts` con múltiples usuarios.  

**Configuración:**
- 10 usuarios simultáneos  
- 5 repeticiones  
- Endpoint: https://jsonplaceholder.typicode.com/posts  
- Método: GET

**Ejecución CLI:**
jmeter -n -t JSONPlaceholderPerformanceTest.jmx -l resultados.jtl -e -o reporte_html

---

### 👥 2. ReqRes API – Prueba de carga
**Archivo:** ReqResLoadTest.jmx  
**Objetivo:** Simular 50 usuarios simultáneos contra el endpoint `/api/users`.  

**Configuración:**
- 50 usuarios  
- Ramp-Up: 5 segundos  
- Endpoint: https://reqres.in/api/users  
- Método: GET

**Ejecución CLI:**
jmeter -n -t ReqResLoadTest.jmx -l reqres_resultados.jtl -e -o reqres_reporte_html

⚠️ Si aparece el error "Results file is not empty", elimina el archivo `.jtl` anterior antes de volver a ejecutar:
del reqres_resultados.jtl

---

### 🐶 3. Swagger Petstore – Prueba de estrés
**Archivo:** SwaggerPetstoreStressTest.jmx  
**Objetivo:** Realizar un stress test a `/pet/findByStatus` con 200 requests/minuto.  

**Configuración:**
- 100 hilos (usuarios virtuales)
- Ramp-Up: 30 segundos
- Duración: 1 minuto
- Endpoint base: https://petstore.swagger.io/v2
- Request: GET /pet/findByStatus?status=available

**Ejecución CLI:**
jmeter -n -t SwaggerPetstoreStressTest.jmx -l petstore_resultados.jtl -e -o petstore_reporte_html

---

## 📊 Reportes y Resultados
Tras ejecutar cualquier prueba, se genera un reporte HTML en la carpeta indicada:

reporte_html/
reqres_reporte_html/
petstore_reporte_html/

Para visualizar el resultado:
- Abrir el archivo index.html en el navegador.
- Revisar métricas como:
  - Throughput (solicitudes por segundo)
  - Response time (tiempo medio y máximo)
  - Error rate (porcentaje de errores)
  - Latency (latencia media)

---

## 🧠 Análisis Técnico
Cada .jmx incluye:
- Thread Group: Configura los usuarios virtuales y ramp-up.
- HTTP Request Defaults: Define el dominio base.
- HTTP Request Sampler: Define las peticiones específicas.
- View Results Tree / Summary Report: Para revisión manual.
- Backend Listener (opcional): Para integración con InfluxDB + Grafana.

---

## 🧩 Código Base Ejemplo (XML JMX)
Ejemplo reducido de un test plan .jmx:

<jmeterTestPlan version="1.2" properties="5.0">
  <hashTree>
    <TestPlan testname="ReqRes Load Test" enabled="true">
      <hashTree>
        <ThreadGroup num_threads="50" ramp_time="5" duration="60" scheduler="true">
          <hashTree>
            <HTTPSamplerProxy testname="GET Users" enabled="true">
              <stringProp name="HTTPSampler.domain">reqres.in</stringProp>
              <stringProp name="HTTPSampler.path">/api/users</stringProp>
              <stringProp name="HTTPSampler.method">GET</stringProp>
            </HTTPSamplerProxy>
          </hashTree>
        </ThreadGroup>
      </hashTree>
    </TestPlan>
  </hashTree>
</jmeterTestPlan>

---

## 🧾 Commits Recomendados

git init
git add .
git commit -m "feat: configuración inicial de proyecto JMeter"
git commit -m "test: añadir prueba de rendimiento para JSONPlaceholder"
git commit -m "test: crear prueba de carga para ReqRes API con 50 usuarios"
git commit -m "test: agregar stress test para Swagger Petstore con 200 req/minuto"
git commit -m "docs: incluir documentación técnica completa en README.md"


*************************************************************************************
Estructura de la colección JSONPlaceholder API Testing.collection

CRUD básico (/posts)

GET /posts → Lista de posts.

GET /posts/{id} → Consulta un post por ID.

POST /posts → Crea un nuevo post.

PUT /posts/{id} → Actualiza un post existente.

DELETE /posts/{id} → Elimina un post.

Relaciones

GET /posts/{id}/comments → Comentarios de un post.

GET /users/{id}/posts → Posts de un usuario.

Casos negativos

IDs inexistentes.

Payloads inválidos.

Métodos no permitidos (PUT /posts, PATCH /posts/1, DELETE /posts).

Performance

Validación de tiempo de respuesta < 2 segundos.

Validación de tamaño de respuesta (< 1 MB).

✅ Validaciones incluidas

Status codes esperados (200, 201, 204, 400, 404, 405).

Esquema JSON: validación de campos requeridos y tipos de datos.

Casos negativos: asegurando que la API no acepte datos inválidos.

Performance: tiempo de respuesta y tamaño de respuesta.

🔧 Ejecución en Postman

Importar el archivo collection.json.

Ejecutar manualmente los requests o correr toda la colección.

Revisar los tests en la pestaña Tests de cada request o en el Collection Runner.

🔨 Ejecución con Newman

Instalar Newman (si no lo tienes):

npm install -g newman


Ejecutar la colección:

newman run collection.json


Generar reporte HTML:

newman run collection.json -r html


El reporte se genera en un archivo newman.html que muestra:

Número total de pruebas.

Resultados (pasadas/fallidas).

Tiempos de respuesta por request.

📊 Evidencias

Archivo JSON de la colección (collection.json).

Reporte HTML de Newman (newman.html).

///////////////////////////////////////////////////


Estructura de la colección ReqRes API Testing

Autenticación (/api/login, /api/register)

POST /api/login → Login exitoso con credenciales válidas.
POST /api/login → Login fallido con credenciales inválidas o incompletas.
POST /api/register → Registro exitoso de nuevo usuario.
POST /api/register → Registro fallido (falta de parámetros).

Gestión de usuarios (CRUD en /api/users)

GET /api/users → Lista de usuarios.
GET /api/users/{id} → Consulta un usuario por ID.
POST /api/users → Crea un nuevo usuario.
PUT /api/users/{id} → Actualiza un usuario existente.
DELETE /api/users/{id} → Elimina un usuario.

Paginación (/api/users?page=2)

GET /api/users?page=2 → Valida respuestas paginadas (número de página, cantidad de registros, total de páginas, etc.).

Rate Limiting (Simulación)

GET /api/users?page=1 → Detección de límites de requests (429 Too Many Requests).
Validación de encabezados:
- X-RateLimit-Limit
- X-RateLimit-Remaining

Casos negativos

- IDs inexistentes en /api/users/{id}
- Campos faltantes o payloads inválidos en /api/login y /api/register
- Métodos no permitidos (PUT /api/users, PATCH /api/users/1, DELETE /api/users)
- Validación de respuesta vacía o error 404 cuando el recurso no existe

Performance

- Validación de tiempo de respuesta < 2 segundos
- Validación de tamaño de respuesta < 1 MB

Validaciones incluidas

- Status codes esperados: 200, 201, 204, 400, 404, 429
- Esquema JSON: validación de campos requeridos y tipos de datos
- Casos negativos: asegura que la API no acepte datos inválidos
- Performance: tiempos de respuesta y tamaño de payload
- Rate Limiting: manejo de error 429 Too Many Requests

Ejecución en Postman

1. Importar el archivo ReqRes_API_Collection.json.
2. Configurar el entorno si es necesario (variables base URL).
3. Ejecutar manualmente los requests o correr toda la colección desde el Collection Runner.
4. Verificar los resultados en la pestaña Tests o en el resumen de ejecución.

Ejecución con Newman

Instalar Newman (si no lo tienes):
npm install -g newman

Ejecutar la colección:
newman run ReqRes_API_Collection.json

Generar reporte HTML:
newman run ReqRes_API_Collection.json -r html

El reporte newman.html incluye:
- Número total de pruebas ejecutadas
- Resultados (pasadas/fallidas)
- Códigos de estado devueltos
- Tiempos de respuesta por request

Evidencias

- Archivo JSON de la colección: ReqRes_API_Collection.json
- Reporte HTML de Newman: newman.html
- README.md: Documentación técnica y de ejecución

*************************************************

🧾 README — Proyecto de Automatización con Selenium (Java)

📌 Descripción General
Este proyecto contiene una serie de pruebas automatizadas E2E (end-to-end) realizadas con Selenium WebDriver, TestNG y Java, enfocadas en validar funcionalidades del sitio de práctica The Internet (https://the-internet.herokuapp.com/).

El objetivo principal es demostrar habilidades en automatización de pruebas funcionales, manejo de elementos dinámicos, autenticación, formularios complejos y validación de carga/descarga de archivos.

⚙️ Tecnologías Utilizadas
- Lenguaje: Java
- Framework de pruebas: TestNG
- Automatización Web: Selenium WebDriver
- IDE recomendado: IntelliJ IDEA
- JDK recomendado: JDK 17
- Gestión de dependencias: Maven
- Navegador: Google Chrome (v140 o superior)
- Driver: ChromeDriver compatible con la versión del navegador


🚀 Casos Automatizados

1️⃣ Formularios Complejos (/checkboxes, /dropdown, /dynamic_controls)
- Selección y deselección de checkboxes.
- Validación de selección en dropdowns.
- Habilitar/deshabilitar campos dinámicos.
- Verificación de mensajes de éxito tras cada acción.

2️⃣ Autenticación (/login)
Credenciales válidas:
Usuario: tomsmith
Contraseña: SuperSecretPassword!
- Login exitoso y fallido.
- Validación de mensajes de alerta.
- Prevención de alerta de guardado de contraseña en Chrome.

3️⃣ Elementos Dinámicos (/dynamic_loading/1 y /dynamic_loading/2)
- Detección y espera de elementos cargados dinámicamente.

4️⃣ Carga y Descarga de Archivos (/upload y /download)
- Subida de archivos desde el sistema local.
- Validación del nombre del archivo subido.
- Descarga y verificación del archivo descargado.

💬 Ejecución de las Pruebas
1. Clonar el repositorio
   git clone https://github.com/bralquibar-arch/selenium-automation.git
   cd selenium-automation

2. Instalar dependencias
   mvn clean install

3. Ejecutar todas las pruebas
   mvn test

4. O ejecutar una clase específica
   mvn -Dtest=AuthenticationLogin test

🧠 Buenas Prácticas Implementadas
- Uso de Page Object Model (POM).
- Esperas explícitas (WebDriverWait).
- Configuración avanzada de Chrome.
- Asserts claros y mensajes personalizados.
- Commits descriptivos.

🧾 Ejemplo de Commits Descriptivos
git commit -m "Implementación de pruebas E2E para login exitoso y fallido"
git commit -m "Automatización de formularios complejos con checkboxes y dropdowns"
git commit -m "Agregadas pruebas para elementos dinámicos (dynamic_loading)"
git commit -m "Automatizadas pruebas de carga y descarga de archivos"
git commit -m "Optimización de tiempos de espera y manejo de popups en Chrome"


