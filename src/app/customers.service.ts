import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomersService {

  getCustomer(): any {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line:member-ordering
  result: any;
  constructor(private http: HttpClient) {}

  enrollment(firstName, lastName, phoneNumber, emailAddress, creditCard, numberOfPassengers) {
    const uri = 'http://localhost:4000/customers/add';
    const obj = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      creditCard: creditCard,
      numberOfPassengers: numberOfPassengers

    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }
  editCustomer(id) {
    const uri = 'http://localhost:4000/customers/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  customerdetails(id) {
    const uri = 'http://localhost:4000/customers/costumer-details/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  getCustomers() {
    const uri = 'http://localhost:4000/customers';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateCustomer(firstName, lastName, phoneNumber, emailAddress, creditCard, numberOfPassengers, id) {
    const uri = 'http://localhost:4000/customers/update/' + id;

    const obj = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      creditCard: creditCard,
      numberOfPassengers: numberOfPassengers
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCustomer(id) {
    const uri = 'http://localhost:4000/customers/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
