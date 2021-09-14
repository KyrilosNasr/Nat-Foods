import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories;
  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    return this.db.list('/Categories/', cat => {
      return cat.orderByChild('name').ref
    }).valueChanges();
  }
}
