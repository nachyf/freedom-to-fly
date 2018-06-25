import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FlightService {

  getFlight(): any {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line:member-ordering
  result: any;
  constructor(private http: HttpClient) {}

  addFlight(codeflight, target, departure, back, status, price) {
    const uri = 'http://localhost:4000/FlightSchedule/add';
    const obj = {
      codeflight: codeflight,
      target: target,
      departure: departure,
      back: back,
      status: status,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getFlights() {
    const uri = 'http://localhost:4000/flightSchedule';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  flightdetails(id) {
    const uri = 'http://localhost:4000/FlightSchedule/flight-details/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editFlight(id) {
    const uri = 'http://localhost:4000/flightSchedule/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateFlight(codeflight, target, departure, back, status, price, id) {
    const uri = 'http://localhost:4000/flightSchedule/update/' + id;

    const obj = {
      codeflight: codeflight,
      target: target,
      departure: departure,
      back: back,
      status: status,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteFlight(id) {
    const uri = 'http://localhost:4000/flightSchedule/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
