import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productCreated: EventEmitter<Product>;
  product: Product = new Product();
  showMessage = false;

  constructor() {
    this.productCreated = new EventEmitter<Product>();
  }

  ngOnInit() {}

  onSave() {
    console.log('onSave() method invoked.');
    // this.products.unshift(this.product);
    this.productCreated.emit(this.product);
    this.product = new Product();
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }
}
