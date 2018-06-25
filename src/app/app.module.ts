import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { appRoutes } from './routerConfig';

import { FlightService } from './flight.service';
import { CustomersService } from './customers.service';
import { CustomersComponent } from './components/customers/customers.component';
import { FlightPipe } from './flight.pipe';
import { AdministratorOperationsComponent } from './components/administrator-operations/administrator-operations.component';
import { FlightsTableComponent } from './components/flights-table/flights-table.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { CostumerDetailsComponent } from './components/costumer-details/costumer-details.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CustomersPipe } from './customers.pipe';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    CustomersComponent,
    FlightPipe,
    AdministratorOperationsComponent,
    FlightsTableComponent,
    EnrollmentComponent,
    FlightDetailsComponent,
    CostumerDetailsComponent,
    LogInComponent,
    CustomersPipe,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [FlightService, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
