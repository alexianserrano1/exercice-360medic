import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  searchValue: string = "";
  products: Product[];
  lastFiche: string = "";

  constructor(public productService: ProductService) { }

  product: Product;
  ngOnInit(): void {
    this.getProducts();
    this.croissant();
    this.lastFiche = localStorage.getItem("lastFiche");
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  croissant(): void {
    this.products.sort((productA, productB) => {
        if(+(productA.unit_cost.slice(1)) < +(productB.unit_cost.slice(1))) { return -1; }
        else if(+(productA.unit_cost.slice(1)) > +(productB.unit_cost.slice(1))) { return 1; }
        else { return 0; }  
      }
    );
  }

  decroissant(): void {
    this.products.sort((productA, productB) => {
        if(+(productA.unit_cost.slice(1)) > +(productB.unit_cost.slice(1))) { return -1; }
        else if(+(productA.unit_cost.slice(1)) < +(productB.unit_cost.slice(1))) { return 1; }
        else { return 0; }  
      }
    );
  }

}
