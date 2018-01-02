import { Component, OnInit } from '@angular/core';
import { PropertyListService } from './propertylist.services';
import { SubmitDetails } from '../submitproperty/submit';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  providers:[PropertyListService]
})

export class PropertyListComponent implements OnInit {

  property:SubmitDetails[]=[];
  list:SubmitDetails[]=[];
  propertydetail:SubmitDetails;
location:String;
  constructor(private service:PropertyListService) { }


  ngOnInit() {
    
    this.location=localStorage.getItem("location");
  this.service.getPropertyDetail()
  .subscribe(t => {
    this.property=t;
    this.getPropertyList();
  });
     
}

// ngOnDestroy(){
//   localStorage.removeItem("location");
// }

check(){
  this.service.checkcredentials();
}

displayProperty(id){
  localStorage.setItem("propertyId",id);
}

getPropertyList(){

  var j=0;
  for(var i=0;i<this.property.length;i++){
    if(this.property[i].location == this.location){
      if(this.property[i].propertyStat==="ACTIVE"){
        this.list[j]=this.property[i];
        j++;
      }
  }
}
}
}

