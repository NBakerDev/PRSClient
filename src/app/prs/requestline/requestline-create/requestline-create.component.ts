import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestlinesService } from '../requestline.service'

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  user: User;
  products : Product[] = [];
  requestline : RequestLine = new RequestLine();
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService,
    private requestlinessvc: RequestlinesService,
    private systemsvc: SystemService,
  ) { }

  save(): void {
    let rid = this.requestline.requestId;
    this.requestlinessvc.create(this.requestline).subscribe(
      res => { console.log("Res from Rline create:", res);
      this.router.navigateByUrl(`requestlines/list/${rid}`);
    }
      , err => { console.log(err); }
    )
  }

  ngOnInit() {
    this.requestline.requestId =this.route.snapshot.params.id;
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
