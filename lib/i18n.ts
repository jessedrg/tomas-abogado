export const locales = ["es", "en", "fr", "ar"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "es"

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  ar: "العربية",
}

export const localeFlags: Record<Locale, string> = {
  es: "🇪🇸",
  en: "🇬🇧",
  fr: "🇫🇷",
  ar: "🇲🇦",
}

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      about: "Proceso",
      cases: "Casos",
      contact: "Contacto",
      freeConsultation: "Consulta Urgente Gratis",
    },
    hero: {
      badge: "Distinción Honorífica por Ejercicio Ejemplar de la Abogacía",
      title: "¿Detenido por Narcotráfico?",
      titleAccent: "Defensa Penal Urgente",
      subtitle: "Tomás Gilabert, uno de los abogados penalistas con más prestigio en España. Más de 50 años de experiencia en defensa penal. Especialización en narcotráfico y todo tipo de delitos penales. Primera consulta gratuita.",
      cta: "Llamar Ahora - Urgente",
      ctaSecondary: "Solicitar Presupuesto",
    },
    stats: {
      cases: "Casos Defendidos",
      experience: "Años de Trayectoria",
      success: "Tasa de Éxito",
      available: "Atención Urgente",
      availableValue: "24h",
    },
    credentials: {
      label: "Nuestras Credenciales",
      title: "50 Años Defendiendo Sus Derechos",
      subtitle: "Despacho galardonado con la Distinción Honorífica por Ejercicio Ejemplar de la Abogacía. Más de medio siglo de experiencia en los casos más complejos de narcotráfico en España.",
      item1: { title: "Distinción Honorífica", desc: "Reconocimiento del Ilustre Colegio de Abogados por ejercicio ejemplar de la profesión durante más de 50 años." },
      item2: { title: "Especialización en Narcotráfico", desc: "Defensa exclusiva en casos de tráfico de drogas, blanqueo de capitales y delitos contra la salud pública." },
      item3: { title: "Equipo Multidisciplinar", desc: "Abogados, peritos forenses y criminología. Coordinación con letrados internacionales para casos transfronterizos." },
      item4: { title: "Confidencialidad Absoluta", desc: "Protocolo de seguridad y privacidad. Comunicaciones cifradas. Reuniones discretas en ubicaciones seguras." },
    },
    services: {
      label: "Servicios de Defensa Penal",
      title: "¿Necesita un Abogado Penalista?",
      subtitle: "Defensa penal urgente en casos de narcotráfico. Presupuesto sin compromiso. Pago fraccionado disponible.",
    },
    servicesList: {
      trafficking: {
        title: "Abogado Narcotráfico Urgente",
        desc: "¿Detenido por tráfico de drogas? Defensa inmediata. Acudimos a comisaría. Presupuesto gratis.",
      },
      possession: {
        title: "Abogado Posesión Drogas",
        desc: "Defensa en casos de tenencia. Evite cargos graves. Consulta gratuita y confidencial.",
      },
      conspiracy: {
        title: "Defensa Organización Criminal",
        desc: "Acusado de pertenencia a organización. Reducción de penas. Negociación con fiscalía.",
      },
      moneylaundering: {
        title: "Abogado Blanqueo Capitales",
        desc: "Defensa especializada en blanqueo. Proteja sus bienes. Actuación inmediata.",
      },
      international: {
        title: "Abogado Extradición España",
        desc: "Evite la extradición. Defensa en casos internacionales. Coordinación con abogados extranjeros.",
      },
      appeals: {
        title: "Recurrir Sentencia Drogas",
        desc: "¿Sentencia injusta? Recurso de apelación. Segunda opinión legal gratuita.",
      },
    },
    process: {
      label: "Cómo Trabajamos",
      title: "Nuestro Método de Defensa",
      step1: {
        title: "Atención Inmediata 24h",
        desc: "Recibimos su llamada y un abogado especializado evalúa su caso de inmediato. Si está detenido, nos desplazamos a comisaría en menos de 2 horas. Asistencia letrada desde el primer momento.",
      },
      step2: {
        title: "Análisis Estratégico del Caso",
        desc: "Estudiamos todas las pruebas, identificamos irregularidades procesales y diseñamos una estrategia de defensa personalizada. Revisamos registros, escuchas telefónicas y cadena de custodia.",
      },
      step3: {
        title: "Negociación con Fiscalía",
        desc: "Cuando conviene, negociamos acuerdos de conformidad para reducir penas. Nuestra experiencia de 50 años nos permite conseguir los mejores acuerdos posibles.",
      },
      step4: {
        title: "Defensa en Juicio",
        desc: "Si el caso va a juicio, defendemos con la máxima agresividad. Interrogamos testigos, impugnamos pruebas y presentamos alegatos contundentes ante el tribunal.",
      },
    },
    reviews: {
      label: "Testimonios",
      title: "Lo Que Dicen Mis Clientes",
      verified: "Verificado",
    },
    cta: {
      title: "¿Detenido? Llame Ahora",
      subtitle: "Abogado penalista urgente. Acudimos a comisaría en menos de 2 horas. Consulta gratuita.",
      button: "Llamar Urgente 24h",
      whatsapp: "WhatsApp Directo",
    },
    faq: {
      label: "Preguntas Frecuentes",
      title: "¿Cuánto Cuesta un Abogado Penalista?",
    },
    footer: {
      description: "Abogado penalista urgente especializado en narcotráfico. Atención 24 horas. Primera consulta gratuita. Presupuesto sin compromiso.",
      services: "Contratar Abogado",
      cities: "Ciudades",
      contact: "Contacto Urgente",
      rights: "Todos los derechos reservados.",
      privacy: "Privacidad",
      legal: "Aviso Legal",
      cookies: "Cookies",
    },
    cityPage: {
      breadcrumbHome: "Inicio",
      freeQuote: "Presupuesto Gratis Ahora",
      howItWorks: "Ver Precios",
      certified: "Distinción Honorífica",
      experience: "50 Años de Experiencia",
      confidential: "Confidencialidad Absoluta",
      urgent: "Acudimos en 2 Horas",
      nearbyTitle: "Abogados Cerca de Ti",
      relatedTitle: "Servicios Relacionados",
      guideLabel: "Información Legal",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      cases: "Cases",
      contact: "Contact",
      freeConsultation: "Free Consultation",
    },
    hero: {
      badge: "Honorary Distinction for Exemplary Practice of Law",
      title: "Arrested for Drug Trafficking?",
      titleAccent: "Urgent Criminal Defense",
      subtitle: "Tomás Gilabert, one of the most prestigious criminal defense attorneys in Spain. Over 50 years of experience in criminal defense. Specialization in drug trafficking and all types of criminal offenses. Free first consultation.",
      cta: "Call Now - Urgent",
      ctaSecondary: "Request Quote",
    },
    stats: {
      cases: "Cases Defended",
      experience: "Years of Experience",
      success: "Success Rate",
      available: "Urgent Care",
      availableValue: "24h",
    },
    credentials: {
      label: "Our Credentials",
      title: "50 Years Defending Your Rights",
      subtitle: "Law firm awarded the Honorary Distinction for Exemplary Practice of Law. Over half a century of experience in the most complex drug trafficking cases in Spain.",
      item1: { title: "Honorary Distinction", desc: "Recognition from the Bar Association for exemplary practice of the profession for over 50 years." },
      item2: { title: "Drug Trafficking Specialization", desc: "Exclusive defense in drug trafficking, money laundering and public health crime cases." },
      item3: { title: "Multidisciplinary Team", desc: "Lawyers, forensic experts and criminologists. Coordination with international attorneys for cross-border cases." },
      item4: { title: "Absolute Confidentiality", desc: "Security and privacy protocol. Encrypted communications. Discreet meetings in secure locations." },
    },
    services: {
      label: "Practice Areas",
      title: "Specialized Drug Trafficking Defense",
      subtitle: "Experience in all types of controlled substance offenses.",
    },
    servicesList: {
      trafficking: {
        title: "Drug Trafficking",
        desc: "Defense in international, national and local trafficking cases. Strategies for charge and sentence reduction.",
      },
      possession: {
        title: "Possession with Intent",
        desc: "Differentiation between simple possession and intent to distribute. Constitutional rights defense.",
      },
      conspiracy: {
        title: "Conspiracy",
        desc: "Defense in criminal organization and trafficking conspiracy cases. Evidence and testimony analysis.",
      },
      moneylaundering: {
        title: "Money Laundering",
        desc: "Cases related to drug trafficking money laundering. Asset defense.",
      },
      international: {
        title: "International Cases",
        desc: "Extraditions, international judicial cooperation, Spain-Morocco cross-border cases.",
      },
      appeals: {
        title: "Appeals",
        desc: "Sentence review, cassation appeals, Supreme Court appeals.",
      },
    },
    process: {
      label: "How We Work",
      title: "Our Defense Method",
      step1: { title: "Immediate 24h Attention", desc: "We receive your call and a specialized lawyer evaluates your case immediately. If you are detained, we travel to the police station in less than 2 hours." },
      step2: { title: "Strategic Case Analysis", desc: "We study all evidence, identify procedural irregularities and design a personalized defense strategy. We review records, wiretaps and chain of custody." },
      step3: { title: "Prosecution Negotiation", desc: "When appropriate, we negotiate plea agreements to reduce sentences. Our 50 years of experience allows us to achieve the best possible agreements." },
      step4: { title: "Trial Defense", desc: "If the case goes to trial, we defend with maximum aggressiveness. We cross-examine witnesses, challenge evidence and present compelling arguments." },
    },
    reviews: {
      label: "Testimonials",
      title: "What My Clients Say",
      verified: "Verified",
    },
    cta: {
      title: "Your Freedom Is My Priority",
      subtitle: "Every minute counts. Contact now for a confidential evaluation of your case.",
      button: "Call Now",
      whatsapp: "WhatsApp 24h",
    },
    faq: {
      label: "FAQ",
      title: "Questions About Your Case",
    },
    footer: {
      description: "Criminal defense attorney specialized in drug trafficking and public health crimes. Discreet and effective defense throughout Spain.",
      services: "Services",
      cities: "Cities",
      contact: "Contact",
      rights: "All rights reserved.",
      privacy: "Privacy",
      legal: "Legal Notice",
      cookies: "Cookies",
    },
    cityPage: {
      breadcrumbHome: "Home",
      certified: "Honorary Distinction",
      experience: "50 Years of Experience",
      confidential: "Absolute Confidentiality",
      urgent: "We Arrive in 2 Hours",
      howItWorks: "See Prices",
      freeQuote: "Free Quote Now",
      nearbyTitle: "Lawyers Near You",
      relatedTitle: "Related Services",
      guideLabel: "Legal Information",
    },
  },
  fr: {
    nav: {
      services: "Services",
      about: "À Propos",
      cases: "Affaires",
      contact: "Contact",
      freeConsultation: "Consultation Gratuite",
    },
    hero: {
      badge: "Distinction Honorifique pour Exercice Exemplaire du Droit",
      title: "Arrêté pour Trafic de Drogue?",
      titleAccent: "Défense Pénale Urgente",
      subtitle: "Tomás Gilabert, l'un des avocats pénalistes les plus prestigieux d'Espagne. Plus de 50 ans d'expérience en défense pénale. Spécialisation en trafic de drogue et tous types de délits pénaux. Première consultation gratuite.",
      cta: "Appeler Maintenant - Urgent",
      ctaSecondary: "Demander un Devis",
    },
    stats: {
      cases: "Affaires Défendues",
      experience: "Années d'Expérience",
      success: "Taux de Réussite",
      available: "Soins Urgents",
      availableValue: "24h",
    },
    credentials: {
      label: "Nos Qualifications",
      title: "50 Ans à Défendre Vos Droits",
      subtitle: "Cabinet récompensé par la Distinction Honorifique pour Exercice Exemplaire du Droit. Plus d'un demi-siècle d'expérience dans les affaires de trafic de drogue les plus complexes en Espagne.",
      item1: { title: "Distinction Honorifique", desc: "Reconnaissance du Barreau pour exercice exemplaire de la profession pendant plus de 50 ans." },
      item2: { title: "Spécialisation Trafic de Drogue", desc: "Défense exclusive dans les affaires de trafic de drogue, blanchiment d'argent et crimes contre la santé publique." },
      item3: { title: "Équipe Multidisciplinaire", desc: "Avocats, experts forensiques et criminologues. Coordination avec des avocats internationaux pour les affaires transfrontalières." },
      item4: { title: "Confidentialité Absolue", desc: "Protocole de sécurité et de confidentialité. Communications cryptées. Réunions discrètes dans des lieux sécurisés." },
    },
    services: {
      label: "Domaines de Pratique",
      title: "Défense Spécialisée en Trafic de Drogue",
      subtitle: "Expérience dans tous les types de délits liés aux substances contrôlées.",
    },
    servicesList: {
      trafficking: {
        title: "Trafic de Drogue",
        desc: "Défense dans les affaires de trafic international, national et local. Stratégies de réduction des charges et peines.",
      },
      possession: {
        title: "Possession avec Intention",
        desc: "Différenciation entre possession simple et intention de distribution. Défense des droits constitutionnels.",
      },
      conspiracy: {
        title: "Conspiration",
        desc: "Défense dans les affaires d'organisation criminelle et de conspiration. Analyse des preuves et témoignages.",
      },
      moneylaundering: {
        title: "Blanchiment d'Argent",
        desc: "Affaires liées au blanchiment d'argent du trafic de drogue. Défense patrimoniale.",
      },
      international: {
        title: "Affaires Internationales",
        desc: "Extraditions, coopération judiciaire internationale, affaires transfrontalières Espagne-Maroc.",
      },
      appeals: {
        title: "Appels",
        desc: "Révision de sentences, pourvois en cassation, appels devant la Cour Suprême.",
      },
    },
    process: {
      label: "Comment Nous Travaillons",
      title: "Notre Méthode de Défense",
      step1: { title: "Attention Immédiate 24h", desc: "Nous recevons votre appel et un avocat spécialisé évalue votre affaire immédiatement. Si vous êtes détenu, nous nous déplaçons au commissariat en moins de 2 heures." },
      step2: { title: "Analyse Stratégique", desc: "Nous étudions toutes les preuves, identifions les irrégularités procédurales et concevons une stratégie de défense personnalisée." },
      step3: { title: "Négociation avec le Parquet", desc: "Quand c'est approprié, nous négocions des accords pour réduire les peines. Nos 50 ans d'expérience nous permettent d'obtenir les meilleurs accords possibles." },
      step4: { title: "Défense au Procès", desc: "Si l'affaire va au procès, nous défendons avec la plus grande agressivité. Nous interrogeons les témoins, contestons les preuves et présentons des arguments convaincants." },
    },
    reviews: {
      label: "Témoignages",
      title: "Ce Que Disent Mes Clients",
      verified: "Vérifié",
    },
    cta: {
      title: "Votre Liberté Est Ma Priorité",
      subtitle: "Chaque minute compte. Contactez maintenant pour une évaluation confidentielle de votre affaire.",
      button: "Appeler Maintenant",
      whatsapp: "WhatsApp 24h",
    },
    faq: {
      label: "FAQ",
      title: "Questions Sur Votre Affaire",
    },
    footer: {
      description: "Avocat pénaliste spécialisé dans le trafic de drogue et les crimes contre la santé publique. Défense discrète et efficace dans toute l'Espagne.",
      services: "Services",
      cities: "Villes",
      contact: "Contact",
      rights: "Tous droits réservés.",
      privacy: "Confidentialité",
      legal: "Mentions Légales",
      cookies: "Cookies",
    },
    cityPage: {
      breadcrumbHome: "Accueil",
      certified: "Distinction Honorifique",
      experience: "50 Ans d'Expérience",
      confidential: "Confidentialité Absolue",
      urgent: "Nous Arrivons en 2 Heures",
      howItWorks: "Voir les Prix",
      freeQuote: "Devis Gratuit",
      nearbyTitle: "Avocats Près de Vous",
      relatedTitle: "Services Connexes",
      guideLabel: "Informations Légales",
    },
  },
  ar: {
    nav: {
      services: "الخدمات",
      about: "من نحن",
      cases: "القضايا",
      contact: "اتصل بنا",
      freeConsultation: "استشارة مجانية",
    },
    hero: {
      badge: "وسام شرفي للممارسة المثالية للمحاماة",
      title: "هل تم اعتقالك بتهمة تهريب المخدرات؟",
      titleAccent: "دفاع جنائي عاجل",
      subtitle: "توماس جيلابيرت، أحد أكثر المحامين الجنائيين شهرة في إسبانيا. أكثر من 50 عامًا من الخبرة في الدفاع الجنائي. تخصص في تهريب المخدرات وجميع أنواع الجرائم الجنائية. الاستشارة الأولى مجانية.",
      cta: "اتصل الآن - عاجل",
      ctaSecondary: "اطلب عرض سعر",
    },
    stats: {
      cases: "قضايا تم الدفاع عنها",
      experience: "سنوات الخبرة",
      success: "معدل النجاح",
      available: "رعاية عاجلة",
      availableValue: "24 ساعة",
    },
    credentials: {
      label: "مؤهلاتنا",
      title: "50 عامًا في الدفاع عن حقوقك",
      subtitle: "مكتب محاماة حائز على وسام شرفي للممارسة المثالية للمحاماة. أكثر من نصف قرن من الخبرة في أكثر قضايا تهريب المخدرات تعقيدًا في إسبانيا.",
      item1: { title: "وسام شرفي", desc: "اعتراف من نقابة المحامين للممارسة المثالية للمهنة لأكثر من 50 عامًا." },
      item2: { title: "تخصص في تهريب المخدرات", desc: "دفاع حصري في قضايا تهريب المخدرات وغسيل الأموال والجرائم ضد الصحة العامة." },
      item3: { title: "فريق متعدد التخصصات", desc: "محامون وخبراء طب شرعي وعلماء جريمة. تنسيق مع محامين دوليين للقضايا العابرة للحدود." },
      item4: { title: "سرية مطلقة", desc: "بروتوكول أمان وخصوصية. اتصالات مشفرة. اجتماعات سرية في مواقع آمنة." },
    },
    services: {
      label: "مجالات الممارسة",
      title: "دفاع متخصص في قضايا المخدرات",
      subtitle: "خبرة في جميع أنواع الجرائم المتعلقة بالمواد الخاضعة للرقابة.",
    },
    servicesList: {
      trafficking: {
        title: "الاتجار بالمخدرات",
        desc: "الدفاع في قضايا الاتجار الدولي والوطني والمحلي. استراتيجيات لتخفيف التهم والعقوبات.",
      },
      possession: {
        title: "الحيازة بقصد التوزيع",
        desc: "التمييز بين الحيازة البسيطة وقصد التوزيع. الدفاع عن الحقوق الدستورية.",
      },
      conspiracy: {
        title: "التآمر",
        desc: "الدفاع في قضايا التنظيم الإجرامي والتآمر للاتجار. تحليل الأدلة والشهادات.",
      },
      moneylaundering: {
        title: "غسيل الأموال",
        desc: "قضايا متعلقة بغسيل أموال الاتجار بالمخدرات. الدفاع عن الأصول.",
      },
      international: {
        title: "القضايا الدولية",
        desc: "التسليم، التعاون القضائي الدولي، القضايا العابرة للحدود إسبانيا-المغرب.",
      },
      appeals: {
        title: "الاستئناف",
        desc: "مراجعة الأحكام، طعون النقض، الاستئناف أمام المحكمة العليا.",
      },
    },
    process: {
      label: "كيف نعمل",
      title: "طريقتنا في الدفاع",
      step1: { title: "اهتمام فوري 24 ساعة", desc: "نستقبل مكالمتك ويقيم محامٍ متخصص قضيتك فورًا. إذا كنت محتجزًا، ننتقل إلى مركز الشرطة في أقل من ساعتين." },
      step2: { title: "تحليل استراتيجي", desc: "ندرس جميع الأدلة، نحدد المخالفات الإجرائية ونصمم استراتيجية دفاع مخصصة." },
      step3: { title: "التفاوض مع النيابة", desc: "عندما يكون مناسبًا، نتفاوض على اتفاقات لتخفيف العقوبات. خبرتنا 50 عامًا تمكننا من تحقيق أفضل الاتفاقات." },
      step4: { title: "الدفاع في المحاكمة", desc: "إذا ذهبت القضية إلى المحاكمة، ندافع بأقصى قوة. نستجوب الشهود، نطعن في الأدلة ونقدم حججًا مقنعة." },
    },
    reviews: {
      label: "الشهادات",
      title: "ماذا يقول موكلي",
      verified: "موثق",
    },
    cta: {
      title: "حريتك هي أولويتي",
      subtitle: "كل دقيقة مهمة. اتصل الآن للحصول على تقييم سري لقضيتك.",
      button: "اتصل الآن",
      whatsapp: "واتساب 24 ساعة",
    },
    faq: {
      label: "الأسئلة الشائعة",
      title: "أسئلة حول قضيتك",
    },
    footer: {
      description: "محامي جنائي متخصص في الاتجار بالمخدرات والجرائم ضد الصحة العامة. دفاع سري وفعال في جميع أنحاء إسبانيا.",
      services: "الخدمات",
      cities: "المدن",
      contact: "اتصل بنا",
      rights: "جميع الحقوق محفوظة.",
      privacy: "الخصوصية",
      legal: "إشعار قانوني",
      cookies: "ملفات تعريف الارتباط",
    },
    cityPage: {
      breadcrumbHome: "الرئيسية",
      certified: "وسام شرفي",
      experience: "50 عامًا من الخبرة",
      confidential: "سرية مطلقة",
      urgent: "نصل في ساعتين",
      howItWorks: "عرض الأسعار",
      freeQuote: "عرض سعر مجاني",
      nearbyTitle: "محامون قريبون منك",
      relatedTitle: "خدمات ذات صلة",
      guideLabel: "معلومات قانونية",
    },
  },
} as const

export type TranslationKey = keyof typeof translations.es

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.es
}

export function isRTL(locale: Locale): boolean {
  return locale === "ar"
}
