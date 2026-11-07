from fastapi import APIRouter, HTTPException, status
from app.models import Producto
from app import store

router = APIRouter(prefix="/api/productos", tags=["productos"])

@router.get("", response_model=list[Producto])
def listar_productos():
    return store.productos_db

@router.post("", response_model=Producto, status_code=status.HTTP_201_CREATED)
def crear_producto(producto: Producto):
    global siguiente_id
    nuevo_producto = producto.model_dump()
    nuevo_producto["id"] = store.siguiente_id
    store.siguiente_id += 1
    store.productos_db.append(nuevo_producto)
    return nuevo_producto

@router.put("/{producto_id}", response_model=Producto)
def actualizar_producto(producto_id: int, producto_actualizado: Producto):
    for index, p in enumerate(store.productos_db):
        if p["id"] == producto_id:
            datos = producto_actualizado.model_dump()
            datos["id"] = producto_id
            store.productos_db[index] = datos
            return datos
    raise HTTPException(status_code=404, detail="Producto no encontrado")

@router.delete("/{producto_id}", status_code=status.HTTP_204_NO_CONTENT)
def eliminar_producto(producto_id: int):
    for index, p in enumerate(store.productos_db):
        if p["id"] == producto_id:
            store.productos_db.pop(index)
            return
    raise HTTPException(status_code=404, detail="Producto no encontrado")