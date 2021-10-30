import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductService } from '../../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<any>;
  category: any = [];
  product: any = {};
  productId;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private productServ: ProductService
  ) {
    //  to loop on the categories
    this.categories$ = this.categoryService
      .getCategories()
      .snapshotChanges()
      .pipe(
        map((data) =>
          data.map((item: any) => ({
            id: item.payload.key,
            ...item.payload.val(),
          }))
        ),
        tap((item) => console.log(item))
      );
    // to get the product to edit
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productServ
        .getProduct(this.productId)
        .valueChanges()
        .subscribe((p) => {
          this.product = p;
          console.log(p);
        });
    } else {
      this.productServ
        .getAll()
        .snapshotChanges()
        .pipe(take(1))
        .subscribe((p) => (this.product = p));
    }
  }

  ngOnInit() {}

  deleteProduct() {
    if (!confirm('Confirem Delete ')) {
      return;
    } else {
      this.productServ.deleteProduct(this.productId);
      this.router.navigate(['/admin/products']);
    }
  }

  saveProduct(product) {
    if (this.productId) {
      this.productServ.updateProduct(product, this.productId);
      console.log(this.productId, this.product);
    } else {
      this.productServ.create(product);
    }
    this.router.navigate(['/admin/products']);
  }
}
