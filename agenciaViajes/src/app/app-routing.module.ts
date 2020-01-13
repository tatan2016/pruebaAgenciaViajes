import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AgenciaComponent } from './agencia/agencia.component';
import { HotelComponent } from './hotel/hotel.component';
import { ReservaComponent } from './reserva/reserva.component';
import { AgenciaListComponent } from './agencia/agencia-list/agencia-list.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { ReservaListComponent } from './reserva/reserva-list/reserva-list.component';
import { HabitacionComponent } from './hotel/habitacion/habitacion.component';
import { HabitacionListComponent } from './hotel/habitacion/habitacion-list/habitacion-list.component';
import { TipoHabitacionComponent } from './hotel/habitacion/tipo-habitacion/tipo-habitacion.component';

const routes: Routes = [
  {path: 'agencia', component: AgenciaComponent},
  {path: 'agencia/agencia-list', component: AgenciaListComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'hotel/hotel-list', component: HotelListComponent},
  {path: 'hotel/habitacion', component: HabitacionComponent},
  {path: 'hotel/habitacion/habitacion-list', component: HabitacionListComponent},
  {path: 'hotel/habitacion/tipo-habitacion', component: TipoHabitacionComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'reserva/reserva-list', component: ReservaListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
