import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  user: User;
  products: Product[] = [];
  sortCriteria: string = "name";
  sortOrder: string = "asc";
  searchCriteria: string = "";
  
  sortBy(prop: string): void{
    if(this.sortCriteria === prop){
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = prop;
  }

  constructor(
    private productsvc: ProductService,
    private systemsvc: SystemService,) { }

  ngOnInit() {
    this.productsvc.list().subscribe(
      products => {
        this.products = products;
        console.log("Products", products);
      },
      err => {
        console.log(err);
  }
    );
    this.user = this.systemsvc.GetUser();
  }

}
