import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {table_data} from './table';
import {Router} from '@angular/router';
import {Signup} from '../../User/signup/signup';

@Injectable()
export class TableService{
	private getUserUrl='http://localhost:8080/getpersonaldetail';
    private updateUserUrl="http://localhost:8080/updatepassword/";
    private deleteUserUrl='http://localhost:8080/deletedetail/';
    private enableUserUrl='http://localhost:8080/enabledetail/';
    
    data:any;

	constructor(private _http:Http,private router:Router){
    }

    getUsers():Observable<any[]>{
		return this._http.get(this.getUserUrl)
		.map((response: Response) => <any[]> response.json())
      .catch(this.handleError);
    }
    
    // postData(ref:table_data):Observable<table_data>
    // {
    //     let headers = new Headers({"Content-Type":"application/json"});
    //     let opts = new RequestOptions({headers: headers});
    //     return (this._http.post(this.post_user_url,JSON.stringify(ref), opts)
    //             .map((res:Response) => console.log(res))
    //             .catch(this.handleError));
    // }

    getby(id:number):Observable<Signup>{
       return this.getUsers().map(user=>user.find(u =>u.id===id));
    }

    updateData(data:Signup,id:number):Observable<Signup>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this._http.put(this.updateUserUrl+id.toString(),JSON.stringify(data),opts)
        //.map(this.extractData)
        .catch(this.handleError);
       }

    Deleteby(id:number):Observable<any[]>{
        console.log(id);
        return this._http.delete(this.deleteUserUrl+id.toString())
        .map(() => null)
        .catch(this.handleError);

    }
    Enableby(id:number):Observable<any[]>{
        console.log(id);
        return this._http.delete(this.enableUserUrl+id.toString())
        .map(() => null)
        .catch(this.handleError);

    }
    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error());
        
     }
}