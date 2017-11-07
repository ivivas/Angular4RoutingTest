import { NietoComponent } from './hijo/nieto/nieto.component';
import { HijoComponent } from './hijo/hijo.component';
import { PersonaComponent } from './persona.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { Nieto2Component } from './hijo/nieto2/nieto2.component';

@NgModule({
  imports: [
    CommonModule,
    PersonaRoutingModule
  ],
  declarations: [
    PersonaComponent,
    HijoComponent,
    NietoComponent,
    Nieto2Component
  ]
})
export class PersonaModule { }
