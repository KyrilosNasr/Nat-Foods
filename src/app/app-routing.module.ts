import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/Components/home/home.component';
import { AdminOrdersComponent } from './Components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Components/admin/admin-products/admin-products.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ProductsComponent } from './Components/products/products.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { ProductFormComponent } from './Components/admin/product-form/product-form.component';

const routes: Routes = [

  // Anonymous users routes
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },

  // users routes
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },

  // Admin routes
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuardService] },
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuardService] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuardService] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
