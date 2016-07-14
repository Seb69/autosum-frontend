import {Injectable} from '@angular/core';
// let fileSaver = require('./FileSaver.js');
let fileSaver = require('file-saver/FileSaver.js');
// import {fileSaver} from 'file-saver/FileSaver.js';

@Injectable()
export class PdfDownloader {

    public download(id:number) {

        console.log("ID " + id);

        // Create the Xhr request object
        let xhr = new XMLHttpRequest();

        let url = `http://localhost:5000/materialPDF/` + id;
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';

        // Xhr callback when we get a result back
        // We are not using arrow function because we need the 'this' context
        xhr.onreadystatechange = function () {

            // If we get an HTTP status OK (200), save the file using fileSaver
            if (xhr.readyState === 4 && xhr.status === 200) {
                var blob = new Blob([this.response], { type: 'application/pdf' });
                fileSaver.saveAs(blob, 'AutoSum.pdf');
            }
        };

        // Start the Ajax request
        xhr.send();
    }
}
