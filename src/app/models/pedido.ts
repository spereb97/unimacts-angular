import { Cliente } from "./cliente";
import { DetallesPedido } from "./detallesPedido";

export class Pedido {
    constructor(
        public id: string,
        public estado: string,
        public fechaEnvio: string,
        public fechaLimite: string,
        public cliente: Cliente,
        public detallesPedido: DetallesPedido[]
    ) {} 
}
