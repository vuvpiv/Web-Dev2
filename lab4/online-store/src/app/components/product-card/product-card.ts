import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  @Input() product!: Product;

  get telegramShareUrl(): string {
    return (
      'https://t.me/share/url?url=' +
      encodeURIComponent(this.product.link) +
      '&text=' +
      encodeURIComponent(this.product.name)
    );
  }

  get whatsappShareUrl(): string {
    return (
      'https://wa.me/?text=' +
      encodeURIComponent(`Check out this product: ${this.product.link}`)
    );
  }
}