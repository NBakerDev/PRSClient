import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './prs/user/user-list/user-list.component';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: '', redirectTo: '/users/list', pathMatch: 'full'},
  { path: 'users/list', component: UserListComponent },
  { path: '**', component: FourOhFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
