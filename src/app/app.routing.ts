import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './Admin/home/home.component';
import { AdminUserComponent } from './Admin/user/user.component';
import { AdminTablesComponent } from './Admin/tables/tables.component';
import { AdminMapsComponent } from './Admin/maps/maps.component';
import { AdminLoginComponent } from './Admin/login/login.component';
import { UserPropertyDetailComponent } from './Admin/user-property-detail/user-property-detail.component';


import { LoginComponent } from './User/login/login.component';
import { SignupComponent } from './User/signup/signup.component';
import { HomeComponent } from './User/home/home.component';
import { AboutComponent } from './User/about/about.component';
import { MyprofileComponent } from './User/myprofile/myprofile.component';
import { SubmitpropertyComponent } from './User/submitproperty/submitproperty.component';
import { PricingtableComponent } from './User/pricingtable/pricingtable.component';
import { ForgetpasswordComponent } from './User/forgetpassword/forgetpassword.component';
import {MessageComponent}from'./User/message/message.component';
import {SettingComponent}from'./User/setting/setting.component';
import {WishlistComponent}from'./User/wishlist/wishlist.component';
import {NotificationComponent}from'./User/notification/notification.component';
import {PasswordComponent}from'./User/password/password.component';
import { ContactComponent } from './User/contact/contact.component';
import {UserDashboardComponent} from './User/user-dashboard/user-dashboard.component'
import {ProfileComponent} from './User/profile/profile.component';
import { MypropertyComponent } from './User/myproperty/myproperty.component';
import { PaymentComponent } from './User/payment/payment.component';
import {PropertyListComponent} from './User/property-list/property-list.component';
import { PropertyDetailComponent } from './User/property-detail/property-detail.component';
import { AdminLogOutComponent } from './Admin/admin-log-out/admin-log-out.component';

const routes: Routes =[
  {path: '', redirectTo:'Home', pathMatch:'full'},
  {path: 'Login', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'Signup', component: SignupComponent },
  {path: 'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'propertyList',component:PropertyListComponent},
  {path:'seller',component:MyprofileComponent},
  {path:'Submit',component:SubmitpropertyComponent},
  {path:'Pricing',component:PricingtableComponent},
  {path:'Forgetpassword',component:ForgetpasswordComponent},
  {path:'message',component:MessageComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'notification',component:NotificationComponent},
  {path:'password',component:PasswordComponent},
  {path:'contact',component:ContactComponent},
  {path:'buyer',component:UserDashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'myproperty',component:MypropertyComponent},
  {path:'payment',component:PaymentComponent},
  {path:'propertyDetails',component:PropertyDetailComponent},
  
  { path: 'adminLogin',     component: AdminLoginComponent,},
  { path: 'dashboard',      component: AdminHomeComponent},
    { path: 'user',           component: AdminUserComponent },
    { path: 'table',          component: AdminTablesComponent },
    { path: 'maps',           component: AdminMapsComponent },
    { path: 'propertyDetail',           component: UserPropertyDetailComponent },
  {path:'logout',component:AdminLogOutComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
