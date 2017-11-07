import { RegionComponent } from './region/region.component';
import { PaisComponent } from './pais.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const paisRoutes: Routes = [
  {
    path: 'pais',
    component: PaisComponent,
    children: [
      {
        path: 'region',
        component: RegionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(paisRoutes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }
