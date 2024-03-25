import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  private clientesUrl = 'http://192.168.68.56:8081/api/v1/clientes';

  constructor(private http: HttpClient) { }

  public getClientes(): Observable<Cliente[]>  {
    return this.http.get<Cliente[]>(this.clientesUrl);
  }

  public getClientesById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.clientesUrl + "/" + id)
  }

  public getDireccionesByCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.clientesUrl + "/" + id + "/direcciones")
  }

  public getPedidosByCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.clientesUrl + "/" + id + "/pedidos")
  }
}
