import { Component, OnInit } from '@angular/core';
import {MyProfileService} from './myprofile.services';
import {Signup} from '../signup/signup';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
  providers:[MyProfileService]
})
export class MyprofileComponent implements OnInit {
sign:Signup;
name:any;
id:number
fullDetail:Signup[];
data:Signup
  constructor(private service:MyProfileService) { }

  ngOnInit() {
  
    this.name=this.service.checkcredentials();
    console.log(this.name);
    this.service.getPersonalDetail().subscribe(data =>{
    this.fullDetail=data;this.displayUser()});

  }

  displayUser(){
    for(var i=0;i<this.fullDetail.length;i++){
    if(this.fullDetail[i].username==this.name){
      localStorage.setItem("user",JSON.stringify(this.fullDetail[i].id));
      if(this.fullDetail[i].stat=="seller"){
        this.data=this.fullDetail[i];
    }
  }
  if(this.fullDetail[i].id==this.name){
    if(this.fullDetail[i].stat=="seller"){
      this.data=this.fullDetail[i];
  }
}
  }
}
  
  logout(){
    this.service.logout();
  }

}
