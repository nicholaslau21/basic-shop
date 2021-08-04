import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
  avatarUrl: string;
  description: string;
};

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('http://localhost:4200/api/products');
  }
}
