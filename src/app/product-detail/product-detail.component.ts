import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  constructor(
      private productService: ProductService,
      private location: Location,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
    localStorage.setItem("lastFiche", this.product.product_name);
  }

  getProduct(): void {
    // split + join permet de récupérer le nom via l'URL sans les '_'
    const product_name = this.route.snapshot.paramMap.get('product_name').split('_').join(' ');
    this.productService.getProduct(product_name)
      .subscribe(product => this.product = product);

    /*
    this.productService.getProducts()
      .subscribe(products => {
        products.forEach(product => { 
          if(product.product_name === product_name) {
            this.product = product;
            return;
          }
        })
      });
    */
  }

  goBack(): void {
    this.location.back();
  }
}
