import { Component, inject, OnInit, signal } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { Container } from '../../components/container/container';
import { SelectModule } from 'primeng/select';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormAlert } from '../../components/form-alert/form-alert';
import { environment } from '../../../environments/environment';

interface Position {
  name: string;
  code: string;
}

@Component({
  selector: 'hiring-page',
  imports: [Navbar, Footer, Container, SelectModule, ReactiveFormsModule, FormAlert],
  templateUrl: './hiring-page.html',
})
export default class HiringPage implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  positions!: Position[];

  isLoading = signal(false);
  alertVisible = signal(false);
  alertType = signal<'success' | 'error'>('success');
  alertMessage = signal('');

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    position: [null as Position | null, Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s\-\(\)]{7,20}$/)]],
  });

  ngOnInit() {
    this.positions = [
      'Front Desk Agent',
      'Administrative Staff',
      'Housekeeper',
      'Houseman',
      'Server',
      'Bartender',
      'Maintenance Worker',
      'Concierge',
      'Kitchen Staff',
      'Chef',
      'Security Officer',
      'Cashier',
      'Technician',
      'Cleaning Staff',
      'Host / Hostess',
      'Driver',
      'Customer Service Representative',
      'Event Staff',
      'Cleaner',
    ].map((name) => ({ name, code: name.toLowerCase().replace(/[^a-z0-9]+/g, '_') }));
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
      position: (this.form.value.position as Position | null)?.name ?? null,
    };

    this.http.post(`${environment.apiUrl}/applications`, payload).subscribe({
      next: (response: any) => {
        this.isLoading.set(false);
        this.alertType.set('success');
        this.alertMessage.set(
          response?.message ?? 'Thank you! Your application has been received.'
        );
        this.alertVisible.set(true);
        this.form.reset();
      },
      error: (e: any) => {
        console.log(e);
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
    if (ctrl.hasError('minlength'))
      return `Minimum ${ctrl.errors?.['minlength'].requiredLength} characters required.`;
    if (ctrl.hasError('maxlength'))
      return `Maximum ${ctrl.errors?.['maxlength'].requiredLength} characters allowed.`;
    if (ctrl.hasError('pattern')) return 'Please enter a valid phone number.';
    return '';
  }
}
