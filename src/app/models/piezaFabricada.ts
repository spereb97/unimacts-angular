import { Pedido } from "./pedido";
import { Pieza } from "./pieza";
import { Produccion } from "./produccion";

export class PiezaFabricada {
    constructor(
        public id: string,
        public codigo: string,
        public pedido: Pedido,
        public pieza: Pieza,
        public estado: string,
        public producciones: Produccion[]
    ) {}
}
