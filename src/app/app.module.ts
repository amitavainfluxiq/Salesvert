import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DemoMaterialModule} from '../app/material-module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{ ReactiveFormsModule, FormsModule} from '@angular/forms';
import { PlatformFeaturesComponent } from './platform-features/platform-features.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ContactusComponent } from './contactus/contactus.component'
import { from } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PlatformFeaturesComponent,
    OurteamComponent,
    ContactusComponent
  ],
  imports: [
    DemoMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
