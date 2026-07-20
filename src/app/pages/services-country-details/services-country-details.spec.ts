import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCountryDetails } from './services-country-details';

describe('ServicesCountryDetails', () => {
  let component: ServicesCountryDetails;
  let fixture: ComponentFixture<ServicesCountryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCountryDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCountryDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
