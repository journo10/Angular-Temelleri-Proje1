import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding.component';



const routes:Routes= [
  {path:'',
  component: DataBindingComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes),FormsModule]
})
export class DataBindingModule { }
