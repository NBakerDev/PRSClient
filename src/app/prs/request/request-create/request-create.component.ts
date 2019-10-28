import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  user: User;
  request: Request = new Request;

  save(): void {
    
    this.requestsvc.create(this.request).subscribe(
      res => { console.log("Res from Request create:", res);
      this.router.navigateByUrl('/requests/list');
    }
      , err => { console.log(err); }
    )
  }

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private router: Router,
    private systemsvc: SystemService,

  ) { }

  ngOnInit() {
    this.user = this.systemsvc.GetUser();
    
    
    
  }

}
