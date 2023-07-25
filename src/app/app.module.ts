import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Section3Component } from './section3/section3.component';
import { Section33Component } from './section33/section33.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Section4Component } from './section4/section4.component';
import { ParamCompteComponent } from './param-compte/param-compte.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    Section3Component,
    Section33Component,
    Section4Component,
    ParamCompteComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
