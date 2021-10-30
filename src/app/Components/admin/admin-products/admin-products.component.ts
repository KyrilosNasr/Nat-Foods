import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../../Models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  tableRessource;
  rowData: Product[];

  constructor(private ps: ProductService) {
    // getting the data and store it
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
        this.filteredProducts = this.products = products;
      });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.subscription.unsubscribe();
  }

  filter(query: string) {
    this.filteredProducts = query
      ? this.products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products;
  }

  private initializeTable(products: Product[]) {
    // filling the table with data
  }
}
