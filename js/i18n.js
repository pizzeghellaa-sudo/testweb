(function () {
  'use strict';

  var TRANSLATIONS = {

    /* ── English ─────────────────────────────────────────── */
    en: {
      meta: {
        title: 'MedEquip Supply \u2014 Medical Equipment for Healthcare Providers',
        description: 'Quality-managed medical equipment supply for hospitals, clinics, and procurement teams. Traceable sourcing, compliance documentation, and reliable service.',
        ogTitle: 'MedEquip Supply \u2014 Medical Equipment for Healthcare Providers',
        ogDescription: 'Quality-managed medical equipment supply for hospitals, clinics, and procurement teams. Traceable sourcing, compliance documentation, and reliable service.'
      },
      nav: {
        ariaLabel: 'Main navigation',
        logoAriaLabel: 'MedEquip Supply home',
        toggleAriaLabel: 'Toggle navigation menu',
        products: 'Products',
        quality: 'Quality',
        about: 'About',
        contact: 'Contact',
        cta: 'Get in Touch',
        langSwitcherLabel: 'Select language'
      },
      hero: {
        eyebrow: 'Medical Equipment Supplier',
        title: 'Reliable Medical Equipment Supply for Healthcare Providers',
        desc: 'Quality-managed sourcing, traceability, and documentation for hospitals, clinics, and procurement teams \u2014 with the support you need at every stage.',
        btnProducts: 'View Our Products',
        btnContact: 'Contact Us',
        visualAlt: 'Product image placeholder'
      },
      categories: {
        sectionLabel: 'Our Portfolio',
        heading: 'What We Supply',
        sub: 'We supply a broad range of medical equipment categories to support facility procurement needs.',
        diagnosticName: 'Diagnostic Imaging',
        diagnosticDesc: 'Ultrasound units, X-ray systems, and portable imaging devices for clinical and hospital use.',
        diagnosticLink: 'Explore category',
        surgicalName: 'Surgical Instruments',
        surgicalDesc: 'Procedure-grade instruments and sets for operating theatres and outpatient facilities.',
        surgicalLink: 'Explore category',
        monitoringName: 'Patient Monitoring',
        monitoringDesc: 'Bedside monitors, pulse oximeters, and telemetry systems for continuous patient observation.',
        monitoringLink: 'Explore category',
        infusionName: 'Infusion Systems',
        infusionDesc: 'IV pumps, infusion sets, and accessories designed for accurate and safe fluid delivery.',
        infusionLink: 'Explore category',
        sterilName: 'Sterilization &amp; Disinfection',
        sterilDesc: 'Autoclaves, sterilization pouches, and surface disinfection systems for infection control.',
        sterilLink: 'Explore category',
        mobilityName: 'Mobility &amp; Rehabilitation',
        mobilityDesc: 'Wheelchairs, walking aids, and rehabilitation equipment supporting patient recovery programs.',
        mobilityLink: 'Explore category'
      },
      quality: {
        sectionLabel: 'Quality &amp; Compliance',
        heading: 'Processes You Can Rely On',
        sub: 'We operate quality-managed supply processes with a focus on traceability, documentation, and audit readiness \u2014 supporting your procurement and compliance requirements.',
        badgesAriaLabel: 'Quality commitments',
        badge1Title: 'Documented Processes',
        badge1Text: 'Full documentation packages available upon request, including product specifications, declarations of conformity, and supply chain records.',
        badge2Title: 'End-to-End Traceability',
        badge2Text: 'Lot and batch traceability across our supply chain, supporting recall management and regulatory inspection requirements.',
        badge3Title: 'Audit-Ready',
        badge3Text: "Compliant with applicable standards where required. Our records and processes are structured to support your facility's audit and accreditation activities.",
        stat1Label: 'Documentation',
        stat1Value: 'Available on Request',
        stat2Label: 'Supply Chain',
        stat2Value: 'Fully Traceable',
        stat3Label: 'Standards',
        stat3Value: 'Compliant Where Applicable'
      },
      pillars: {
        sectionLabel: 'Why Work With Us',
        heading: 'Built for Healthcare Procurement',
        sub: 'We understand the demands of healthcare supply \u2014 reliability, compliance, and clear communication are central to everything we do.',
        pillar1Heading: 'Reliable Supply Chain',
        pillar1Text: 'Consistent stock availability and managed lead times, so your facility procurement stays on schedule.',
        pillar2Heading: 'Procurement Support',
        pillar2Text: 'We work alongside procurement teams to match specifications, provide quotations, and coordinate delivery requirements.',
        pillar3Heading: 'Responsive Service',
        pillar3Text: 'Prompt responses to enquiries, order updates, and after-sale support \u2014 with clear points of contact throughout.',
        pillar4Heading: 'Documentation &amp; Traceability',
        pillar4Text: "Detailed records, declarations, and traceability data available to support your facility's compliance and audit requirements."
      },
      cta: {
        heading: 'Ready to source medical equipment for your facility?',
        sub: 'Send us your requirements and our team will respond with product availability, specifications, and pricing details.',
        btn: 'Get in Touch'
      },
      footer: {
        tagline: 'Quality-managed medical equipment supply for hospitals, clinics, and healthcare procurement teams.',
        navColTitle: 'Navigation',
        navProducts: 'Products',
        navQuality: 'Quality &amp; Certifications',
        navAbout: 'About Us',
        navContact: 'Contact',
        contactColTitle: 'Contact',
        disclaimer: 'Product information is for healthcare professionals and procurement use only. All product specifications and availability are subject to change without notice.',
        copyrightSuffix: 'MedEquip Supply. All rights reserved.'
      },
      products: {
        meta: {
          title: 'Products \u2014 MedEquip Supply',
          description: 'Browse our full range of medical equipment categories: diagnostic imaging, surgical instruments, patient monitoring, infusion systems, sterilization, and mobility equipment.',
          ogTitle: 'Products \u2014 MedEquip Supply',
          ogDescription: 'Browse our full range of medical equipment categories for hospitals, clinics, and healthcare procurement teams.'
        },
        header: {
          label: 'Our Products',
          title: 'Product Categories',
          sub: 'A structured overview of the equipment categories we supply to hospitals, clinics, and procurement teams. Contact us to request product specifications, availability, and pricing.'
        },
        categories: {
          sectionLabel: 'Full Portfolio',
          heading: 'What We Supply',
          sub: 'Each category below represents a range of equipment types we can source and supply. Submit an enquiry to discuss your specific requirements.'
        },
        enquireLink: 'Enquire about this category',
        diagnostic: {
          item1: 'Portable ultrasound units',
          item2: 'Digital X-ray systems',
          item3: 'Fluoroscopy and C-arm systems',
          item4: 'Computed radiography readers'
        },
        surgical: {
          item1: 'General surgery instrument sets',
          item2: 'Laparoscopic tools and trocars',
          item3: 'Retractors and clamps',
          item4: 'Electrosurgical equipment'
        },
        monitoring: {
          item1: 'Multiparameter bedside monitors',
          item2: 'Pulse oximeters',
          item3: 'Telemetry and remote monitoring systems',
          item4: 'Vital signs monitors for ward use'
        },
        infusion: {
          item1: 'Volumetric infusion pumps',
          item2: 'Syringe drivers',
          item3: 'IV administration sets',
          item4: 'Enteral feeding systems'
        },
        steril: {
          item1: 'Steam autoclaves',
          item2: 'Sterilization pouches and wraps',
          item3: 'Surface and equipment disinfectants',
          item4: 'Endoscope reprocessing systems'
        },
        mobility: {
          item1: 'Standard and bariatric wheelchairs',
          item2: 'Walking frames and crutches',
          item3: 'Patient transfer aids',
          item4: 'Physiotherapy rehabilitation equipment'
        },
        process: {
          sectionLabel: 'How to Enquire',
          heading: 'Simple Enquiry Process',
          sub: 'Our procurement support team guides you through every step \u2014 from initial specification to delivery coordination.',
          step1Title: 'Submit Your Requirements',
          step1Text: 'Use our contact form or email us with your product category, estimated quantities, and any applicable specifications or standards.',
          step2Title: 'Receive a Response',
          step2Text: 'Our team reviews your enquiry and responds with product availability, documentation options, and indicative pricing within one business day.',
          step3Title: 'Confirm and Coordinate',
          step3Text: 'Once you approve the proposal, we coordinate delivery timelines, logistics, and supply chain documentation for your records.'
        }
      },
      about: {
        meta: {
          title: 'About Us \u2014 MedEquip Supply',
          description: 'Learn about MedEquip Supply \u2014 our mission, values, and commitment to quality-managed medical equipment supply for hospitals, clinics, and procurement teams.',
          ogTitle: 'About Us \u2014 MedEquip Supply',
          ogDescription: 'Learn about MedEquip Supply \u2014 our mission, values, and commitment to quality-managed medical equipment supply.'
        },
        header: {
          label: 'Our Story',
          title: 'About MedEquip Supply',
          sub: 'A dedicated supplier of medical equipment to hospitals, clinics, and healthcare procurement teams \u2014 built on transparency, traceability, and reliable service.'
        },
        mission: {
          sectionLabel: 'Our Mission',
          heading: 'Supplying Healthcare with Confidence',
          sub: 'We focus on quality-managed supply, clear documentation, and responsive support \u2014 giving procurement teams the information they need at every stage.',
          para1: 'We supply medical equipment to healthcare providers, supporting procurement teams with traceable, quality-managed products. Our processes are structured to provide documentation, traceability, and compliance-ready records upon request.',
          para2: 'From initial enquiry to post-delivery follow-up, we work alongside your team to match specifications, coordinate logistics, and ensure your facility receives reliable, well-documented equipment.'
        },
        values: {
          sectionLabel: 'What We Stand For',
          heading: 'Our Core Values',
          sub: 'Four principles that guide how we operate and how we serve our clients.',
          value1Heading: 'Quality Management',
          value1Text: 'Our supply processes follow quality-managed procedures, with documentation packages available for every product category.',
          value2Heading: 'Regulatory Support',
          value2Text: 'We help procurement teams navigate documentation requirements, providing declarations of conformity and traceability records as needed.',
          value3Heading: 'Reliable Supply Chain',
          value3Text: 'We maintain managed relationships with verified suppliers to ensure consistent product availability and predictable lead times.',
          value4Heading: 'Dedicated Service',
          value4Text: 'Our team is responsive, accessible, and focused on long-term client relationships \u2014 not single transactions.'
        },
        commitment: {
          sectionLabel: 'Our Commitment',
          heading: 'What You Can Expect from Us',
          sub: 'We make specific commitments to every client we work with.',
          point1: 'Documentation on request \u2014 product specifications, declarations of conformity, and supply chain records available for every order.',
          point2: 'Pre-sales technical support \u2014 our team assists with specification matching, product comparison, and procurement guidance before you commit.',
          point3: 'Post-delivery follow-up \u2014 we check in after delivery to confirm receipt, address any issues, and support your acceptance process.'
        }
      },
      contact: {
        meta: {
          title: 'Contact Us \u2014 MedEquip Supply',
          description: 'Get in touch with MedEquip Supply. Send us your equipment requirements and our procurement support team will respond with availability, specifications, and pricing.',
          ogTitle: 'Contact Us \u2014 MedEquip Supply',
          ogDescription: 'Contact MedEquip Supply for medical equipment enquiries, quote requests, and procurement support.'
        },
        header: {
          label: 'Get in Touch',
          title: 'Contact Us',
          sub: 'Send us your requirements and our team will respond with product availability, documentation, and pricing details within one business day.'
        },
        form: {
          sectionLabel: 'Send an Enquiry',
          heading: 'Enquiry Form',
          sub: 'Complete the form below and a member of our procurement support team will be in touch promptly.',
          labelName: 'Full Name',
          labelCompany: 'Company / Organisation',
          labelEmail: 'Email Address',
          labelPhone: 'Phone Number (optional)',
          labelSubject: 'Subject',
          labelMessage: 'Message',
          subjectDefault: 'Select a subject\u2026',
          subjectGeneral: 'General Enquiry',
          subjectQuote: 'Quote Request',
          subjectCertDocs: 'Certification Documents',
          subjectOther: 'Other',
          btnSubmit: 'Send Enquiry',
          confirmMsg: 'Thank you \u2014 your email client should open with your enquiry pre-filled. Send the email to submit your request.'
        },
        info: {
          heading: 'Contact Information',
          addressTitle: 'Address',
          address: '123 Placeholder Street, City, Country',
          emailTitle: 'Email',
          email: 'info@medequipsupply.example',
          phoneTitle: 'Phone',
          phone: '+1 (000) 000-0000',
          hoursTitle: 'Business Hours',
          hours: 'Monday \u2013 Friday, 09:00 \u2013 17:00'
        }
      }
    },

    /* ── Italian ──────────────────────────────────────────── */
    it: {
      meta: {
        title: 'MedEquip Supply \u2014 Forniture di Dispositivi Medici per Strutture Sanitarie',
        description: 'Fornitura di dispositivi medici con gestione qualit\u00e0 per ospedali, cliniche e uffici acquisti. Tracciabilit\u00e0, documentazione di conformit\u00e0 e assistenza affidabile.',
        ogTitle: 'MedEquip Supply \u2014 Forniture di Dispositivi Medici per Strutture Sanitarie',
        ogDescription: 'Fornitura di dispositivi medici con gestione qualit\u00e0 per ospedali, cliniche e uffici acquisti. Tracciabilit\u00e0, documentazione di conformit\u00e0 e assistenza affidabile.'
      },
      nav: {
        ariaLabel: 'Navigazione principale',
        logoAriaLabel: 'MedEquip Supply home',
        toggleAriaLabel: 'Apri/chiudi menu di navigazione',
        products: 'Prodotti',
        quality: 'Qualit\u00e0',
        about: 'Chi siamo',
        contact: 'Contatti',
        cta: 'Contattaci',
        langSwitcherLabel: 'Seleziona lingua'
      },
      hero: {
        eyebrow: 'Fornitore di Dispositivi Medici',
        title: 'Fornitura Affidabile di Dispositivi Medici per Strutture Sanitarie',
        desc: 'Approvvigionamento con gestione qualit\u00e0, tracciabilit\u00e0 e documentazione per ospedali, cliniche e uffici acquisti \u2014 con il supporto necessario in ogni fase.',
        btnProducts: 'Scopri i nostri prodotti',
        btnContact: 'Contattaci',
        visualAlt: 'Segnaposto immagine prodotto'
      },
      categories: {
        sectionLabel: 'Il Nostro Portafoglio',
        heading: 'Cosa Forniamo',
        sub: "Forniamo un'ampia gamma di categorie di dispositivi medici per supportare le esigenze di approvvigionamento delle strutture sanitarie.",
        diagnosticName: 'Diagnostica per Immagini',
        diagnosticDesc: 'Ecografi, sistemi a raggi X e dispositivi di imaging portatili per uso clinico e ospedaliero.',
        diagnosticLink: 'Esplora la categoria',
        surgicalName: 'Strumentario Chirurgico',
        surgicalDesc: 'Strumenti e set di livello procedurale per sale operatorie e strutture ambulatoriali.',
        surgicalLink: 'Esplora la categoria',
        monitoringName: 'Monitoraggio Pazienti',
        monitoringDesc: "Monitor da letto, pulsiossimetri e sistemi di telemetria per l'osservazione continua del paziente.",
        monitoringLink: 'Esplora la categoria',
        infusionName: 'Sistemi di Infusione',
        infusionDesc: 'Pompe per infusione, set di infusione e accessori progettati per una somministrazione di fluidi accurata e sicura.',
        infusionLink: 'Esplora la categoria',
        sterilName: 'Sterilizzazione &amp; Disinfezione',
        sterilDesc: 'Autoclavi, buste per sterilizzazione e sistemi di disinfezione superficiale per il controllo delle infezioni.',
        sterilLink: 'Esplora la categoria',
        mobilityName: 'Mobilit\u00e0 &amp; Riabilitazione',
        mobilityDesc: 'Sedie a rotelle, ausili per la deambulazione e attrezzature per la riabilitazione a supporto dei programmi di recupero dei pazienti.',
        mobilityLink: 'Esplora la categoria'
      },
      quality: {
        sectionLabel: 'Qualit\u00e0 &amp; Conformit\u00e0',
        heading: 'Processi su cui Puoi Contare',
        sub: 'Operiamo con processi di fornitura a gestione qualit\u00e0, con attenzione alla tracciabilit\u00e0, alla documentazione e alla prontezza agli audit \u2014 a supporto dei requisiti di approvvigionamento e conformit\u00e0.',
        badgesAriaLabel: 'Impegni per la qualit\u00e0',
        badge1Title: 'Processi Documentati',
        badge1Text: 'Pacchetti documentali completi disponibili su richiesta, incluse specifiche di prodotto, dichiarazioni di conformit\u00e0 e registrazioni della supply chain.',
        badge2Title: 'Tracciabilit\u00e0 Completa',
        badge2Text: 'Tracciabilit\u00e0 di lotto e batch lungo tutta la nostra supply chain, a supporto della gestione dei richiami e dei requisiti di ispezione regolamentare.',
        badge3Title: 'Pronto per gli Audit',
        badge3Text: "Conforme agli standard applicabili dove richiesto. I nostri registri e processi sono strutturati per supportare le attivit\u00e0 di audit e accreditamento della struttura.",
        stat1Label: 'Documentazione',
        stat1Value: 'Disponibile su Richiesta',
        stat2Label: 'Supply Chain',
        stat2Value: 'Completamente Tracciabile',
        stat3Label: 'Standard',
        stat3Value: 'Conformi ove Applicabili'
      },
      pillars: {
        sectionLabel: 'Perch\u00e9 Sceglierci',
        heading: 'Costruito per il Procurement Sanitario',
        sub: 'Comprendiamo le esigenze della fornitura sanitaria \u2014 affidabilit\u00e0, conformit\u00e0 e comunicazione chiara sono al centro di tutto ci\u00f2 che facciamo.',
        pillar1Heading: 'Supply Chain Affidabile',
        pillar1Text: "Disponibilit\u00e0 costante di magazzino e tempi di consegna gestiti, in modo che l'approvvigionamento della tua struttura rimanga nei tempi previsti.",
        pillar2Heading: 'Supporto agli Acquisti',
        pillar2Text: 'Lavoriamo a fianco degli uffici acquisti per abbinare le specifiche, fornire preventivi e coordinare i requisiti di consegna.',
        pillar3Heading: 'Assistenza Reattiva',
        pillar3Text: 'Risposte tempestive alle richieste, aggiornamenti sugli ordini e supporto post-vendita \u2014 con riferimenti chiari in ogni fase.',
        pillar4Heading: 'Documentazione &amp; Tracciabilit\u00e0',
        pillar4Text: "Registrazioni dettagliate, dichiarazioni e dati di tracciabilit\u00e0 disponibili per supportare i requisiti di conformit\u00e0 e audit della struttura."
      },
      cta: {
        heading: 'Pronto ad approvvigionare dispositivi medici per la tua struttura?',
        sub: 'Inviaci le tue esigenze e il nostro team risponder\u00e0 con disponibilit\u00e0 dei prodotti, specifiche tecniche e dettagli sui prezzi.',
        btn: 'Contattaci'
      },
      footer: {
        tagline: 'Fornitura di dispositivi medici con gestione qualit\u00e0 per ospedali, cliniche e uffici acquisti sanitari.',
        navColTitle: 'Navigazione',
        navProducts: 'Prodotti',
        navQuality: 'Qualit\u00e0 &amp; Certificazioni',
        navAbout: 'Chi siamo',
        navContact: 'Contatti',
        contactColTitle: 'Contatti',
        disclaimer: 'Le informazioni sui prodotti sono destinate esclusivamente a professionisti sanitari e uffici acquisti. Tutte le specifiche e la disponibilit\u00e0 dei prodotti sono soggette a variazioni senza preavviso.',
        copyrightSuffix: 'MedEquip Supply. Tutti i diritti riservati.'
      },
      products: {
        meta: {
          title: 'Prodotti \u2014 MedEquip Supply',
          description: "Consulta il nostro catalogo completo di categorie di dispositivi medici: diagnostica per immagini, strumentario chirurgico, monitoraggio pazienti, sistemi di infusione, sterilizzazione e ausili alla mobilit\u00e0.",
          ogTitle: 'Prodotti \u2014 MedEquip Supply',
          ogDescription: 'Consulta il nostro catalogo completo di categorie di dispositivi medici per ospedali, cliniche e uffici acquisti sanitari.'
        },
        header: {
          label: 'I Nostri Prodotti',
          title: 'Categorie di Prodotto',
          sub: 'Una panoramica strutturata delle categorie di dispositivi che forniamo a ospedali, cliniche e uffici acquisti. Contattaci per richiedere specifiche tecniche, disponibilit\u00e0 e prezzi.'
        },
        categories: {
          sectionLabel: 'Portafoglio Completo',
          heading: 'Cosa Forniamo',
          sub: 'Ogni categoria di seguito rappresenta una gamma di tipi di dispositivi che possiamo reperire e fornire. Invia una richiesta per discutere le tue esigenze specifiche.'
        },
        enquireLink: 'Richiedi informazioni su questa categoria',
        diagnostic: {
          item1: 'Ecografi portatili',
          item2: 'Sistemi radiografici digitali',
          item3: 'Sistemi di fluoroscopia e archi a C',
          item4: 'Lettori per radiografia computerizzata'
        },
        surgical: {
          item1: 'Set di strumenti per chirurgia generale',
          item2: 'Strumenti laparoscopici e trocar',
          item3: 'Divaricatori e morsetti',
          item4: 'Apparecchiature per elettrochirurgia'
        },
        monitoring: {
          item1: 'Monitor multiparametrici da letto',
          item2: 'Pulsiossimetri',
          item3: 'Sistemi di telemetria e monitoraggio remoto',
          item4: 'Monitor dei parametri vitali per reparto'
        },
        infusion: {
          item1: 'Pompe per infusione volumetriche',
          item2: 'Driver per siringa',
          item3: 'Set di somministrazione endovenosa',
          item4: 'Sistemi di nutrizione enterale'
        },
        steril: {
          item1: 'Autoclavi a vapore',
          item2: 'Buste e teli per sterilizzazione',
          item3: 'Disinfettanti per superfici e attrezzature',
          item4: 'Sistemi di ricondizionamento endoscopi'
        },
        mobility: {
          item1: 'Sedie a rotelle standard e bariatriche',
          item2: 'Deambulatori e stampelle',
          item3: 'Ausili per il trasferimento dei pazienti',
          item4: 'Attrezzature per riabilitazione fisioterapica'
        },
        process: {
          sectionLabel: 'Come Fare Richiesta',
          heading: 'Processo di Richiesta Semplice',
          sub: 'Il nostro team di supporto agli acquisti ti guida in ogni fase \u2014 dalla specifica iniziale al coordinamento della consegna.',
          step1Title: 'Invia i Tuoi Requisiti',
          step1Text: 'Utilizza il nostro modulo di contatto o scrivici via email con la categoria di prodotto, le quantit\u00e0 stimate e le specifiche o standard applicabili.',
          step2Title: 'Ricevi una Risposta',
          step2Text: 'Il nostro team esamina la tua richiesta e risponde con disponibilit\u00e0 del prodotto, opzioni di documentazione e prezzi indicativi entro un giorno lavorativo.',
          step3Title: 'Conferma e Coordina',
          step3Text: 'Una volta approvata la proposta, coordiniamo le tempistiche di consegna, la logistica e la documentazione della supply chain per i tuoi archivi.'
        }
      },
      about: {
        meta: {
          title: 'Chi Siamo \u2014 MedEquip Supply',
          description: 'Scopri MedEquip Supply \u2014 la nostra missione, i valori e l\'impegno per una fornitura di dispositivi medici con gestione qualit\u00e0 per ospedali, cliniche e uffici acquisti.',
          ogTitle: 'Chi Siamo \u2014 MedEquip Supply',
          ogDescription: 'Scopri MedEquip Supply \u2014 la nostra missione, i valori e l\'impegno per una fornitura di dispositivi medici con gestione qualit\u00e0.'
        },
        header: {
          label: 'La Nostra Storia',
          title: 'Chi \u00e8 MedEquip Supply',
          sub: 'Un fornitore specializzato di dispositivi medici per ospedali, cliniche e uffici acquisti sanitari \u2014 fondato su trasparenza, tracciabilit\u00e0 e assistenza affidabile.'
        },
        mission: {
          sectionLabel: 'La Nostra Missione',
          heading: 'Fornire al Settore Sanitario con Fiducia',
          sub: 'Ci concentriamo sulla fornitura con gestione qualit\u00e0, documentazione chiara e supporto reattivo \u2014 offrendo agli uffici acquisti le informazioni necessarie in ogni fase.',
          para1: 'Forniamo dispositivi medici a strutture sanitarie, supportando gli uffici acquisti con prodotti tracciabili e a gestione qualit\u00e0. I nostri processi sono strutturati per fornire documentazione, tracciabilit\u00e0 e registrazioni pronte per la conformit\u00e0 su richiesta.',
          para2: 'Dalla prima richiesta al follow-up post-consegna, lavoriamo a fianco del tuo team per abbinare le specifiche, coordinare la logistica e garantire che la tua struttura riceva attrezzature affidabili e ben documentate.'
        },
        values: {
          sectionLabel: 'I Nostri Principi',
          heading: 'I Nostri Valori Fondamentali',
          sub: 'Quattro principi che guidano il nostro modo di operare e di servire i nostri clienti.',
          value1Heading: 'Gestione della Qualit\u00e0',
          value1Text: 'I nostri processi di fornitura seguono procedure con gestione qualit\u00e0, con pacchetti documentali disponibili per ogni categoria di prodotto.',
          value2Heading: 'Supporto Normativo',
          value2Text: 'Aiutiamo gli uffici acquisti a gestire i requisiti documentali, fornendo dichiarazioni di conformit\u00e0 e registrazioni di tracciabilit\u00e0 quando necessario.',
          value3Heading: 'Supply Chain Affidabile',
          value3Text: 'Manteniamo relazioni gestite con fornitori verificati per garantire disponibilit\u00e0 costante dei prodotti e tempi di consegna prevedibili.',
          value4Heading: 'Assistenza Dedicata',
          value4Text: 'Il nostro team \u00e8 reattivo, accessibile e orientato alle relazioni a lungo termine con i clienti \u2014 non alle singole transazioni.'
        },
        commitment: {
          sectionLabel: 'Il Nostro Impegno',
          heading: 'Cosa Puoi Aspettarti da Noi',
          sub: 'Ci assumiamo impegni specifici con ogni cliente con cui lavoriamo.',
          point1: 'Documentazione su richiesta \u2014 specifiche di prodotto, dichiarazioni di conformit\u00e0 e registrazioni della supply chain disponibili per ogni ordine.',
          point2: 'Supporto tecnico pre-vendita \u2014 il nostro team assiste nell\'abbinamento delle specifiche, nel confronto dei prodotti e nella guida agli acquisti prima dell\'impegno.',
          point3: 'Follow-up post-consegna \u2014 verifichiamo dopo la consegna per confermare il ricevimento, risolvere eventuali problemi e supportare il processo di accettazione.'
        }
      },
      contact: {
        meta: {
          title: 'Contatti \u2014 MedEquip Supply',
          description: 'Contatta MedEquip Supply. Inviaci le tue esigenze di attrezzatura e il nostro team di supporto agli acquisti risponder\u00e0 con disponibilit\u00e0, specifiche e prezzi.',
          ogTitle: 'Contatti \u2014 MedEquip Supply',
          ogDescription: 'Contatta MedEquip Supply per richieste di dispositivi medici, preventivi e supporto agli acquisti.'
        },
        header: {
          label: 'Contattaci',
          title: 'Contatti',
          sub: 'Inviaci le tue esigenze e il nostro team risponder\u00e0 con disponibilit\u00e0 dei prodotti, documentazione e dettagli sui prezzi entro un giorno lavorativo.'
        },
        form: {
          sectionLabel: 'Invia una Richiesta',
          heading: 'Modulo di Contatto',
          sub: 'Compila il modulo sottostante e un membro del nostro team di supporto agli acquisti ti contatter\u00e0 al pi\u00f9 presto.',
          labelName: 'Nome e Cognome',
          labelCompany: 'Azienda / Organizzazione',
          labelEmail: 'Indirizzo Email',
          labelPhone: 'Numero di Telefono (opzionale)',
          labelSubject: 'Oggetto',
          labelMessage: 'Messaggio',
          subjectDefault: 'Seleziona un oggetto\u2026',
          subjectGeneral: 'Richiesta Generica',
          subjectQuote: 'Richiesta di Preventivo',
          subjectCertDocs: 'Documenti di Certificazione',
          subjectOther: 'Altro',
          btnSubmit: 'Invia Richiesta',
          confirmMsg: 'Grazie \u2014 il tuo client email dovrebbe aprirsi con la richiesta precompilata. Invia l\'email per completare la richiesta.'
        },
        info: {
          heading: 'Informazioni di Contatto',
          addressTitle: 'Indirizzo',
          address: 'Via Placeholder 123, Citt\u00e0, Paese',
          emailTitle: 'Email',
          email: 'info@medequipsupply.example',
          phoneTitle: 'Telefono',
          phone: '+1 (000) 000-0000',
          hoursTitle: 'Orario di Lavoro',
          hours: 'Luned\u00ec \u2013 Venerd\u00ec, 09:00 \u2013 17:00'
        }
      }
    }

  };

  /* Resolve a dot-notation key against a translations object */
  function resolveDotKey(obj, key) {
    return key.split('.').reduce(function (o, k) {
      return (o && o[k] !== undefined) ? o[k] : null;
    }, obj);
  }

  function setLang(lang, save) {
    if (!TRANSLATIONS[lang]) return;
    var t = TRANSLATIONS[lang];

    /* 1. <html lang> attribute */
    document.documentElement.lang = lang;

    /* 2. <title> and meta — page-aware (falls back to t.meta for index.html) */
    var pageMetaEl = document.querySelector('meta[name="i18n-page"]');
    var pageKey = pageMetaEl ? pageMetaEl.getAttribute('content') : null;
    var metaT = (pageKey && resolveDotKey(t, pageKey + '.meta'))
      ? resolveDotKey(t, pageKey + '.meta')
      : t.meta;

    document.title = metaT.title;

    /* 3. Meta tags — updated directly via querySelector */
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', metaT.description);

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', metaT.ogTitle);

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', metaT.ogDescription);

    /* 4. Plain-text elements — data-i18n */
    var textEls = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < textEls.length; i++) {
      var el = textEls[i];
      var val = resolveDotKey(t, el.getAttribute('data-i18n'));
      if (val !== null) el.textContent = val;
    }

    /* 5. HTML elements — data-i18n-html (preserves entities like &amp;) */
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlEls.length; j++) {
      var elH = htmlEls[j];
      var valH = resolveDotKey(t, elH.getAttribute('data-i18n-html'));
      if (valH !== null) elH.innerHTML = valH;
    }

    /* 6. Attribute updates — data-i18n-attr="attrName:key[,attrName:key]" */
    var attrEls = document.querySelectorAll('[data-i18n-attr]');
    for (var k = 0; k < attrEls.length; k++) {
      var elA = attrEls[k];
      var pairs = elA.getAttribute('data-i18n-attr').split(',');
      for (var m = 0; m < pairs.length; m++) {
        var colonIdx = pairs[m].indexOf(':');
        if (colonIdx < 1) continue;
        var attrName = pairs[m].slice(0, colonIdx).trim();
        var attrKey  = pairs[m].slice(colonIdx + 1).trim();
        var valA = resolveDotKey(t, attrKey);
        if (valA !== null) elA.setAttribute(attrName, valA);
      }
    }

    /* 7. aria-current on lang-switcher buttons */
    var btns = document.querySelectorAll('.lang-switcher__btn');
    for (var n = 0; n < btns.length; n++) {
      btns[n].setAttribute(
        'aria-current',
        btns[n].getAttribute('data-lang') === lang ? 'true' : 'false'
      );
    }

    /* 8. Persist to localStorage (safe on file:// — wrapped in try/catch) */
    if (save) {
      try { localStorage.setItem('lang', lang); } catch (e) {}
    }
  }

  function initI18n() {
    /* Read saved language preference */
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    var lang = (saved && TRANSLATIONS[saved]) ? saved : 'en';

    /* Wire click listeners on language buttons */
    var btns = document.querySelectorAll('.lang-switcher__btn');
    for (var i = 0; i < btns.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () {
          setLang(btn.getAttribute('data-lang'), true);
        });
      }(btns[i]));
    }

    /* Apply initial language without re-saving */
    setLang(lang, false);
  }

  /* Run after DOM is ready (scripts are at end of body, so readyState
     will be 'interactive' or 'complete', but guard just in case) */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }

}());
