import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home',
    directives: [ ROUTER_DIRECTIVES],
    styles: [require('./home.component.scss')],
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    ngOnInit():any {
        return undefined;
    }



}