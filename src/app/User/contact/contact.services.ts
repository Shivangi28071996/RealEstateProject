import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {Contact} from './contact';


@Injectable()
export class ContactService{
   
    private contactUrl="http://localhost:8080/contactForm";

    constructor(private http:Http,private router:Router){
    }

    postContactForm(contactForm:Contact):Observable<Response>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.post(this.contactUrl,JSON.stringify(contactForm),opts)
        .map(() => null)
        .catch(this.handleError);
    }

	private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
     }

}