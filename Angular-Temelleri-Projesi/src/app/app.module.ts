import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    NavbarComponent,
    SidebarComponent,
  
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
