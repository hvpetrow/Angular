import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from "@angular/forms";
import { emailValidator } from "./util"

@Directive({
    selector: '[emailValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})

export class EmailValidatorDirective implements Validator {

    // constructor(@Inject(NG_VALIDATORS) private validators: Validator[]) {
    //     console.log(this.validators);

    // }

    validate(control: AbstractControl): ValidationErrors | null {
        return emailValidator(control);
    }
}