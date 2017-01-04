import {bootstrap} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {HTTP_PROVIDERS} from "@angular/http";
import {appRouterProviders} from "./app/app.routes";
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {Global} from "./app/global.variables";

if (process.env.ENV === 'production') {
    enableProdMode();
}

bootstrap(
    AppComponent,
    [
        appRouterProviders,
        HTTP_PROVIDERS,
        disableDeprecatedForms(),
        provideForms(),
        Global
    ]
).catch(err => console.error(err));
