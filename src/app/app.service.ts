import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {table_data} from './Admin/tables/table';
import {Router} from '@angular/router';
import {Signup} from './User/signup/signup';
import {Login} from './User/login/login'
import{SubmitDetails} from './User/submitproperty/submit';
import {Home} from './User/home/home';
import {Contact} from './User/contact/contact';


@Injectable()
export class AppService{
	private get_user_url='http://localhost:8080/getpersonaldetail';
    private post_user_url = 'http://localhost:8080/addpersonaldetail';
    private update_user_url='http://localhost:8080/updateldetail/';
    private del_user_url='http://localhost:8080/deletedetail/';
    private url="http://localhost:8080/addpersonaldetail";
    private retrieveurl="http://localhost:8080/getpersonaldetail";
    private retrieveurl1="http://localhost:8080/getpropertydetail";
    private otpurl="http://localhost:8080/otp";
    private forgetpasswordurl="http://localhost:8080/Forgetpassword";
    
    data:any;

	constructor(private http:Http,private router:Router){
    }
    
    // getPersonalDetail():Observable<Signup[]>{
    //     return this.http.get(this.retrieveurl)
    //       .map((response:Response) => <Response> response.json())
    //       .catch(this.handleError);
    // }
    
    // getPropertyDetail1():Observable<SubmitDetails[]>{
    //     return this.http.get(this.retrieveurl1)
    //       .map((response:Response) => <SubmitDetails[]> response.json())
    //       .catch(this.handleError);
    // }
    
    // get(id:number):Observable<Signup>{
    //     return this.getdetail().map(user=>user.find(u=>u.id===id))
    // }
    // getLocation(location:String):Observable<SubmitDetails>{
    //     return this.getdetail1().map(user=>user.find(u=>u.location===location))
    // }
    
    // getproperty(id:number):Observable<SubmitDetails>{
    //     return this.getdetail1().map(user=>user.find(u=>u.propId===id))
    // }
    
    post(sign:Signup):Observable<Response>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.post(this.url,JSON.stringify(sign),opts)
        .map(() => null)
        .catch(this.handleError);
    }
    
    post1(sign:SubmitDetails,id:number):Observable<Response>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.post("http://localhost:8080/addpropertydetail/"+id,JSON.stringify(sign),opts);
    
    }
    
    
    
    // loggedin(l):Observable<Response>{
    //     let headers=new Headers({'Content-Type':'application/json'});
    //     let opts=new RequestOptions({headers:headers});
    //     return this.http.post("http://localhost:8080/logindata",JSON.stringify(l),opts)
    //             .map( (res:Response) => res)
    //             .catch(this.handleError);
    // }
    callotp(signdata:Signup):Observable<Response>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.post(this.otpurl,JSON.stringify(signdata),opts);
    
    }
    forgetpassword(data:Signup):Observable<Response>{
        let headers=new Headers({'Content-Type':'application/json'});
        let opts=new RequestOptions({headers:headers});
        return this.http.post(this.forgetpasswordurl,JSON.stringify(data),opts);
    
    }
    // logout(){
    //     localStorage.removeItem("user");
    //     this.router.navigate(['/Login']);
    // }
    
    // checkcredentials(){
    //     if(localStorage.getItem("user")==null){
    //         this.router.navigate(['/Login']);
    //     }
    //     else{
    //         this.data=localStorage.getItem("user");
    //         return this.data;
    //     }
    // }
    
    // pricingnavigate(){
    //     if(localStorage.getItem("user")==null){
    //         this.router.navigate(['/Login']);
    //     }
    //     else{
    //         this.router.navigate(['/payment'])
    //     }
    // }
    
    // update(password:Signup,id:number):Observable<Signup>{
    //     let headers=new Headers({'Content-Type':'application/json'});
    //     let opts=new RequestOptions({headers:headers});
    //     return this.http.put("http://localhost:8080/updatepassword/"+id.toString(),JSON.stringify(password),opts)
    //     //.map(this.extractData)
    //     .catch(this.handleError);
    //    }

    //    update1(property:SubmitDetails,id):Observable<SubmitDetails>{
    //     let headers=new Headers({'Content-Type':'application/json'});
    //     let opts=new RequestOptions({headers:headers});
    //     return this.http.put("http://localhost:8080/updatepropertydetail/"+id.toString(),JSON.stringify(property),opts)
    //     //.map(this.extractData)
    //     .catch(this.handleError);
    //    }
    
    //    deletedetail(prop:number){
    //        return this.http.delete("http://localhost:8080/deletepropertydetail/"+prop)
    //             .map(() => null)
    //             .catch(this.handleError);
    //    }
    //    enabledetail(prop:number){
    //     return this.http.delete("http://localhost:8080/enablepropertydetail/"+prop.toString())
    //          .map(() => null)
    //          .catch(this.handleError);
    // }
    
    private handleError(error:Response){
          console.error(error);
          return Observable.throw(error.json().error());
          
       }

	// getUsers():Observable<any[]>{
	// 	return this._http.get(this.get_user_url)
	// 	.map((response: Response) => <any[]> response.json())
	// 	.do(data => console.log(JSON.stringify(data)))
    //   .catch(this.handleError);
    // }
    
    // postData(ref:table_data):Observable<table_data>
    // {
    //     let headers = new Headers({"Content-Type":"application/json"});
    //     let opts = new RequestOptions({headers: headers});
    //     return (this._http.post(this.post_user_url,JSON.stringify(ref), opts)
    //             .map((res:Response) => console.log(res))
    //             .catch(this.handleError));
    // }

    // // getby(ref:number):Observable<any>{
    // //    return this.getUsers().map(user=>user.find(u =>u.id===ref));
    // // }

    // updateData(personaldetails:table_data):Observable<Response>{
    //     let headers = new Headers({"Content-Type":"application/json"});
    //     let opts = new RequestOptions({headers: headers});
    //     return this._http.put(this.update_user_url+personaldetails.id.toString(),JSON.stringify(personaldetails),opts)
    //     .map((res:Response) => console.log(res))
    //     .catch(this.handleError);
    // }

    // Deleteby(id:number):Observable<any[]>{
    //     console.log(id);
    //     return (this._http.delete(this.del_user_url+id.toString())
    //     .map(() => null)
    //     .catch(this.handleError));

    // }


    

}