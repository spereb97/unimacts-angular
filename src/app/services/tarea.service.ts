import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})

export class TareaService {

  private tareasUrl = 'http://192.168.68.56:8081/api/v1/tareas';

  constructor(private http: HttpClient) { }

  public getTareas(): Observable<Tarea[]>  {
    return this.http.get<Tarea[]>(this.tareasUrl);
  }
}
