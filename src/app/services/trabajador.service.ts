import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajador } from '../models/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  private trabajadorUrl = 'http://192.168.68.57:8081/api/v1/trabajadores';

  constructor(private http: HttpClient) { }

  public getTrabajadores(): Observable<Trabajador[]>  {
    return this.http.get<Trabajador[]>(this.trabajadorUrl);
  }

  public getTrabajadoresById(id: string): Observable<Trabajador> {
    return this.http.get<Trabajador>(this.trabajadorUrl + "/" + id)
  }
}
