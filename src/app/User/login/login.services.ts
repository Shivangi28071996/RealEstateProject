import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';

@Injectable()
export class LoginService{

    private loginurl="http://localhost:8080/logindata";
   
    constructor(private http:Http,private router:Router){
    }
    
    loggedin(l):Observable<Response>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.post(this.loginurl,JSON.stringify(l),opts)
                .map( (res:Response) => res)
                .catch(this.handleError);
    }

	private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
     }

}