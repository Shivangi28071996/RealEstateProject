import { Component, OnInit } from '@angular/core';
import {Signup} from './signup';
import {SignupService} from './signup.services'
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[SignupService]
})
export class SignupComponent implements OnInit {
  flag:boolean=false;
  signdata:Signup;
  message:string;
  i:number;
  valid:boolean;
  l1:Signup[]=[];
  a:boolean;
  b:boolean;
  otpvalue:String;
  otpmsg:boolean;
submit:boolean;
otp:boolean;
constructor(private service:SignupService,private router:Router) { }

  ngOnInit() {
    this.service.getPersonalDetail()
    .subscribe(l1=>{
      this.l1=l1
    });
  }

  ngAfterViewChecked() {

    $('.alpha_bet').keypress(function(key) {
        if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode!=32) && (key.charCode!=45) ) return false;
    });

    $('.mobileNo').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });

  }

  signup(f:Signup, y:String,z:String){
    if(f.password===z){
      this.a=false;
      this.b=false;
      this.submit=this.checkPassword(f.password,z);
      this.signdata= new Signup(f.fullname.toUpperCase(),f.email,f.password,y,f.phone,f.username,"ACTIVE");
      if(this.submit==true){
        this.otp=true;
      this.service.callotp(this.signdata).subscribe(t=>{
      this.otpvalue=t.text();
      setTimeout
    });
      setTimeout(()=>{    
        this.otp = false;
   },600000);
      }
    }
   else{
     this.a=true;
   }
  }

  checkPassword(password,confirmPassword){
      if(password!=confirmPassword){
        this.a=true;
        return false;
      }
      else{
        this.a=false;
        return true;
      }

  }
checkUsername(a){
  this.b=false;
  for(var i=0;i<this.l1.length;i++){
    if(this.l1[i].username==a){
      this.b=true;
    }    
  }
}
Otpverify(otp){
  if(this.otpvalue==otp){
      this.service.postPersonalDetail(this.signdata).subscribe(t =>{this.ngOnInit();});
      this.router.navigate(['/Login']);
  }
else{
 this.otpmsg=true;
}
}

show(){
  $("#password").password('toggle');
  $("#password1").password('toggle');
}

}

