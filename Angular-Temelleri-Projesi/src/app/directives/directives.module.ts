import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../cus-direct/highlight.directive';



const routes:Routes= [
  {path:'',
  component: DirectivesComponent},
]

@NgModule({
  declarations: [
    DirectivesComponent, HighlightDirective,
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule]
  
})
export class DirectivesModule { }
