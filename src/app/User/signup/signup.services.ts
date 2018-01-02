import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {Signup} from '../signup/signup';


@Injectable()
export class SignupService{
   
    private personalDetailRetrieveUrl="http://localhost:8080/getpersonaldetail";
    private otpurl="http://localhost:8080/otp";
    private postPersonalDetailurl="http://localhost:8080/addpersonaldetail";

    constructor(private http:Http,private router:Router){
    }

    getPersonalDetail():Observable<Signup[]>{
        return this.http.get(this.personalDetailRetrieveUrl)
          .map((response:Response) => <Response> response.json())
          .catch(this.handleError);
    }

    postPersonalDetail(sign:Signup):Observable<Response>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.post(this.postPersonalDetailurl,JSON.stringify(sign),opts)
        .map(() => null)
        .catch(this.handleError);
    }

    callotp(signdata:Signup):Observable<Response>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.post(this.otpurl,JSON.stringify(signdata),opts);
    
    }

	private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
     }

}