import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products]
}
