import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { SeoService } from '../../services/seo-service';
import { Container } from '../../components/container/container';
import { Footer } from '../../components/footer/footer';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormAlert } from '../../components/form-alert/form-alert';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

interface Option {
  name: string;
  code: string;
}

@Component({
  selector: 'app-preferred-vendors',
  imports: [
    Navbar,
    Container,
    Footer,
    SelectModule,
    MultiSelectModule,
    InputNumberModule,
    ReactiveFormsModule,
    FormAlert,
    RouterLink
  ],
  templateUrl: './preferred-vendors.html',
  styleUrl: './preferred-vendors.css',
})
export default class PreferredVendors {
  seo = inject(SeoService);
  platformId = inject(PLATFORM_ID);
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  isLoading = signal(false);
  alertVisible = signal(false);
  alertType = signal<'success' | 'error'>('success');
  alertMessage = signal('');

  serviceTypes: Option[] = [
    { name: 'Janitorial & Cleaning', code: 'janitorial_cleaning' },
    { name: 'Building Maintenance', code: 'building_maintenance' },
    { name: 'Hospitality Support', code: 'hospitality_support' },
    { name: 'Staffing Solutions', code: 'staffing_solutions' },
    { name: 'Concierge & Security', code: 'concierge_security' },
    { name: 'Landscaping & Grounds', code: 'landscaping_grounds' },
    { name: 'HVAC & Plumbing', code: 'hvac_plumbing' },
    { name: 'Electrical', code: 'electrical' },
    { name: 'Pest Control', code: 'pest_control' },
    { name: 'Waste Management', code: 'waste_management' },
    { name: 'Snow Removal', code: 'snow_removal' },
    { name: 'Window Cleaning', code: 'window_cleaning' },
  ];

  states: Option[] = [
    { name: 'Alabama', code: 'AL' },
    { name: 'Alaska', code: 'AK' },
    { name: 'Arizona', code: 'AZ' },
    { name: 'Arkansas', code: 'AR' },
    { name: 'California', code: 'CA' },
    { name: 'Colorado', code: 'CO' },
    { name: 'Connecticut', code: 'CT' },
    { name: 'Delaware', code: 'DE' },
    { name: 'District of Columbia', code: 'DC' },
    { name: 'Florida', code: 'FL' },
    { name: 'Georgia', code: 'GA' },
    { name: 'Hawaii', code: 'HI' },
    { name: 'Idaho', code: 'ID' },
    { name: 'Illinois', code: 'IL' },
    { name: 'Indiana', code: 'IN' },
    { name: 'Iowa', code: 'IA' },
    { name: 'Kansas', code: 'KS' },
    { name: 'Kentucky', code: 'KY' },
    { name: 'Louisiana', code: 'LA' },
    { name: 'Maine', code: 'ME' },
    { name: 'Maryland', code: 'MD' },
    { name: 'Massachusetts', code: 'MA' },
    { name: 'Michigan', code: 'MI' },
    { name: 'Minnesota', code: 'MN' },
    { name: 'Mississippi', code: 'MS' },
    { name: 'Missouri', code: 'MO' },
    { name: 'Montana', code: 'MT' },
    { name: 'Nebraska', code: 'NE' },
    { name: 'Nevada', code: 'NV' },
    { name: 'New Hampshire', code: 'NH' },
    { name: 'New Jersey', code: 'NJ' },
    { name: 'New Mexico', code: 'NM' },
    { name: 'New York', code: 'NY' },
    { name: 'North Carolina', code: 'NC' },
    { name: 'North Dakota', code: 'ND' },
    { name: 'Ohio', code: 'OH' },
    { name: 'Oklahoma', code: 'OK' },
    { name: 'Oregon', code: 'OR' },
    { name: 'Pennsylvania', code: 'PA' },
    { name: 'Rhode Island', code: 'RI' },
    { name: 'South Carolina', code: 'SC' },
    { name: 'South Dakota', code: 'SD' },
    { name: 'Tennessee', code: 'TN' },
    { name: 'Texas', code: 'TX' },
    { name: 'Utah', code: 'UT' },
    { name: 'Vermont', code: 'VT' },
    { name: 'Virginia', code: 'VA' },
    { name: 'Washington', code: 'WA' },
    { name: 'West Virginia', code: 'WV' },
    { name: 'Wisconsin', code: 'WI' },
    { name: 'Wyoming', code: 'WY' },
  ];

  countryCodes: Option[] = [
    { name: '+1 (US)', code: '+1' },
    { name: '+1 (CA)', code: '+1-CA' },
    { name: '+1 (BS)', code: '+1-BS' },
    { name: '+55 (BR)', code: '+55' },
    { name: '+509 (HT)', code: '+509' },
    { name: '+33 (FR)', code: '+33' },
    { name: '+44 (UK)', code: '+44' },
  ];

  form = this.fb.group({
    businessName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    serviceTypes: this.fb.control<Option[] | null>(null, Validators.required),
    states: this.fb.control<Option[] | null>(null, Validators.required),
    cities: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
    contactName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    contactEmail: ['', [Validators.required, Validators.email]],
    countryCode: [this.countryCodes[0] as Option | null, Validators.required],
    contactPhone: [null as number | null, [Validators.required]],
    website: ['', [Validators.pattern(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/)]],
    additionalNotes: ['', [Validators.maxLength(1000)]],
  });

  constructor() {
    this.seo.update({
      title: 'Become a Preferred Vendor Partner | SECO Groupe ',
      description:
        'Join our network of certified preferred vendors. Gain access to exclusive commercial cleaning and maintenance contracts with zero marketing costs. Apply online today.',
      path: '/preferred-vendors',
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.alertVisible.set(false);

    const value = this.form.value;
    const dialCode = value.countryCode?.code.split('-')[0] ?? '';

    const payload = {
      businessName: value.businessName,
      serviceTypes: (value.serviceTypes ?? []).map((s) => s.name),
      states: (value.states ?? []).map((s) => s.name),
      cities: value.cities,
      contactName: value.contactName,
      contactEmail: value.contactEmail,
      contactPhone: `${dialCode}${value.contactPhone ?? ''}`,
      website: value.website || null,
      additionalNotes: value.additionalNotes || null,
    };

    this.http.post(`${environment.apiUrl}/preferred-vendors`, payload).subscribe({
      next: (response: any) => {
        this.isLoading.set(false);
        this.alertType.set('success');
        this.alertMessage.set(
          response?.message ?? 'Thank you! Your application has been received.',
        );
        this.alertVisible.set(true);
        this.form.reset({ countryCode: this.countryCodes[0] });
      },
      error: () => {
        this.isLoading.set(false);
        this.alertType.set('error');
        this.alertMessage.set('Something went wrong. Please try again or contact us directly.');
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
    if (ctrl.hasError('pattern')) return 'Please enter a valid URL.';
    return '';
  }
}
