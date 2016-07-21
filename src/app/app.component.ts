import { Component } from "@angular/core";
import { MD_TOOLBAR_DIRECTIVES } from "@angular2-material/toolbar";
import { MdIconRegistry, MD_ICON_DIRECTIVES } from "@angular2-material/icon";
import { MD_SIDENAV_DIRECTIVES } from "@angular2-material/sidenav";
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button";
import { MD_MENU_DIRECTIVES } from "@angular2-material/menu";
import { MD_LIST_DIRECTIVES } from "@angular2-material/list";
import { PostFormComponent } from "./post";
import { Footer } from "./shared";
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss'),require('./app.component.mixins.scss')],
    providers: [MdIconRegistry],
    directives: [
        MD_MENU_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_ICON_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        ROUTER_DIRECTIVES,
        PostFormComponent,
        Footer
    ]
})

export class AppComponent {

    constructor(mdIconRegistry:MdIconRegistry) {

        mdIconRegistry.addSvgIcon('menu', '/assets/icons/ic_menu_white_48px.svg');
        mdIconRegistry.addSvgIcon('account', '/assets/icons/ic_assignment_ind_black_48px.svg');
    }

    test():string {

        return "hello world";

    }

    views:Object[] = [
        {
            name: "My Account",
            url: "/home",
            description: "Edit my account information",
            icon: "account"
        },
        {
            name: "Lecture Slide History",
            url: "/home",
            description: "Find your sum!",
            icon: "account"
        }
    ];
}
