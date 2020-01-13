import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/shared/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styles: []
})
export class HotelListComponent implements OnInit {

  constructor(private service: HotelService) { }

  ngOnInit() {
    this.service.listHotel();
  }

}
