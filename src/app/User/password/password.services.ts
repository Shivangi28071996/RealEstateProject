import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {Signup} from '../signup/signup';


@Injectable()
export class PasswordService{
   
    private personalDetailRetrieveUrl="http://localhost:8080/getpersonaldetail";
    private updatePasswordUrl="http://localhost:8080/updatepassword/";
    data:any;

    constructor(private http:Http,private router:Router){
    }

    getPersonalDetail():Observable<Signup[]>{
        return this.http.get(this.personalDetailRetrieveUrl)
          .map((response:Response) => <Response> response.json())
          .catch(this.handleError);
    }

    checkcredentials(){
        
     
         if(localStorage.getItem("user")==null){
             this.router.navigate(['/Login']);
         }
         else{
             this.data=localStorage.getItem("user");
             return this.data;
         }
         
     }

     updatePassword(password:Signup,id:number):Observable<Signup>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.put(this.updatePasswordUrl+id.toString(),JSON.stringify(password),opts)
        //.map(this.extractData)
        .catch(this.handleError);
       }

	private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
     }

}