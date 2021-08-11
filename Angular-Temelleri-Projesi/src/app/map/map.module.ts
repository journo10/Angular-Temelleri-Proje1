import { MapService } from './../services/map.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city/city.component';
import { RegionComponent } from './region/region.component';
import { PlakaComponent } from './plaka/plaka.component';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes= [
  {path:'',
  component:MapComponent} 
]

@NgModule({
  declarations: [
    CityComponent,
    RegionComponent,
    PlakaComponent,
    MapComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule
  ],
  providers:[MapService]
})
export class MapModule { }
