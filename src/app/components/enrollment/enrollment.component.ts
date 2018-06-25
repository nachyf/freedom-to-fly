import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../customers.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {


  title = 'הכנס פרטים';
  angForm: FormGroup;
  constructor(private castomersservice: CustomersService, private fb: FormBuilder) {
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
  enrollment(firstName, lastName, phoneNumber, emailAddress, creditCard, numberOfPassengers) {
      this.castomersservice.enrollment(firstName, lastName, phoneNumber, emailAddress, creditCard, numberOfPassengers);
  }
  ngOnInit() {
  }
}
