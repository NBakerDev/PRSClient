import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../prs/product/product.class';
import { Vendor } from '../../prs/vendor/vendor.class';


@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

    transform(products: Product[],  searchCriteria:string = ''): Product[] {
      if ( searchCriteria == '') { return products; }
      let substr = searchCriteria.toLowerCase();
      let selectedproducts: Product[] = [];
      for (let product of products) {
        if (product.id.toString().includes(substr)
          || product.partNbr.toLowerCase().includes(substr)
          || product.name.toLowerCase().includes(substr)
          || product.price.toString().includes(substr)
          || product.unit.toLowerCase().includes(substr)
          || ((product.photoPath != null) && product.photoPath.toLowerCase().includes(substr))
          
          
  
        ) {
          selectedproducts.push(product);
          continue;
        }
      }
      return selectedproducts;
    }
    
    
  }


