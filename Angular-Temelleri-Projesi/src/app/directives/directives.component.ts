import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

title:any=false;
name:string="";
username:any="";

sehirler:any=[
  {
    id:1,
    name:"İstanbul",
    region:"Marmara"
  },
  {
    id:2,
    name:"Ankara",
    region:"İç Anadolu"
  },
  {
    id:3,
    name:"Antalya",
    region:"Akdeniz"
  },
  {
    id:4,
    name:"Samsun",
    region:"Karadeniz"
  },
]

renk:any="";

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(){
this.title=!this.title;
  }

}
