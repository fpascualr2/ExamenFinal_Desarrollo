from pydantic import BaseModel, Field

class Producto(BaseModel):
    id: int | None = None
    nombre: str = Field(..., min_length=2)
    categoria: str = Field(...)
    precio: float = Field(..., gt=0)
    cantidad: int = Field(..., ge=1)