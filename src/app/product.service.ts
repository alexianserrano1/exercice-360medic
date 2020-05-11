import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as data from '../assets/dataset-example.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl: string = "../assets/dataset-example.json";
  
  constructor(private http: HttpClient) {}

  getProduct(product_name: string): Observable<Product> {
    var products : Product[] = (data as any).default;
    return of(products.find(product => product.product_name == product_name));
    
    /*console.log(product_name);
    const url = `${this.productsUrl}/${product_name.split(' ').join('_')}`;
    return this.http.get<Product>(url);*/
  }

  getProducts(): Observable<Product[]> {
    return of((data as any).default);

    //return this.http.get<Product[]>(this.productsUrl);
  }
}
