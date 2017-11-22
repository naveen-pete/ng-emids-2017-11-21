import { Component } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  product: Product = new Product();
  products: Product[];
  showMessage = false;

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Apple iPhone 8',
        description:
          'An all-new glass design, an updated camera, and a powerful chip, there’s so much to love about the iPhone 8.',
        price: 75000,
        isAvailable: true
      },
      {
        id: 2,
        name: 'Samsung Evo 64 GB Memory Card',
        description: 'Samsung Evo 64 GB MicroSDXC Class 10 48 MB/s Memory Card',
        price: 1750,
        isAvailable: false
      },
      {
        id: 3,
        name: 'Sony Bravia 101.6cm (40 inch) Full HD LED Smart TV ',
        description:
          'Featuring a large Full HD screen, this Sony Bravia smart LED TV makes all the visuals come to life.',
        price: 45000,
        isAvailable: true
      }
    ];
  }

  onSave() {
    console.log('onSave() method invoked.');
    this.products.unshift(this.product);
    this.product = new Product();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }
}
