import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServices } from './card-services';

describe('CardServices', () => {
  let component: CardServices;
  let fixture: ComponentFixture<CardServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
