import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  products: Product[] = [
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

  constructor(private logger: LoggerService) {}

  getProducts(): Product[] {
    this.logger.log('ProductsService.getProducts() invoked.');
    return this.products;
  }

  addProduct(product: Product) {
    this.logger.log('ProductsService.addProduct() invoked.');
    const newProduct = Object.assign({}, product);
    this.products.unshift(newProduct);
    this.logger.log(
      `product: ${JSON.stringify(product)},
      newProduct: ${JSON.stringify(newProduct)}`
    );
  }
}
