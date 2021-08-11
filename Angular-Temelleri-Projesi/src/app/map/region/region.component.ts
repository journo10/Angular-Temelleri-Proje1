import { MapService } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  regionData:any;
  constructor(private service:MapService) { }

  ngOnInit(): void {
    this.regionData=this.service.getCityRegions()
  }

}
