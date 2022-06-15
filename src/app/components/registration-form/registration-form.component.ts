import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor( private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  public counter(i:number) {
    return new Array(i)
  }

  public registrationSubmit(f:NgForm) {
    console.log('forma issiusta')

    this.registrationService.addRegistration(f.form.value).subscribe(()=> {
      
    })
  }

}
