import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingMaintenance } from './building-maintenance';

describe('BuildingMaintenance', () => {
  let component: BuildingMaintenance;
  let fixture: ComponentFixture<BuildingMaintenance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingMaintenance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingMaintenance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
