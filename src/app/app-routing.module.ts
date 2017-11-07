import { VistaPrincipalComponent } from './shared/vista-principal/vista-principal.component';
import { LoginComponent } from './shared/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'vista-principal', component: VistaPrincipalComponent },
  {
    path: 'vista-principal/vista-persona', component: VistaPrincipalComponent,
    loadChildren: './shared/vista-principal/features/persona/components/persona/persona.module#PersonaModule',
    data: { preload: true }
  },
  {
    path: 'vista-principal/vista-pais', component: VistaPrincipalComponent,
    loadChildren: './shared/vista-principal/features/pais/components/pais/pais.module#PaisModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
