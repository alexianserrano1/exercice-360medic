import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

import * as data from '../assets/dataset-example.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor() {}

  getProduct(product_name: string): Observable<Product> {
    var products : Product[] = (data as any).default;
    return of(products.find(product => product.product_name == product_name));
  }

  getProducts(): Observable<Product[]> {
    return of((data as any).default);
  }
}
