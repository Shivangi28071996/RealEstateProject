import { Component, OnInit } from '@angular/core';
import {UserDashboardService} from './userdashboard.services'
import {Signup} from '../signup/signup'
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  providers:[UserDashboardService]
})
export class UserDashboardComponent implements OnInit {
sign:Signup;
id:number;
fullDetail:Signup[]=[];
data:Signup;
  constructor(private service:UserDashboardService) { }

  ngOnInit() {
    
    this.id=this.service.checkcredentials();
    
    this.service.getPersonalDetail().subscribe(data =>{
      this.fullDetail=data;this.displayUser()});
  }

  displayUser(){
    for(var i=0;i<this.fullDetail.length;i++)
    if(this.fullDetail[i].id==this.id){
      if(this.fullDetail[i].stat=="buyer"){
        this.data=this.fullDetail[i];
    }
  }
  }

  logout(){
    this.service.logout();
  }
}
