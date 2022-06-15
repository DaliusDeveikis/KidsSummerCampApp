import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { EmailValidatorDirective } from './directive/email-validator.directive';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
  {path: '', component: RegistrationListComponent},
  {path: 'new', component: RegistrationFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    EmailValidatorDirective,
    RegistrationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
