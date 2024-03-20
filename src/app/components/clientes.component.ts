import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { CommonModule } from '@angular/common';
import { Cliente } from '../models/cliente';
import { Direccion } from '../models/direccion';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../views/clientes.component.html',
  styleUrl: '../styles/clientes.component.scss'
})
export class ClientesComponent implements OnInit{

  clientes: Cliente[] = [];
  clienteById: any = null;
  direccionesByCliente: any = null;
  pedidosByCliente: any = null;

  constructor(private clientesService : ClientesService){}

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clientesService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    })
  }

  cargarClienteById(id: string) {
    this.clientesService.getClientesById(id).subscribe(cliente => {
      this.clienteById = cliente;
    })
  }

  cargarDireccionesByCliente(id: string) {
    this.clientesService.getDireccionesByCliente(id).subscribe(direcciones => {
      this.direccionesByCliente = direcciones.direcciones;
    })
  }

  cargarPedidosByCliente(id: string) {
    this.clientesService.getPedidosByCliente(id).subscribe(pedidos => {
      this.pedidosByCliente = pedidos.pedidos;
    })
  }
}
