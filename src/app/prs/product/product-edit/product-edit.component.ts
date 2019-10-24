import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  vendors: Vendor[] = [];
  vendor: Vendor;

  save(): void {
    this.productsvc.change(this.product).subscribe(
      res => { 
        console.log("Product change resp: ", res);
      this.router.navigateByUrl("/products/list"); }
      ,err => { console.error(err); }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService,
    private vendorsvc: VendorService
  ) { }

  ngOnInit() {
    let productid = this.route.snapshot.params.id;
    this.productsvc.get(productid).subscribe(
      product => {
        this.product = product;
        console.log("Product:", product);
      },
      err => { console.error(err); }
    );
    this.vendorsvc.list().subscribe(
      vendors => {
        this.vendors = vendors;
        console.log("Vendors", vendors);
      },
      err => {
        console.log(err);
  }
    );
  }

}
