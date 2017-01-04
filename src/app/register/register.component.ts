import {Component, OnInit} from '@angular/core';
import {Authenticate, State, GlobalStateService} from "../shared";
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl,
} from "@angular/forms";


@Component({
    moduleId: module.id,
    selector: 'register',
    template: require('./register.component.html'),
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [Authenticate, State, GlobalStateService]
})
export class RegisterComponent implements OnInit {

    myFormGroup: FormGroup;

    usernameVal: AbstractControl;
    passwordVal: AbstractControl;

    constructor(fb: FormBuilder, private auth: Authenticate, private router: Router, public state: State,private  globalState:GlobalStateService) {
        this.myFormGroup = fb.group({
            'username': ['', [Validators.required]],
            'password': ['', [Validators.required, Validators.minLength(3)]]
        });

        this.usernameVal = this.myFormGroup.controls['username'];
        this.passwordVal = this.myFormGroup.controls['password'];

    }

    ngOnInit() {

    }

    onSubmit(value: string) {
        if (this.myFormGroup.valid) {


            this.auth.register(this.usernameVal.value, this.passwordVal.value)

                .subscribe(
                    data => {
                        console.log('Registry succeed !');


                        this.auth.authenticate(this.usernameVal.value, this.passwordVal.value).subscribe(

                            data => {

                                console.log(data.json());
                                let access_token = data.json().access_token;
                                localStorage.setItem('jwt', data.json());
                                localStorage.setItem('access_token', access_token);
                                localStorage.setItem('IsLOGIN', 'true');
                                console.log('IsLOGIN set in localstorage');

                                // this.isLogin = true;
                                // .isLogin(true);
                                // this.app.isLogin(true);

                                this.globalState.isLogIn = true;

                                this.state.setIsAuth(true);

                                this.router.navigateByUrl('/my-autosum');

                            },
                            err => {
                                console.log('Login in fails !');
                                console.log(err);
                            }
                        );

                    },
                    err => {
                        console.log('Registry fails !');
                        console.log(err);
                    }
                );

        }
        else {
            this.usernameVal.markAsTouched();
            this.passwordVal.markAsTouched();
            console.log('Error');
        }
    }

}
