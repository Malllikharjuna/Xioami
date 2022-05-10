import { Component, OnInit } from '@angular/core';
import { RealserviceService } from 'src/services/realservice.service';
import { IProperty } from '../IPropery.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  'properties': Array<IProperty>;
  constructor(private Hello:RealserviceService) { }

  ngOnInit(): void {
  this.Hello.getAllProperties().subscribe(
      data=>{
      this.properties = data;
      }, error => {
        console.log('httperror:');
        console.log(error)
      }
    )
  }
}
