import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.inteface';
import { ProductsManagerService } from './products-manager.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _productsManagerService = inject(ProductsManagerService);

  getProducts() {
    return this._httpClient
      .get<IProduct[]>('https://fakestoreapi.com/products')
      .pipe(tap((productsResponse) => this._productsManagerService.addProducts(productsResponse)));
  }
}
