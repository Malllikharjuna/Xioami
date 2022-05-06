import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array <any> = [
    {
      "id" : 1,
      "Type" : "Big House",
      "Price" : 50000,
      "Name" : "Kajal's House"
    },
    {
      "id" : 2,
      "Type" : "Villa",
      "Price" : 70000,
      "Name" : "Thammana's Villa"
    },
    {
      "id" : 3,
      "Type" : "Small House",
      "Price" : 30000,
      "Name" : "Mallikharjuna's House"
    },
    {
      "id" : 4,
      "Type" : "House",
      "Price" : 50000,
      "Name" : "Prabas House"
    },
    {
      "id" : 5,
      "Type" : "Guest House",
      "Price" : 60000,
      "Name" : "Rasmika Guest House"
    },
    {
      "id" : 6,
      "Type" : "House",
      "Price" : 40000,
      "Name" : "Priya House"
    },
    {
      "id" : 7,
      "Type" : "House",
      "Price" : 0,
      "Name" : "Klaa House"
    },
    {
      "id" : 8,
      "Type" : "House",
      "Price" : 50000,
      "Name" : "Hello House"
    },
    {
      "id" : 9,
      "Type" : "House",
      "Price" : 50000,
      "Name" : "Mallikharjuna House"
    },
    {
      "id" : 10,
      "Type" : "House",
      "Price" : 50000,
      "Name" : "Mallikharjuna House"
    },
    {
      "id" : 11,
      "Type" : "House",
      "Price" : 50000,
      "Name" : "Mallikharjuna House"
    },
    {
      "id" : 12,
      "Type" : "House",
      "Price" : 50000,
      "Name" : "Mallikharjuna House"
    },
]
  constructor() { }

  ngOnInit(): void {
  }

}
