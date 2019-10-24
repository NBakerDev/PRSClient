import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product : Product = new Product();
  vendors: Vendor[] = [];

  constructor(
    private router: Router,
    private vendorsvc: VendorService,
    private productsvc: ProductService
  ) { }

  save(): void {
    this.productsvc.create(this.product).subscribe(
      res => { console.log("Res from Product create:", res);
      this.router.navigateByUrl('/products/list');
    }
      , err => { console.log(err); }
    )
  }

  ngOnInit() {
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
