import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  user: User;
  product: Product;
  verifyDelete: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private router: Router,
    private systemsvc: SystemService,
  ) { }

  edit(): void {
    this.router.navigateByUrl(`/products/edit/${this.product.id}`);
  }

  verify(): void{
    this.verifyDelete = !this.verifyDelete;
  }

  delete(): void{
    this.productsvc.remove(this.product).subscribe(
      res => {
        console.log("Product delete res:", res);
        this.router.navigateByUrl("/products/list");
      },
      err => console.error(err)
    )
  }

  ngOnInit() {
    let productid = this.route.snapshot.params.id;
    this.productsvc.get(productid).subscribe(
      product => {
        this.product = product;
        console.log("product:", product);
      },
      err => { console.error(err); }
    );
    this.user = this.systemsvc.GetUser();
  }

}
