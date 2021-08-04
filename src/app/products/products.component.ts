import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data.map((item) => ({
        ...item,
      }));
    });
  }
}
