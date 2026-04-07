import { Component, input, signal, effect } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();
  visibleProducts = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.visibleProducts.set(this.products());
    });
  }

  onDelete(id: number) {
    this.visibleProducts.update(list => list.filter(p => p.id !== id));
  }
}