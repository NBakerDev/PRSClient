import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './prs/user/user-list/user-list.component';
import { UserDetailComponent } from './prs/user/user-detail/user-detail.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserEditComponent } from './prs/user/user-edit/user-edit.component';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';

import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './prs/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './prs/vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductDetailComponent } from './prs/product/product-detail/product-detail.component';
import { ProductEditComponent } from './prs/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { HomeComponent } from './core/home/home/home.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestDetailComponent } from './prs/request/request-detail/request-detail.component';
import { LoginComponent } from './core/logger/login/login.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestEditComponent } from './prs/request/request-edit/request-edit.component';
import { RequestlineListComponent } from './prs/requestline/requestline-list/requestline-list.component';
import { RequestlineCreateComponent } from './prs/requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './prs/requestline/requestline-edit/requestline-edit.component';
import { RequestReviewlistComponent } from './prs/request/request-reviewlist/request-reviewlist.component';
import { RequestReviewlistReviewComponent } from './prs/request/request-reviewlist-review/request-reviewlist-review.component';
import { RequestlineRemoveComponent } from './prs/requestline/requestline-remove/requestline-remove.component';



const routes: Routes = [
  { path: '', redirectTo: '/users/list', pathMatch: 'full'},
  { path: 'users/list', component: UserListComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'vendors/list', component: VendorListComponent} ,
  { path: 'vendors/detail/:id', component: VendorDetailComponent},
  { path: 'vendors/create', component: VendorCreateComponent},
  { path: 'vendors/edit/:id', component: VendorEditComponent},
  { path: 'products/list', component: ProductListComponent},
  { path: 'products/detail/:id', component: ProductDetailComponent},
  { path: 'products/edit/:id', component: ProductEditComponent},
  { path: 'products/create', component: ProductCreateComponent},
  { path: 'home', component: HomeComponent},
  { path: 'requests/list', component: RequestListComponent},
  { path: 'requests/detail/:id', component: RequestDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'requests/create', component: RequestCreateComponent},
  { path: 'requests/edit/:id', component: RequestEditComponent},
  { path: 'requestlines/list/:id', component: RequestlineListComponent},
  { path: 'requestlines/create/:id', component:RequestlineCreateComponent},
  { path: 'requestlines/list/edit/:id', component: RequestlineEditComponent},
  { path: 'requests/review/list', component: RequestReviewlistComponent},
  { path: 'requests/reviewlist/review/:id', component: RequestReviewlistReviewComponent},
  { path: 'requestlines/remove/:rid/:id', component:RequestlineRemoveComponent},
  { path: '**', component: FourOhFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
