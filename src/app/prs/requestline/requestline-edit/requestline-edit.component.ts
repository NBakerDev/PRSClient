import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';

import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { RequestLine } from '../requestline.class'
import { RequestlinesService } from '../requestline.service'

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  
  requestline: RequestLine;
  products: Product[];
  user: User;
  
  

  save(): void {
    
    this.requestlinessvc.change(this.requestline).subscribe(
      res => { 
        console.log("Rline change resp: ", res);
      this.router.navigateByUrl("/requests/list"); }
      ,err => { console.error(err); }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService,
    private requestlinessvc: RequestlinesService,
    private systemsvc: SystemService,
  ) { }

  ngOnInit() {
    let rlineid = this.route.snapshot.params.id;
    
    this.requestlinessvc.get(rlineid).subscribe(
      requestline => {
        this.requestline = requestline;
        console.log("Rline:", requestline);
      },
      err => { console.error(err); }
    );
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
