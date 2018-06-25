import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../flight.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'הוסף טיסה לטבלת הטיסות';
  angForm: FormGroup;
  constructor(private flightservice: FlightService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      codeflight: ['', Validators.required ],
      departure: ['', Validators.required ],
      back: ['', Validators.required ],
      target: ['', Validators.required ],
      status: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }
  addFlight(codeflight, departure, back, target, status, price) {
      this.flightservice.addFlight(codeflight, departure, back, target, status, price);
  }
  ngOnInit() {
  }
}
