import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';

@Injectable()
export class AdminHomeService{
   
    constructor(private http:Http,private router:Router){
    }
    
    checkCredentials(){
        if(localStorage.getItem("adminUsername")==null){
            this.router.navigate(['/adminLogin']);
        }
    }

	private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
     }

}