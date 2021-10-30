import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Product } from '../Models/product';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../Models/shopping-cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  item: Product[];
  constructor(private angularFireDb: AngularFireDatabase) {}

  private create() {
    return this.angularFireDb.list('/shopping-carts').push({
      dateCreated: new Date().getTime(),
    });
  }

  getCart(): Observable<ShoppingCart> {
    let cartId = this.getOrCreateCartId();
    return this.angularFireDb
      .object('/shopping-carts/' + cartId)
      .valueChanges()
      .pipe(map((data: any) => (this.item = data)));
  }

  private getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      let result = this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
    } else {
      return cartId;
    }
  }

  addtoCart(product: Product) {
    this.updateItemQuantity(product, 1);
  }

  removeFromCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }

  private updateItemQuantity(product: Product, change: number) {
    let cartId = this.getOrCreateCartId();

    let item$ = this.angularFireDb.object(
      '/shopping-carts/' + cartId + '/items/' + product.id
    );
    item$
      .valueChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
        if (item) {
          item$.update({ product: product, quantity: item.quantity + change });
        } else {
          item$.set({ product: product, quantity: change });
        }
      });
  }
}
