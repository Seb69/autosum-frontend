import {Injectable} from '@angular/core';
let fileSaver = require('file-saver/FileSaver.js');

@Injectable()
export class PdfDownloader {

    public download(id:number, fileName:string) {

        // Create the Xhr request object
        let xhr = new XMLHttpRequest();

        let url = `http://localhost:5001/materialPDF/` + id;
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';

        // Xhr callback when we get a result back
        // We are not using arrow function because we need the 'this' context
        xhr.onreadystatechange = function () {

            // If we get an HTTP status OK (200), save the file using fileSaver
            if (xhr.readyState === 4 && xhr.status === 200) {
                var blob = new Blob([this.response], { type: 'application/pdf' });

                let fileNameTab:string[] = fileName.split('.');

                fileNameTab.forEach(data => {
                    console.log(data);
                });

                fileSaver.saveAs(blob, fileNameTab[0] + '-Sum.pdf' );
            }
        };

        // Start the Ajax request
        xhr.send();
    }

    public downloadOriginal(id:number, fileName:string) {

        console.log("ID " + id);

        // Create the Xhr request object
        let xhr = new XMLHttpRequest();

        let url = `http://localhost:5001/materialOriginal/` + id;
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';

        // Xhr callback when we get a result back
        // We are not using arrow function because we need the 'this' context
        xhr.onreadystatechange = function () {


            // If we get an HTTP status OK (200), save the file using fileSaver
            if (xhr.readyState === 4 && xhr.status === 200) {
                var blob = new Blob([this.response]);

                console.log(xhr.response);
                fileSaver.saveAs(blob, fileName);
            }
        };

        // Start the Ajax request
        xhr.send();
    }
}
