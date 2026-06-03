import { Injectable } from '@angular/core';
import { Filiale } from '../models/Filiale';
import { CardDetails } from '../models/CardDetails';
import { FilialeDetails } from '../models/FilialeDetails';
import { FilialePays } from '../models/FilialePays';

@Injectable({
  providedIn: 'root'
})
export class FilialeService {

  filialeDetails: FilialeDetails[] = [{
    title: 'A simple title',
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  }]

  secoTechDetails: FilialeDetails[] = [
    {
      id: 'building-maintenance',
      title: 'Building Maintenance',
      description: 'With over a decade of experience, QS consistently provides exceptional Janitorial, Security, Concierge, and Maintenance services to clients nationwide.',
      slogan: 'Our company focus is to diligently serve the Corporate Sector by providing specialized facilities management services.'
    },
    {
      title: '',
      description: 'QS boasts a dedicated team of full-time, in-house recruiters employing a specialized methodology to ensure the acquisition of personnel with the necessary skill sets.'
    },
    {
      title: '',
      description: 'Our continuous training initiatives are thoughtfully designed to enhance the productivity and dependability of our associates, setting them apart from competitors.'
    },
    {
      title: '',
      description: 'Our management team is well-versed in delivering professional oversight and supervision to all field associates, guaranteeing our clients receive services of the utmost quality.'
    },
    {
      title: '',
      description: 'Our company focus is to diligently serve the Corporate Sector by providing specialized facilities management services'
    }
  ]

  filiales:Filiale[] = [
      new Filiale('seco-security','Seco Security','Security & Concierge','',['images/new/bg_seco_securite.jpg'],'images/logos/seco_secu_logo.png','','images/logos/security_services.png',new CardDetails(2,
        [
         
          {title: 'Security Guard', link: '/seco_securite/security_guard', cover: 'https://cdn.prod.website-files.com/65e795a2f83946f9da1f1bcc/67c7c2c8c603a6e7c899e103_Belfry_Imagery4.png'},
          {title: 'Surveillance', link: '/seco_securite/surveillance', cover: 'https://flyinglocksmiths.com/wp-content/smush-webp/TFL_blog_security_cameras-e1557770076716.jpg.webp'},
          {title: 'Maintenance of security systems', link: '/seco_securite/maintenance-of-security-systems', cover:'https://protechsecurity.com/wp-content/uploads/2021/09/security-system-maintenance-1040x555.jpg'},
          {title: 'Security consultancy', link: '/seco_securite/security-consultancy', cover: 'https://www.fujitsu.com/caribbean/imagesgig5/consulting-banner_tcm128-6603636_tcm128-6286607-32.jpg'},
          {title: 'Intellegence security', link: '/seco_securite/intellegence-security', cover: 'https://www.barrybros.com/wp-content/uploads/2023/03/Artificial-Intelligence-Depositphotos_605786810_S.jpg.webp'}
        ]),[{
        title: 'Seco Security',
        description: `Dedicated security service provider offering licensed temporary and permanent guards tailored to your unique needs, ensuring employee and asset safety.
         Partnerships with 20+ properties nationwide, specializing in Residential, Commercial, Medical Facilities, Distribution Centers, Special Events, Government, and Education.

         Commitment to collaborative partnerships, alleviating recruitment, hiring, and management burdens, while delivering exceptional service and desired outcomes. 
         Expertise in tailored solutions, nationwide operations, and quality partnerships, leveraging extensive field experience.
         
         Comprehensive management support, competitive rates, and streamlined operations through our Corporate Support Team, handling recruitment, HR, payroll, insurance, benefits, and training.
         
         Experienced leaders ready to evaluate your needs and provide a tailored Proposal of Services. 
         Let QS Security be your trusted solutions partner for efficient, professional, and secure operations.
         `,
         slogan: 'Our company focus is to diligently serve the Corporate Sector by providing specialized Security & Loss Prevention Services.'
      }]),
      new Filiale('optimal_staffing_services','Optimal Staffing Services','Staffing Solutions','',['https://i0.wp.com/careerical.com/wp-content/uploads/2025/02/Top-Recruitment-Agencies-in-Italy-Providing-Jobs-with-Visa-Sponsorship.jpg?fit=1200%2C628&ssl=1'],'images/logos/seco_secu_logo.png','','images/logos/staffing_services.png',new CardDetails(2),
      [
        {
        title: 'Staffing Service',
        description: `With a 13-year legacy as a premier recruitment and staffing leader, we excel
at connecting businesses with top talent and providing comprehensive staffing
solutions. Our team of human capital advocates meticulously matches skills
and aspirations to ensure optimal results in every hire we make. Passion and
precision drive our seamless outsourcing and staffing solutions, culminating in
the success of both businesses and individuals.`,
        slogan: 'Our company focus is to diligently serve the Corporate Sector by providing specialized Staffing and recruiting Services.'
      },
      {
        title: '',
        description: `
        Our expert team thrives in diverse industries, consistently delivering exceptional
candidates to drive growth and innovation. Through transformative partnerships,
we harmonize ambitions with our staffing and outsourcing expertise, creating a
powerful synergy that elevates businesses to new heights. 
        `
      },
      {
        title: '',
        description: `
        Unlock your company’s full potential through strategic hires and comprehensive
staffing strategies that align with your objectives. Empower success and foster
growth with the Quality Staffing and Outsourcing Solution. Experience a journey
of endless possibilities as we work together to meet your staffing needs and
achieve your business goals.
        `
      },
      {
        title: '',
        description: `
        Count on us as your dedicated partner for exceptional hires and staffing solutions
that make a difference. 
        `
      },

    ]),
      new Filiale('housekeeping_services','Housekeeping Services','Hospitality Support','',['https://plus.unsplash.com/premium_photo-1682097409792-354d4d544753?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],'images/logos/seco_secu_logo.png','','images/logos/house_keeping.png',new CardDetails(2),[{
        title: 'Hospitality And Cleaning Services',
        description: `We are a premier provider of top-notch hospitality solutions tailored
to elevate your guest experience. With a strong focus on quality,
our comprehensive range of Turnkey Hospitality services includes
housekeeping, laundry and maintenance.`,
        slogan: `Our Company focus is to diligently serve the Corporate Sector
by providing specialized Housekeeping & Commercial Cleaning
Services. `
      },
      {
        title: '',
        description: 'Our dedicated team is committed to enhancing the ambiance and comfort of your establishment. From luxury, hotels, and resorts to bustling casinos, hospitals, and serene retirement facilities, we cater to a diverse clientele that demands nothing but excellence. With a proven track record, we ensure immaculate public areas, well-maintained facilities, and a seamless guest journey'
      }]),
      new Filiale('concierge_services','Concierge Services','Outdoor Care','',['https://media.cnn.com/api/v1/images/stellar/prod/111005061730-concierge-ritz.jpg?q=w_4000,h_3000,x_0,y_0,c_fill'],'images/logos/seco_secu_logo.png','','images/logos/concierges_services.png',new CardDetails(2),this.filialeDetails),
      new Filiale('janitorial_services','Janitorial Services','Janitorial & Cleaning','',['https://plus.unsplash.com/premium_photo-1661662877086-4007ebf0378e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],'images/logos/seco_secu_logo.png','','images/logos/janitorial_services.png',new CardDetails(2),this.filialeDetails),
      new Filiale('building-maintenance','Seco Tech','Building Maintenance','',['images/new/bg_seco_tech.jpg'],'images/logos/seco_tech_logo.png','images/logos/seco_tech_white_logo.png','images/logos/building_maintenance.png',new CardDetails(3),this.secoTechDetails),
      new Filiale('seco_agro_industries','Seco Agro Industries','','',[
        'images/vecteezy/cover_seco_agro.jpg',
        'images/vecteezy/cover_seco_agro1.jpeg',
        'images/vecteezy/cover_seco_agro2.jpg',
        'images/vecteezy/cover_seco_agro3.jpg',
        'images/vecteezy/cover_seco_agro4.jpg',
        'images/vecteezy/cover_seco_agro5.jpg',
        'images/vecteezy/cover_seco_agro6.jpg',
        'images/vecteezy/cover_seco_agro7.jpg',
        'images/vecteezy/cover_seco_agro8.jpg',
        'images/vecteezy/cover_seco_agro9.jpg',
        'images/vecteezy/cover_seco_agro10.jpg',
        'images/vecteezy/cover_seco_agro11.jpg',
        'images/vecteezy/cover_seco_agro12.jpg',
        'images/vecteezy/cover_seco_agro13.jpg',
        'https://plus.unsplash.com/premium_photo-1661962573121-d4c317caf908?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],'images/logos/seco_agro_white_logo.png','images/logos/seco_agro_white_logo.png','fa-solid fa-seedling',new CardDetails(4),this.filialeDetails),
      new Filiale('seco_energy_co','Seco Energy CO','','',['images/vecteezy/cover_seco_energy.jpg','images/vecteezy/cover_seco_energy1.JPG','images/vecteezy/cover_seco_energy2.JPG','https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],'','','fa-solid fa-bolt',new CardDetails(5),this.filialeDetails),
      new Filiale('seco_distributors','Seco Distributors','','',['https://www.plugandtrack.com/wp-content/uploads/2022/05/Normes-stockage-distribution-medicaments-e1652099964737.jpg'],'images/logos/seco_distributors_logo.png','images/logos/seco_distributors_white_logo.png','fa-solid fa-truck',new CardDetails(1),this.filialeDetails),
      new Filiale('mass_funds','Mass Funds','','',['images/new/bg_mass_funds.jpg'],'','','fa-solid fa-sack-dollar',new CardDetails(2),this.filialeDetails),
      new Filiale('mass_assurance','Mass Assurance','','',['images/new/bg_mass_assurance.jpg'],'','','fas fa-user-shield',new CardDetails(4),this.filialeDetails),
      new Filiale('boyo_airways','Boyo Airways','','',['images/new/bg_seco_boyo.avif'],'images/logos/boyo_airways_white_logo.png','images/logos/boyo_airways_white_logo.png','fa-solid fa-plane-departure',new CardDetails(5),this.filialeDetails),
      new Filiale('seco_univers_construction','Seco Univers Construction','','',['images/vecteezy/cover_seco_construction.jpg','images/vecteezy/cover_seco_construction1.jpg','images/vecteezy/cover_seco_construction2.JPG','images/new/bg_seco_univers_construction.jpg'],'images/logos/seco_univers_construction_white_logo.png','images/logos/seco_univers_construction_white_logo.png','fa-solid fa-person-digging',new CardDetails(1),this.filialeDetails),
  ]

  filialesPays: FilialePays[] = [
    new FilialePays('usa','seco-security'),
    new FilialePays('usa','building-maintenance'),
    new FilialePays('usa','optimal_staffing_services'),
    new FilialePays('usa','housekeeping_services'),
    new FilialePays('usa','janitorial_services'),
    new FilialePays('usa','concierge_services'),
    new FilialePays('canada','seco-security'),
    new FilialePays('canada','building-maintenance'),
    new FilialePays('canada','optimal_staffing_services'),
    new FilialePays('canada','housekeeping_services'),
    new FilialePays('canada','janitorial_services'),
    new FilialePays('canada','concierge_services'),
    new FilialePays('bahamas','seco-security'),
    new FilialePays('bahamas','building-maintenance'),
    new FilialePays('bahamas','optimal_staffing_services'),
    new FilialePays('bahamas','housekeeping_services'),
    new FilialePays('bahamas','janitorial_services'),
    new FilialePays('bahamas','concierge_services'),
    new FilialePays('haiti','seco-security'),
    new FilialePays('haiti','building-maintenance'),
    new FilialePays('haiti','seco_energy_co'),
    new FilialePays('haiti','seco_agro_industries'),
    new FilialePays('haiti','seco_distributors'),
    new FilialePays('haiti','boyo_airways'),
    new FilialePays('haiti','mass_assurance'),
    new FilialePays('haiti','mass_funds'),
    new FilialePays('haiti','seco_univers_construction'),
    new FilialePays('bresil','seco-security'),
    new FilialePays('bresil','building-maintenance'),
    new FilialePays('bresil','optimal_staffing_services'),
    new FilialePays('bresil','housekeeping_services'),
    new FilialePays('bresil','janitorial_services'),
    new FilialePays('bresil','concierge_services'),

  ]

  previewInfo = [
    {
      title: 'Your Safety, Our Priority',
      description: ' Comprehensive protection tailored to your peace of mind. From elite manned guarding to advanced surveillance solutions, we provide a secure environment for your assets, employees, and premises.',
      service: 'Security & Concierge'
    },
    {
      title: ' Preserving Your Property’s Excellence',
      description: ` We ensure your infrastructure operates at peak performance. Our proactive 
maintenance services cover MEP (Mechanical, Electrical, Plumbing), civil works, and 
general repairs to extend the life of your facility.`,
      service: 'building maintenance'
    },
    {
      title: 'Empowering Your Business with Right Talent',
      description: ` Finding the right fit shouldn't be a challenge. We provide qualified, pre-vetted 
professionals across various industries, ensuring your team has the support it needs 
to scale and succeed.`,
      service: 'Staffing Solutions'
    },
    {
      title: ' Impeccable Standards for Every Space',
      description: ` Experience a higher level of cleanliness. Our housekeeping team specializes 
in detailed care for residential and commercial spaces, ensuring a pristine 
environment that reflects your commitment to quality.`,
      service: 'Hospitality Support'
    },
    {
      title: 'Cleanliness Built on Consistency',
      description: `We handle the heavy lifting of facility hygiene. Our janitorial services focus on 
high-traffic sanitation and deep-cleaning protocols to keep your workspace healthy, 
safe, and professional around the clock. `,
      service: 'Janitorial & Cleaning'
    },
    {
      title: 'The First Impression Your Brand Deserves',
      description: ` Elevate your guest experience with professional front-of-house services. Our 
concierge team combines hospitality with efficiency, managing inquiries and arrivals 
with grace and sophistication.`,
      service: 'Outdoor Care'
    }
  ]

  
  // document.documentElement.style.setProperty('--body-bg', 'url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')

  getFilialeByNameAndPays(name:string,pays:string):Filiale|null{
    let result = null
    this.filialesPays.forEach(fP => {
        if(pays === fP.pays && name === fP.filialeName){
          result = this.getFilialeByName(fP.filialeName)
          return;
        }
          
    })
    return result
  }

  getFilialesByPays(pays: string): Filiale[] {
    let result: Filiale[] = []
    this.filialesPays.forEach(fP =>{
      if(fP.pays === pays){
          result.push(this.getFilialeByName(fP.filialeName) || new Filiale())
      }
    })
    return result
  }

  getFilialeByName(name: string): Filiale | null{
    let result = null

    this.filiales.forEach(f=>{
      if(f.idName === name)
        result = f
    })

    return result
  }
}
