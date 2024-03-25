import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navItems: string[] = ['Dashboard', 'Produccion', 'Pedidos', 'Trabajadores', 'Clientes', 'Piezas', 'Tareas'];
  navRoutes:  string[] = ['dashboard', 'produccion', 'pedidos', 'trabajadores', 'clientes', 'piezas', 'tareas'];
  navDropdown: string[] = ['Perfil', 'Opciones'];
  navDropdownRoutes: string[] = ['user'];
}
