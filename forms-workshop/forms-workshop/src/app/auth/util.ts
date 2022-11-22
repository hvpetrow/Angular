import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
        return null;
    }

    if (!/.{6,}@gmail\.(bg|com)/.test(value)) {
        return {
            email: true
        }
    }
    return null;
}

export function passwordMatch(passwordFormControl: AbstractControl) {
    return (rePasswordFormControl: AbstractControl) => {
        if (passwordFormControl.value !== rePasswordFormControl.value) {
            return {
                passwordMatch: true
            }
        }

        return null;
    }
}