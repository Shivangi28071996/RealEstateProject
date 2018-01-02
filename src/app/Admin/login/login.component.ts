import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Login} from './login';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AdminLoginComponent implements OnInit {
b:boolean;
  constructor(private router:Router) { }

  ngOnInit() {
    $("#userNavbar").hide();
    $("#adminNavbar").hide();
    $("#adminFooter").hide();
  }

  login(loginData:Login){
    this.b=false;
    if(loginData.username==="Tiger_realestate"){
      if(loginData.password==="realestate_Tiger123"){
        localStorage.setItem("adminUsername",loginData.username);
        this.router.navigate(['/dashboard']);
      }
    }
    else{
      this.b=true;
    }
  }
    
    show(){
      $("#password").password('toggle');
    }

}
