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
      freeConsultation: "Llamar Urgente",
    },
    hero: {
      badge: "Uno de los abogados penalistas más reputados de España",
      title: "¿Acusado por Narcotráfico?",
      titleAccent: "Defensa Penal Urgente",
      subtitle: "Tomás, uno de los abogados penalistas con más prestigio en España. Más de 50 años de experiencia en defensa penal. Especialización en narcotráfico y todo tipo de delitos penales.",
      cta: "Llamar Ahora - Urgente",
      ctaSecondary: "Signal Directo",
    },
    stats: {
      cases: "Años de Trayectoria",
      experience: "Atención Urgente",
      success: "Defensa en España y Europa",
      available: "Idiomas",
      availableValue: "4+",
    },
    credentials: {
      label: "Nuestras Credenciales",
      title: "50 Años Defendiendo Sus Derechos",
      subtitle: "Despacho galardonado con la Distinción Honorífica por Ejercicio Ejemplar de la Abogacía. Más de medio siglo de experiencia en los casos más complejos de narcotráfico en España.",
      item1: { title: "Diplomático en la Generalitat", desc: "Trayectoria política y diplomática en la Generalitat de Catalunya." },
      item2: { title: "Atención en Varios Idiomas", desc: "Atendemos en Castellano, Inglés, Francés y Ruso." },
      item3: { title: "Defensa en toda España", desc: "Actuación en todo el territorio nacional y parte de Europa." },
      item4: { title: "Confidencialidad Absoluta", desc: "Protocolo de seguridad y privacidad. Comunicaciones cifradas. Reuniones discretas en ubicaciones seguras." },
    },
    services: {
      label: "Servicios de Defensa Penal",
      title: "¿Necesita un Abogado Penalista?",
      subtitle: "Especialización en narcotráfico y todo tipo de delitos penales.",
    },
    servicesList: {
      trafficking: {
        title: "Delitos de Narcotráfico",
        desc: "Defensa especializada en casos de tráfico de drogas a nivel nacional e internacional.",
      },
      possession: {
        title: "Posesión de Drogas",
        desc: "Defensa en casos de tenencia o posesión de drogas.",
      },
      conspiracy: {
        title: "Organización Criminal",
        desc: "Acusado de pertenencia a organización. Reducción de penas. Negociación con fiscalía.",
      },
      moneylaundering: {
        title: "Acusaciones de Malos Tratos",
        desc: "Defensa en casos de acusaciones de malos tratos y violencia.",
      },
      international: {
        title: "Abogado Extradición España",
        desc: "Evite la extradición. Defensa en casos internacionales. Coordinación con abogados extranjeros.",
      },
      appeals: {
        title: "Recurrir Sentencia Drogas",
        desc: "¿Sentencia injusta? Recurso de apelación especializado.",
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
      subtitle: "Abogado penalista urgente. Acudimos a comisaría en menos de 2 horas.",
      button: "Llamar Urgente 24h",
      signal: "Signal Directo",
    },
    faq: {
      label: "Preguntas Frecuentes",
      title: "¿Cuánto Cuesta un Abogado Penalista?",
    },
    footer: {
      description: "Abogado penalista urgente especializado en narcotráfico. Atención 24 horas. Defensa en toda España y parte de Europa.",
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
      freeConsultation: "Call Urgent",
    },
    hero: {
      badge: "One of the most reputable criminal lawyers in Spain",
      title: "Accused of Drug Trafficking?",
      titleAccent: "Urgent Criminal Defense",
      subtitle: "Tomás, one of the most prestigious criminal defense attorneys in Spain. Over 50 years of experience in criminal defense. Specialization in drug trafficking and all types of criminal offenses.",
      cta: "Call Now - Urgent",
      ctaSecondary: "Signal Direct",
    },
    stats: {
      cases: "Years of Experience",
      experience: "Urgent Care",
      success: "Defense in Spain and Europe",
      available: "Languages",
      availableValue: "4+",
    },
    credentials: {
      label: "Our Credentials",
      title: "50 Years Defending Your Rights",
      subtitle: "Law firm awarded the Honorary Distinction for Exemplary Practice of Law. Over half a century of experience in the most complex drug trafficking cases in Spain.",
      item1: { title: "Diplomat at the Generalitat", desc: "Political and diplomatic career at the Generalitat de Catalunya." },
      item2: { title: "Multiple Languages", desc: "We serve in Spanish, English, French and Russian." },
      item3: { title: "Defense throughout Spain", desc: "Operating throughout the national territory and part of Europe." },
      item4: { title: "Absolute Confidentiality", desc: "Security and privacy protocol. Encrypted communications. Discreet meetings in secure locations." },
    },
    services: {
      label: "Practice Areas",
      title: "Specialized Drug Trafficking Defense",
      subtitle: "Experience in all types of controlled substance offenses.",
    },
    servicesList: {
      trafficking: {
        title: "Drug Trafficking Crimes",
        desc: "Specialized defense in national and international drug trafficking cases.",
      },
      possession: {
        title: "Drug Possession",
        desc: "Defense in drug possession or holding cases.",
      },
      conspiracy: {
        title: "Criminal Organization",
        desc: "Accused of belonging to an organization. Sentence reduction. Prosecution negotiation.",
      },
      moneylaundering: {
        title: "Domestic Violence Accusations",
        desc: "Defense in cases of domestic violence and abuse accusations.",
      },
      international: {
        title: "Extradition Lawyer Spain",
        desc: "Avoid extradition. Defense in international cases. Coordination with foreign lawyers.",
      },
      appeals: {
        title: "Appeal Drug Sentence",
        desc: "Unjust sentence? Specialized appeal.",
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
      signal: "Signal 24h",
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
      freeConsultation: "Appeler Urgent",
    },
    hero: {
      badge: "L'un des avocats pénalistes les plus réputés d'Espagne",
      title: "Accusé de Trafic de Drogue?",
      titleAccent: "Défense Pénale Urgente",
      subtitle: "Tomás, l'un des avocats pénalistes les plus prestigieux d'Espagne. Plus de 50 ans d'expérience en défense pénale. Spécialisation en trafic de drogue et tous types de délits pénaux.",
      cta: "Appeler Maintenant - Urgent",
      ctaSecondary: "Signal Direct",
    },
    stats: {
      cases: "Années d'Expérience",
      experience: "Attention Urgente",
      success: "Défense en Espagne et Europe",
      available: "Langues",
      availableValue: "4+",
    },
    credentials: {
      label: "Nos Qualifications",
      title: "50 Ans à Défendre Vos Droits",
      subtitle: "Cabinet récompensé par la Distinction Honorifique pour Exercice Exemplaire du Droit. Plus d'un demi-siècle d'expérience dans les affaires de trafic de drogue les plus complexes en Espagne.",
      item1: { title: "Diplomate à la Generalitat", desc: "Carrière politique et diplomatique à la Generalitat de Catalunya." },
      item2: { title: "Plusieurs Langues", desc: "Nous servons en Espagnol, Anglais, Français et Russe." },
      item3: { title: "Défense dans toute l'Espagne", desc: "Intervention sur tout le territoire national et une partie de l'Europe." },
      item4: { title: "Confidentialité Absolue", desc: "Protocole de sécurité et de confidentialité. Communications cryptées. Réunions discrètes dans des lieux sécurisés." },
    },
    services: {
      label: "Domaines de Pratique",
      title: "Défense Spécialisée en Trafic de Drogue",
      subtitle: "Expérience dans tous les types de délits liés aux substances contrôlées.",
    },
    servicesList: {
      trafficking: {
        title: "Délits de Trafic de Drogue",
        desc: "Défense spécialisée dans les affaires de trafic de drogue au niveau national et international.",
      },
      possession: {
        title: "Possession de Drogue",
        desc: "Défense dans les affaires de détention ou possession de drogue.",
      },
      conspiracy: {
        title: "Organisation Criminelle",
        desc: "Accusé d'appartenance à une organisation. Réduction de peines. Négociation avec le parquet.",
      },
      moneylaundering: {
        title: "Accusations de Mauvais Traitements",
        desc: "Défense dans les affaires d'accusations de mauvais traitements et violence.",
      },
      international: {
        title: "Avocat Extradition Espagne",
        desc: "Évitez l'extradition. Défense dans les affaires internationales. Coordination avec avocats étrangers.",
      },
      appeals: {
        title: "Faire Appel Sentence Drogue",
        desc: "Sentence injuste? Appel spécialisé.",
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
      signal: "Signal 24h",
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
      freeConsultation: "اتصل عاجل",
    },
    hero: {
      badge: "أحد أكثر المحامين الجنائيين شهرة في إسبانيا",
      title: "متهم بتهريب المخدرات؟",
      titleAccent: "دفاع جنائي عاجل",
      subtitle: "توماس، أحد أكثر المحامين الجنائيين شهرة في إسبانيا. أكثر من 50 عامًا من الخبرة في الدفاع الجنائي. تخصص في تهريب المخدرات وجميع أنواع الجرائم الجنائية.",
      cta: "اتصل الآن - عاجل",
      ctaSecondary: "سيجنال مباشر",
    },
    stats: {
      cases: "سنوات الخبرة",
      experience: "رعاية عاجلة",
      success: "الدفاع في إسبانيا وأوروبا",
      available: "اللغات",
      availableValue: "4+",
    },
    credentials: {
      label: "مؤهلاتنا",
      title: "50 عامًا في الدفاع عن حقوقك",
      subtitle: "مكتب محاماة حائز على وسام شرفي للممارسة المثالية للمحاماة. أكثر من نصف قرن من الخبرة في أكثر قضايا تهريب المخدرات تعقيدًا في إسبانيا.",
      item1: { title: "دبلوماسي في الحكومة", desc: "مسيرة سياسية ودبلوماسية في حكومة كاتالونيا." },
      item2: { title: "عدة لغات", desc: "نخدم بالإسبانية والإنجليزية والفرنسية والروسية." },
      item3: { title: "الدفاع في جميع أنحاء إسبانيا", desc: "العمل في جميع أنحاء التراب الوطني وجزء من أوروبا." },
      item4: { title: "سرية مطلقة", desc: "بروتوكول أمان وخصوصية. اتصالات مشفرة. اجتماعات سرية في مواقع آمنة." },
    },
    services: {
      label: "مجالات الممارسة",
      title: "دفاع متخصص في قضايا المخدرات",
      subtitle: "خبرة في جميع أنواع الجرائم المتعلقة بالمواد الخاضعة للرقابة.",
    },
    servicesList: {
      trafficking: {
        title: "جرائم تهريب المخدرات",
        desc: "دفاع متخصص في قضايا تهريب المخدرات على المستوى الوطني والدولي.",
      },
      possession: {
        title: "حيازة المخدرات",
        desc: "الدفاع في قضايا حيازة أو امتلاك المخدرات.",
      },
      conspiracy: {
        title: "التنظيم الإجرامي",
        desc: "متهم بالانتماء لمنظمة. تخفيف العقوبات. التفاوض مع النيابة.",
      },
      moneylaundering: {
        title: "اتهامات سوء المعاملة",
        desc: "الدفاع في قضايا اتهامات سوء المعاملة والعنف.",
      },
      international: {
        title: "محامي تسليم إسبانيا",
        desc: "تجنب التسليم. الدفاع في القضايا الدولية. التنسيق مع محامين أجانب.",
      },
      appeals: {
        title: "استئناف حكم المخدرات",
        desc: "حكم ظالم؟ استئناف متخصص.",
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
      signal: "سيجنال 24 ساعة",
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
