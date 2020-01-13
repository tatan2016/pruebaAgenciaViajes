import { Component, OnInit } from '@angular/core';
import { TipoHabitacionService } from 'src/app/shared/tipo-habitacion.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tipo-habitacion-registro',
  templateUrl: './tipo-habitacion-registro.component.html',
  styles: []
})
export class TipoHabitacionRegistroComponent implements OnInit {

  constructor(private service: TipoHabitacionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form != null)
      form.resetForm();
      this.service.formData = {
        Id : 0,
        NombreTipo : '',
        DescripcionTipo : ''
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.Id == 0)
      this.insertTipoHabitacion(form);
      else
      this.updateTipoHabitacion(form);
  }

  insertTipoHabitacion(form:NgForm){
    this.service.postTipo().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Tipo de habitación registrado exitosamente!', 'Registro de tipos');
        this.service.listTipo();
      },
      err => {
        console.log(err);
        this.toastr.error('Error!', 'Registro de tipos');
      }
    )
  }

  updateTipoHabitacion(form:NgForm){
    this.service.putTipo().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Tipo de habitación actualizado exitosamente!', 'Registro de tipos');
        this.service.listTipo();
      },
      err => {
        console.log(err);
        this.toastr.error('Error!', 'Registro de tipos');
      }
    )
  }
}
