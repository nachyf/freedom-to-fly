import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorOperationsComponent } from './administrator-operations.component';

describe('AdministratorOperationsComponent', () => {
  let component: AdministratorOperationsComponent;
  let fixture: ComponentFixture<AdministratorOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
