import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../services/trabajador.service';
import { Trabajador } from '../models/trabajador';

@Component({
  selector: 'app-trabajadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../views/trabajadores.component.html',
  styleUrl: '../styles/trabajadores.component.scss'
})

export class TrabajadoresComponent implements OnInit{
  
  trabajadores: Trabajador[] = [];
  trabajadorById: any = null;

  constructor(private trabajadorService : TrabajadorService){}

  ngOnInit(): void {
    this.cargarTrabajadores();
  }

  cargarTrabajadores() {
    this.trabajadorService.getTrabajadores().subscribe(trabajadores => {
      this.trabajadores = trabajadores;
    })
  }

  cargarTrabajadorById(id: string) {
    this.trabajadorService.getTrabajadoresById(id).subscribe(trabajador => {
      this.trabajadorById = trabajador;
    })
  }
}
