import { MapService } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private service:MapService) { }

  ngOnInit(): void {

  }
  kaydet(form:NgForm){
    this.service.save(form.value)
  }

}
