import { AuthExitGuard } from './quard/auth-exit.guard';
import { AuthGuard } from './quard/auth.guard';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { HomeComponent } from './home/home.component';// yanlış sayfadaki homenin importu
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  
  {path:'role',
  loadChildren: () => import('./role/role.module').then(m => m.RoleModule)},

  {path:'user',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule)},

  {path:'data-binding',
  loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule )},

  {path:'storage',
  loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule ),
  canActivate:[AuthGuard]
},

  {path:'directives',
  loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule ),
  canDeactivate:[AuthExitGuard]
},
 
  {path:'pipes',
  loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesModule )},

  {path:'parents',
  loadChildren: () => import('./parents/parents.module').then(m => m.ParentsModule )},

  {path:'angular-forms',
  loadChildren: () => import('./angular-forms/angular-forms.module').then(m => m.AngularFormsModule )},

  {path:'map',
  loadChildren: () => import('./map/map.module').then(m => m.MapModule )},

  {path:'h-http',
  loadChildren: () => import('./h-http/h-http.module').then(m => m.HHttpModule )},

  {path:'**',
  component:HomeComponent}//yanlış sayfaya girerse
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
