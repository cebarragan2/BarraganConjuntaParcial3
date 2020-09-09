import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subcategoria } from '../models/subcategoria';
import { Detalle } from '../models/detalle';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  API_URI = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getSubcategorias() {
    return this.http.get(`${this.API_URI}/subcategorias`);
  }

  getSubcategoria(id: string) {
    return this.http.get(`${this.API_URI}/subcategorias/${id}`);
  }
  getSubcategoriaDetalle(id: string) {
    return this.http.get(`${this.API_URI}/subcategorias/detalle/${id}`);
  }

  deleteSubcategoria(id: string) {
    return this.http.delete(`${this.API_URI}/subcategorias/${id}`);
  }

  createSubcategoria(Subcategoria: Subcategoria) {
    return this.http.post(`${this.API_URI}/subcategorias`, Subcategoria);
  }

  updateSubcategoria(id: string|number, updatedSubcategoria: Subcategoria): Observable<any> {
    return this.http.put(`${this.API_URI}/subcategorias/${id}`, updatedSubcategoria);
  }

}