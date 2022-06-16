import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true
    }
  ]
})
export class PasswordValidatorDirective {
  /*
    Minimum eight characters, at least one letter and one number
    */
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let value:string = control.value;
    const regularExpression = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
   ;
      if (regularExpression.test(String(value))) {
        return null
      } else {
        return {
          error: "klaida"
        }
      }
    }

  constructor() { }

}
