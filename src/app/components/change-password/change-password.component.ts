import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public user: User | null = null


  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  private successFunc=(response:User)=>{
    this.router.navigate(["/"]);
  };

  private errorFunc=()=>{
    return {"error": "An error"}
  };

  public changePassword(form:NgForm) {
    console.log(form)
    if (this.auth.user) {
      this.auth.changePassword(form.value.password).subscribe({
        next: this.successFunc,
        error: this.errorFunc
      })
    }
    
  }

}
