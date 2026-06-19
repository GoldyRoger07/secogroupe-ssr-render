import { Component, inject, OnInit, signal } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { Container } from '../../components/container/container';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormAlert } from '../../components/form-alert/form-alert';
import { environment } from '../../../environments/environment';

interface Service {
  name: string;
  code: string;
}

@Component({
  selector: 'request-a-quote',
  imports: [Navbar, Footer, Container, SelectModule, CheckboxModule, ReactiveFormsModule, FormAlert],
  templateUrl: './request-a-quote.html',
  styleUrl: './request-a-quote.css',
})
export default class RequestAQuote implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  services!: Service[];

  isLoading = signal(false);
  alertVisible = signal(false);
  alertType = signal<'success' | 'error'>('success');
  alertMessage = signal('');

  form = this.fb.group({
    serviceCategory: [null as Service | null, Validators.required],
    businessName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    directDialNumber: ['', [Validators.required, Validators.pattern(/^\+?[\d\s\-\(\)]{7,20}$/)]],
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    city: ['', [Validators.required, Validators.minLength(2)]],
    state: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    newsletterOptIn: [false],
  });

  ngOnInit() {
    this.services = [
      { name: 'Hospitality Support', code: 'hospitality_support' },
      { name: 'Janitorial & Cleaning', code: 'janitorial_cleaning' },
      { name: 'Building Maintenance', code: 'building_maintenance' },
      { name: 'Staffing Solutions', code: 'staffing_solutions' },
      { name: 'Concierge & Security Experts', code: 'concierge_security_experts' },
    ];
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.alertVisible.set(false);

    const payload = {
      ...this.form.value,
      serviceCategory: (this.form.value.serviceCategory as Service | null)?.name ?? null,
    };

    this.http.post(`${environment.apiUrl}/quotes`, payload).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.form.reset();
        this.alertType.set('success');
        this.alertMessage.set(
          'Your quote request has been submitted. Our team will contact you within 24 hours.'
        );
        this.alertVisible.set(true);
      },
      error: () => {
        this.isLoading.set(false);
        this.alertType.set('error');
        this.alertMessage.set(
          'Something went wrong. Please try again or contact us directly.'
        );
        this.alertVisible.set(true);
      },
    });
  }

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  getError(field: string): string {
    const ctrl = this.form.get(field);
    if (!ctrl || !ctrl.touched) return '';
    if (ctrl.hasError('required')) return 'This field is required.';
    if (ctrl.hasError('email')) return 'Please enter a valid email address.';
    if (ctrl.hasError('minlength')) return `Minimum ${ctrl.errors?.['minlength'].requiredLength} characters required.`;
    if (ctrl.hasError('maxlength')) return `Maximum ${ctrl.errors?.['maxlength'].requiredLength} characters allowed.`;
    if (ctrl.hasError('pattern')) return 'Please enter a valid phone number.';
    return '';
  }
}
