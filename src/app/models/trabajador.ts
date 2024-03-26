import { Produccion } from "./produccion";

export class Trabajador {
    constructor (
        public id: string,
        public dni: string,
        public nombre: string,
        public apellidos: string,
        public fechaNacimiento: string,
        public email: string,
        public telefono: string,
        public fechaIncorporacion: string,
        public fechaCese: string,
        public producciones: Produccion[],
    ) {}
}
