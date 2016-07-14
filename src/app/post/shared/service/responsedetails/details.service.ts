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


}
