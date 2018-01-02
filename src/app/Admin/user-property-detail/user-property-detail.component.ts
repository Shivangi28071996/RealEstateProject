import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SubmitDetails} from '../../User/submitproperty/submit';
import {Signup} from '../../User/signup/signup';
import {UserPropertyService} from './userPropertyDetail.services'

declare var $:any;

@Component({
  selector: 'app-user-property-detail',
  templateUrl: './user-property-detail.component.html',
  styleUrls: ['./user-property-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[UserPropertyService]
})
export class UserPropertyDetailComponent implements OnInit {
  iproperty:SubmitDetails;
  allpropertyDetail:SubmitDetails[]=[];
  iproperty1:SubmitDetails;
 sign:Signup;
  a:any;
 iproperty2:SubmitDetails[]=[];
 submitted:boolean;
 deleted:boolean;
 id:number=0;
 userId:number;
display:boolean=true;
deactivate:boolean;
    constructor(private service:UserPropertyService) {
     
     }
 
  ngOnInit():void{
    $("#userNavbar").hide();
    $("#adminNavbar").show();
    $("#adminFooter").show();
  this.service.getPropertyDetail()
  .subscribe(l1=>{
     this.allpropertyDetail=l1;
   }); 


    }


 edit1(x:number){
   var size=this.allpropertyDetail.length
 for(var i=0;i<size;i++)
   {
     
     if(this.allpropertyDetail[i].propId==x)
     {    
       this.display=true;
       this.iproperty1=this.allpropertyDetail[i];
       
     }
   }
 this.a=1;
 }

 propertyType(){
   this.display=false;
   if(this.iproperty1.type=="Garage" || this.iproperty1.type=="Agriculture Plot" || this.iproperty1.type=="Commercial Plot"){
     this.display=false;
   }
   else{
     this.display=true;
   }
 }
 
 edit(y){
   this.deleted=false;
 

 this.service.updatePropertyDetail(y,this.iproperty1.propId).subscribe(t => {this.ngOnInit()});
 
 this.submitted=true;
 }

 delete1(id){
   this.id=id;
 }
 
 delete(id){
  var size=this.allpropertyDetail.length
   this.deactivate=false;
  for(var i=0;i<size;i++){
     if(this.allpropertyDetail[i].propId===id){
       if(this.allpropertyDetail[i].propertyStat=="ACTIVE"){
         this.deactivate=true;
      this.service.deletedetail(id).subscribe(t => {this.ngOnInit();});
     }
     else if(this.allpropertyDetail[i].propertyStat=="DEACTIVE"){
       this.deactivate=false;
       this.service.enabledetail(id).subscribe(t => {this.ngOnInit();});
     }
   }
 }

 
}
}
