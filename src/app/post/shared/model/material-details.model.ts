export class Material {
    public id:number;
    public materialFilePATH:string;

    constructor(id:number, materialFilePath:string){
        this.id = id;
        this.materialFilePATH = materialFilePath;
    }
}
