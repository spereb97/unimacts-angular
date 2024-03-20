export class Direccion {
    constructor(
        public id: string,
        public tipo: string,
        public calle: string,
        public localidad: string,
        public provincia: string,
        public pais: string,
        public codigoPostal: string
    ) {}
}
