import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { BooldispPipe } from './core/pipes/booldisp.pipe';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
import { UserDetailComponent } from './prs/user/user-detail/user-detail.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserEditComponent } from './prs/user/user-edit/user-edit.component';
import { UserDeleteComponent } from './prs/user/user-delete/user-delete.component';
import { MenuComponent } from './core/menu/menu.component';
import { MenuItemComponent } from './core/menu-item/menu-item.component';
import { SortPipe } from './core/pipes/sort.pipe';
import { SearchUserPipe } from './core/pipes/search-user.pipe';
import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './prs/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './prs/vendor/vendor-edit/vendor-edit.component';
import { SearchVendorPipe } from './core/pipes/search-vendor.pipe';
import { FooterComponent } from './core/footer/footer.component';
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductDetailComponent } from './prs/product/product-detail/product-detail.component';
import { ProductEditComponent } from './prs/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { SearchProductPipe } from './core/pipes/search-product.pipe';
import { HomeComponent } from './core/home/home/home.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestDetailComponent } from './prs/request/request-detail/request-detail.component';
import { LoginComponent } from './core/logger/login/login.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestEditComponent } from './prs/request/request-edit/request-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    BooldispPipe,
    FourOhFourComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDeleteComponent,
    MenuComponent,
    MenuItemComponent,
    SortPipe,
    SearchUserPipe,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    SearchVendorPipe,
    FooterComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    SearchProductPipe,
    HomeComponent,
    RequestListComponent,
    RequestDetailComponent,
    LoginComponent,
    RequestCreateComponent,
    RequestEditComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
