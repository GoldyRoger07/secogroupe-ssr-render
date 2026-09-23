import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecogroupeCenters } from './secogroupe-centers';

describe('SecogroupeCenters', () => {
  let component: SecogroupeCenters;
  let fixture: ComponentFixture<SecogroupeCenters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecogroupeCenters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecogroupeCenters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
