import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {Signup} from '../signup/signup';


@Injectable()
export class ForgotPasswordService{
   
    private retrieveurl="http://localhost:8080/getpersonaldetail";
    private forgetpasswordurl="http://localhost:8080/Forgetpassword";
    private updatepasswordurl="http://localhost:8080/updatepassword/";

    constructor(private http:Http,private router:Router){
    }
    getPersonalDetail():Observable<Signup[]>{
        return this.http.get(this.retrieveurl)
          .map((response:Response) => <Response> response.json())
          .catch(this.handleError);
    }

    forgetpassword(data:Signup):Observable<Response>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.post(this.forgetpasswordurl,JSON.stringify(data),opts);
    
    }
    updatePassword(password:Signup,id:number):Observable<Signup>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.put(this.updatepasswordurl+id.toString(),JSON.stringify(password),opts)
        //.map(this.extractData)
        .catch(this.handleError);
       }
   

	private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
     }

}