import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-cart-sidebar',
  imports: [],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css',
})
export class CartSidebarComponent {
  isOpen = input<boolean>(false);
  closeClicked = output<void>();

  onCloseClick() {
    this.closeClicked.emit();
  }
}
