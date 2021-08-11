import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css'],
})
export class StorageComponent implements OnInit {
  name: any = '';
  localStorageVal: any = '';
  localStorageObjVal:any='';

  objName: any = '';
  objSurname: any = '';
  objAge: any = '';

  constructor() {}

  ngOnInit(): void {}

  setItem(value: any) {
    localStorage.setItem('name', value);
  }

  getItem() {
    this.localStorageVal = localStorage.getItem('name');
  }

  clearItem() {
    localStorage.removeItem('name');
  }

  clearAll() {
    localStorage.clear();
  }

  setObject() {
    const obj = {
      name: this.objName,
      surname: this.objSurname,
      age: this.objAge,
    };
    localStorage.setItem('object', JSON.stringify(obj))
  }

  getObect(){
    this.localStorageObjVal=localStorage.getItem('object');
  }



}
