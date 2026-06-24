import { Component, input, output } from '@angular/core';
import { IProduct } from '../../interfaces/product.inteface';

@Component({
  selector: 'app-cart-sidebar',
  imports: [],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css',
})
export class CartSidebarComponent {
  isOpen = input<boolean>(false);
  cartProducts = input<IProduct[]>([]);
  closeClicked = output<void>();
  productRemoved = output<number>();

  onCloseClick() {
    this.closeClicked.emit();
  }

  onRemoveProduct(productIndex: number) {
    this.productRemoved.emit(productIndex);
  }
}
