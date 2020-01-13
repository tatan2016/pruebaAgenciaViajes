import { Component, OnInit } from '@angular/core';
import { TipoHabitacionService } from 'src/app/shared/tipo-habitacion.service';
import { TipoHabitacion } from 'src/app/shared/tipo-habitacion.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tipo-habitacion-list',
  templateUrl: './tipo-habitacion-list.component.html',
  styles: []
})
export class TipoHabitacionListComponent implements OnInit {

  constructor(private service: TipoHabitacionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.listTipo();
  }

  populateForm(tipo: TipoHabitacion){
    this.service.formData = Object.assign({}, tipo);
  }

  onDelete(Id){
    if(confirm('¿Está seguro de eliminar este tipo de habitación?')){
      this.service.deleteTipo(Id)
      .subscribe(res => {
        this.service.listTipo();
        this.toastr.warning('Tipo de habitación eliminado exitosamente!', 'Listado de tipos de habitación');
      },
        err => {
          console.log(err);
          this.toastr.error('Error!', 'Listado de tipos de habitación');
        })
    }
  }
}
