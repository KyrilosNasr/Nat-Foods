import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private afDatabase: AngularFireDatabase) { }

  create(product){
   return this.afDatabase.list('/products/').push(product)
  }

  getAll(){
    return this.afDatabase.list('/products/')
  }

  getProduct(productId){
    return this.afDatabase.object('/products/' + productId)
  }

  updateProduct(product, productId?){
    if(!product || !productId){
      console.log(product, productId);
      throw new Error('Invalid product data')
      
    }else{
     return this.afDatabase.object('products/' + productId).update(product)
    }
  }

  deleteProduct(productId){
   return this.afDatabase.object('products/' + productId).remove()
  }
}
