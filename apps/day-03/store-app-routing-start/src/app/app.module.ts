import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Common components
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';

// Product components
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

// Customer components
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';

// Services
import { LoggingService } from './services/logging.service';
import { ProductsService } from './services/products.service';
import { CustomersService } from './services/customers.service';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: ':id', component: ProductDetailComponent },
      { path: ':id/edit', component: ProductFormComponent }
    ]
  }, // http://localhost:4200/myapp/products
  { path: 'customers', component: CustomersComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NotFoundComponent,
    NavComponent,

    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,

    CustomersComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerFormComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [LoggingService, ProductsService, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
