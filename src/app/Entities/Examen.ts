import {Module} from "./Module";

export class Examen{
    id !: number;
    type !: string;
    DcreationDateTime : Date = new Date();
    dateExam !: Date ;
    module !: Module;


  constructor(type: string, dateExam: Date, module: Module) {
    this.type = type;
    this.dateExam = dateExam;
    this.module = module;
  }
}

