import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import  {Registration } from '../models/registration'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  private readonly url: string = "https://techapziura-1f444-default-rtdb.europe-west1.firebasedatabase.app/"

  constructor(private http: HttpClient) { }

  public addRegistration(registration:Registration) {
    return this.http.post(this.url + "registration.json", registration)
  }

  public getRegistrations() {
    return this.http.get<{[key:string]:Registration}>(this.url + "registration.json").pipe(
      map(response => {
        let result: Registration[] = []
        for(let key in response) {
          result.push({...response[key], id: key})
        }
        return result
      })
    )
  }
}
