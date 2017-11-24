import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  myPattern = 'def';
  showMessage = false;
  @ViewChild('f') form;
  constructor() {}

  onFormSubmit() {
    console.log('form submitted');
    console.log(this.form);
  }
}
