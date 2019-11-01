import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  user: User;
  vendor: Vendor;

  save(): void {
  this.vendorsvc.change(this.vendor).subscribe(
    res => { 
      console.log("Vendor change resp: ", res);
    this.router.navigateByUrl("/vendors/list"); }
    ,err => { console.error(err); }
  );
}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService,
    private systemsvc: SystemService,
  ) { }

  ngOnInit() {
    let vendorid = this.route.snapshot.params.id;
    this.vendorsvc.get(vendorid).subscribe(
      vendor => {
        this.vendor = vendor;
        console.log("Vendor:", vendor);
      },
      err => { console.error(err); }
    );
    this.user = this.systemsvc.GetUser();
    
  }

}
