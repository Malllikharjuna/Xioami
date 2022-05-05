import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  Property: any = {
    "id" : 1,
    "Type" : "House",
    "Price" : 50000,
    "Name" : "Mallikharjuna House"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
