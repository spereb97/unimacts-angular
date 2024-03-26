import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiezaFabricada } from '../models/piezaFabricada';
import { PiezaFabricadaService } from '../services/piezaFabricada.service';
import { Produccion } from '../models/produccion';
import { ProduccionService } from '../services/produccion.service';

@Component({
  selector: 'app-produccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../views/produccion.component.html',
  styleUrl: '../styles/produccion.component.scss'
})

export class ProduccionComponent implements OnInit{

  tabs = [
    { id: 'piezasFabricadas', title: 'PIEZAS  FABRICADAS', header: 'PIEZAS FABRICADAS' },
    { id: 'produccion', title: 'PRODUCCION', header: 'PRODUCCION' }
  ];

  activeTab: string = this.tabs[0].id;
  
  piezasFabricadas: PiezaFabricada[] = [];
  produccionesPiezaFabricada: any = null;
  piezaSeleccionada: any = null;
  producciones: Produccion[] = [];

  constructor(private piezaFabricadaService : PiezaFabricadaService,
              private produccionService : ProduccionService){}

  ngOnInit(): void {
    this.cargarPiezasFabricadas();
    this.cargarProduccion();
  }

  /**
   * TABS
   */

  /**
   * Metodo que activa el tab correspondiente al id pasado como parametro.
   * @param tabId el id del tab a activar.
   */
  activateTab(tabId: string){
    this.activeTab = tabId;
  }

  /**
   * TABS -> Piezas fabricadas
   */

  cargarPiezasFabricadas() {
    this.piezaFabricadaService.getPiezasFabricadas().subscribe(piezasFabricadas => {
      this.piezasFabricadas = piezasFabricadas;
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

  mostrarProduccion(piezaFabricada: any) {
    if(this.piezaSeleccionada === piezaFabricada) {
      this.piezaSeleccionada = null;
    } else {
      this.piezaSeleccionada = piezaFabricada;
    }
  }

  cargarPiezaFabricadaById(id: string) {
    this.piezaFabricadaService.getProduccion(id).subscribe(producciones => {
      this.produccionesPiezaFabricada = producciones.producciones;
    })
  }

  /**
   * TABS -> Produccion
   */

  cargarProduccion() {
    this.produccionService.getProduccion().subscribe(producciones => {
      this.producciones = producciones;
    })
  }
}
