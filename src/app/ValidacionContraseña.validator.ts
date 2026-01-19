import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null  {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword')
        return password?.value === confirmPassword?.value ?  null : {contraseñaNoCoincide : true};
};