import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];
  sortCriteria: string = "code";
  sortOrder: string = "asc";
  searchCriteria: string = "";


  sortBy(prop: string): void{
    if(this.sortCriteria === prop){
      this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    }
    this.sortCriteria = prop;
  }
  

  constructor(
    private vendorsvc: VendorService
  ) { }

  

  ngOnInit() {
    this.vendorsvc.list().subscribe(
      vendors => {
        this.vendors = vendors;
        console.log("Vendors", vendors);
      },
      err => {
        console.log(err);
  }
    );
}

}
