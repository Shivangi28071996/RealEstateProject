import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule ,Routes } from '@angular/router';
import { ImageUploadModule } from 'ng2-imageupload';
import { HttpModule, Response } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { NavbarModule } from './Admin/shared/navbar/navbar.module';
import { FooterModule } from './Admin/shared/footer/footer.module';
import { SidebarModule } from './Admin/sidebar/sidebar.module';

import { LbdModule } from './Admin/lbd/lbd.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './Admin/home/home.component';
import { AdminUserComponent } from './Admin/user/user.component';
import { AdminTablesComponent } from './Admin/tables/tables.component';
import { AdminMapsComponent } from './Admin/maps/maps.component';
import { AdminLoginComponent } from './Admin/login/login.component';

import { AppService } from './app.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';
import { HomeComponent } from './User/home/home.component';
import { AboutComponent } from './User/about/about.component';
import { MyprofileComponent } from './User/myprofile/myprofile.component';
import { SubmitpropertyComponent } from './User/submitproperty/submitproperty.component';
import { PricingtableComponent } from './User/pricingtable/pricingtable.component';
import { ForgetpasswordComponent } from './User/forgetpassword/forgetpassword.component';
import { MessageComponent }from'./User/message/message.component';
import { SettingComponent }from'./User/setting/setting.component';
import { WishlistComponent }from'./User/wishlist/wishlist.component';
import { NotificationComponent }from'./User/notification/notification.component';
import { PasswordComponent }from'./User/password/password.component';
import { ContactComponent } from './User/contact/contact.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component'
import { ProfileComponent } from './User/profile/profile.component';
import { MypropertyComponent } from './User/myproperty/myproperty.component';
import { PaymentComponent } from './User/payment/payment.component';
import { APP_BASE_HREF } from '@angular/common';
import { PropertyListComponent } from './User/property-list/property-list.component';
import { PropertyDetailComponent } from './User/property-detail/property-detail.component';
import { UserPropertyDetailComponent } from './Admin/user-property-detail/user-property-detail.component';
import { AdminLogOutComponent } from './Admin/admin-log-out/admin-log-out.component';
import {FilterPipe} from './Admin/tables/table.pipe';
import {FilterProperty} from './Admin/user-property-detail/user-property-detail.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    AdminUserComponent,
    AdminTablesComponent,
    AdminMapsComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    MyprofileComponent,
    SubmitpropertyComponent,
    PricingtableComponent,
    ForgetpasswordComponent,
    WishlistComponent,
    MessageComponent,
    NotificationComponent,
    SettingComponent,
    PasswordComponent,
    ContactComponent, 
    UserDashboardComponent,
    ProfileComponent,
    MypropertyComponent,
    PaymentComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    UserPropertyDetailComponent,
    AdminLogOutComponent,
    FilterPipe,
    FilterProperty
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    LbdModule,
    ImageUploadModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
