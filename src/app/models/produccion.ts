import { PiezaFabricada } from "./piezaFabricada";
import { Tarea } from "./tarea";
import { Trabajador } from "./trabajador";

export class Produccion {
    constructor (
        public id: string,
        public trabajador: Trabajador,
        public piezaFabricada: PiezaFabricada,
        public tarea: Tarea,
        public fechaInicio: string,
        public fechaFin: string
    ) {}
}
