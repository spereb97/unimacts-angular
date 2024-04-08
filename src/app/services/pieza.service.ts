import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pieza } from '../models/pieza';

@Injectable({
  providedIn: 'root'
})

export class PiezaService {

  private piezasUrl = 'http://192.168.68.57:8081/api/v1/piezas';

  constructor(private http: HttpClient) { }

  public getPiezas(): Observable<Pieza[]>  {
    return this.http.get<Pieza[]>(this.piezasUrl);
  }
}
