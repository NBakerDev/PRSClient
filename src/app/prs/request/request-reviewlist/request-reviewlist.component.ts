import { Component, OnInit } from '@angular/core';

import { User } from '../../user/user.class';
import { SystemService } from '../../../core/system/system.service'
import {RequestService } from '../request.service'
import { Request } from '../request.class'

@Component({
  selector: 'app-request-reviewlist',
  templateUrl: './request-reviewlist.component.html',
  styleUrls: ['./request-reviewlist.component.css']
})
export class RequestReviewlistComponent implements OnInit {

  requests: Request[];
  user: User;

  sortCriteria: string = "name";
  sortOrder: string = "asc";
  searchCriteria: string = "";

  sortBy(prop: string): void{
    if(this.sortCriteria === prop){
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = prop;
  }


  constructor(
    private requestsvc : RequestService,
    private systemsvc: SystemService,
  ) { }

  ngOnInit(
  ) {
    this.user = this.systemsvc.GetUser()
    this.requestsvc.toReview(this.user.id).subscribe(
      resp => {
        console.log("Requests:", resp);
        this.requests = resp;
      }
    )
  }

}
