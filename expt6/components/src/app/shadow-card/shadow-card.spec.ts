import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowCard } from './shadow-card';

describe('ShadowCard', () => {
  let component: ShadowCard;
  let fixture: ComponentFixture<ShadowCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadowCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
