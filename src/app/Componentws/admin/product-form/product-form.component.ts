import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { switchMap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories()

  }
  ngOnInit() {
  }

  save(product) {
    console.log(product);

  }
}