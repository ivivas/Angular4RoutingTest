import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { CountryComponent } from './features/country/components/country/country.component';
import { ListCountryComponent } from './features/country/components/list-country/list-country.component';
import { AddCountryComponent } from './features/country/components/add-country/add-country.component';
import { DetailCountryComponent } from './features/country/components/detail-country/detail-country.component';
import { EditCountryComponent } from './features/country/components/edit-country/edit-country.component';
import { PersonComponent } from './features/person/components/person/person.component';
import { ListPersonComponent } from './features/person/components/list-person/list-person.component';
import { EditPersonComponent } from './features/person/components/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CountryComponent,
    ListCountryComponent,
    AddCountryComponent,
    DetailCountryComponent,
    EditCountryComponent,
    PersonComponent,
    ListPersonComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
