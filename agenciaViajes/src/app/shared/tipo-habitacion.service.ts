import { Injectable } from '@angular/core';
import { TipoHabitacion } from './tipo-habitacion.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoHabitacionService {
  formData:TipoHabitacion
  readonly rootURL = 'http://localhost:61471/api';
  listTipos: TipoHabitacion[] = [];

  constructor(private http: HttpClient) { }

  postTipo(){
    return this.http.post(this.rootURL + '/TipoHabitacion', this.formData);
  }

  putTipo(){
    return this.http.put(this.rootURL + '/TipoHabitacion/' + this.formData.Id, this.formData);
  }

  deleteTipo(id){
    return this.http.delete(this.rootURL + '/TipoHabitacion/' + id);
  }

  listTipo(){
    this.http.get(this.rootURL + '/TipoHabitacion')
    .toPromise()
    .then(res => this.listTipos = res as TipoHabitacion[]);
  }

}
