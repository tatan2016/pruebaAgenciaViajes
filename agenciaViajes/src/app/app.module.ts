import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

import { AgenciaComponent } from './agencia/agencia.component';
import { AgenciaListComponent } from './agencia/agencia-list/agencia-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HotelComponent } from './hotel/hotel.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ReservaListComponent } from './reserva/reserva-list/reserva-list.component';
import { HabitacionComponent } from './hotel/habitacion/habitacion.component';
import { HabitacionListComponent } from './hotel/habitacion/habitacion-list/habitacion-list.component';
import { AgenciaService } from './shared/agencia.service';
import { TipoHabitacionComponent } from './hotel/habitacion/tipo-habitacion/tipo-habitacion.component';
import { TipoHabitacionRegistroComponent } from './hotel/habitacion/tipo-habitacion/tipo-habitacion-registro/tipo-habitacion-registro.component';
import { TipoHabitacionListComponent } from './hotel/habitacion/tipo-habitacion/tipo-habitacion-list/tipo-habitacion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenciaComponent,
    AgenciaListComponent,
    HotelComponent,
    HotelListComponent,
    ReservaComponent,
    ReservaListComponent,
    HabitacionComponent,
    HabitacionListComponent,
    TipoHabitacionComponent,
    TipoHabitacionRegistroComponent,
    TipoHabitacionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [AgenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
