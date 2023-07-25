import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section3Component } from './section3/section3.component';
import { ParamCompteComponent } from './param-compte/param-compte.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  {path: "home" , component: Section3Component},
  {path: "param-compte" , component:ParamCompteComponent},
  {path: "produits" , component:ProduitsComponent},
  {path: "add-produit" , component:AddProduitComponent},
  {path: "updateProduit/:id", component: UpdateProduitComponent}




 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
