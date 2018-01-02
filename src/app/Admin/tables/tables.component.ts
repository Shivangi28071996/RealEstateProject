import { Component, OnInit } from '@angular/core';
import {TableService} from './tables.services';
import {table_data} from './table';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute,ParamMap} from '@angular/router';
import{Router} from '@angular/router'
import {Signup} from '../../User/signup/signup';
import {Pipe,PipeTransform} from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  providers:[TableService]
})
export class AdminTablesComponent implements OnInit {
    Arr:table_data[]=[];
    ref:any;
    user:table_data;
    id:number;
    userData:Signup;
    userId:number;
  constructor(private service:TableService,private router:Router) { }

  ngOnInit() {
    $("#userNavbar").hide();
    $("#adminNavbar").show();
    $("#adminFooter").show();
    this.service.getUsers().subscribe(t=> {this.Arr=t});
  }

//     Subme(userdata)
//   {
//     console.log("subme is working");
//        this.ref = new table_data(null,userdata.fullname,userdata.username,userdata.password,
//       userdata.phone,userdata.email,userdata.stat);
//     console.log(this.ref);
//     this.svc.postData(this.ref).subscribe( t => {console.log(t); this.ngOnInit()});
//   }

delete(id){
  this.userId=id;
  this.service.getby(id).subscribe(t =>{this.userData=t;this.deleteBy(this.userData)});
  }

  deleteBy(userData:Signup){
    if(this.userData.userStatus==="ACTIVE"){
      this.service.Deleteby(this.userId).subscribe(t=>{this.ngOnInit()});
    }
    else if(this.userData.userStatus==="DEACTIVE"){
      this.service.Enableby(this.userId).subscribe(t=>{this.ngOnInit()});
    }
  }
      
  updateData(id){
 this.service.getby(id).subscribe(t =>{this.userData=t});
}

updateUserData(data:Signup){
this.service.updateData(data,this.userData.id).subscribe(data =>{this.ngOnInit()});
}
}
