import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function EmailValidator(regEx: RegExp):ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>{
        const valid= regEx.test(control.value);
        return valid ? null : {invalidEmail: {value: control.value}};
    }
}
