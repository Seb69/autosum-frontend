import {Component, OnInit} from "@angular/core";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar";
import {MdIconRegistry, MD_ICON_DIRECTIVES} from "@angular2-material/icon";
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button";
import {MD_MENU_DIRECTIVES} from "@angular2-material/menu";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list";
import {PostFormComponent} from "./post";
import {Footer} from "./shared";
import {ROUTER_DIRECTIVES} from '@angular/router';
import {OAuthState} from './shared/model';
import {GlobalStateService} from './shared';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss'), require('./app.component.mixins.scss')],
    providers: [MdIconRegistry, GlobalStateService],
    directives: [
        MD_MENU_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_ICON_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        ROUTER_DIRECTIVES,
        PostFormComponent,
        Footer
    ]
})

export class AppComponent implements OnInit {


    private _isLogin: boolean;


    ngOnInit() {

        // console.log(localStorage.getItem('access_token'));
        //
        // let token: string;
        //
        // token = localStorage.getItem('access_token');
        //
        // // Test if user is already login
        // if (token === null) {
        //     this.isLogin = false;
        //     console.log('isLOGIN: FALSE');
        // }
        // if (token != null && token != 'undefined'){
        //     this.isLogin = true;
        //     console.log('isLOGIN: TRUE');
        //
        // }
        // else {
        //     this.isLogin = false;
        //     console.log('isLOGIN: FALSE');
        //
        // }
    }

    oAuthState: OAuthState;

    constructor(mdIconRegistry: MdIconRegistry, private globalState: GlobalStateService) {

        mdIconRegistry.addSvgIcon('menu', '/assets/icons/ic_menu_white_48px.svg');
        mdIconRegistry.addSvgIcon('account', '/assets/icons/ic_assignment_ind_black_48px.svg');
        // this.isLogin = false;
        // console.log(globalState.isLogIn);

        console.log(localStorage.getItem('access_token'));

        let token: string;

        token = localStorage.getItem('access_token');

        // Test if user is already login
        if (token === null) {
            this._isLogin = false;
            console.log('isLOGIN: FALSE');
        }
        if (token != null && token != 'undefined'){
            this._isLogin = true;
            console.log('isLOGIN: TRUE');

        }
        else {
            this._isLogin = false;
            console.log('isLOGIN: FALSE');

        }
    }



    logOut(): any {
        // this.globalState.isLogIn(false);
        console.log("log out ");
        localStorage.removeItem('access_token');
        localStorage.removeItem('IsLOGIN');
        this._isLogin= false;

    }


    get isLogin(): boolean {
        return this._isLogin;
    }

    set isLogin(value: boolean) {
        this._isLogin = value;
    }

}
