import { Examen } from "./Examen";

export class Module{
    moduleId!: number;
    moduleName!: string;
    moduleSemestre!: string;
    examens!: Examen[];
}
