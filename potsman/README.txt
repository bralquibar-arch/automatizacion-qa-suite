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
