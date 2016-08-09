import {Injectable} from '@angular/core';

@Injectable()
export class DetailsService {

    constructor() {
    }

    public countNumberOfWords(material:any){

       let keywordsList:string[];

        keywordsList = material.keywordsList;
        // keywordsList.length;
        return keywordsList.length;
    }

    public countNumberOfSlide(material:any){

        let slideList:any[];

        slideList = material.slideList;
        console.log(slideList.length)
        return slideList.length;
    }

    public getDescription(material:any):string{

        let keywordsList:string[];

        keywordsList = material.keywordsList;
        console.log(keywordsList.toString());
        let description:string = material.keywordsList.toString();

        do {
            description = description.replace(',', ' ');
        } while (description.match(','));


        console.log(description);
        return description;
    }


}
