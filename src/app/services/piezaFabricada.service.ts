import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PiezaFabricada } from '../models/piezaFabricada';
import { Observable } from 'rxjs';
import { Produccion } from '../models/produccion';

@Injectable({
  providedIn: 'root'
})

export class PiezaFabricadaService {

  private piezasFabricadasUrl = 'http://192.168.68.56:8081/api/v1/piezas_fabricadas';

  constructor(private http: HttpClient) { }

  public getPiezasFabricadas(): Observable<PiezaFabricada[]>  {
    return this.http.get<PiezaFabricada[]>(this.piezasFabricadasUrl);
  }

  public getProduccion(id: string): Observable<PiezaFabricada>  {
    return this.http.get<PiezaFabricada>(this.piezasFabricadasUrl + "/" + id);
  }
}
