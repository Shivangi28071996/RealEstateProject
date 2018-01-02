import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare var $:any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: 'user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
  { path: 'table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
  { path: 'maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
  { path: 'notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

     constructor(public location: Location) {}
     menuItems: any[];
    ngOnInit(){
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      $("#adminNavbar").hide();
      $("#adminFooter").hide();
    }

    isMap(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
        return false;
      }
      else {
        return true;
      }
    }

    
}

