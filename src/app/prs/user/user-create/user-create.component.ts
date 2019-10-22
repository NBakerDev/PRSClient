import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  user : User = new User();
  password2: string;

  constructor(
    private router: Router,
    private usersvc: UserService
  ) { }

  save(): void {
    if(this.user.Password !== this.password2) {
      alert("Passwords don't match!");
      return;
    }
    this.usersvc.create(this.user).subscribe(
      res => { console.log("Res from User create:", res);
      this.router.navigateByUrl('/users/list');
    }
      , err => { console.log(err); }
    )
  }

  ngOnInit() {
  }

}
