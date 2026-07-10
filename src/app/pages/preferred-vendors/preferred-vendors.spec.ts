import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredVendors } from './preferred-vendors';

describe('PreferredVendors', () => {
  let component: PreferredVendors;
  let fixture: ComponentFixture<PreferredVendors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferredVendors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferredVendors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
