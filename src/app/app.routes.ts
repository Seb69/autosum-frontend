import {provideRouter, RouterConfig} from "@angular/router";
import {PostDetailsComponent, PostFormComponent} from "./post";
import {HomeComponent} from "./home";
import {LoginComponent} from "./login";

const routes:RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'post-details', component: PostDetailsComponent },
    { path: 'post-form', component: PostFormComponent },
    { path: 'login', component: LoginComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
