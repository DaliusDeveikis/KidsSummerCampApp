import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'summerCamp';
  public login:boolean = false
  public user: User | null = null

  
  constructor(private auth: AuthService) {
    auth.autoLogin()
    this.login = auth.logedIn
    if (auth.user != null) {
      this.user = auth.user
    }
    
  }

}
