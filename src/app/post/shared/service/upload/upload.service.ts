import {Injectable} from "@angular/core";

@Injectable()
export class UploadService {

    // material:Material;

    public makeFileRequest(url:string, file:File) {

        let formData:FormData = new FormData(),
            xhr:XMLHttpRequest = new XMLHttpRequest();

        console.log(file.valueOf());

        formData.append("file", file);

        xhr.open('POST', url, true);
        xhr.send(formData);
        return xhr;
    };
    

}
