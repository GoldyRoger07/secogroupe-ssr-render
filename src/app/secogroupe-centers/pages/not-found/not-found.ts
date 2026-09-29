import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../components/container/container';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'cc-not-found',
  imports: [Container, RouterLink],
  templateUrl: './not-found.html',
})
export default class NotFound {
  protected readonly language = inject(LanguageService);
  protected readonly content = computed(() => this.language.content().notFound);
}
