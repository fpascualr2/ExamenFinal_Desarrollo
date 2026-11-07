# Examen Final — Desarrollo Web (Proyecto base)

**Curso:** Desarrollo Web | **Docente:** Ing. Jersson Castillo  
**Tiempo total:** 120 minutos | **Valor:** 30 puntos  
**Sistema:** Supermercado — módulo de productos  
**Tecnologías:** Angular 22 + Python + FastAPI (sin base de datos externa)

## ¡Importante!

Este proyecto es una **plantilla deliberadamente incompleta**, no una solución. Al descargarlo, el frontend debe poder mostrar una pantalla inicial y el backend debe responder en `/health`. Las funciones de productos aún **no están implementadas** y responden HTTP 501. Es normal y forma parte del examen.

No se requieren PostgreSQL, Supabase ni credenciales de servicios externos. Los productos se almacenarán en memoria durante la ejecución del backend.

## Estructura

```text
examen_final_desarrollo_web_base/
├── frontend/                  # Aplicación Angular 22
│   └── src/app/
│       ├── app.ts             # Componente raíz
│       ├── app.config.ts      # Configuración general (TODO HTTP)
│       ├── app.routes.ts      # Rutas
│       ├── productos/         # Componente para completar
│       ├── models/            # Interfaces del frontend
│       └── services/          # Servicio Angular para completar
├── backend/
│   ├── app/main.py            # Servidor FastAPI (TODO CORS)
│   ├── app/models.py          # Modelo a revisar
│   ├── app/store.py           # Almacenamiento en memoria
│   └── app/routes/productos.py# Endpoints por completar
├── ENUNCIADO_EXAMEN.md
└── README.md
```

## Requisitos previos

- Node.js y npm compatibles con Angular 22.
- Python 3.11 o superior.
- Git y un editor de código.
- Conexión a Internet para instalar dependencias (solo instalación inicial).

## 1. Ejecutar el frontend

Abre una terminal dentro de `frontend`:

```bash
npm install
npm start
```

Abre `http://localhost:4200/`.

> Si tienes otra versión global del CLI de Angular, no es necesario cambiarla: `npm start` utiliza la versión local del proyecto.

## 2. Ejecutar el backend — macOS

En otra terminal, dentro de `backend`:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```

## 2. Ejecutar el backend — Windows (PowerShell)

En otra terminal, dentro de `backend`:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload --port 8000
```

De esta forma no necesitas modificar la política de ejecución de PowerShell.

## 3. Confirmar el arranque

- Frontend: `http://localhost:4200/`
- Backend salud: `http://127.0.0.1:8000/health` (respuesta esperada: `{"estado":"ok","aplicacion":"supermercado-api"}`)
- Swagger: `http://127.0.0.1:8000/docs`
- `GET /api/productos` responderá `501 Not Implemented` **hasta que lo desarrolles**.

## 4. Qué debes completar

Consulta `ENUNCIADO_EXAMEN.md`. **No edites los archivos de enunciados ni elimines los TODO** simplemente para aparentar que funciona. Implementa los TODO con código verificable.

## 5. Evidencia y Git

Presenta capturas del código, terminal, pruebas de Swagger, navegador y solicitudes HTTP conforme te las solicite el evaluador. El repositorio no incluye `.git`; inicialízalo tú cuando corresponda a la Serie V.

**No subas `node_modules`, `.venv`, archivos `.env`, claves o contraseñas a GitHub.**

## Problemas frecuentes

- **Puerto ocupado:** cierra el proceso que usa 4200 u 8000 antes de continuar.
- **No aparecen productos:** el listado comienza vacío y los endpoints aún no están implementados.
- **HTTP 501:** señala una funcionalidad pendiente, no un fallo de instalación.
- **Error CORS:** la configuración CORS es parte de la Serie IV.
- **`npm install` falla:** verifica versión de Node y acceso al registro npm. Conserva la captura del error.
