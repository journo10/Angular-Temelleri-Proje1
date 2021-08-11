import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { RoleRoleComponent } from './role-role/role-role.component';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role.component';

const routes: Routes = [
  { path: '', component: RoleComponent },

  {
    path: ':id',
    component: RoleComponent,
    children: [
      { path: 'details', component: RoleDetailsComponent },

      { path: 'role', component: RoleRoleComponent },

      { path: '', redirectTo: 'details', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    RoleDetailsComponent,
    RoleRoleComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)]
})
export class RoleModule { }
