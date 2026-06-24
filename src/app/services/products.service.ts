import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IProduct } from "../interfaces/product.inteface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly _httpClient = inject(HttpClient)

  getProducts() {
    return this._httpClient.get<IProduct[]>('https://fakestoreapi.com/products')
  }
}
