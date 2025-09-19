import { Directive, forwardRef, input } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

export function EmailValidator(regEx: RegExp):ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>{
        const valid= regEx.test(control.value);
        return valid ? null : {invalidEmail: {value: control.value}};
    }
}

@Directive({
  selector: '[appEmailValidator]',
  providers:[
    {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(()=> EmailValidatorDirective),
        multi:true,
    },
  ],
})
export class EmailValidatorDirective {
    readonly emailRegEx = input<string>('',{alias:'emailRegEx'});

    validate(control: AbstractControl):ValidationErrors | null{
        return EmailValidator(new RegExp(this.emailRegEx(), 'i'))(control);
    }
}
