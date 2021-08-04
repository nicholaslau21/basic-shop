import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart, ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject();
  cart: Cart;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartService.cartChanged
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((cart) => {
        this.cart = cart;
      });
  }

  applyVoucherCode(cart: Cart) {
    const product = cart.products.find((p) => p.product.id === 'docgen');

    if (product.quantity >= 10) {
      this.shoppingCartService.applyVoucherCode();
    } else {
      alert(
        'This voucher code is only applicable with purchase of at least 10 Document Generation'
      );
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
