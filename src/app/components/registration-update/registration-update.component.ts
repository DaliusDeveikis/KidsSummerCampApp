import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

@Component({
  selector: 'app-registration-update',
  templateUrl: './registration-update.component.html',
  styleUrls: ['./registration-update.component.css']
})
export class RegistrationUpdateComponent implements OnInit {

  public registration: Registration = new Registration()
  public id:string = ''

  constructor(
    private registrationService: RegistrationService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.registrationService.getRegistration(this.id).subscribe((result)=>{
        this.registration=result;
      });
    }
  
    public onUpdate(){
      this.registrationService.updateRegistration(this.registration).subscribe(()=>{
        this.router.navigate(["/"]);
      });
    }

    public counter(i:number) {
      return new Array(i)
    }

}
