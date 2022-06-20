import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public user: User | null = null

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.user=this.authService.user;
    this.authService.userUpdated.subscribe(()=>{
      this.user=this.authService.user;
    });
  }

}
