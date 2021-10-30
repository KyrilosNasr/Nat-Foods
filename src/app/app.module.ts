import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomFormsModule } from 'ng2-validation'

import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { AdminProductsComponent } from './Components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './Components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { ProductFormComponent } from './Components/admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { AgGridModule } from 'ag-grid-angular';
import { TableModule } from 'primeng/table';
import { ProductFilteredComponent } from './Components/products/Product-Filtered/Product-Filtered.component';
import { ProductCardComponent } from './Components/products/Product-Card/Product-Card.component';
import { ShoppingCartService } from './services/shopping-cart.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ProductsComponent,
     ShoppingCartComponent, CheckOutComponent, OrderSuccessComponent, 
     MyOrdersComponent, AdminProductsComponent, AdminOrdersComponent,
      LoginComponent, RegisterComponent, ProductFormComponent,
       ProductFilteredComponent,
       ProductCardComponent],

  imports: [
    CustomFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgGridModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, AuthGuard, UserService,ProductService,
  AdminAuthGuardService,ShoppingCartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
