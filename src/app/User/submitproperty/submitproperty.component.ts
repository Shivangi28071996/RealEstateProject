import { Component,EventEmitter,Output} from '@angular/core';
import {SubmitDetails}from './submit'
import {SubmitPropertyService} from './submitproperty.services';
import {Signup} from '../signup/signup'
import{Router} from '@angular/router';

import { ImageResult, ResizeOptions } from 'ng2-imageupload'; 


declare var $: any;

@Component({
  selector: 'app-submitproperty',
  templateUrl: './submitproperty.component.html',
  styleUrls: ['./submitproperty.component.css'],
  providers:[SubmitPropertyService]
})
export class SubmitpropertyComponent{
sign:Signup;
j:boolean;
prop:SubmitDetails;
newProperty:SubmitDetails;
fullDetail:SubmitDetails[];
display:boolean=true;
id:number;
popup:boolean;
detail:Signup[]=[];
imageName:String;
imageType:String;
dataurl=[];
src: string = "";

  constructor(private service:SubmitPropertyService,private router:Router) {
    
}
  ngOnInit(){
    this.id=this.service.checkcredentials();
    // this.service.getpropertyDetail().subscribe(t => { this.fullDetail=t});
  }

  ngAfterViewChecked() {

    $('.alpha_bet').keypress(function(key) {
        if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode!=32) && (key.charCode!=45) ) return false;
    });

    $('.mobileNo').keypress(function(key) {
        if(key.charCode < 48 || key.charCode > 57) return false;
    });

  }


newSub(propertyDetail:SubmitDetails){
  this.popup=true;
  propertyDetail.propertyStat="ACTIVE";
  propertyDetail.imageName=this.imageName;
  propertyDetail.imageType=this.imageType;
  
  this.newProperty=new SubmitDetails(propertyDetail.title.toUpperCase(),propertyDetail.propStatus,propertyDetail.type,propertyDetail.price,propertyDetail.area,propertyDetail.rooms,propertyDetail.bathroom,propertyDetail.address.toUpperCase(),propertyDetail.postalcode,propertyDetail.info.toUpperCase(),propertyDetail.username,propertyDetail.email,propertyDetail.phone,propertyDetail.parking,propertyDetail.ac,propertyDetail.imageName,propertyDetail.imageType,
   propertyDetail.balcony,propertyDetail.pool,propertyDetail.storage,propertyDetail.gaspipe,propertyDetail.alarm,propertyDetail.pooja,propertyDetail.laundry,propertyDetail.city,propertyDetail.state,propertyDetail.buildingage,propertyDetail.floor,propertyDetail.noofparking,propertyDetail.furnished,propertyDetail.view,propertyDetail.location.toUpperCase(),propertyDetail.propertyStat,this.dataurl[1]);

  
}

submitProperty(){

  this.newProperty.propertyStat="ACTIVE";
  
  this.prop=new SubmitDetails(this.newProperty.title.toUpperCase(),this.newProperty.propStatus,this.newProperty.type,this.newProperty.price,this.newProperty.area,this.newProperty.rooms,this.newProperty.bathroom,this.newProperty.address.toUpperCase(),this.newProperty.postalcode,this.newProperty.info.toUpperCase(),this.newProperty.username,this.newProperty.email,this.newProperty.phone,this.newProperty.parking,this.newProperty.ac,this.newProperty.imageName,this.newProperty.imageType,
    this.newProperty.balcony,this.newProperty.pool,this.newProperty.storage,this.newProperty.gaspipe,this.newProperty.alarm,this.newProperty.pooja,this.newProperty.laundry,this.newProperty.city,this.newProperty.state,this.newProperty.buildingage,this.newProperty.floor,this.newProperty.noofparking,this.newProperty.furnished,this.newProperty.view,this.newProperty.location.toUpperCase(),this.newProperty.propertyStat,this.dataurl[1]);
    
  this.service.postPropertyDetail(this.prop,this.id).subscribe(t => {this.ngOnInit();});
  this.router.navigate(['/seller']);

}
checkType(type){
  this.display=true;
  if(type=="Garage" || type=="Agriculture Plot" || type=="Commercial Plot"){
    this.display=false;

  }
  

}
// resizeOptions: ResizeOptions = {
//     resizeMaxHeight: 130,
//     resizeMaxWidth: 130
// };

selected(imageResult: ImageResult) {
  
  var imagen=imageResult.file.name;
  var imagename=imagen.split(".");
  this.imageName=imagename[0];
   this.imageType=imagename[1];
        this.src = imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL;
        this.dataurl=this.src.split(',');
}
}

