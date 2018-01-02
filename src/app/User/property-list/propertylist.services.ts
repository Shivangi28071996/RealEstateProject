import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {SubmitDetails} from '../submitproperty/submit';


@Injectable()
export class PropertyListService{
   
    private propertyDetailRetrieveUrl="http://localhost:8080/getpropertydetail";
    data:any;
    constructor(private http:Http,private router:Router){
    }

    getPropertyDetail():Observable<SubmitDetails[]>{
        return this.http.get(this.propertyDetailRetrieveUrl)
          .map((response:Response) => <SubmitDetails[]> response.json())
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

	private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
     }

}