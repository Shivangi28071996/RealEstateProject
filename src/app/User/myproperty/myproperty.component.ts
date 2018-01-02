import { Component, OnInit } from '@angular/core';
import {SubmitDetails} from '../submitproperty/submit'
import {MyPropertyService} from './myproperty.services'
import {Signup} from '../signup/signup'
import { ImageResult, ResizeOptions } from 'ng2-imageupload'; 

declare var $: any;

@Component({
  selector: 'app-myproperty',
  templateUrl: './myproperty.component.html',
  styleUrls: ['./myproperty.component.css'],
  providers:[MyPropertyService]
})
export class MypropertyComponent implements OnInit {
   iproperty:SubmitDetails[]=[];
   iproperty1:SubmitDetails;
  sign:Signup;
   a:any;
  iproperty2:SubmitDetails[]=[];
  submitted:boolean;
  deleted:boolean;
  id:number=0;
  userId:number;
display:boolean;
deactivate:boolean;
displayProperty:boolean;
imageName:String;
imageType:String;
dataurl=[];
src: string = "";
updateProperty:SubmitDetails;

     constructor(private service:MyPropertyService) {
      
      }
  
   ngOnInit():void{

    this.userId=this.service.checkcredentials();
   this.service.getPropertyDetail()
   .subscribe(l1=>{
      this.iproperty=l1;
      this.propertydetail();
    }); 


     }

     ngAfterViewChecked() {
  
      $('.alpha_bet').keypress(function(key) {
          if((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode!=32) && (key.charCode!=45) ) return false;
      });
  
      $('.mobileNo').keypress(function(key) {
          if(key.charCode < 48 || key.charCode > 57) return false;
      });
  
    }

    displayPropertyDetail(id){
      localStorage.setItem("propertyId",id);
    }

  propertydetail(){
   
    var j=0;
    for(var i=0;i<this.iproperty.length;i++){
      if(this.iproperty[i].pd.id==this.userId){
        this.iproperty2[j]=this.iproperty[i];
        j++;
      }    
    }
    this.displayProperty=true;
  }
  
  edit1(x:number){
  for(var i=0;i<this.iproperty2.length;i++)
    {
      
      if(this.iproperty2[i].propId==x)
      {    
        this.display=true;
        this.iproperty1=this.iproperty2[i];
        
      }
    }
  this.a=1;
  }

  propertyType(){
    if(this.iproperty1.type==="Garage" || this.iproperty1.type==="Agriculture Plot" || this.iproperty1.type==="Commercial Plot"){
      this.display=false;
    }
    else{
      this.display=true;
    }
  }
  
  edit(y:SubmitDetails){
    this.deleted=false;

    if(this.src!=null){
 this.updateProperty=new SubmitDetails(y.title.toUpperCase(),y.propStatus,y.type,y.price,y.area,y.rooms,y.bathroom,y.address.toUpperCase(),y.postalcode,y.info.toUpperCase(),y.username,y.email,y.phone,y.parking,y.ac,this.imageName,this.imageType,
  y.balcony,y.pool,y.storage,y.gaspipe,y.alarm,y.pooja,y.laundry,y.city,y.state,y.buildingage,y.floor,y.noofparking,y.furnished,y.view,y.location.toUpperCase(),y.propertyStat,this.dataurl[1])
    }

    else{
      this.updateProperty=new SubmitDetails(y.title.toUpperCase(),y.propStatus,y.type,y.price,y.area,y.rooms,y.bathroom,y.address.toUpperCase(),y.postalcode,y.info.toUpperCase(),y.username,y.email,y.phone,y.parking,y.ac,this.iproperty1.imageName,this.iproperty1.imageType,
      y.balcony,y.pool,y.storage,y.gaspipe,y.alarm,y.pooja,y.laundry,y.city,y.state,y.buildingage,y.floor,y.noofparking,y.furnished,y.view,y.location.toUpperCase(),y.propertyStat,this.dataurl[1])      
    }

  this.service.updatePropertyDetail(this.updateProperty,this.iproperty1.propId).subscribe(t => {this.ngOnInit()});
  
  this.submitted=true;
  }

  delete1(id){
    this.id=id;
  }
  
  delete(id){
    this.deactivate=false;
    for(var i=0;i<this.iproperty2.length;i++){
      if(this.iproperty2[i].propId===id){
        if(this.iproperty2[i].propertyStat=="ACTIVE"){
          this.deactivate=true;
       this.service.deletedetail(id).subscribe(t => {this.ngOnInit();});
      }
      else if(this.iproperty2[i].propertyStat=="DEACTIVE"){
        this.deactivate=false;
        this.service.enabledetail(id).subscribe(t => {this.ngOnInit();});
      }
    }
  }
  
}

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
