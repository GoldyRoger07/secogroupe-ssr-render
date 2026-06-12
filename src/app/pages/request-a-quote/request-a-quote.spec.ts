import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAQuote } from './request-a-quote';

describe('RequestAQuote', () => {
  let component: RequestAQuote;
  let fixture: ComponentFixture<RequestAQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestAQuote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAQuote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
