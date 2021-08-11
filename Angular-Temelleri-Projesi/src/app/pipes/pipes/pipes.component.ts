import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  title:any="kIz KUlEsI iSTanBulDAdır"

  today:any;

  cash:number=2000;

  cities:any=[
    "istanbul","izmir","Ankara","Edirne","Mersin","Antalya","Samsun"
  ]

  cityName:string="istanbul"

  percentVal:number=100;

  parabirimi:number=556554.350;

  objVal:object={
    foo:"bar",
    baz:"qux",
    mested:{xyz:3,numbers:[1,2,3,4,5]}
  }

  titleiharfiicin:any;
  constructor() { }

  ngOnInit(): void {
    this.today=new Date().toDateString();
    this.titleiharfiicin= (this.title  as any ).toLocaleUpperCase("tr-TR");
  }

}
