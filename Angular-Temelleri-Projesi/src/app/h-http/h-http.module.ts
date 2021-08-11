import { FormsModule } from '@angular/forms';
import { HHttpService } from './../services/h-http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HHttpComponent } from './h-http.component';

const routes:Routes= [
  {path:'',
  component:HHttpComponent} 
]

@NgModule({
  declarations: [HHttpComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule
  ],
  providers:[HHttpService]
})
export class HHttpModule { }
