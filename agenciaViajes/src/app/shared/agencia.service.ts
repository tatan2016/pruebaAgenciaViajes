import { Injectable } from '@angular/core';
import { Agencia } from './agencia.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
  formData:Agencia
  readonly rootURL = 'http://localhost:61471/api';
  listAgencias: Agencia[] = [];

  constructor(private http: HttpClient) { }

  postAgencia(){
    return this.http.post(this.rootURL + '/Agencia', this.formData);
  }

  listAgencia(){
    this.http.get(this.rootURL + '/Agencia')
    .toPromise()
    .then(res => this.listAgencias = res as Agencia[]);
  }
}
