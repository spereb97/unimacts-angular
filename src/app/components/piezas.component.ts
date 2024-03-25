import { Component, OnInit } from '@angular/core';
import { PiezaService } from '../services/pieza.service';
import { Pieza } from '../models/pieza';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-piezas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../views/piezas.component.html',
  styleUrl: '../styles/piezas.component.scss'
})

export class PiezasComponent implements OnInit {

  piezas: Pieza[] = [];

  constructor(private piezaService : PiezaService){}

  ngOnInit(): void {
    this.cargarPiezas();
  }

  cargarPiezas() {
    this.piezaService.getPiezas().subscribe(piezas => {
      this.piezas = piezas;
    })
  }
}
