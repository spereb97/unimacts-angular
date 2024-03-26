import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, NgFor, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  navItems: string[] = ['Dashboard', 'Produccion', 'Pedidos', 'Trabajadores', 'Clientes', 'Piezas', 'Tareas'];
  navRoutes:  string[] = ['dashboard', 'produccion', 'pedidos', 'trabajadores', 'clientes', 'piezas', 'tareas'];
  navDropdown: string[] = ['Perfil', 'Opciones'];
  navDropdownRoutes: string[] = ['user'];

  visibleItems: string[] = [];
  dropdownItems: string[] = [];

  breackpoint1Active:  boolean = false;
  breakpoint1: number = 1120;
  breackpoint1Item: number = 4;

  breackpoint2Active:  boolean = false;
  breakpoint2: number = 1000;
  breackpoint2Item: number = 2;
  
  bp: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.calculateVisibleItems();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.calculateVisibleItems();
    }
  }

  calculateVisibleItems() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth >= this.breakpoint1 || window.innerWidth < 768) { // 768px es el breakpoint de navbar-expand-md
        this.breackpoint1Active = false;
        this.breackpoint2Active = false;
        this.bp = 0;
        this.visibleItems = this.navItems;
        this.dropdownItems = [];
      } else if (window.innerWidth < this.breakpoint1 && window.innerWidth >= this.breakpoint2) {
        this.breackpoint1Active = true;
        this.bp = this.breackpoint1Item;
        this.visibleItems = this.navItems.slice(0, this.breackpoint1Item);
        this.dropdownItems = this.navItems.slice(this.breackpoint1Item);
      } else {
        this.breackpoint1Active = false;
        this.breackpoint2Active = true;
        this.bp = this.breackpoint2Item;
        this.visibleItems = this.navItems.slice(0, this.breackpoint2Item);
        this.dropdownItems = this.navItems.slice(this.breackpoint2Item);
      }
    }
  }
}
