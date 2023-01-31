import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appOffensiveUsername]',
  providers: [
    {
    provide: NG_VALIDATORS,
    useExisting: OffensiveUsernameDirective,
    multi: true
    }
  ]
})


export class OffensiveUsernameDirective {
  @Input() username:any;

  offensivesUsernames:string[] =['tonto','caca','culo','pis']; // palabras censuradas

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {  
    let result = null;
    this.username = this.username.toLowerCase();
    this.offensivesUsernames.forEach(offensive_name => {
      if(this.username.includes(offensive_name)){
        result = {'offensive': true}
      }
    });
    return result;

  }

}
