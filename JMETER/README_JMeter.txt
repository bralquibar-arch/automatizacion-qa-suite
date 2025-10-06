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
