# Examen final de Desarrollo Web — enunciado de trabajo

**Total: 30 puntos, 120 minutos.** El evaluador ChatGPT presentará preguntas y pasos uno por uno. Este archivo documenta el alcance del proyecto base, **no sustituye las instrucciones del evaluador**.

| Serie | Tema | Puntos | Tiempo sugerido |
|---|---|---:|---:|
| I | Fundamentos de desarrollo web | 5 | 15 min |
| II | Angular 22 | 7 | 30 min |
| III | Python + FastAPI | 7 | 30 min |
| IV | Integración Angular–FastAPI | 6 | 30 min |
| V | Git/GitHub y teoría | 5 | 15 min |

## Serie II — Angular 22 (7 pts)

En `frontend/src/app/productos/` construye un módulo funcional para visualizar, registrar y eliminar productos. Formulario: **nombre, categoría, precio y cantidad**. Agrega validaciones básicas, un servicio Angular y tabla de productos. Debes poder demostrar operaciones temporales en frontend antes de conectarlo a la API.

## Serie III — FastAPI (7 pts)

En `backend/app/` completa los endpoints REST `/api/productos` para GET, POST, PUT y DELETE. Utiliza Pydantic, una lista en memoria e identificadores únicos. Valida datos y usa códigos HTTP coherentes. Prueba los endpoints en Swagger.

## Serie IV — Integración (6 pts)

Configura cliente HTTP y CORS; conecta el servicio Angular con FastAPI; consulta y registra productos desde el frontend. Implementa al menos un manejo básico de error. Demuestra peticiones reales con DevTools/Swagger.

## Serie V — Git/GitHub y teoría (5 pts)

Inicializa Git, realiza un commit con tus cambios, publica en una rama autorizada y presenta evidencias. El evaluador administrará preguntas teóricas.

## Evidencias

Entregar evidencia *por paso*, no un archivo único al final. El evaluador solicitará capturas de estructura, código relevante, ejecución, Swagger, llamadas HTTP y repositorio. También hará preguntas de defensa del código.

## Política de ayuda

- Sin ayuda: sin descuento.
- Pista conceptual: descuento máximo 10% del ejercicio.
- Ayuda técnica parcial: descuento máximo 25%.
- Solución completa: descuento máximo 50%.

El evaluador aplicará la política exacta del prompt oficial y calificará únicamente lo demostrado.
