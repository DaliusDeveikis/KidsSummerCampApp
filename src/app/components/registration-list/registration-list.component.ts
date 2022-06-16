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
  public display:string = '';

  constructor(
    private registrationService: RegistrationService
    ) { }
  
  private loadRegistrations() {
    this.registrationService.getRegistrations().subscribe((result)=> {
      this.registrations = result
    });
  }

  ngOnInit(): void {
    this.loadRegistrations()
  }

  public onDeleteRegistration(id:string|null){
    if (id != null) {
      this.registrationService.deleteRegistration(id).subscribe(()=> {
        this.loadRegistrations()
      })
    }
    
  }

  public openModal(){
    this.display='block';
 }

  public onClose(){
    this.display='none';
 }

}
