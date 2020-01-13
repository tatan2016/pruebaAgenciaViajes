import { Component, OnInit } from '@angular/core';
import { AgenciaService } from 'src/app/shared/agencia.service';

@Component({
  selector: 'app-agencia-list',
  templateUrl: './agencia-list.component.html',
  styles: []
})
export class AgenciaListComponent implements OnInit {

  constructor(private service: AgenciaService) { }

  ngOnInit() {
    this.service.listAgencia();
  }

}
