import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../../services/seo-service';
import { Feature } from '../../models/feature.model';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Container } from "../../components/container/container";
import { V4Slider } from "../../components/v4/v4-slider/v4-slider";
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';
import { raw } from 'express';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-services-country-details',
  imports: [Footer, Navbar, Container, V4Slider, AnimateOnScrollDirective],
  templateUrl: './services-country-details.html',
  styleUrl: './services-country-details.css',
})
export default class ServicesCountryDetails implements OnInit{

  activatedRoute = inject(ActivatedRoute)
  seo = inject(SeoService)

  // Injection du service DomSanitizer
  private sanitizer = inject(DomSanitizer);

  pays: string = ''
  service: string = ''

  router = inject(Router)

  services: string[] = [
    "seco-security",
    "seco-homes-construction",
    "seco-logistique",
    "seco-tech",
    "seco-distributors",
    "mass-assurance",
    "mass-funds"
  ]

  aboutUs = {
    title: "À propos de nous",
    desc: `
      ${this.p(`Chez <strong>SECO SÉCURITÉ S.A.</strong>, la sécurité ne se
                limite pas à une présence physique : elle
                repose sur une stratégie opérationnelle, une
                anticipation permanente des risques et une
                capacité d'intervention immédiate`)}

      ${this.p(`Notre Force Spéciale Bicéphale, composée
                d'une Équipe d'Intervention Rapide (QRF) et
                d'Agents Spéciaux en Sécurité et Défense,
                est spécialement conçue pour répondre aux
                défis sécuritaires les plus complexes. Elle
                assure une protection proactive des entreprises, des résidences privées, des institutions, des sites industriels et des infrastructures sensibles.`)}
    
        ${this.p(`Nos équipes mettent en œuvre des dispositifs de surveillance avancés, des patrouilles
                  tactiques, la sécurisation des points
                  stratégiques, le contrôle des accès et des
                  interventions rapides, garantissant ainsi une
                  protection continue des personnes, des
                  biens et des équipements.`)}
    `

  }

  goals = {
    title: "Nos objectifs",
    subtitle: `Chez SECO SÉCURITÉ S.A., notre engagement est de devenir un partenaire
               stratégique en matière de sécurité en poursuivant les objectifs suivants :`,
    goals: [
      "Garantir la protection des personnes, des biens et des infrastructures grâce à des solutions de sécurité intégrées et performantes.",
      "Anticiper, prévenir et réduire les risques sécuritaires par une approche proactive fondée sur l'analyse, la surveillance et la dissuasion.",
      "Assurer une capacité de réponse rapide et efficace face à toute menace ou situation critique.",
      "Maintenir un haut niveau de contrôle des sites sensibles par des équipes hautement qualifiées et des protocoles opérationnels rigoureux.",
      "Offrir à nos clients un environnement sécurisé leur permettant d'exercer leurs activités en toute confiance, tout en assurant la continuité de leurs opérations."
    ]
  }

  hero = {
    eyebrow: '',
    title: '',
    subtitle: '',
    image: '',
    alt: '',
  };

  gallery: string[] = [];

  intro = {
    title: '',
    paragraph1: '',
    paragraph2: ''
  };

  offeringSubtitle = ''
  subServices: Feature[] = [];

  benefits: Feature[] = [];

  ctaImage = 'img/services/compressed/bg_seco_securite_1440.webp';


  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe(params => {
       this.pays = params.get('pays') || "";
       this.service = params.get('service') || ""; 

       if(!this.services.includes(this.service))
        this.router.navigate(["/"])

       switch(this.service){
        case 'seco-security':
          this.setSecoSecurityInfo()
        break
        case 'seco-logistique':
          this.setSecoLogistiqueInfo()
        break
        case 'seco-homes-construction':
          this.setSecoHomesConstructionInfo()
        break
        case 'seco-tech':
          this.setSecoTechInfo()
        break
        case 'seco-distributors':
          this.setSecoDistributorsInfo()
        break
        case 'mass-assurance':
          this.setMassAssuranceInfo()
        break
        case 'mass-funds':
          this.setMassFundsInfo()
        break
       }

       
    })



  }

  setSecoSecurityInfo() {
  this.hero = {
    eyebrow: 'Sécurité & Protection',
    title: 'SECO SÉCURITÉ S.A',
    subtitle:
      `Nous combinons des
professionnels hautement qualifiés, des technologies de pointe et une organisation opérationnelle performante pour offrir des solutions de
sécurité fiables, adaptées aux réalités de chaque
client.`,
    image: 'img/services/compressed/bg_seco_securite_1440.webp',
    alt: 'Agent de sécurité SECO Security assurant la protection d’une propriété professionnelle.',
  };

  this.gallery = [
    'img/services/compressed/security_guard_female_1440.webp',
    // 'img/services/Security & Concierge/01.jpg',
    // 'img/services/Security & Concierge/03.jpg',
    'img/services/compressed/seco_agent_securite_en_bleu.webp',
  ];

  this.intro = {
    title: 'Une sécurité fiable pour vos personnes et vos actifs',
    paragraph1:
      'SECO Security fournit des services de protection adaptés aux entreprises, institutions, résidences privées et sites sensibles. Notre mission est de prévenir les risques, assurer la tranquillité des occupants et protéger efficacement vos biens.',
    paragraph2:
      'Grâce à des agents qualifiés, des procédures rigoureuses et une approche basée sur l’évaluation des risques, nous proposons des solutions de sécurité personnalisées répondant aux exigences de chaque environnement.',
  };

  this.offeringSubtitle =
    'Des services de sécurité complets conçus pour prévenir les menaces, contrôler les accès et assurer une protection continue de vos installations.';

  this.subServices = [
    {
      title: 'Agents de Sécurité Professionnels',
      icon: 'ri-shield-user-li8ne',
      description:
        'Des agents formés et qualifiés pour assurer la surveillance, la protection et la sécurité de vos sites.',
    },
    {
      title: 'ÉQUIPE D\'INTERVENTION RAPIDE (QRF)',
      icon: 'ri-eye-li8ne',
      description:
        `Notre Quick Response Force (QRF) est mobilisable en permanence pour intervenir rapidement lors d'incidents sécuritaires, renforcer un
dispositif existant, sécuriser une zone sensible
ou répondre à toute situation d'urgence nécessitant une action immédiate.`,
    },
    // {
    //   title: 'Contrôle d’Accès',
    //   icon: 'ri-door-lock-line',
    //   description:
    //     'Gestion et contrôle des entrées afin de limiter les accès non autorisés et renforcer la sécurité.',
    // },
    // {
    //   title: 'Patrouilles de Sécurité',
    //   icon: 'ri-road-map-line',
    //   description:
    //     'Des rondes de surveillance régulières pour identifier les risques et maintenir un environnement sécurisé.',
    // },
    {
      title: 'Protection Rapprochée',
      icon: 'ri-user-star-lin9e',
      description:
        `Nos agents
spécialisés assurent la protection rapprochée
de personnalités, chefs d'entreprise, diplomates, délégations étrangères, représentants
d'ONG et autres personnes exposées à des
risques spécifiques. Chaque mission est
préparée selon une analyse approfondie des
menaces afin de garantir une sécurité discrète,
professionnelle et efficace.`,
    },
    {
      title: 'SYSTÈMES DE VIDÉOSURVEILLANCE & D\'ALARME ',
      icon: 'ri-cctv-l9ine',
      description:
        `Nous concevons, installons et
assurons la maintenance de systèmes de vidéosurveillance intelligents, de contrôle d'accès et
de systèmes d'alarme performants permettant
une surveillance continue de vos installations et
une détection précoce des menaces.`,
    },
  ];

  this.benefits = [
    {
      title: 'Agents Formés & Vérifiés',
      icon: 'ri-user-star-line',
      description:
        'Des professionnels sélectionnés et formés selon des standards élevés de sécurité.',
    },
    {
      title: 'Protection Personnalisée',
      icon: 'ri-settings-4-line',
      description:
        'Des solutions adaptées aux risques spécifiques de votre environnement.',
    },
    {
      title: 'Surveillance Continue',
      icon: 'ri-time-line',
      description:
        'Une couverture flexible permettant d’assurer la sécurité de vos sites selon vos besoins.',
    },
    {
      title: 'Réponse Rapide',
      icon: 'ri-alarm-warning-line',
      description:
        'Des procédures efficaces pour réagir rapidement face aux situations de sécurité.',
    },
  ];

  this.ctaImage =
    'img/services/compressed/bg_seco_securite_1440.webp';
}

  setSecoHomesConstructionInfo() {
  this.hero = {
    eyebrow: 'Construction & Immobilier',
    title: 'SECO Homes & Construction',
    subtitle:
      'SECO Homes & Construction est spécialisé dans la construction d’infrastructures telles que routes, ponts, barrages, location de terrain et travaux d’électrification.',
    image: 'img/haiti-services/construction.png',
    alt: 'SECO Homes & Construction réalisant des projets immobiliers, de construction et de rénovation pour des clients résidentiels et commerciaux.',
  };

  this.gallery = [
    'img/haiti-services/cover_seco_construction.webp',
    // 'img/subsidiaries/homes-construction/01.jpg',
    // 'img/subsidiaries/homes-construction/02.jpg',
    // 'img/subsidiaries/homes-construction/03.jpg',
    // 'img/subsidiaries/homes-construction/04.jpg',
  ];

  this.intro = {
    title: 'Construire des espaces qui inspirent confiance',
    paragraph1:
      'SECO Homes & Construction accompagne les particuliers, les entreprises et les investisseurs dans la réalisation de leurs projets immobiliers. De la conception à la livraison, nous mettons notre expertise au service de bâtiments modernes, solides et adaptés aux besoins de nos clients.',
    paragraph2:
      'Grâce à une approche combinant qualité, innovation et gestion rigoureuse des projets, nous réalisons des constructions et rénovations qui répondent aux standards actuels tout en respectant les délais et les exigences de chaque projet.',
  };

  this.offeringSubtitle =
    'Des services complets de construction et de développement immobilier pour transformer vos idées en espaces durables et fonctionnels.';

  this.subServices = [
    {
      title: 'Construction Résidentielle',
      icon: 'ri-home-4-line',
      description:
        'Création de maisons et espaces résidentiels personnalisés conçus pour répondre aux besoins et au style de vie de chaque client.',
    },
    {
      title: 'Projets Commerciaux',
      icon: 'ri-building-line',
      description:
        'Construction et aménagement de bureaux, locaux commerciaux et infrastructures adaptées aux besoins des entreprises.',
    },
    {
      title: 'Rénovation & Réaménagement',
      icon: 'ri-hammer-line',
      description:
        'Transformation et modernisation de bâtiments existants afin d’améliorer leur confort, leur fonctionnalité et leur valeur.',
    },
    {
      title: 'Gestion de Projet',
      icon: 'ri-task-line',
      description:
        'Planification, coordination et suivi complet des travaux pour assurer une réalisation efficace de chaque projet.',
    },
    {
      title: 'Développement Immobilier',
      icon: 'ri-community-line',
      description:
        'Conception et développement de projets immobiliers destinés aux particuliers, investisseurs et entreprises.',
    },
    {
      title: 'Maintenance & Entretien',
      icon: 'ri-tools-line',
      description:
        'Services de maintenance permettant de préserver la qualité, la sécurité et la valeur de vos bâtiments.',
    },
  ];

  this.benefits = [
    {
      title: 'Expertise Professionnelle',
      icon: 'ri-user-star-line',
      description:
        'Une équipe qualifiée composée de professionnels expérimentés dans les domaines de la construction et de l’immobilier.',
    },
    {
      title: 'Qualité & Durabilité',
      icon: 'ri-award-line',
      description:
        'Des réalisations conçues avec des matériaux fiables et des méthodes adaptées pour garantir leur durabilité.',
    },
    {
      title: 'Respect des Délais',
      icon: 'ri-time-line',
      description:
        'Une gestion efficace des projets pour assurer une livraison conforme aux engagements établis.',
    },
    {
      title: 'Solutions Personnalisées',
      icon: 'ri-settings-4-line',
      description:
        'Des services adaptés à chaque projet, chaque budget et chaque vision architecturale.',
    },
  ];

  this.ctaImage =
    'img/haiti-services/cover_seco_construction.webp';
}

  setSecoLogistiqueInfo() {
  this.hero = {
    eyebrow: 'Logistique & Transport',
    title: 'SECO Logistique',
    subtitle:
      'Des solutions logistiques fiables pour accompagner le transport, la distribution et la gestion de vos marchandises avec efficacité et précision.',
    image: 'img/haiti-services/logistique.png',
    alt: 'SECO Logistique assurant des services professionnels de transport, de distribution et de gestion de la chaîne logistique.',
  };

  this.gallery = [
    // 'img/subsidiaries/compressed/seco_logistique_1440.webp',
    'img/haiti-services/logistique-1.jpg',
    'img/haiti-services/logistique-2.jpg'
  ];

  this.intro = {
    title: 'Une logistique pensée pour votre réussite',
    paragraph1:
      'SECO Logistique propose des solutions de transport, de distribution et de gestion logistique adaptées aux besoins des entreprises, des institutions et des organisations. Notre objectif est de garantir un acheminement rapide, sécurisé et efficace de vos marchandises.',
    paragraph2:
      'Grâce à une organisation rigoureuse, des processus optimisés et une approche centrée sur la satisfaction client, nous aidons nos partenaires à améliorer leurs opérations logistiques et à maintenir une chaîne d’approvisionnement performante.',
  };

  this.offeringSubtitle =
    'Des services logistiques complets pour faciliter le transport, le stockage et la distribution de vos produits, de leur point de départ jusqu’à leur destination finale.';

  this.subServices = [
    {
      title: 'Transport de Marchandises',
      icon: 'ri-truck-line',
      description:
        'Des solutions de transport fiables pour acheminer vos marchandises en toute sécurité et dans les délais prévus.',
    },
    {
      title: 'Entreposage & Stockage',
      icon: 'ri-store-2-line',
      description:
        'Des solutions de stockage sécurisées pour conserver vos produits dans des conditions adaptées.',
    },
    {
      title: 'Distribution',
      icon: 'ri-route-line',
      description:
        'Un service de distribution efficace permettant de livrer vos produits rapidement auprès de vos clients et partenaires.',
    },
    {
      title: 'Gestion des Stocks',
      icon: 'ri-archive-stack-line',
      description:
        'Un suivi précis de vos inventaires afin d’améliorer la disponibilité des produits et réduire les pertes.',
    },
    {
      title: 'Livraison Dernier Kilomètre',
      icon: 'ri-map-pin-line',
      description:
        'Des services de livraison flexibles pour assurer une expérience client fiable jusqu’à la destination finale.',
    },
    {
      title: 'Gestion de la Chaîne Logistique',
      icon: 'ri-links-line',
      description:
        'Une coordination complète des opérations afin d’optimiser vos flux d’approvisionnement et de distribution.',
    },
  ];

  this.benefits = [
    {
      title: 'Livraisons Fiables',
      icon: 'ri-checkbox-circle-line',
      description:
        'Un service conçu pour respecter vos délais et garantir l’arrivée sécurisée de vos marchandises.',
    },
    {
      title: 'Sécurité des Marchandises',
      icon: 'ri-shield-check-line',
      description:
        'Des procédures adaptées pour protéger vos produits tout au long du processus logistique.',
    },
    {
      title: 'Solutions Adaptées',
      icon: 'ri-settings-4-line',
      description:
        'Des services personnalisés selon votre secteur d’activité, vos volumes et vos contraintes opérationnelles.',
    },
    {
      title: 'Efficacité Opérationnelle',
      icon: 'ri-speed-up-line',
      description:
        'Une organisation optimisée pour réduire les délais, améliorer la productivité et maîtriser vos coûts.',
    },
  ];

  this.ctaImage =
    'img/haiti-services/logistique.png';
}

  setSecoTechInfo() {
  this.hero = {
    eyebrow: 'Technologie & Innovation',
    title: 'SECO Tech',
    subtitle:
      `SECO TECH allie innovation et technologie pour résoudre les besoins complexes de votre entreprise, elle est dans les domaines d’installation, de maintenance et de réparation industrielle (Systèmes électriques et mécaniques, climatisation et réfrigération).`,
    image: 'img/haiti-services/technology.jpeg',
    alt: 'SECO Tech développant des solutions numériques, des logiciels et des infrastructures informatiques pour les entreprises.',
  };

  this.gallery = [
    'img/haiti-services/bg_seco_tech.jpg',
    // 'img/subsidiaries/tech/01.jpg',
    // 'img/subsidiaries/tech/02.jpg',
    // 'img/subsidiaries/tech/03.jpg',
    // 'img/subsidiaries/tech/04.jpg',
  ];

  this.intro = {
    title: 'A propos de nous',
    paragraph1:
      `SECO TECH, filiale de SECO GROUPE, offre des
solutions intégrées en Building Management et
en ingénierie technique. Nous proposons une
gamme complète de services spécialisés
incluant l’entretien ménager, le nettoyage
professionnel, l’outsourcing, la conciergerie, la
sécurité ainsi que la gestion et la maintenance
des bâtiments.`,
    paragraph2:
      `Du développement de logiciels à la cybersécurité, en passant par les infrastructures réseau, le cloud et le conseil informatique, notre équipe conçoit des solutions fiables, évolutives et parfaitement adaptées aux besoins de chaque client.`,
  };

  this.offeringSubtitle =
    'Des solutions technologiques complètes pour moderniser vos opérations, améliorer votre productivité et sécuriser votre environnement numérique.';

  this.subServices = [
    {
      title: 'ENTRETIEN MÉNAGER ET NETTOYAGE PROFESSIONEL',
      icon: 'ri-code-s-slash-line',
      cover: 'img/haiti-services/seco-tech/nettoyage.webp',
      description:
        ` Nous assurons des services
          de nettoyage et d'entretien adaptés aux
          environnements commerciaux, industriels,
          résidentiels, hôteliers et institutionnels.<br><br> Nos équipes veillent à maintenir des espaces propres, sains
          et conformes aux normes d'hygiène les plus
          élevées.
        `,
    },
    {
      title: 'OUTSOURCING : RECRUTEMENT ET GESTION DE MAIN-DŒUVRE',
      icon: 'ri-smartphone-line',
      cover: "img/haiti-services/seco-tech/recrutement.webp",
      description:
        `SECO TECH
          accompagne les entreprises dans le recrutement,
          le placement et la gestion de personnel qualifié
          afin de répondre efficacement à leurs besoins
          opérationnels. <br> <br> Nous prenons en charge l'identification des talents, la sélection des candidats, le
          déploiement des équipes ainsi que le suivi administratif et opérationnel. Cette solution permet à
          nos clients de réduire leurs coûts de gestion, de
          gagner en flexibilité et de se concentrer sur leur
          cœur de métier tout en bénéficiant d'une
          main-d'œuvre compétente et performante.`,
    },
    {
      title: 'CONCIERGERIE',
      icon: 'ri-lightbulb-line',
      cover: "img/haiti-services/seco-tech/conciergerie.webp",
      description:
      ` Nos services de conciergerie
        facilitent la gestion quotidienne des bâtiments et
        des installations. Nous prenons en charge l'accueil, l'assistance aux occupants, la coordination des
        prestataires et diverses tâches de soutien afin
        d'assurer une expérience de qualité.`
        ,
    },
    {
      title: 'BUILDING MANAGEMENT / GESTION INTÉGRÉE DES BÂTIMENTS',
      cover: "img/haiti-services/seco-tech/building-maintenance.webp",
      description:
        `SECO TECH
        offre des solutions complètes de Building Management permettant aux entreprises, institutions,
        hôtels et résidences d'assurer le bon fonctionnement, la performance et la durabilité de leurs infrastructures.
        <br><br>
        Nous prenons en charge la gestion opérationnelle
        et technique des bâtiments à travers une
        approche intégrée comprenant l'entretien des
        installations, la coordination des services, la
        gestion des équipements techniques, le suivi des
        interventions et l'optimisation des ressources.
        
        <p class="text-start">
        <h3 class="text-gray-600">Nos solutions incluent notamment :</h3>
          <ul class="pr-10 text-start  marker:text-gray-600">
              <li>
                  La gestion et la maintenance des systèmes
                  électriques et mécaniques.
              </li>
              <li>La climatisation et la réfrigération.</li>
              <li>Le suivi des équipements techniques.</li>
              <li>La gestion énergétique et l'optimisation des
  consommations.</li>
              <li>La coordination des services d'entretien, de
  sécurité et de conciergerie
  </li>
              <li>La maintenance préventive et corrective des
  infrastructures</li>


          </ul>
        </p>
        `,
    },
    // {
    //   title: 'Réseaux & Infrastructures',
    //   icon: 'ri-router-line',
    //   description:
    //     'Installation, configuration et maintenance de réseaux informatiques performants et sécurisés.',
    // },
    // {
    //   title: 'Cybersécurité',
    //   icon: 'ri-shield-keyhole-line',
    //   description:
    //     'Protection des systèmes d\'information, des données et des infrastructures contre les cybermenaces.',
    // },
  ];

  this.benefits = [
    {
      title: 'Innovation Continue',
      icon: 'ri-rocket-line',
      description:
        'Nous exploitons les technologies les plus récentes pour créer des solutions performantes et durables.',
    },
    {
      title: 'Experts Qualifiés',
      icon: 'ri-user-star-line',
      description:
        'Une équipe de développeurs, ingénieurs et consultants expérimentés à votre service.',
    },
    {
      title: 'Sécurité Intégrée',
      icon: 'ri-lock-star-line',
      description:
        'La sécurité est prise en compte dès la conception afin de protéger vos données et vos infrastructures.',
    },
    {
      title: 'Solutions Évolutives',
      icon: 'ri-expand-diagonal-line',
      description:
        'Des solutions capables d\'accompagner la croissance de votre entreprise et l\'évolution de vos besoins.',
    },
  ];

  this.ctaImage =
    'img/haiti-services/bg_seco_tech.jpg';
}

  setSecoDistributorsInfo() {
  this.hero = {
    eyebrow: 'Distribution & Approvisionnement',
    title: 'SECO Distributors',
    subtitle:
      'SECO DISTRIBUTORS prend en charge l’importation et la distribution de carburant et de produits alimentaires, avec un service logistique intégré.',
    image: 'img/haiti-services/distribution.jpeg',
    alt: 'SECO Distributors assurant la distribution, l’approvisionnement et la livraison de produits pour les entreprises et les organisations.',
  };

  this.gallery = [
    'img/haiti-services/Distribution-2.jpeg',
    // 'img/subsidiaries/distributors/01.jpg',
    // 'img/subsidiaries/distributors/02.jpg',
    // 'img/subsidiaries/distributors/03.jpg',
    // 'img/subsidiaries/distributors/04.jpg',
  ];

  this.intro = {
    title: 'Des produits livrés avec efficacité',
    paragraph1:
      'SECO Distributors accompagne les entreprises, les institutions et les commerces en proposant des solutions d’approvisionnement et de distribution fiables. Notre objectif est d’assurer une disponibilité constante des produits tout en garantissant des livraisons rapides et sécurisées.',
    paragraph2:
      'Grâce à une logistique performante, une gestion rigoureuse des stocks et un réseau de distribution efficace, nous aidons nos clients à optimiser leur chaîne d’approvisionnement et à répondre aux besoins de leurs activités en toute sérénité.',
  };

  this.offeringSubtitle =
    'Des solutions complètes de distribution et d’approvisionnement pour assurer la disponibilité de vos produits, du fournisseur jusqu’au client final.';

  this.subServices = [
    {
      title: 'Distribution de Produits',
      icon: 'ri-box-3-line',
      description:
        'Distribution rapide et sécurisée de produits vers les entreprises, commerces et institutions.',
    },
    {
      title: 'Approvisionnement',
      icon: 'ri-shopping-cart-2-line',
      description:
        'Gestion efficace de l’approvisionnement afin de garantir la disponibilité des produits essentiels.',
    },
    {
      title: 'Gestion des Stocks',
      icon: 'ri-archive-stack-line',
      description:
        'Suivi, organisation et contrôle des stocks pour optimiser vos opérations et éviter les ruptures.',
    },
    {
      title: 'Livraison & Transport',
      icon: 'ri-truck-line',
      description:
        'Des solutions de transport fiables pour assurer des livraisons ponctuelles et sécurisées.',
    },
    {
      title: 'Distribution aux Entreprises',
      icon: 'ri-building-line',
      description:
        'Approvisionnement régulier des entreprises, hôtels, commerces et organisations selon leurs besoins.',
    },
    {
      title: 'Gestion de la Chaîne d’Approvisionnement',
      icon: 'ri-links-line',
      description:
        'Coordination des opérations logistiques afin d\'améliorer la performance de votre chaîne d’approvisionnement.',
    },
  ];

  this.benefits = [
    {
      title: 'Livraisons Fiables',
      icon: 'ri-checkbox-circle-line',
      description:
        'Des délais respectés et un service de distribution sur lequel vous pouvez compter.',
    },
    {
      title: 'Produits de Qualité',
      icon: 'ri-award-line',
      description:
        'Des produits sélectionnés avec soin pour répondre aux exigences des professionnels.',
    },
    {
      title: 'Logistique Optimisée',
      icon: 'ri-speed-up-line',
      description:
        'Une organisation efficace qui réduit les délais et améliore la performance de vos opérations.',
    },
    {
      title: 'Service Personnalisé',
      icon: 'ri-customer-service-2-line',
      description:
        'Des solutions adaptées aux besoins spécifiques de chaque client et de chaque secteur d’activité.',
    },
  ];

  this.ctaImage =
    'img/haiti-services/Distribution-2.jpeg';
}

  setMassAssuranceInfo() {
  this.hero = {
    eyebrow: 'Assurance & Protection',
    title: 'Mass Assurance',
    subtitle:
      'Protégez votre avenir avec des solutions d’assurance fiables conçues pour les particuliers, les familles et les entreprises.',
    image: 'img/subsidiaries/compressed/mass_assurance_1440.webp',
    alt: 'Conseiller Mass Assurance accompagnant un client dans le choix d’une solution d’assurance adaptée à ses besoins.',
  };

  this.gallery = [
    'img/subsidiaries/compressed/mass_assurance_1440.webp',
    'img/subsidiaries/mass-assurance/01.jpg',
    'img/subsidiaries/mass-assurance/02.jpg',
    'img/subsidiaries/mass-assurance/03.jpg',
    'img/subsidiaries/mass-assurance/04.jpg',
  ];

  this.intro = {
    title: 'Votre tranquillité d’esprit, notre priorité',
    paragraph1:
      'Mass Assurance accompagne les particuliers, les familles et les entreprises en proposant des solutions d’assurance adaptées à leurs besoins. Notre mission est de vous offrir une protection fiable face aux imprévus tout en vous apportant un accompagnement personnalisé.',
    paragraph2:
      'Grâce à notre expertise et à notre approche orientée client, nous vous aidons à choisir les garanties les mieux adaptées afin de protéger votre santé, vos biens, votre famille et vos activités professionnelles.',
  };

  this.offeringSubtitle =
    'Des solutions d’assurance complètes pour protéger ce qui compte le plus pour vous.';

  this.subServices = [
    {
      title: 'Assurance Santé',
      icon: 'ri-heart-pulse-line',
      description:
        'Des solutions de couverture santé pour vous protéger contre les dépenses médicales imprévues et garantir votre bien-être.',
    },
    {
      title: 'Assurance Vie',
      icon: 'ri-user-heart-line',
      description:
        'Protégez l’avenir de vos proches grâce à des solutions d’assurance vie adaptées à vos objectifs.',
    },
    {
      title: 'Assurance Habitation',
      icon: 'ri-home-shield-line',
      description:
        'Une protection efficace pour votre maison, vos biens et votre patrimoine contre les risques du quotidien.',
    },
    {
      title: 'Assurance Automobile',
      icon: 'ri-car-line',
      description:
        'Des garanties adaptées pour protéger votre véhicule et vous offrir une conduite en toute sérénité.',
    },
    {
      title: 'Assurance Entreprise',
      icon: 'ri-building-2-line',
      description:
        'Des solutions d’assurance conçues pour protéger les entreprises, leurs collaborateurs et leurs actifs.',
    },
    {
      title: 'Conseil en Gestion des Risques',
      icon: 'ri-shield-check-line',
      description:
        'Analyse des risques et accompagnement personnalisé afin de choisir les protections les plus adaptées.',
    },
  ];

  this.benefits = [
    {
      title: 'Protection Complète',
      icon: 'ri-shield-star-line',
      description:
        'Des garanties adaptées pour protéger votre santé, vos biens, votre famille et votre activité.',
    },
    {
      title: 'Conseillers à Votre Écoute',
      icon: 'ri-user-star-line',
      description:
        'Une équipe de professionnels disponible pour vous accompagner dans chacun de vos choix.',
    },
    {
      title: 'Accompagnement Personnalisé',
      icon: 'ri-customer-service-2-line',
      description:
        'Des solutions sur mesure pensées en fonction de vos besoins et de votre situation.',
    },
    {
      title: 'Confiance & Sérénité',
      icon: 'ri-emotion-happy-line',
      description:
        'Profitez d’une véritable tranquillité d’esprit grâce à une protection fiable et durable.',
    },
  ];

  this.ctaImage =
    'img/subsidiaries/compressed/mass_assurance_1440.webp';
}

  setMassFundsInfo() {
  this.hero = {
    eyebrow: 'Services Financiers & Financement',
    title: 'Mass Funds',
    subtitle:
      'Des solutions financières innovantes pour accompagner les particuliers, les entrepreneurs et les entreprises dans la réalisation de leurs projets et la croissance de leurs activités.',
    image: 'img/subsidiaries/compressed/mass_funds_1440.webp',
    alt: 'Conseiller financier de Mass Funds accompagnant un client dans le financement et la planification de ses projets.',
  };

  this.gallery = [
    'img/subsidiaries/compressed/mass_funds_1440.webp',
    'img/subsidiaries/mass-funds/01.jpg',
    'img/subsidiaries/mass-funds/02.jpg',
    'img/subsidiaries/mass-funds/03.jpg',
    'img/subsidiaries/mass-funds/04.jpg',
  ];

  this.intro = {
    title: 'Donnez vie à vos projets financiers',
    paragraph1:
      'Mass Funds accompagne les particuliers, les professionnels et les entreprises en proposant des solutions de financement adaptées à leurs besoins. Notre mission est de faciliter l’accès aux ressources financières nécessaires pour soutenir vos projets et favoriser votre développement.',
    paragraph2:
      'Qu’il s’agisse de financer une activité, de développer une entreprise ou de bénéficier d’un accompagnement financier personnalisé, nos experts mettent leur savoir-faire à votre service pour vous proposer des solutions simples, transparentes et adaptées à votre situation.',
  };

  this.offeringSubtitle =
    'Des solutions financières flexibles pour soutenir vos ambitions et construire un avenir durable.';

  this.subServices = [
    {
      title: 'Financement d’Entreprise',
      icon: 'ri-building-4-line',
      description:
        'Des solutions de financement destinées à soutenir la création, le développement et l’expansion des entreprises.',
    },
    {
      title: 'Financement Personnel',
      icon: 'ri-wallet-3-line',
      description:
        'Des solutions adaptées pour accompagner vos projets personnels et répondre à vos besoins financiers.',
    },
    {
      title: 'Conseil Financier',
      icon: 'ri-presentation-line',
      description:
        'Un accompagnement personnalisé pour vous aider à prendre les meilleures décisions financières.',
    },
    {
      title: 'Planification Financière',
      icon: 'ri-line-chart-line',
      description:
        'Élaborez une stratégie financière efficace pour atteindre vos objectifs à court, moyen et long terme.',
    },
    {
      title: 'Épargne & Gestion Budgétaire',
      icon: 'ri-safe-2-line',
      description:
        'Des solutions pour optimiser votre épargne et mieux gérer vos ressources financières.',
    },
    {
      title: 'Accompagnement des Entrepreneurs',
      icon: 'ri-funds-line',
      description:
        'Des services dédiés aux entrepreneurs pour financer leurs projets et assurer la croissance de leur activité.',
    },
  ];

  this.benefits = [
    {
      title: 'Solutions Flexibles',
      icon: 'ri-scales-3-line',
      description:
        'Des offres adaptées aux besoins spécifiques des particuliers comme des entreprises.',
    },
    {
      title: 'Accompagnement Personnalisé',
      icon: 'ri-user-star-line',
      description:
        'Nos conseillers vous accompagnent à chaque étape de votre projet financier.',
    },
    {
      title: 'Transparence',
      icon: 'ri-file-list-3-line',
      description:
        'Des processus simples, des informations claires et un accompagnement fondé sur la confiance.',
    },
    {
      title: 'Croissance Durable',
      icon: 'ri-rocket-line',
      description:
        'Des solutions pensées pour favoriser votre stabilité financière et soutenir votre développement sur le long terme.',
    },
  ];

  this.ctaImage =
    'img/subsidiaries/compressed/mass_funds_1440.webp';
}


  getHtmlContent(rawHtml: string){
    return this.sanitizer.bypassSecurityTrustHtml(rawHtml)
  }

  p(content: string){
    return `
      <p>${content}</p><br>
    `
  }

}
