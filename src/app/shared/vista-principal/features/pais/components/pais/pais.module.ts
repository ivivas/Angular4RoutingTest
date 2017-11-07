import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { PaisComponent } from './pais.component';
import { RegionComponent } from './region/region.component';

@NgModule({
  imports: [
    CommonModule,
    PaisRoutingModule,
  ],
  declarations: [
    PaisComponent,
    RegionComponent
  ]
})
export class PaisModule { }
