import { Component, inject, input, output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProductsManagerService } from '../../services/products-manager.service';

@Component({
  selector: 'app-cart-sidebar',
  imports: [AsyncPipe],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css',
})
export class CartSidebarComponent {
  readonly _productsManagerService = inject(ProductsManagerService);
  isOpen = input<boolean>(false);
  closeClicked = output<void>();
  productRemoved = output<number>();

  onCloseClick() {
    this.closeClicked.emit();
  }

  onRemoveProduct(productIndex: number) {
    this._productsManagerService.removeProductToCart(productIndex);
  }
}
