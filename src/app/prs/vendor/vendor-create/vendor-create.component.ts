import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor : Vendor = new Vendor();
  user: User;
  

  constructor(
    private router: Router,
    private vendorsvc: VendorService,
    private systemsvc: SystemService,
  ) { }

  save(): void {
    this.vendorsvc.create(this.vendor).subscribe(
      res => { console.log("Res from vendor create:", res);
      this.router.navigateByUrl('/vendors/list');
    }
      , err => { console.log(err); }
    )
  }

  ngOnInit() {
    this.user = this.systemsvc.GetUser();
  }

}
