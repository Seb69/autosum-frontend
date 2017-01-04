import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {State} from "../../model";
import {Observable} from "rxjs/Rx";

@Injectable()
export class Authenticate {

    username:string;
    password:string;

    constructor(public http:Http, public state:State) {

    }

    public authenticate(username:any, password:any): Observable<Response>{

        console.log('Authentication started');

        username.trim();
        password.trim();

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic d2ViX2FwcDpzZWNyZXQ=');
        headers.append('Accept', 'application/json');

        var data = 'username=' + username + '&password=' + password + '&grant_type=password';

        return this.http
            .post('http://localhost:9005/oauth/token', data, { headers: headers });
            // .subscribe(
            //     data => {
            //         console.log('It works !');
            //         console.log(data.json());
            //         let access_token = data.json().access_token;
            //         localStorage.setItem('access_token', access_token);
            //
            //         this.state.setIsAuth(true);
            //
            //     },
            //     err => {
            //         console.log('Log in fails !');
            //         console.log(err);
            //     }
            // );
    }
    public register(username:any, password:any): Observable<Response>{

        console.log('Registry started');

        username.trim();
        password.trim();

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('Authorization', 'Basic d2ViX2FwcDpzZWNyZXQ=');
        // headers.append('Accept', 'application/json');

        var data = 'username=' + username + '&password=' + password;

        return this.http
            .post('http://localhost:9005/user', data, { headers: headers });
            // .subscribe(
            //     data => {
            //         console.log('It works !');
            //         console.log(data.json());
            //         let access_token = data.json().access_token;
            //         localStorage.setItem('access_token', access_token);
            //
            //         this.state.setIsAuth(true);
            //
            //     },
            //     err => {
            //         console.log('Log in fails !');
            //         console.log(err);
            //     }
            // );
    }

}
