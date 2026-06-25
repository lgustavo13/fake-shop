import { Component, inject, output } from '@angular/core';
import { ProductsManagerService } from '../../services/products-manager.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  buttonCliked = output<void>();
  readonly _productsManagerService = inject(ProductsManagerService);

  onCartButtonClick() {
    this.buttonCliked.emit();
  }
}
