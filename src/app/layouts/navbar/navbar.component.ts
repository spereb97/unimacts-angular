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
  navItems: string[] = ['Dashboard', 'Pedidos', 'Clientes', 'Trabajadores', 'Piezas', 'Produccion', 'Tareas'];
  navRoutes:  string[] = ['dashboard', 'pedidos', 'clientes', 'trabajadores', 'piezas', 'produccion', 'tareas'];
  navDropdown: string[] = ['Perfil', 'Opciones'];
  navDropdownRoutes: string[] = ['user'];
}
