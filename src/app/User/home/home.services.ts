import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {Signup} from '../signup/signup';
import { SubmitDetails} from '../submitproperty/submit'

@Injectable()
export class HomeService{

    private propertyretrieveurl1="http://localhost:8080/getpropertydetail";
   
    constructor(private http:Http,private router:Router){
    }
    
    getPropertyDetail():Observable<SubmitDetails[]>{
        return this.http.get(this.propertyretrieveurl1)
          .map((response:Response) => <SubmitDetails[]> response.json())
          .catch(this.handleError);
    }

	private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
     }

}