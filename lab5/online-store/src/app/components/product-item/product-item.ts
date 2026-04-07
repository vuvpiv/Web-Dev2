import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  onLike() {
    this.product().likes++;
  }

  onDelete() {
    this.delete.emit(this.product().id);
  }

  telegramShareUrl(): string {
    const p = this.product();
    return `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
  }

  whatsappShareUrl(): string {
    const p = this.product();
    return `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + p.link)}`;
  }
}