import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable( {
  providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    if (this.authService.user != null) {
      let newRequest = request.clone({
        params: request.params.append("auth", this.authService.user.idToken)
      })
      return next.handle(newRequest)
    } else {
      return next.handle(request);
    }
    
  }
}
