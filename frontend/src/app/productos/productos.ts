import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {
  productoForm: FormGroup;
  productos = signal<Producto[]>([]);
  errorMensaje = signal<string>('');

  constructor(private fb: FormBuilder, private productoService: ProductosService) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      categoria: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0.01)]],
      cantidad: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.listar().subscribe({
      next: (data) => this.productos.set(data),
      error: (e) => this.errorMensaje.set(e.message)
    });
  }

  guardarProducto(): void {
    if (this.productoForm.valid) {
      this.productoService.crear(this.productoForm.value).subscribe({
        next: () => {
          this.productoForm.reset();
          this.cargarProductos();
        },
        error: (e) => this.errorMensaje.set(e.message)
      });
    } else {
      this.productoForm.markAllAsTouched();
    }
  }

  eliminarProducto(id: number): void {
    this.productoService.eliminar(id).subscribe({
      next: () => this.cargarProductos(),
      error: (e) => this.errorMensaje.set(e.message)
    });
  }
}