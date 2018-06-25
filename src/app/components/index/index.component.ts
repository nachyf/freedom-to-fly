import { FlightService } from './../../flight.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FlightPipe } from './../../flight.pipe';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public flightSchedule: any;

  public query: any = '';

  constructor(private http: HttpClient, private service: FlightService) {}

  ngOnInit() {
    this.getFlights();
  }
  deleteFlight(id) {
    this.service.deleteFlight(id).subscribe(res => {
      console.log('Deleted');
    });
}
  getFlights() {
    this.service.getFlights().subscribe(res => {
      this.flightSchedule = res;
    });
  }

  queryChange(value) {
    this.query = value.value;
  }
}
