import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produccion } from '../models/produccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduccionService {

  private produccionUrl = 'http://192.168.68.57:8081/api/v1/producciones';

  constructor(private http: HttpClient) { }

  public getProduccion(): Observable<Produccion[]>  {
    return this.http.get<Produccion[]>(this.produccionUrl);
  }
}
