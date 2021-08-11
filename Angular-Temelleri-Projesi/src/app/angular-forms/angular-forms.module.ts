import { AngularFormsComponent } from './angular-forms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
{path:'',
component:AngularFormsComponent}
]

@NgModule({
  declarations: [AngularFormsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule, ReactiveFormsModule]
})
export class AngularFormsModule { }
