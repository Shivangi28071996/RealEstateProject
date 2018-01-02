import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-admin-log-out',
  templateUrl: './admin-log-out.component.html',
  styleUrls: ['./admin-log-out.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminLogOutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.removeItem("adminUsername");
    this.router.navigate(['/adminLogin']);

  }

}
