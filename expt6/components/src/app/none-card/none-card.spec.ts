import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneCard } from './none-card';

describe('NoneCard', () => {
  let component: NoneCard;
  let fixture: ComponentFixture<NoneCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoneCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoneCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
