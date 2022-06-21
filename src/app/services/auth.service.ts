import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly key="AIzaSyBMjK9X-IscBCfHyVdG4BGeG06d9WP25ao";
  private readonly url="https://identitytoolkit.googleapis.com/v1/accounts";

  public user:User|null=null;
  public userUpdated=new EventEmitter();

  private successLoginFun=(response:User)=>{
    this.user=response;
    localStorage.setItem("user",JSON.stringify(this.user));
    this.userUpdated.emit();
  };

  constructor(private http:HttpClient) { }

  public register(email:string,password:string){
    return this.http.post<User>(this.url+":signUp?key="+this.key, {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap(this.successLoginFun));
  }

  public signInWithEmailAndPassword(email:string,password:string){
    return this.http.post<User>(this.url+":signInWithPassword?key="+this.key, {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap(this.successLoginFun));;
  }

  public autoLogin(){
    let data=localStorage.getItem("user");
    if (data!=null){
      this.user=JSON.parse(data);
    }
  }
  public logOut(){
    this.user=null;
    localStorage.removeItem("user");
    this.userUpdated.emit();
  }

  public changePassword(newpassword:string) {
    return this.http.post<User>(this.url+":update?key="+this.key, {
      idToken: this.user?.idToken,
      password:newpassword,
      returnSecureToken:true
    })
  }

}