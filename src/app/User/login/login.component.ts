import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.services'
import {Signup} from '../signup/signup'
import {Login} from './login'
import {Router} from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
// l1:Signup[]=[];
a:boolean;
b:boolean;
notUser:boolean;
// reg1:any={};
// reg2:any={};
  constructor(private service:LoginService,private router:Router) { }
message:String;
  ngOnInit() {
     
  }
  
  login(l){
    this.notUser=false;
    this.service.loggedin(l).subscribe(message =>{ this.message=message.text()});
    if(this.message=="User Not Found"){
      this.b=false;
      this.a=true;
    }
    else if(this.message=="password not matched"){
      this.a=false;
      this.b=true;
    }
    else if(this.message==="seller"){
      localStorage.setItem("user",l.username);
      this.router.navigate(['/seller']);
      
      
      }
    else if(this.message==="buyer"){
      localStorage.setItem("user",l.username);
      this.router.navigate(['/buyer']); 
      
      
      }
    else if(this.message==="Deactivated"){
        this.notUser=true;
      }
    }

show(){
  $("#password").password('toggle');
}

  }

