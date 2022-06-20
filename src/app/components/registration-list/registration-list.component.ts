import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {

  public registrations: Registration[] = []
  public display:string = '';
  public person:Registration = new Registration
  public user: User|null = null

  constructor(
    private registrationService: RegistrationService,
    private auth: AuthService,
    ) { }
  
  private loadRegistrations() {
    this.registrationService.getRegistrations().subscribe((result)=> {
      this.registrations = result
    });
  }

  ngOnInit(): void {
    this.loadRegistrations()
    this.user = this.auth.user
  }

  public onDeleteRegistration(id:string|null){
    if (id != null) {
      this.registrationService.deleteRegistration(id).subscribe(()=> {
        this.loadRegistrations()
        this.display='none';
      })
    }
    
  }

  public openModal(person: Registration){
    if (person != null) {
      this.person = person;
      this.display='block';
    }
      
      
    
 }

  public onClose(){
      this.display='none';
 }

}
