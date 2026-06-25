import { Component, inject, input } from '@angular/core';
import { IProduct } from '../../interfaces/product.inteface';
import { ProductsManagerService } from '../../services/products-manager.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = input<IProduct[]>([]);
  readonly _productsManagerService = inject(ProductsManagerService);

  addToCart(product: IProduct) {
    this._productsManagerService.addProductToCart(product);
  }
}
