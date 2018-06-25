import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from './../../flight.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  flight: any;
  angForm: FormGroup;
  title = 'ערוך טיסה';
  constructor(private route: ActivatedRoute, private router: Router, private service: FlightService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      codeflight: ['', Validators.required ],
      target: ['', Validators.required ],
      departure: ['', Validators.required ],
      back: ['', Validators.required ],
      status: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  updateFlight(codeflight, target, departure, back, status, price) {
    this.route.params.subscribe(params => {
    this.service.updateFlight(codeflight,  target, departure, back, status, price, params['id']);
    this.router.navigate(['index']);
  });
}

deleteFlight(id) {
  this.service.deleteFlight(id).subscribe(res => {
    console.log('Deleted');
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.flight = this.service.editFlight(params['id']).subscribe(res => {
        this.flight = res;
      });
    });
  }
}
