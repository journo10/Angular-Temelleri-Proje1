import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UserComponent },

  {
    path: ':id',
    component: UserComponent,
    children: [
      { path: 'details', component: UserDetailsComponent },

      { path: 'role', component: UserRoleComponent },

      { path: '', redirectTo: 'details', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [UserComponent, UserDetailsComponent, UserRoleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserModule {}
