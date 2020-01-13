import { Injectable } from '@angular/core';
import { Hotel } from './hotel.model';
import { HttpClient } from '@angular/common/http';
import { Agencia } from './agencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  formData:Hotel
  readonly rootURL = 'http://localhost:61471/api';
  listHoteles: Hotel[] = [];
  listAgencias: Agencia[] = [];

  constructor(private http: HttpClient) { }

  listAgencia(){
    this.http.get(this.rootURL + '/Agencia')
    .toPromise()
    .then(res => this.listAgencias = res as Agencia[]);
  }

  postHotel(){
    return this.http.post(this.rootURL + '/Hotel', this.formData);
  }

  listHotel(){
    this.http.get(this.rootURL + '/Hotel')
    .toPromise()
    .then(res => this.listHoteles = res as Hotel[]);
  }
}
