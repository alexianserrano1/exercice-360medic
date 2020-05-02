import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchValue: string): Product[] {
    if(!products) { // aucun produit alors retourne tableau vide
      var empty: Product[] = [];
      return empty;
    }
    if(!searchValue) { // Pas de valeur recherché --> on ne filtre pas
      return products;
    }

    return products.filter(product => {
      return product.product_name.toLowerCase()
        .startsWith(searchValue.toLowerCase());
    });
  }

}
