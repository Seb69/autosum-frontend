/**
 * Created by ANDRE on 16/06/16.
 */
import {Component} from "@angular/core";
import {PostDetailsComponent} from "../post-details";

const URL = 'http://localhost:5001/materials';

@Component({
    selector: 'post-form',
    template: require('./post-form.component.html'),
    outputs: ['result'],
    styles: [require('./post-form.component.scss')],
    directives: [ PostDetailsComponent],
})

export class PostFormComponent {

    files:File[] = [];

    fileChange(input:any) {

        // Loop through each picture file
        for (var i = 0; i < input.files.length; i++) {

            this.files.push(input.files[i]);
        }
    }

    test(){
        let value:number;
        value = 42;
    }
}
