import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-ath',
  templateUrl: './admin-ath.component.html',
  styleUrls: ['../consommateur-vendeur-ath/consommateur-vendeur-ath.component.css']
})
export class AdminAthComponent {
  @Input () adminvalue !:boolean;

  constructor(private fb:FormBuilder){}
  Cbtnclicked=false;
  submitCclicked(){
    this.Cbtnclicked=true;
  }

  ConnexionForm= this.fb.group({
    email:['', [Validators.email , Validators.required]],
    pwd:['',[Validators.pattern("^.{8,}$"),Validators.required]]
  })

  get emailC(){
    return this.ConnexionForm.get('email');  
  }
  get pwdC(){
    return this.ConnexionForm.get('pwd');  
  }

  ShowConnexionAlertEmail1(){
    return (this.emailC?.hasError('required') && this.emailC?.touched) || this.Cbtnclicked
  }
  ShowConnexionAlertEmail2(){
    return this.emailC?.dirty && this.emailC?.hasError('email')
  }
  ShowConnexionAlertPwd1(){
    return (this.pwdC?.touched && this.pwdC?.hasError('required')) || this.Cbtnclicked
  }
  ShowConnexionAlertPwd2(){
    return this.pwdC?.hasError('pattern') && this.pwdC?.dirty
  }
  validertousC(){
    console.log(this.ConnexionForm)
    return this.emailC?.valid && this.pwdC?.valid
    // 
  }
}
