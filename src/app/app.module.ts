import { PaisModule } from './shared/vista-principal/features/pais/components/pais/pais.module';
import { PersonaModule } from './shared/vista-principal/features/persona/components/persona/persona.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { VistaPrincipalComponent } from './shared/vista-principal/vista-principal.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VistaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    PersonaModule,
    PaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
