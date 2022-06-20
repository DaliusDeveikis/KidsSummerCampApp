import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public error:string = ''
  public alert:string = ''
  public successColor: string = '#198754'
  public errorColor: string = '#dc3545'
  public passwordsMatch: boolean = false
  public urlRegister: boolean = true
  public location: string = ''
  public logedIn: boolean = true

  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
  ) { }

  ngOnInit(): void {

    const loc = String((this.document.location)).split('/')[3]
    if (typeof loc != 'undefined') {
      this.location = loc
    }
    console.log(this.location)
    if (this.location == 'login') {
      this.urlRegister = false;
    }
  }

  public onSubmit(form:NgForm) {
    if (this.logedIn) {
      this.auth.signInWithEmailAndPassword(form.value.email,form.value.password).subscribe({
        next: (response) => {
          this.router.navigate(['/']);
          this.logedIn = true;
          console.log(response)
        }, error: (response) => {
          switch (response.error.error.message) {
            case "INVALID_PASSWORD": 
              this.error = 'Netinkamas slaptažodis'.toUpperCase()
              this.alert = this.errorColor
              break;
            case "EMAIL_NOT_FOUND": 
              this.error = 'toks email neegzistuoja'.toUpperCase()
              this.alert = this.errorColor
              break;
            case "USER_DISABLED": 
              this.error = 'vartotojas užblokuotas'.toUpperCase()
              this.alert = this.errorColor
              break;
          }
        }
        
      })
    } else {
      if (form.value.password === form.value.password1) {
        this.auth.register(form.value.email,form.value.password).subscribe({
          next: (response) => {
            console.log(response)
              this.passwordsMatch = true
              this.error = 'Registracija sekmingai pavyko!'.toUpperCase()
              this.alert = this.successColor
            
          }, error:(response) => {
            console.log(response)
            switch (response.error.error.message) {
              case "EMAIL_EXISTS":
                this.error = "toks email egzistuoja".toUpperCase()
                this.alert = this.errorColor
                break;
              case "INVALID_EMAIL":
                this.error = "blogas email formatas".toUpperCase()
                this.alert = this.errorColor
                break;
              case "TOO_MANY_ATTEMPTS_TRY_LATER":
                this.error = "per didelis kiekis bandymu registruoti".toUpperCase()
                this.alert = this.errorColor
                break;
              
            }
          }
          
        })
      } else {  
        this.error = 'Nesutampa slaptažodžiai'.toUpperCase()
        this.alert = this.errorColor
      }
    }
    
  }


}
