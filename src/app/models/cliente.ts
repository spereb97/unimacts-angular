import { Direccion } from "./direccion";
import { Pedido } from "./pedido";

export class Cliente {
    constructor(
        public id: string,
        public nif: string,
        public nombreEmpresa: string,
        public nombreContacto: string,
        public email: string,
        public telefono: string,
        public direcciones: Direccion[],
        public pedidos: Pedido[],
    ) {}
}
