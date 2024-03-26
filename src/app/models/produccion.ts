import { PiezaFabricada } from "./piezaFabricada";
import { Tarea } from "./tarea";

export class Produccion {
    constructor (
        //public trabajador: Trabajador,
        public piezaFabricada: PiezaFabricada,
        public tarea: Tarea,
        public fechaInicio: string,
        public fechaFin: string
    ) {}
}
