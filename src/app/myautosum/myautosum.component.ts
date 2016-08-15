import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Headers, Http} from "@angular/http";
import {Material, PdfDownloader} from "../shared";

@Component({
    moduleId: module.id,
    selector: 'myautosum',
    providers: [PdfDownloader],
    template: require('./myautosum.component.html'),
    styles: [require('./myautosum.component.css')]
})
export class MyAutoSumComponent implements OnInit {

    materialList:Array<Material> = [];

    constructor(private router:Router, private http:Http, private pdfDownloed:PdfDownloader) {
    }

    ngOnInit() {

        var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));


        this.http.get('http://localhost:5001/materials', { headers: headers }).subscribe(
            data => {

                data.json().forEach((data:any, i:number) => {

                    let material:Material = new Material();

                    // Set material Name
                    let materialName:string = data.materialFilePATH.split('/').pop();
                    material.name = materialName.substr(5);


                    // Set material description
                    let description:string = data.keywordsList.join(' ');
                    material.description = description.substr(0,40).concat(' ...');

                    // Set material ID
                    let ID:number = data.MATERIAL_ID;
                    material.id = ID;

                    this.materialList.push(material);

                });

            },
            err => {

            }
        );





    }

    downloadFile(materialID:number) {

        this.pdfDownloed.download(materialID);
    }


}
