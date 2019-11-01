import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../../core/system/system.service'
import { User } from '../../user/user.class';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';


@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;
  verifyDelete: boolean = false;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private vendorsvc: VendorService,
    private router: Router,
    private systemsvc: SystemService,
  ) { }

  verify(): void{
    this.verifyDelete = !this.verifyDelete;
  }

  delete(): void{
    this.vendorsvc.remove(this.vendor).subscribe(
      res => {
        console.log("Vendor delete res:", res);
        this.router.navigateByUrl("/vendors/list");
      },
      err => console.error(err)
    )
  }

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
