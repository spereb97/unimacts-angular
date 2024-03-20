export class Pedido {
    constructor(
        public id: string,
        public estado: string,
        public fechaEnvio: string,
        public fechaLimite: string
    ) {} 
}
