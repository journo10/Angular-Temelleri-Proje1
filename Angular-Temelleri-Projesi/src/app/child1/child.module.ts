import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1.component';



@NgModule({
  declarations: [Child1Component],
  imports: [CommonModule,FormsModule],
  exports: [Child1Component],
})
export class ChildModule { }
