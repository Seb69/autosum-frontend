import {Component} from "@angular/core";
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {Authenticate, State} from "../shared";
import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'login',
    template: require('./login.component.html'),
    styles: [require('./login.component.scss')],
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [Authenticate, State]
})
export class LoginComponent {

    myFormGroup:FormGroup;

    usernameVal:AbstractControl;
    passwordVal:AbstractControl;


    wrongAuth:boolean = false;


    constructor(fb:FormBuilder, private auth:Authenticate, private router:Router, public state:State) {
        this.myFormGroup = fb.group({
            'username': ['', [Validators.required]],
            'password': ['', [Validators.required, Validators.minLength(3)]]
        });

        this.usernameVal = this.myFormGroup.controls['username'];
        this.passwordVal = this.myFormGroup.controls['password'];

    }


    onSubmit(value:string) {
        if (this.myFormGroup.valid) {



            this.auth.authenticate(this.usernameVal.value, this.passwordVal.value)

                .subscribe(
                    data => {

                        console.log(data.json());
                        let access_token = data.json().access_token;
                        localStorage.setItem('jwt', data.json());
                        localStorage.setItem('access_token', access_token);

                        this.state.setIsAuth(true);

                        this.router.navigateByUrl('/my-autosum');

                    },
                    err => {
                        console.log('Log in fails !');
                        this.wrongAuth = true;
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
