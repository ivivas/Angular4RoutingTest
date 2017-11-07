import { Nieto2Component } from './hijo/nieto2/nieto2.component';
import { NietoComponent } from './hijo/nieto/nieto.component';
import { HijoComponent } from './hijo/hijo.component';
import { PersonaComponent } from './persona.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const personaRoutes: Routes = [
  {
    path: 'persona',
    component: PersonaComponent,
    children: [
      {
        path: 'hijo',
        component: HijoComponent,
        children: [
          {
            path: 'nieto1',
            component: NietoComponent
          },
          {
            path: 'nieto2',
            component: Nieto2Component
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(personaRoutes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
