import { Component, input, output } from '@angular/core';
import { IProduct } from '../../interfaces/product.inteface';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  products = input<IProduct[]>([]);
  buttonCliked = output<void>();

  onCartButtonClick() {
    this.buttonCliked.emit();
  }
}
