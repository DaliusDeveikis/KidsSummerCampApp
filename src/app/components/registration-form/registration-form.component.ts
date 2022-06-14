import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public counter(i:number) {
    return new Array(i)
  }

  public registrationSubmit(f:NgForm) {
    console.log('forma issiusta')
    console.log(f.form.value)
  }

}
