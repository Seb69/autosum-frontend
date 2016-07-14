/**
 * Component
 * Author: ANDRE
 * Date: 22/06/16
 */
import {Component, OnInit, Input} from "@angular/core";
import {Material, UploadService, DetailsService} from "../shared";
import {PdfDownloader} from "../../shared";

@Component({
    moduleId: module.id,
    selector: 'post-details',
    providers: [PdfDownloader, UploadService, DetailsService],
    template: require('./post-details.component.html'),
    styles: [require('./post-details.component.css')],
})

export class PostDetailsComponent implements OnInit {

    material:Material;
    response:string;
    responseObjcet:any;
    numberofword:number;
    numberOfSlides:number;
    description:string[];
    @Input() number:number;
    @Input() file:File;
    _loading:boolean;

    constructor(private uploadService:UploadService,
                private downloadService:PdfDownloader,
                private detailsService:DetailsService) {
    }


    ngOnInit() {
        this._loading = false;
        console.log("OnInit POST details ");

        let xhr:XMLHttpRequest;
        xhr = this.uploadService.makeFileRequest('http://localhost:5000/materials', this.file);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 201) {

                    console.log(JSON.parse(xhr.response));
                    this.responseObjcet = JSON.parse(xhr.response);

                    this.numberofword = this.detailsService.countNumberOfWords(this.responseObjcet);
                    this.numberOfSlides = this.detailsService.countNumberOfSlide(this.responseObjcet);

                    this._loading = true;
                } else {
                    console.log("ERROR");
                }
            }
        };
    }


    ngOnChanges() {
        console.log("OnChange" + this.file.toString())

    }


    downloadFile() {

        this.downloadService.download(this.responseObjcet.MATERIAL_ID);
    }
}
