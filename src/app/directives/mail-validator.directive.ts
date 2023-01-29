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
  @Input() mail!:any;
  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors | null {  
    console.log(this.mail);
    if (this.mail.endsWith('proven.cat')) {
      console.log('Valido');
      return null;
    }else{
      return {'noMatch': true}
    }

  }
}
