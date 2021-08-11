import { MapService } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plaka',
  templateUrl: './plaka.component.html',
  styleUrls: ['./plaka.component.css']
})
export class PlakaComponent implements OnInit {
  plakaData:any;
  constructor(private service:MapService) { }

  ngOnInit(): void {
    this.plakaData=this.service.getCityPlakas();
  }

}
