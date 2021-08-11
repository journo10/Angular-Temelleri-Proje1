import { AuthChildGuard } from './../quard/auth-child.guard';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { HomeRoleComponent } from './home-role/home-role.component';


const routes:Routes= [

  {path:'',
  component:HomeComponent},

  {path:':id',
  component:HomeComponent,
  children:[
    {path:'details',
    component:HomeDetailsComponent},
    {path:'role',
    component:HomeRoleComponent},

    // {path:'',
    // redirectTo:'details',pathMatch:'full'}
    
  ],
  canActivateChild:[AuthChildGuard]
}

]


@NgModule({
  declarations: [HomeComponent, HomeDetailsComponent, HomeRoleComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
