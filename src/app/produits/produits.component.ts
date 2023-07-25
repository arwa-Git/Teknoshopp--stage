import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent  {
  produits? : Produit[];
   //un tableau de Produit

  constructor(private produitService: ProduitService ) {
    this.produits=[];
  }


  ngOnInit():void{
    this.produits = this.produitService.listeProduits();

  }
  supprimerProduit(prod :Produit){
    //console.log(prod);
    let conf=confirm("Etes-vous sur ?");
    if (conf)
      this.produitService.supprimerProduit(prod);
  }
}
