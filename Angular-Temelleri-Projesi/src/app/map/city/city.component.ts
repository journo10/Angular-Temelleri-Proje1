import { MapService } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  citiesData:any;

  constructor(private service:MapService) {}

  ngOnInit(): void {
    this.citiesData=this.service.getCityNames();
  }


}
