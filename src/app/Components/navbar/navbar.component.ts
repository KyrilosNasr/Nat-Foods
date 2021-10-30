import { Component, OnInit } from '@angular/core';
import { appUser } from 'src/app/Models/app-user';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  appUser: appUser;
  cart$;
  shoppingCartItemsCount: number;
  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.auth.appUser$.subscribe((appUser) => {
      this.appUser = appUser;
    });
    let cart$ = this.shoppingCartService.getCart();
    cart$.subscribe((cart) => {
      this.shoppingCartItemsCount = 0;
      for (let productId in cart.items) {
        this.shoppingCartItemsCount += cart.items[productId].quantity;
      }
    });
  }
  logout() {
    this.auth.logout();
  }
}
