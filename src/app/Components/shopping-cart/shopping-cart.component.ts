import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/Models/shopping-cart';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Products } from '../../Models/Products';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  carts: any;
  prodList: any;

  products: {
    string?: number;
    title?;
  } = {};
  titles: string[] = [];
  cart: any;
  product: string[] = [];
  quantities = [];
  shoppingCartItemsCount: number;
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.cart$ = this.shoppingCartService.getCart();
    this.cart$.subscribe((data) => {
      this.prodList = data.items;
    });
    this.getData();
  }

  getData() {
    //this code is working
    // // calculate total quantity
    // this.cart$.subscribe((cart: ShoppingCart) => {
    //   this.shoppingCartItemsCount = 0;
    //   for (let productId in cart.items) {
    //     this.shoppingCartItemsCount += cart.items[productId].quantity;
    //   }
    //   this.carts = cart;
    //   console.log(this.carts);
    //   // get the  product quantity in array
    //   this.cart = Array.isArray(cart.items);
    //   for (let i = 0; i < this.cart.length; i++) {
    //     this.quantities.push(this.cart[i].quantity);
    //   }
    //   // get the  product Title in array
    //   for (let i = 0; i < this.cart.length; i++) {
    //     this.product.push(this.cart[i].product.title);
    //   }
    //   // creating object from two arrays for the table
    //   this.product.forEach((k: string, v: number, t) => {
    //     this.products[k] = this.quantities[v];
    //   });
    // });
  }
}
