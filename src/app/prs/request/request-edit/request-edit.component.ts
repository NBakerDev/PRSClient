import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  user: User;
  request: Request;

  save(): void {
    this.requestsvc.change(this.request).subscribe(
      res => { 
        console.log("Request change resp: ", res);
      this.router.navigateByUrl("/requests/list"); }
      ,err => { console.error(err); }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private router: Router,
    private systemsvc: SystemService,
  ) { 

  }

  ngOnInit() {
    this.user = this.systemsvc.GetUser();
    let requestid = this.route.snapshot.params.id;
    this.requestsvc.get(requestid).subscribe(
      request => {
        this.request = request;
        console.log("Request:", request);
      },
      err => { console.error(err); }
    );
  }

}
