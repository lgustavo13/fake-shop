import { Component, input, output } from '@angular/core';
import { IProduct } from '../../interfaces/product.inteface';

@Component({
  selector: 'app-cart-summary',
  imports: [],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
})
export class CartSummaryComponent {
  cartProducts = input<IProduct[]>([]);
  buttonClicked = output<void>();

  get total() {
    return this.cartProducts().reduce((total, product) => total + product.price, 0);
  }

  onBuyClick() {
    this.buttonClicked.emit();
  }
}
