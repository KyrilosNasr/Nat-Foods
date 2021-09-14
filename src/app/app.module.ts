import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ProductFormComponent } from './Componentws/admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ProductsComponent, ShoppingCartComponent, CheckOutComponent, OrderSuccessComponent, MyOrdersComponent, AdminProductsComponent, AdminOrdersComponent, LoginComponent, RegisterComponent, ProductFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, AuthGuard, UserService,
  AdminAuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
