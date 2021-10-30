import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../Models/product';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart;

  constructor(private CartService: ShoppingCartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.CartService.addtoCart(this.product);
  }
  removeFromCart() {
    this.CartService.removeFromCart(this.product);
  }
  getQuantity() {
    if (!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.product.id];
    return item ? item.quantity : 0;
  }
}
