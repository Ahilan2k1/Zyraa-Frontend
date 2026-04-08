import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Api {

  baseUrl = 'https://zyraa.duckdns.org/api';

  constructor(private http: HttpClient) {}

  getHealth() {
    return this.http.get(`${this.baseUrl}/health`);
  }

  getProducts() {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
}