import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';
import { RequestService } from '../../request/request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-reviewlist-review',
  templateUrl: './request-reviewlist-review.component.html',
  styleUrls: ['./request-reviewlist-review.component.css']
})
export class RequestReviewlistReviewComponent implements OnInit {

  request: Request;
  user: User;
  verifyReject: boolean = false;

  approve(): void {
    this.requestsvc.approve(this.request).subscribe(
      res => {
      console.log("Request approve res:", res);
      this.router.navigateByUrl("/requests/list");
    },
    err => console.error(err)
  )

  }

  verify(): void{
    this.verifyReject = !this.verifyReject;
  }

  reject(): void {
    this.requestsvc.reject(this.request).subscribe(
      res => {
      console.log("Request reject res:", res);
      this.router.navigateByUrl("/requests/list");
    },
    err => console.error(err)
  )

  }



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private systemsvc: SystemService,
  ) { }

  ngOnInit() {
    let requestid = this.route.snapshot.params.id;

    this.requestsvc.get(requestid).subscribe(
      request => {
        this.request = request;
        console.log("Request: ", request);
      },
      err => { console.error(err); }
    );
    this.user = this.systemsvc.GetUser();
  }

}
