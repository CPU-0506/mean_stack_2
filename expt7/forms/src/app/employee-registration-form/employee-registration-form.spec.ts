import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegistrationForm } from './employee-registration-form';

describe('EmployeeRegistrationForm', () => {
  let component: EmployeeRegistrationForm;
  let fixture: ComponentFixture<EmployeeRegistrationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeRegistrationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRegistrationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
