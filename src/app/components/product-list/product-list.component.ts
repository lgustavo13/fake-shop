import { Component, input, output } from '@angular/core';
import { IProduct } from '../../interfaces/product.inteface';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = input<IProduct[]>([]);
  productSelected = output<IProduct>();

  loadProducts() {
    throw new Error('Method not implemented.');
  }
  addToCart(product: IProduct) {
    this.productSelected.emit(product);
  }
}
