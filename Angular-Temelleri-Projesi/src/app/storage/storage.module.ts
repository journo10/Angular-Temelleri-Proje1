import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from './storage/storage.component';
import { CookieComponent } from './cookie/cookie.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes= [
  {path:'',
   children:[
    {path:'local-storage',
    component: StorageComponent},
    {path:'cookie',
    component:CookieComponent},
    {path:'',
     redirectTo:'local-storage',
    pathMatch:'full'},
   ]}
]

@NgModule({
  declarations: [
    StorageComponent,
    CookieComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule
  ]
})
export class StorageModule { }
