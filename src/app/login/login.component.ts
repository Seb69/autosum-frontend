import {Component, OnInit} from "@angular/core";
import {User} from "../shared";
import { Authentificate } from "../shared"

import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl,
    FormControl
} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'login',
    template: require('./login.component.html'),
    styles: [require('./login.component.scss')],
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES,Authentificate]
})
export class LoginComponent {

    myFormGroup: FormGroup;
    usernameVal: AbstractControl;
    passwordVal: AbstractControl;

    constructor(fb: FormBuilder) {
        this.myFormGroup = fb.group({
            'username': ['', [Validators.required]],
            'password': ['',[Validators.required, Validators.minLength(6)]]
        });

        this.usernameVal = this.myFormGroup.controls['username'];
        this.passwordVal = this.myFormGroup.controls['password'];


        this.myFormGroup.valueChanges.subscribe(
            (value:string) => {
                console.log('value change: ', value);
                console.log('touched: ', this.myFormGroup.touched);

            }
        );

    }

    onSubmit(value: string): void {
        if(this.myFormGroup.valid) {
            console.log('you submitted value: ', value);
        }
        else
        {
            this.usernameVal.markAsTouched();
            this.passwordVal.markAsTouched();
            console.log('Error');
        }
    }

}
