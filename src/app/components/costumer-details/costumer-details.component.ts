import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from './../../customers.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-costumer-details',
  templateUrl: './costumer-details.component.html',
  styleUrls: ['./costumer-details.component.css']
})
export class CostumerDetailsComponent implements OnInit {

  customer: any;
  angForm: FormGroup;
  title = 'ערוך טיסה';
  constructor(private route: ActivatedRoute, private router: Router, private service: CustomersService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      phoneNumber: ['', Validators.required ],
      emailAddress: ['', Validators.required ],
      creditCard: ['', Validators.required ],
      numberOfPassengers: ['', Validators.required ]
   });
  }

  updateFlight(firstName, lastName, phoneNumber, emailAddress, creditCard, numberOfPassengers) {
    this.route.params.subscribe(params => {
    this.service.updateCustomer(firstName, lastName, phoneNumber, emailAddress, creditCard, numberOfPassengers, params['id']);
    this.router.navigate(['index']);
  });
}

deleteCustomer(id) {
  this.service.deleteCustomer(id).subscribe(res => {
    console.log('Deleted');
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customer = this.service.customerdetails(params['id']).subscribe(res => {
        this.customer = res;
      });
    });
  }
}
