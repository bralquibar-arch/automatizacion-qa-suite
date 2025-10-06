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

🧩 Próximas Extensiones
- Integrar Allure Reports.
- Ejecución paralela con TestNG XML Suite.
- Integración continua con GitHub Actions o Jenkins.
