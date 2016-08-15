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

        let bearerToken:string = 'Bearer ' + localStorage.getItem('access_token');

        xhr.setRequestHeader("Authorization", bearerToken);

        xhr.send(formData);
        return xhr;
    };


}
