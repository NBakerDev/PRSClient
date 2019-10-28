import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
import { UserService } from '../../../prs/user/user.service';
import { User } from '../../../prs/user/user.class';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  username: string;
  password: string;



  constructor(
    private systemsvc: SystemService,
    private usersvc: UserService,
    private router: Router,
  ) { }


  log() {
    this.systemsvc.ClearUser();
    this.usersvc.login(this.username, this.password).subscribe(

      res => {
        this.user = res;
        this.systemsvc.SetUser(this.user);
        console.log("User is", this.user);
        this.router.navigateByUrl("/home")
      },
      err => {
        console.log(err);
      }


    );


  }
  out() {
    this.systemsvc.ClearUser();
    this.router.navigateByUrl("/home")
  }

  ngOnInit() {



  }

}
