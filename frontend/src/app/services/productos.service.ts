import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({ providedIn: 'root' })
export class ProductosService {
  private apiUrl = 'http://localhost:8000/api/productos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl).pipe(
      catchError(this.manejarError)
    );
  }

  crear(productoDto: Omit<Producto, 'id'>): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, productoDto).pipe(
      catchError(this.manejarError)
    );
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.manejarError)
    );
  }

  private manejarError(error: HttpErrorResponse) {
    console.error('Ocurrió un error en la API:', error);
    return throwError(() => new Error('Error en la comunicación con el servidor. Intente nuevamente.'));
  }
}