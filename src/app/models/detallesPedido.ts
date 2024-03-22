import { Pieza } from "./pieza";

export class DetallesPedido {
    constructor(
        public pieza: Pieza,
        public cantidad: string
    ) {}
}
