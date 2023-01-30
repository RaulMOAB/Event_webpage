import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEventDateValidator]',
  providers: [
    {
    provide: NG_VALIDATORS,
    useExisting: EventDateValidatorDirective,
    multi: true
    }
  ]
})
export class EventDateValidatorDirective implements Validator{
  actual_date = new Date();

  
  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {    
    let selected_date = Date.parse(control.value);
    let end_date =this.actual_date.getTime()
    let diff =selected_date-end_date
    let one_year_miliseconds =(86400000*365);

    if(diff>one_year_miliseconds){
      console.log("mal");
      return {'dateValidator': true}
    }else{

      console.log("bien");
      return null;
    }
    
  }

}
