import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';
import { RequestService } from '../../request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlinesService} from '../requestline.service';
import { RequestLine } from '../requestline.class'

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {
  request: Request;
  user: User;
  rline: RequestLine;


  

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private systemsvc: SystemService,
    private rlinesvc: RequestlinesService,
    private router: Router,
  ) { }

  /* delete(): void{
    this.rlinesvc.remove(this.requestline.id).subscribe(
      res => {
        console.log("User delete res:", res);
        this.router.navigateByUrl("/users/list");
      },
      err => console.error(err)
    )
  } */

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
