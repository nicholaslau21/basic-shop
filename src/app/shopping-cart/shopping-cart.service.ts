import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../products/products.service';

export interface Cart {
  products: {
    product: Product;
    quantity: number;
  }[];
  totalPrice: number;
}

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  private cart: Cart = {
    products: [],
    totalPrice: 0,
  };

  cartChanged = new BehaviorSubject<Cart>(this.cart);

  addProductToCart(product: Product) {
    let prod = this.cart.products.find((p) => p.product.id === product.id);

    if (prod) {
      prod.quantity++;
    } else {
      this.cart.products.push({
        product,
        quantity: 1,
      });
    }

    this.cart.totalPrice = this.calcTotalPrice(this.cart);
  }

  calcTotalPrice(cart: Cart): number {
    let totalPrice = cart.products.reduce(
      (prevVal, currVal) =>
        (prevVal += currVal.product.price * currVal.quantity),
      0
    );

    return totalPrice;
  }

  applyVoucherCode() {
    this.cart.products.find(
      (p) => p.product.id === 'docgen'
    ).product.price = 8.99;
    this.cart.totalPrice = this.calcTotalPrice(this.cart);
    this.cartChanged.next(this.cart);
  }
}
