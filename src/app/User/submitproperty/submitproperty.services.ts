import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {SubmitDetails} from '../submitproperty/submit';


@Injectable()
export class SubmitPropertyService{
   
    private postPropertyUrl="http://localhost:8080/addpropertydetail/";
    data:any;

    constructor(private http:Http,private router:Router){
    }

    postPropertyDetail(sign:SubmitDetails,id:number):Observable<Response>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.post(this.postPropertyUrl+id,JSON.stringify(sign),opts);
    
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