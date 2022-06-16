import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(form:NgForm) {
    this.auth.register(form.value.email,form.value.password).subscribe((response)=> {
      console.log(response)
    })
  }

}
