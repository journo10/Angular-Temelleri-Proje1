import { Child1Component } from './../../child1/child1.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  @ViewChild(Child1Component) child1:any = Child1Component


  name:string="";
  successStatus:number=0;
  calculeterData:any;
  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.calculeterData={
      name:this.name,
      status:this.successStatus
    }

  }


  resetParentForm(event:any){
    alert(event)
    this.name="silindi...";
    this.successStatus=0;

  }


}
