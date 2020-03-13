import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router'; //rounter - 1

import { AppComponent }  from './app.component';

//import rounting pages rounter-2
import {servicesComponent} from './services.component';
import {aboutusComponent} from './aboutus.component';
import {contactComponent} from './contact.component';


//rounter - 3
const rounting:Routes = [
  {path: 'servicesComponent' , component:servicesComponent},
  {path: 'aboutusComponent' , component:aboutusComponent},
  {path: 'contactComponent' , component:contactComponent}
]


//metadata
@NgModule({
  imports:      [ BrowserModule,HttpModule, RouterModule.forRoot(rounting) ],
  declarations: [ AppComponent, servicesComponent, aboutusComponent,contactComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
