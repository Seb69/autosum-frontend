import {Injectable} from '@angular/core';
import {Headers,Http} from "@angular/http";

@Injectable()
export class Authentificate {
    title: string;
    data: string;
    quote: string;
    username: string;
    password: string;
    randomQuote: string;
    secretQuote: string;

    constructor(public http: Http) {

    }

    logError(err:any) {
        console.error('There was an error: ' + err);
    }

    saveJwt(jwt:any) {
        if(jwt) {
            localStorage.setItem('id_token', jwt)
        }
    }

    getRandomQuote() {
        this.http.get('http://localhost:3001/api/random-quote')
            .subscribe(
                data => this.randomQuote = data.text(),
                err => this.logError(err.text()),
                () => console.log('Random Quote Complete')
            );
    }

    authenticate(username:any, password:any) {

        let creds = JSON.stringify({ username: username.value, password: password.value });

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:9005/oauth/token', creds, {
            headers: headers
        })
            .subscribe(
                data => {
                    this.saveJwt(data.json().id_token);
                    username.value = null;
                    password.value = null;
                },
                err => this.logError(err.json().message),
                () => console.log('Authentication Complete')
            );
    }

    getSecretQuote() {

        let jwt = localStorage.getItem('id_token');
        let authHeader = new Headers();
        if(jwt) {
            authHeader.append('Authorization', 'Bearer ' + jwt);
        }

        this.http.get('http://localhost:3001/api/protected/random-quote', {
            headers: authHeader
        })
            .subscribe(
                data => this.secretQuote = data.text(),
                err => this.logError(err.text()),
                () => console.log('Secret Quote Complete')
            );

    }

}
