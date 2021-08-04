import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { Product } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Product[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.shoppingCartService.addProductToCart(product);

    this._snackBar.open('Added to cart!', 'Close', {
      duration: 3000,
    });
  }
}
