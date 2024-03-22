import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { CommonModule } from '@angular/common';
import { Cliente } from '../models/cliente';

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

  getEstadoStyles(estado: string): any {
    let colorFondo: string;
    let colorFuente: string;
    let bordesRedondeados: string;

    switch (estado) {
      case 'PENDIENTE':
        colorFondo = '#be4343';
        colorFuente = 'white';
        bordesRedondeados = '30px';
        break;
      case 'EN_PROCESO':
        colorFondo = 'orange';
        colorFuente = 'black';
        bordesRedondeados = '30px';
        break;
      case 'COMPLETO':
        colorFondo = '#60be43';
        colorFuente = 'black';
        bordesRedondeados = '30px';
        break;
      default:
        colorFondo = 'white';
        colorFuente = 'black';
        bordesRedondeados = '0';
        break;
    }

    return {
      'background-color': colorFondo,
      'color': colorFuente,
      'border-radius': bordesRedondeados,
      'width': 'auto'
    };
  }
}


