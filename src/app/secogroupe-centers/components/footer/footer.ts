import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../container/container';
import { CompanyService } from '../../services/company.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'cc-footer',
  imports: [Container, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly language = inject(LanguageService);
  protected readonly company = inject(CompanyService).company;
  protected readonly content = computed(() => this.language.content().footer);
  protected readonly year = new Date().getFullYear();
}
