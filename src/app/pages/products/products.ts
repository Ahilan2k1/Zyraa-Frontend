import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  products: Product[] = [];

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}