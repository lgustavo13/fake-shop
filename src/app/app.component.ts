import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartSidebarComponent } from './components/cart-sidebar/cart-sidebar.component';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductListComponent, CartSummaryComponent, CartSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private _productsService = inject(ProductsService);

  isSideBarOpen = signal<boolean>(false);

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this._productsService.getProducts().subscribe();
  }
}
