import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

user={
  name:"Ceyhun",
  surname:"Yıldırım",
  job:"Gazeteci",
  imageUrl:"https://img.fanatik.com.tr/img/78/740x418/5fe8b70166a97c3dac04aed5.jpg",
  hobi:"Futbol",
  isEditable:false
}
 
type="text";

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    alert("Tıklandı!!!");
  }

  submit(value:any){
    alert(value.target.value + " tamamlandı...");

  }

}
