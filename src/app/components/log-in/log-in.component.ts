import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../../customers.service';
import { FormGroup, FormControl, FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
