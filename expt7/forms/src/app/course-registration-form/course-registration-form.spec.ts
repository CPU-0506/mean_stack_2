import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegistrationForm } from './course-registration-form';

describe('CourseRegistrationForm', () => {
  let component: CourseRegistrationForm;
  let fixture: ComponentFixture<CourseRegistrationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseRegistrationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseRegistrationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
