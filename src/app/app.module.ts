import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { Ang7Component } from './ang7/ang7.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LandingComponent } from './landing/landing.component';
import { ParticleComponent } from './particle/particle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    GridComponent,
    Ang7Component,
    FormsComponent,
    SidenavComponent,
    LandingComponent,
    ParticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
