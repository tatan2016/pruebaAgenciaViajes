import { Component, OnInit } from '@angular/core';
import { HotelService } from '../shared/hotel.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styles: []
})
export class HotelComponent implements OnInit {

  constructor(private service: HotelService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.listAgencia();
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form != null)
      form.resetForm();
      this.service.formData = {
        Id : 0,
        AgenciaId: 0,
        Nit: '',
        NombreHotel: '',
        TelefonoHotel: '',
        DireccionHotel: '',
        Estado: 'Activo'
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.Id == 0)
      this.insertAgencia(form);
  }

  insertAgencia(form:NgForm){
    this.service.postHotel().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Hotel registrado exitosamente!', 'Registro de hoteles');
      },
      err => {
        console.log(err);
        this.toastr.error('Error!', 'Registro de hoteles');
      }
    )
  }

}
