import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card';
import { PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  products = PRODUCTS;
}