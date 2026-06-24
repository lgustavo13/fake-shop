import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartSidebarComponent } from './components/cart-sidebar/cart-sidebar.component';
import { ProductsService } from './services/products.service';
import { IProduct } from './interfaces/product.inteface';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductListComponent, CartSummaryComponent, CartSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products = signal<IProduct[]>([]);
  cartProducts = signal<IProduct[]>([]);
  private _productsService = inject(ProductsService);

  isSideBarOpen = signal<boolean>(false);

  ngOnInit() {
    this.getProducts();
  }

  addProductToCard(product: IProduct) {
    this.cartProducts.update((products) => [...products, product]);
  }

  removeProductToCart(productIndex: number) {
    this.cartProducts.update((products) => products.filter((_, index) => index !== productIndex));
  }

  onBuyProducts() {
    alert(`Você comprou ${this.cartProducts().length} produtos`);
  }

  private getProducts() {
    this._productsService.getProducts().subscribe((productsResponse) => {
      this.products.set(productsResponse);
    });
  }
}
