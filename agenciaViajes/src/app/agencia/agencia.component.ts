import { Component, OnInit } from '@angular/core';
import { AgenciaService } from '../shared/agencia.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styles: []
})
export class AgenciaComponent implements OnInit {

  constructor(private service: AgenciaService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form != null)
      form.resetForm();
      this.service.formData = {
        Id : 0,
        Nit: 0,
        NombreAgencia: '',
        TelefonoAgencia: '',
        DireccionAgencia: ''
    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.Id == 0)
      this.insertAgencia(form);
  }

  insertAgencia(form:NgForm){
    this.service.postAgencia().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Agencia registrada exitosamente!', 'Registro de agencias');
      },
      err => {
        console.log(err);
        this.toastr.error('Error!', 'Registro de agencias');
      }
    )
  }

}
