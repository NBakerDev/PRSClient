import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];
  sortCriteria: string = "name";
  sortOrder: string = "asc";
  user: User;

  sortBy(prop: string): void{
    if(this.sortCriteria === prop){
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = prop;
  }

  constructor(
    private requestsvc: RequestService,
    private systemsvc: SystemService,
  ) { }

  ngOnInit() {
    this.user = this.systemsvc.GetUser()
    this.requestsvc.list().subscribe(
      requests => {
        this.requests = requests;
        console.log("Requests", requests);
      },
      err => {
        console.log(err);
  }
    );
  }

}
