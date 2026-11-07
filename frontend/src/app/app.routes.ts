import { Routes } from '@angular/router';
import { Productos } from './productos/productos';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: Productos },
  { path: '**', redirectTo: 'productos' },
];
