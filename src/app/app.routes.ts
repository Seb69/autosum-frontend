import { provideRouter, RouterConfig } from '@angular/router';

import {PostDetailsComponent} from "./post";
import {HomeComponent} from "./home";
import {PostFormComponent} from "./post/post-form/post-form.component";

const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'post-details', component: PostDetailsComponent },
    { path: 'post-form', component: PostFormComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
