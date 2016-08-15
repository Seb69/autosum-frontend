export class OAuthState {

    private _isLogIn:boolean;

    get isLogIn():boolean {
        return this._isLogIn;
    }

    set isLogIn(value:boolean) {
        this._isLogIn = value;
    }
}
