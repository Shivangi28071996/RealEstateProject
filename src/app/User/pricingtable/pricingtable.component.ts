import { Component, OnInit } from '@angular/core';
import {PricingTableService} from './pricingtable.services';

@Component({
  selector: 'app-pricingtable',
  templateUrl: './pricingtable.component.html',
  styleUrls: ['./pricingtable.component.css'],
  providers:[PricingTableService]
})

export class PricingtableComponent implements OnInit {

  constructor(private service:PricingTableService) { }

  ngOnInit() { }

start(){
  this.service.pricingnavigate();
}

}
