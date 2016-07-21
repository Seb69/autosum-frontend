import {it, inject, describe, beforeEachProviders, expect} from "@angular/core/testing";
import {PostFormComponent} from "./post-form.component";

describe('Post form', () => {

    beforeEachProviders(() =>

        [PostFormComponent]

    );

    it('should add one file to file array', inject([PostFormComponent], (app:PostFormComponent) => {

        // // BUILD
        // let value:any[] = [42];
        // let files:File[];
        // let file:File = new File();
        // files.push(new File());
        // expect(files.length).toBe(4);

        // OPERATE
        // app.fileChange(value);

        // CHECK
        // expect(app.files.length).toBe(1);

    }));
});
