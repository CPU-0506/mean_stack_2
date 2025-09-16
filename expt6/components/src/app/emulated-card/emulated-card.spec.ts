import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedCard } from './emulated-card';

describe('EmulatedCard', () => {
  let component: EmulatedCard;
  let fixture: ComponentFixture<EmulatedCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmulatedCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmulatedCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
