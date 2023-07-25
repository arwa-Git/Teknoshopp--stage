import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consommateur-vendeur-ath',
  templateUrl: './consommateur-vendeur-ath.component.html',
  styleUrls: ['./consommateur-vendeur-ath.component.css']
})
export class ConsommateurVendeurAthComponent  implements OnInit  ,OnDestroy{

  @Input () uservalue !:boolean;
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this.RegistrationForm.patchValue({
      email:'',
      pwd:''
    })
    this.ConnexionForm.patchValue({
      email:'',
      pwd:''
    })
  }

  constructor(private fb:FormBuilder){
    
  }
  ConnexionForm= this.fb.group({
    email:['', [Validators.email , Validators.required]],
    pwd:['',[Validators.pattern("^.{8,}$"),Validators.required]]
  })
  RegistrationForm=this.fb.group({
    // pattern ennou ykoun fi esmo 3 7orof les9a leb3adhha exmpl ali 
    nom:['',[Validators.pattern('[a-zA-Z]{3,}') ,Validators.required] ],
    prenom:['' ,[ Validators.pattern('[a-zA-Z]{3,}') ,Validators.required]],
    email:['' ,[Validators.email , Validators.required]],
    pwd:['' ,[Validators.pattern("^.{8,}$"),Validators.required]],
    role:[-1 ,[Validators.required ,Validators.min(0) ,Validators.max(1)]]
  })
  afficher(){
    console.log(this.RegistrationForm)
  }
  get nomR(){
    return this.RegistrationForm.get('nom');
  }
  get prenomR(){
    return this.RegistrationForm.get('prenom');  
  }
  get emailR(){
    return this.RegistrationForm.get('email');  
  }
  get pwdR(){
    return this.RegistrationForm.get('pwd');  
  }
  get roleR(){
    return this.RegistrationForm.get('role');  
  }

  disableRbutton=this.nomR?.valid && this.prenomR?.valid &&this.emailR?.valid && this.pwdR?.valid && this.roleR?.valid
  validertousR(){
    console.log(this.RegistrationForm)
    return this.nomR?.valid && this.prenomR?.valid &&this.emailR?.valid && this.pwdR?.valid && this.roleR?.valid 
    // 
  }
  validertousC(){
    console.log(this.ConnexionForm)
    return this.emailC?.valid && this.pwdC?.valid
    // 
  }
  

  Rbtnclicked=false;
  submitRclicked(){
    this.Rbtnclicked=true;
  }
  Cbtnclicked=false;
  submitCclicked(){
    this.Cbtnclicked=true;
  }

  // For Sliders CSS==============================================================

  
  GotoCreeCompteActive: boolean = false;
  GoToSeConnecterActive: boolean = false;
  containerClass: string = 'container';

  GoToCreeCompte() {
    this.GotoCreeCompteActive = true;
    // this.GoToSeConnecterActive = false;
    // if(this. GoToSeConnecterActive){
    //   this. GoToSeConnecterActive
    // }
    this.containerClass = 'container right-panel-active';
    this.Cbtnclicked=false;
    this.Rbtnclicked=false;
    if(this.ConnexionForm.dirty){
      this.ConnexionForm.patchValue({
        email:'',
        pwd:''
      })

    }
  }

  GoToSeConnecter() {
    // this.GotoCreeCompteActive = false;
    this.GoToSeConnecterActive = true;
    this.containerClass = 'container';
    this.Cbtnclicked=false;
    this.Rbtnclicked=false;
    if(this.RegistrationForm.dirty){
      this.RegistrationForm.patchValue({
        email:'',
        pwd:''
      })
      

    }
  }

  // *
  get emailC(){
    return this.ConnexionForm.get('email');  
  }
  get pwdC(){
    return this.ConnexionForm.get('pwd');  
  }

  

  

  

}
