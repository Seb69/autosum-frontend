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
    materialSumLinkList:Array<string> = [];
    filter:string = 'blur(5px)';
    imageLink:string;
    firstImageLink:string;
    index:number = 0;
    indexSum:number = 0;
    isPreviewOriginal:boolean = false;
    isPreviewSum:boolean = false;
    previewId:number;
    previewSize:number;

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
                    material.description = description.substr(0, 100).concat(' ...');

                    // Set material ID
                    let ID:number = data.MATERIAL_ID;
                    material.id = ID;

                    this.http.get('http://localhost:5001/getMaterialPreviewLink/' + ID).subscribe(
                        data => {
                            this.materialList.push(material);
                            console.log(ID);
                            this.firstImageLink = 'http://localhost:5001/materialPreview/' + ID + '/0';
                            console.log(this.firstImageLink);

                        }
                    );

                    this.http.get('http://localhost:5001/getMaterialPreviewSumLink/' + ID).subscribe(
                        data => {

                            console.log(data.json());
                            this.materialSumLinkList.push(data.json());
                            console.log('Sum slide are: ' + this.materialSumLinkList.toString());

                        }
                    );

                });
            },
            err => {

            }
        );
    }

    previewSum(id:number):void{

        this.http.get('http://localhost:5001/getMaterialPreviewSumLink/' + id).subscribe(
            data => {

                // Empty the array
                this.materialSumLinkList.length = 0;

                let links:Array<string> = [];
                var resultData:any;

                resultData = data.json().toString();
                links = resultData.split(",");

                console.log('Links array: '+links.length);

                this.materialSumLinkList= links;
                console.log(this.materialSumLinkList[0]);
                console.log(this.materialSumLinkList.toString());

                this.previewSize = this.materialSumLinkList.length;
                console.log('Link size: ' + this.previewSize);

            }
        );

        console.log('id: ' + id);

        this.indexSum = 0;

        this.imageLink = 'http://localhost:5001/materialPreview/' + id + '/' + this.materialSumLinkList[this.indexSum].toString();

        this.isPreviewSum = true;

        this.previewId = id;

    }

    previewOriginal(id:number):void {

        console.log('id: ' + id);
        this.imageLink = 'http://localhost:5001/materialPreview/' + id + '/' + this.index;

        this.http.get('http://localhost:5001/materialPreviewOriginalMetadata/' + id).subscribe(
            data => {
                this.previewSize = data.json();
            }
        );

        this.isPreviewOriginal = true;
        this.index = 0;
        this.previewId = id;

    }

    following():void {
        this.index++;
        if (this.index < this.previewSize) {
            this.imageLink = 'http://localhost:5001/materialPreview/' + this.previewId + '/' + this.index;
        }
        else {
            this.index--;
        }

    }

    previous():void {
        this.index--;
        if (this.index < this.previewSize && this.index >= 0) {
            this.imageLink = 'http://localhost:5001/materialPreview/' + this.previewId + '/' + this.index;
        }
        else {
            this.index++;
        }
    }

    followingSum():void {
        this.indexSum++;
        console.log('IndexSum: '+  this.indexSum);
        console.log('Preview size: '+  this.previewSize);
        if (this.indexSum < this.previewSize) {
            this.imageLink = 'http://localhost:5001/materialPreview/' + this.previewId + '/' + this.materialSumLinkList[this.indexSum].toString();
        }
        else {
            this.indexSum--;
        }

    }

    previousSum():void {



        this.indexSum--;
        if (this.indexSum < this.previewSize && this.indexSum >= 0) {
            this.imageLink = 'http://localhost:5001/materialPreview/' + this.previewId + '/' + this.materialSumLinkList[this.indexSum].toString();
        }
        else {
            this.indexSum++;
        }
    }

    close():void {
        this.isPreviewOriginal = false;
    }

    closeSum():void {
        this.isPreviewSum = false;
    }


    downloadFile(materialID:number, fileName:string) {

        this.pdfDownloed.download(materialID, fileName);
    }

    downloadOriginalFile(materialID:number, fileName:string) {
        this.pdfDownloed.downloadOriginal(materialID, fileName);
    }


}
