import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import Home from './home';
import { LanguageService } from '../../services/language.service';

describe('Home', () => {
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the content of the current language', async () => {
    const language = TestBed.inject(LanguageService);
    const title = () => fixture.nativeElement.querySelector('h1').textContent.trim();

    expect(title()).toBe(language.content().home.title);

    language.setLanguage('en');
    await fixture.whenStable();
    expect(title()).toBe('Welcome to SECO GROUPE Centers');
  });
});
