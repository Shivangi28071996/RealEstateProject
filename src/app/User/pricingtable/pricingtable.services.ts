import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';


@Injectable()
export class PricingTableService{

    constructor(private http:Http,private router:Router){
    }

    pricingnavigate(){
        if(localStorage.getItem("user")==null){
            this.router.navigate(['/Login']);
        }
        else{
            this.router.navigate(['/payment'])
        }
    }

	private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
     }

}