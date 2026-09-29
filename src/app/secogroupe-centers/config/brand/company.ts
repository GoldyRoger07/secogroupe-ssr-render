import { Company } from '../../models/company.model';

/** Identité de SECO GROUPE Centers : un seul endroit à modifier pour toute l'application. */
export const companyConfig: Company = {
  name: 'SECO GROUPE Centers',
  legalName: 'SECO GROUPE',
  logo: {
    light: '/images/logos/new_seco_logo.png',
    dark: '/images/logos/new_seco_white_logo.png',
  },
  contact: {
    email: 'info@secogroupe.com',
    phone: '',
    address: '',
  },
};
