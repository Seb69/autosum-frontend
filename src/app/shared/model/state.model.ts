export class State {
    isAuth:boolean;

    setIsAuth(value:boolean):void{
        this.isAuth = value;
    }

    getIsAuth():boolean{
        return this.isAuth;
    }

}
