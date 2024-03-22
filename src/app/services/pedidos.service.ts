import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private pedidosUrl = 'http://192.168.68.56:8081/api/v1/pedidos';

  constructor(private http: HttpClient) { }

  public getPedidos(): Observable<Pedido[]>  {
    return this.http.get<Pedido[]>(this.pedidosUrl);
  }

  public getDetallePedidos(id: string): Observable<Pedido>  {
    return this.http.get<Pedido>(this.pedidosUrl + "/" + id);
  }

}
