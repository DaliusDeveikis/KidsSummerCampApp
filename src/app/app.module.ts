import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { EmailValidatorDirective } from './directive/email-validator.directive';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationUpdateComponent } from './components/registration-update/registration-update.component';
import { AuthComponent } from './components/auth/auth.component';
import { PasswordValidatorDirective } from './directive/password-validator.directive';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


const routes:Routes = [
  {path: '', component: RegistrationListComponent},
  {path: 'new', component: RegistrationFormComponent},
  {path: 'edit/:id', component: RegistrationUpdateComponent},
  {path: 'register', component: AuthComponent},
  {path: 'login', component: AuthComponent},
  {path: 'changepassword', component: ChangePasswordComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    EmailValidatorDirective,
    RegistrationListComponent,
    RegistrationUpdateComponent,
    AuthComponent,
    PasswordValidatorDirective,
    NavigationComponent,
    FooterComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
