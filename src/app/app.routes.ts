import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard.component';
import { PedidosComponent } from './components/pedidos.component';
import { ClientesComponent } from './components/clientes.component';
import { TrabajadoresComponent } from './components/trabajadores.component';
import { PiezasComponent } from './components/piezas.component';
import { ProduccionComponent } from './components/produccion.component';
import { TareasComponent } from './components/tareas.component';
import { UserComponent } from './components/user.component';

export const routes: Routes = [
    {
        path:'',
        title:'Main page',
        component: DashboardComponent
    },
    {
        path:'dashboard',
        title:'Dashboard page',
        component: DashboardComponent
    },
    {
        path:'pedidos',
        title:'Pedidos',
        component: PedidosComponent
    },
    {
        path:'clientes',
        title:'Clientes',
        component: ClientesComponent
    },
    {
        path:'trabajadores',
        title:'Trabajadores',
        component: TrabajadoresComponent
    },
    {
        path:'piezas',
        title:'Piezas',
        component: PiezasComponent
    },
    {
        path:'produccion',
        title:'Produccion',
        component: ProduccionComponent
    },
    {
        path:'tareas',
        title:'Tareas',
        component: TareasComponent
    },
    {
        path:'user',
        title:'Usuario',
        component: UserComponent
    }
];
