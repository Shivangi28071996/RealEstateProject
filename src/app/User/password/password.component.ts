import { Component, OnInit } from '@angular/core';
import {Signup} from '../signup/signup'
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {Router} from '@angular/router';
import {PasswordService} from './password.services';
import {Password} from './password'

declare var $:any;

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  providers:[PasswordService]
})

export class PasswordComponent implements OnInit {
fullDetail:Signup[]=[];
sign:Signup
flag:boolean=false;
message:string;
valid:boolean=true;
a:boolean;
b:boolean;
id:number;
  constructor(private service:PasswordService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=this.service.checkcredentials();

    this.service.getPersonalDetail().subscribe(t => {
      this.fullDetail=t;
      this.displayUser();
    });

  }

  displayUser(){
    for(var i=0;i<this.fullDetail.length;i++)
    if(this.fullDetail[i].id==this.id){
        this.sign=this.fullDetail[i];
    }
  }

  save(s:Password){

    if(s.cp===this.sign.password)
    {
          if(s.np==s.cnp)
          {      let s1=new Signup(this.sign.fullname,this.sign.email,s.np,this.sign.stat,this.sign.phone,this.sign.username)
                  this.service.updatePassword(s1,this.sign.id).subscribe(t => {this.ngOnInit();});  
                  this.router.navigate(['/seller'])

          }
          else
          { 
            this.b=false;   
            this.a=true;
          }
    }
    else
    { 
      this.a=false;
       this.b=true;
    }
  }
  show(){
    $("#currentpassword").password('toggle');
    $("#newpassword").password('toggle');
    $("#confirmpassword").password('toggle');
  }
}
