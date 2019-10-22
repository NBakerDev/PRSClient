import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    { display: 'PRS', link: '/home', tip: 'Home Page'},
    { display: 'Users', link: '/users/list', tip: 'User List'},
    { display: 'Vendors', link: '/vendors/list', tip: 'Vendor List'},
    { display: 'Products', link: '/products/list', tip: 'Product List'},
    { display: 'Requests', link: '/requests/list', tip: 'Request List'},
    { display: 'Reviews', link: '/requests/review/list', tip: 'Requests to be reviewed'},
    { display: 'About', link: '/about', tip: 'About Me'},
    { display: 'Login/Out', link: '/login', tip: 'Login'}



  ];

  constructor() { }

  ngOnInit() {
  }

}
