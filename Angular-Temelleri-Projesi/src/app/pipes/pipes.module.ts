import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { RouterModule, Routes } from '@angular/router';
import { TlPipe } from '../cus-direct/custom-pipes/tl.pipe';
import { MyFilterPipe } from '../cus-direct/custom-pipes/my-filter.pipe';

const routes:Routes= [
  {path:'',
  component:PipesComponent} 
]

@NgModule({
  declarations: [
    PipesComponent,TlPipe,MyFilterPipe,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class PipesModule { }
