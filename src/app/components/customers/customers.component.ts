import { CustomersService } from '../../customers.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CustomersPipe } from './../../customers.pipe';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;

  public query: any = '';

  constructor(private http: HttpClient, private service: CustomersService) {}

  ngOnInit() {
    this.getCustomers();
  }
  deleteCustomer(id) {
    this.service.deleteCustomer(id).subscribe(res => {
      console.log('Deleted');
    });
}
getCustomers() {
    this.service.getCustomers().subscribe(res => {
      this.customers = res;
    });
  }

  queryChange(value) {
    this.query = value.value;
  }
}


