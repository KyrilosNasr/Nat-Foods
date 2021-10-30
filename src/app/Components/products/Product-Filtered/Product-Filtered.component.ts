import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filtered.component.html',
  styleUrls: ['./product-filtered.component.css']
})
export class ProductFilteredComponent implements OnInit {

  @Input('category')category;

  categories$;
    

  constructor(private categoryService:CategoryService) {
    
    //  get & saving the categoris as observable to loop on it 

    this.categories$ = this.categoryService.getCategories().snapshotChanges().pipe(
      map(data => data.map(
        (item:any)=> (
          {
          id:item.payload.key,
           ...item.payload.val() 
          }
          ))
        )
       )

  }

  ngOnInit(): void {
  }

}
