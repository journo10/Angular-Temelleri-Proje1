import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() data:any="";
  @Output() resetForm: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  enitForm(event: any){
    this.resetForm.emit(event)
  }

  alertSth(){
    alert("CHİLD COMPANENT'İ TETİKLEDİNİZ...")
    this.data={
       name:"tetiklendi",
       status:true

    }
  }

}
