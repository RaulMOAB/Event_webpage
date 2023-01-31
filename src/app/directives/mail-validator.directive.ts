import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMailValidator]',
  providers: [
    {
    provide: NG_VALIDATORS,
    useExisting: MailValidatorDirective,
    multi: true
    }
  ]
})
export class MailValidatorDirective {
  
  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors | null {  
    let mail = control.value
    if (mail.endsWith('proven.cat') || mail.endsWith('gmail.com')) {
      return null;
    }else{
      return {'noMatch': true}
    }

  }
}
