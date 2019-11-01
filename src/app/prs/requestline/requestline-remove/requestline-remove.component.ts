import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';
import { RequestService } from '../../request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlinesService} from '../requestline.service';
import { RequestLine } from '../requestline.class'

@Component({
  selector: 'app-requestline-remove',
  templateUrl: './requestline-remove.component.html',
  styleUrls: ['./requestline-remove.component.css']
})
export class RequestlineRemoveComponent implements OnInit {
  requestline: RequestLine;


    

  constructor( 
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private systemsvc: SystemService,
    private rlinesvc: RequestlinesService,
    private router: Router,) { }

  ngOnInit() {
    let requestlineid = this.route.snapshot.params.id;
    let requestid = this.route.snapshot.params.rid;
    
    this.rlinesvc.remove(requestlineid).subscribe(
      res => {
        console.log("rline delete res:", res);
        this.router.navigateByUrl(`/requestlines/list/${requestid}`);
      },
      err => console.error(err)
    )

  }

}
