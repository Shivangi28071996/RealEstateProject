import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {SubmitDetails} from '../submitproperty/submit';

@Injectable()
export class MyPropertyService{

    private propertyDetailRetrieveUrl="http://localhost:8080/getpropertydetail";
    private updatePropertyUrl="http://localhost:8080/updatepropertydetail/";
    private deletePropertyDetailUrl="http://localhost:8080/deletepropertydetail/"
    private enablePropertyDetailUrl="http://localhost:8080/enablepropertydetail/";
    data:any;
    
    constructor(private http:Http,private router:Router){
    }
    
    getPropertyDetail():Observable<SubmitDetails[]>{
        return this.http.get(this.propertyDetailRetrieveUrl)
          .map((response:Response) => <SubmitDetails[]> response.json())
          .catch(this.handleError);
    }

    updatePropertyDetail(property:SubmitDetails,id):Observable<SubmitDetails>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.put(this.updatePropertyUrl+id.toString(),JSON.stringify(property),opts)
        //.map(this.extractData)
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
    
    deletedetail(prop:number){
           return this.http.delete(this.deletePropertyDetailUrl+prop)
                .map(() => null)
                .catch(this.handleError);
       }

    enabledetail(prop:number){
        return this.http.delete(this.enablePropertyDetailUrl+prop.toString())
             .map(() => null)
             .catch(this.handleError);
    }

	private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
     }

}