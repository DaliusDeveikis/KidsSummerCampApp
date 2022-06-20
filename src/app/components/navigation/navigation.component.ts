import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public user: User | null = null

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.user=this.authService.user;
    this.authService.userUpdated.subscribe(()=>{
      this.user=this.authService.user;
    });
  }

  public onLogout(){
    this.authService.logOut();
  }

}
