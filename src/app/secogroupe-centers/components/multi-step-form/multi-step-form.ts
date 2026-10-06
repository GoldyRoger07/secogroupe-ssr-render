import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'cc-multi-step-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './multi-step-form.html',
  styleUrl: './multi-step-form.css'
})
export class MultiStepForm{

  currentStep = 1;

  form: FormGroup;

  languages = [
  {
    code: 'af',
    name: 'English',
    selected: false,
    proficiency: '',
    primary: false
  },
  {
    code: 'ak',
    name: 'French',
    selected: false,
    proficiency: '',
    primary: false
  },
  {
    code: 'sq',
    name: 'Spanish',
    selected: false,
    proficiency: '',
    primary: false
  },
 
];



languageSearch = '';
languageError = false;

experience = {
  supportExperience: '',
  selectedWork: [] as string[],
  otherSelected: false,
  otherDescription: ''
};

experienceError = false;


technicalSupportOptions = [
  'Account/password support',
  'Connectivity troubleshooting',
  'Hardware troubleshooting',
  'Help-desk',
  'Mobile-device support',
  'Product support',
  'Remote assistance',
  'Software troubleshooting',
  'Ticket management',
  'Tier 1 support',
  'Tier 2 support'
];


virtualAssistanceOptions = [
  'Administrative assistance',
  'Appointment management',
  'Calendar management',
  'CRM management',
  'Data entry',
  'Document preparation',
  'Email management',
  'Executive assistance',
  'Follow-up',
  'General assistance',
  'Project coordination',
  'Reports',
  'Research',
  'Travel management'
];


ecommerceOptions = [
  'Amazon support',
  'Buyer support',
  'Inventory support',
  'Marketplace support',
  'Order tracking',
  'Payment support',
  'Product listing',
  'Product-information support',
  'Returns/refunds',
  'Seller support',
  'Shipping support',
  'Shopify support'
];


backOfficeOptions = [
  'Application processing',
  'Claims processing',
  'Content moderation',
  'Data entry/verification',
  'Document processing',
  'Email processing',
  'Form review',
  'Internet research',
  'Order processing',
  'Quality assurance',
  'Records/database management'
];


customerSupportOptions = [
  'Appointment scheduling',
  'Billing support',
  'Complaint resolution',
  'Customer success',
  'Email support',
  'Escalation',
  'Inbound customer service',
  'Live-chat support',
  'Order support',
  'Outbound customer service',
  'Phone support',
  'Refund and return support',
  'Retention',
  'Social-media support'
];


salesOptions = [
  'Appointment setting',
  'Cold calling',
  'Collections',
  'Fundraising',
  'Inbound sales',
  'Lead generation',
  'Outbound sales',
  'Real-estate lead calling',
  'Retention sales',
  'Sales development',
  'Surveys',
  'Telesales',
  'Upselling/cross-selling'
];


industryOptions = [
  'Banking/financial services',
  'Education',
  'Government',
  'Healthcare',
  'Insurance',
  'Legal intake',
  'Logistics',
  'Property management',
  'Real estate',
  'Retail',
  'Telecommunications',
  'Travel/hospitality',
  'Utilities'
];


languageServicesOptions = [
  'Community interpretation',
  'Consecutive interpretation',
  'Document translation',
  'Legal interpretation',
  'Localization',
  'Medical interpretation',
  'Over-the-phone interpretation',
  'Proofreading',
  'Subtitling',
  'Transcription',
  'Video interpretation',
  'Website translation',
  'Written translation'
];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      personalInfo: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
      }),

      contactInfo: this.fb.group({
        email: ['', [
          Validators.required,
          Validators.email
        ]],

        phone: ['', Validators.required]
      })

    });

  }

  get filteredLanguages() {
  const search = this.languageSearch
    .trim()
    .toLowerCase();

  if (!search) {
    return this.languages;
  }

  return this.languages.filter(language =>
    language.name
      .toLowerCase()
      .includes(search)
  );
}


toggleLanguage(language: any): void {

  language.selected = !language.selected;

  if (!language.selected) {
    language.proficiency = '';
    language.primary = false;
  }

}


togglePrimary(language: any): void {

  if (!language.selected) {
    return;
  }

  language.primary = !language.primary;

  // Primary language doesn't need proficiency
  if (language.primary) {
    language.proficiency = '';
  }

}


toggleWork(item: string): void {

  const index = this.experience.selectedWork.indexOf(item);

  if (index === -1) {
    this.experience.selectedWork.push(item);
  } else {
    this.experience.selectedWork.splice(index, 1);
  }

}


isWorkSelected(item: string): boolean {

  return this.experience.selectedWork.includes(item);

}

availability = {
  remoteWork: '',
  schedulePreference: '',
  shiftPreference: '',
  startDate: '',
  certifications: '',
  agreeToContact: false,
  emailAlerts: false
};

availabilityError = false;

submitApplication(): void {

  const {
    remoteWork,
    schedulePreference,
    shiftPreference,
    startDate,
    agreeToContact
  } = this.availability;


  if (
    !remoteWork ||
    !schedulePreference ||
    !shiftPreference ||
    !startDate.trim() ||
    !agreeToContact
  ) {

    this.availabilityError = true;
    return;

  }


  this.availabilityError = false;


  const applicationData = {

    // STEP 1
    personalInfo: this.personalInfo,

    // STEP 2
    languages: this.languages.filter(
      language => language.selected
    ),

    // STEP 3
    experience: this.experience,

    // STEP 4
    availability: this.availability

  };


  console.log(
    'Application submitted:',
    applicationData
  );

}




continueFromExperience(): void {

  const hasSelectedWork =
    this.experience.selectedWork.length > 0;

  const hasOther =
    this.experience.otherSelected &&
    this.experience.otherDescription.trim().length > 0;


  if (!hasSelectedWork && !hasOther) {

    this.experienceError = true;

    return;
  }


  this.experienceError = false;

  this.nextStep();
}


continueFromLanguages(): void {

  const selectedLanguages =
    this.languages.filter(language => language.selected);

  if (selectedLanguages.length === 0) {
    this.languageError = true;
    return;
  }

  this.languageError = false;

  this.nextStep();
}


  get personalInfo(): FormGroup {
    return this.form.get('personalInfo') as FormGroup;
  }


  get contactInfo(): FormGroup {
    return this.form.get('contactInfo') as FormGroup;
  }


  nextStep(): void {

    if (this.currentStep === 1) {

    //   if (this.personalInfo.invalid) {

    //     this.personalInfo.markAllAsTouched();

    //     return;
    //   }

    }


    if (this.currentStep === 2) {

    //   if (this.contactInfo.invalid) {

    //     this.contactInfo.markAllAsTouched();

    //     return;
    //   }

    }

    if (this.currentStep === 3) {

    //   if (this.contactInfo.invalid) {

    //     this.contactInfo.markAllAsTouched();

    //     return;
    //   }

    }


    if (this.currentStep < 4) {

      this.currentStep++;

    }

  }


  previousStep(): void {

    if (this.currentStep > 1) {

      this.currentStep--;

    }

  }


  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;

    }


    console.log('Formulaire envoyé :', this.form.value);

  }

}