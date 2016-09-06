import {Injectable} from '@angular/core';
// import {AppComponent} from '../../../app.component';

@Injectable()
export class GlobalStateService {

    // appComponent: AppComponent;

    get isLogIn(): boolean {
        return this._isLogIn;
    }

    set isLogIn(value: boolean) {
        console.log('Globale State setter: ' + value);
        this._isLogIn = value;
        location.reload();
        // this.appComponent.isLogin = value;
    }

    private _isLogIn: boolean;

    constructor() {
    }
}
