import {Observable, Observer} from "rxjs/Rx";

export class Global {

    private _globalVar:string;


    get globalVar():string {
        return this._globalVar;
    }

    set globalVar(value:string) {
        this._globalVar = value;
    }

// globalVarUpdate:Observable<string>;
    // globalVarObserver:Observer<any>;

    // constructor() {
    //     this.globalVarUpdate = Observable.create((observer:Observer<any>) => {
    //         this.globalVarObserver = observer;
    //     });
    // }
    //
    // updateGlobalVar(newValue:string) {
    //     this.globalVar = newValue;
    //     this.globalVarObserver.next(this.globalVar);
    // }
}
