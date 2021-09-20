import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit  {
  categories$: Observable<any>;

  cat;
  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories().pipe(
      map(item =>{
       return item.map((d: any)=>{
        return this.cat =  {
          id: d.payload.val(),
          ...d.payload.val()
         }
        })
      })
    )
  }
    
  ngOnInit(){

  }

  save(product: any) {
    console.log(product)
    console.log(this.cat);
    
  }
}



