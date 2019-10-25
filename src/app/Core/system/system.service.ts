import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { User } from '../../prs/user/user.class';

@Injectable({
    providedIn: 'root'
  })

export class SystemService {
    user: User = null;
   
    GetUser(): User { console.log("GetUser:", this.user); return this.user; }
    
    SetUser (user: User){
        this.user = user;
        console.log("SetUser:", this.user);
        
    }
    
    ClearUser() {this.user=null;}

    constructor()  {}
}