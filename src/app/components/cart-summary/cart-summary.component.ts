import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProductsManagerService } from '../../services/products-manager.service';

@Component({
  selector: 'app-cart-summary',
  imports: [AsyncPipe],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
})
export class CartSummaryComponent {
  readonly _productsManagerService = inject(ProductsManagerService);

  onBuyClick(cartProductLength: number | undefined) {
    alert(`Você comprou ${cartProductLength} produtoss!!!`);
  }
}
