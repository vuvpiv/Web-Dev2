import { Component, computed, signal } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { CATEGORIES } from './data/categories';
import { PRODUCTS } from './data/products';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;

  selectedCategoryId = signal<number | null>(null);

  selectedProducts = computed(() => {
    const id = this.selectedCategoryId();
    if (id === null) return [];
    return this.allProducts.filter(p => p.categoryId === id);
  });

  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
  }

  clearCategory() {
    this.selectedCategoryId.set(null);
  }

}