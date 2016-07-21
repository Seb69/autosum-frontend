import {Component, OnInit} from '@angular/core';
import {Footer} from '../shared'

@Component({
    moduleId: module.id,
    selector: 'home',
    directives: [Footer],
    styles: [require('./home.component.scss')],
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    ngOnInit():any {
        return undefined;
    }



}