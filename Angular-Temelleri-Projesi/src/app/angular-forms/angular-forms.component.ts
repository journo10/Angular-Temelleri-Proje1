import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {

  constructor() { }
  registerForm:any=FormGroup;
  user={
    username:"AKİF",
    age:0
  }

  ngOnInit(): void {
    this.resetForm();
  }

  save(event:any){
    this.user=event.value
    console.log("Kayıt Edilen Kişi:",this.user)

  }

  resetForm(){
   this.registerForm = new FormGroup({
      username: new FormControl(this.user? this.user.username: "", {
        validators:[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ]
      }),
      age: new FormControl(this.user?this.user.age:0),
    });
  }

}
