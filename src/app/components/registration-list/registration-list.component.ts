import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  public registrations: Registration[] = []

  constructor(
    private registrationService: RegistrationService
    ) { }

  ngOnInit(): void {
    this.registrationService.getRegistrations().subscribe((result)=> {
      this.registrations = result
    });
  }

}
