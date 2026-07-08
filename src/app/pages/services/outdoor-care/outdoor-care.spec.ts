import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorCare } from './outdoor-care';

describe('OutdoorCare', () => {
  let component: OutdoorCare;
  let fixture: ComponentFixture<OutdoorCare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutdoorCare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorCare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
