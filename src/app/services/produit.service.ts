import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[]; //un tableau de Produit

  produit!: Produit;


  constructor() {
    this.produits = [
      { idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, dateCreation: new Date("01/14/2011"), description: "Le ASUS Studiobook est équipé d'une carte graphique NVIDIA® Quadro et arbore un écran NanoEdge à bords fins pour une expérience plus immersive. Ses performances graphiques de pointe et son format ultraportable en font l'outil idéal des artistes de tous horizons." },
      { idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010"), description: "Imprimante Jet d'encre Multifonction Couleur A4 - Fonctions: 3en1 Impression,  Vitesse d'impession: 33 ppm (N&B), 15 ppm (Couleur) - Résolution d'impression: 5760x1440 dpi -Vitesse de Numérisation: 11s noir, 28s couleur (200 DPI) -Résolution de la numérisation: 1200x2400 dpi , 20 Feuilles photo, 30 Feuilles (bac de sortie) -Recto/verso Manuel -Connectivité: USB, Wi-Fi, Wi-Fi Direct - Garantie : 1 an Possible Extension de garantie 3 ans sur le site https://www.epson.eu/fr/promotions/extended-warranty" },
      { idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123, dateCreation: new Date("02/20/2020"), description: "This tablet features the Samsung octa-core chipset, which consists of 1.9 GHz and 1.3 GHz quad-core processors, and has 3GB of RAM. " }
    ];
  }
  listeProduits(): Produit[] {
    return this.produits;
  }
  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }

  supprimerProduit(prod: Produit) {
    //supprimer le produit prod du tableau produits
    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
  }

  consulterProduit(id: number): Produit {
    this.produit = this.produits.find(p => p.idProduit == id)!;
    return this.produit;
  }

  updateProduit(p:Produit)
{
// console.log(p);
this.supprimerProduit(p);
this.ajouterProduit(p);
}



}