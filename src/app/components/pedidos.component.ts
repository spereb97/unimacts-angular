import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../views/pedidos.component.html',
  styleUrl: '../styles/pedidos.component.scss'
})
export class PedidosComponent implements OnInit{

  pedidos: Pedido[] = [];
  detalles: any = null;
  pedidoSeleccionado: any = null;

  constructor(private pedidosService : PedidosService){}

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    this.pedidosService.getPedidos().subscribe(pedidos => {
      this.pedidos = pedidos;
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

  mostrarDetalles(pedido: any): void {
    if(this.pedidoSeleccionado === pedido) {
      this.pedidoSeleccionado = null;
    } else {
      this.pedidoSeleccionado = pedido;
    }
  }

  cargarPedidoById(id: string) {
    this.pedidosService.getDetallePedidos(id).subscribe(detalles => {
      this.detalles = detalles.detallesPedido;
    })
  }
}
