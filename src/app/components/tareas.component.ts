import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarea } from '../models/tarea';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../views/tareas.component.html',
  styleUrl: '../styles/tareas.component.scss'
})

export class TareasComponent {

  tareas: Tarea[] = [];

  constructor(private tareaService : TareaService){}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareaService.getTareas().subscribe(tareas => {
      this.tareas = tareas;
    })
  }
}
