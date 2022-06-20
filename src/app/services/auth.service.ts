import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly key = 'AIzaSyAdZMX0VZqkSatLGZe_X9YytQQETh-cxWM'
  private readonly url = 'https://identitytoolkit.googleapis.com/v1/accounts'

  constructor(private http:HttpClient) { }

  public user: User|null = null
  public logedIn:boolean = false

  private successlogin = (response:User) => {
    this.user = response
    this.logedIn = true
    localStorage.setItem('user',JSON.stringify(this.user))
  }

  public register(email:string, password:string) {
    return this.http.post<User>(this.url + ':signUp?key=' + this.key, {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap(this.successlogin))
  }

  public signInWithEmailAndPassword(email:string, password:string) {
    return this.http.post<User>(this.url + ':signInWithPassword?key=' + this.key, {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap(this.successlogin))
  }

  public autoLogin() {
    let data=localStorage.getItem('user')
    if (data != null) {
      this.user= JSON.parse(data)
    }
  }

  public logout() {
    this.logedIn = false
    return localStorage.removeItem('user')
  }

}
