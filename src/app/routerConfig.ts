import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AdministratorOperationsComponent } from './components/administrator-operations/administrator-operations.component';
import { FlightsTableComponent } from './components/flights-table/flights-table.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { CostumerDetailsComponent } from './components/costumer-details/costumer-details.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const appRoutes: Routes = [
  { path: 'flightstable',
    component: FlightsTableComponent
  },
  { path: '',
  component: WelcomeComponent
},
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'flightdetails/:id',
    component: FlightDetailsComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'costumer-details/:id',
    component: CostumerDetailsComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'administrator',
    component: AdministratorOperationsComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'edit/:id', component: EditComponent},
      { path: 'costumer-details/:id', component: CostumerDetailsComponent},
      { path: 'create', component: CreateComponent },
      { path: 'index', component: IndexComponent },
      { path: 'flightdetails/:id', component: FlightDetailsComponent },
      { path: 'customers', component: CustomersComponent }
    ]

  },
  { path: 'index',
    component: IndexComponent
  },
  { path: 'enrollment',
    component: EnrollmentComponent
  }
];
