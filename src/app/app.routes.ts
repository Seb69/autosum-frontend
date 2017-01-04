import {provideRouter, RouterConfig} from "@angular/router";
import {PostDetailsComponent, PostFormComponent} from "./post";
import {HomeComponent} from "./home";
import {LoginComponent} from "./login";
import {MyAutoSumComponent} from "./myautosum/myautosum.component";
import {RegisterComponent} from "./register/register.component";

const routes:RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'post-details', component: PostDetailsComponent },
    { path: 'post-form', component: PostFormComponent },
    { path: 'login', component: LoginComponent },
    { path: 'my-autosum', component: MyAutoSumComponent },
    { path: 'register', component: RegisterComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
