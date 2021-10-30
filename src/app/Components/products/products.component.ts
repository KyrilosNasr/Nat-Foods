import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { map } from 'rxjs/operators';
import { Product } from '../../Models/product';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscription: Subscription;
  category: string;
  filteredProds: Product[];
  cart: any;

  constructor(
    private ps: ProductService,
    private router: ActivatedRoute,
    private categoryService: CategoryService,
    private shoppingCartService: ShoppingCartService
  ) {
    // Get The Products and map it
    this.subscription = ps
      .getAll()
      .snapshotChanges()
      .pipe(
        map((data) =>
          data.map((item: any) => ({
            id: item.payload.key,
            ...item.payload.val(),
          }))
        )
      )
      .subscribe((products) => {
        this.products = products;
        //  filtering the categories and the products
        router.queryParamMap.subscribe((params) => {
          this.category = params.get('category');
          this.filteredProds = this.category
            ? this.products.filter(
                (p) =>
                  p.category.toLocaleLowerCase() === this.category.toLowerCase()
              )
            : (this.filteredProds = this.products);
        });
      });
  }
  async ngOnInit() {
    this.subscription = (await this.shoppingCartService.getCart()).subscribe(
      (cart) => {
        this.cart = cart;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
