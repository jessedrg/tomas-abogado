// =============================================================================
// SITEMAP DATA - ABOGADO PENALISTA NARCOTRÁFICO
// =============================================================================
// Tomás Gilabert - Defensa Penal Especializada en Narcotráfico
// Estudio SEO: 180+ keywords, ~50K búsquedas/mes potenciales
// =============================================================================

export const VALID_SERVICES = [
  // ============ SERVICIOS PRINCIPALES - ALTA PRIORIDAD ============
  "abogado-narcotrafico",
  "abogado-penalista",
  "abogado-penal",
  "defensa-trafico-drogas",
  "abogado-posesion-drogas",
  "abogado-drogas",
  
  // ============ SERVICIOS POR SUSTANCIA - ALTA CONVERSIÓN ============
  "abogado-cocaina",
  "abogado-cannabis",
  "abogado-marihuana",
  "abogado-hachis",
  "abogado-heroina",
  "abogado-mdma",
  "abogado-metanfetamina",
  
  // ============ SERVICIOS ESPECIALIZADOS ============
  "defensa-blanqueo-capitales",
  "abogado-extradicion",
  "recurso-sentencia-drogas",
  "abogado-malos-tratos",
  
  // ============ LONG TAIL - ALTA CONVERSIÓN ============
  "abogado-urgente-penal",
  "abogado-24-horas",
  "abogado-detenido-drogas",
] as const

export type Service = typeof VALID_SERVICES[number]

export const VALID_PROFESSIONS = VALID_SERVICES
export type Profession = Service

// =============================================================================
// CIUDADES PRINCIPALES DE ESPAÑA - ORDENADAS POR VOLUMEN SEO
// =============================================================================
export const CITIES: readonly string[] = [
  // ============ TIER 1: ALTA PRIORIDAD (Vol 1000+) ============
  "madrid",
  "barcelona",
  "valencia",
  "alicante",
  "zaragoza",
  "murcia",
  "sevilla",
  
  // ============ TIER 2: MEDIA PRIORIDAD (Vol 200-1000) ============
  "bilbao",
  "tenerife",
  "palma",
  "palma-de-mallorca",
  "valladolid",
  "cordoba",
  "huelva",
  "malaga",
  "vitoria",
  "vitoria-gasteiz",
  "granada",
  
  // ============ TIER 3: LARGA COLA ============
  "vigo",
  "gijon",
  "santander",
  "pamplona",
  "san-sebastian",
  "badajoz",
  "cadiz",
  "burgos",
  "salamanca",
  "las-palmas",
  "la-coruna",
  "oviedo",
  "almeria",
  "leon",
  "logrono",
  "castellon",
  "albacete",
  "tarragona",
  "lleida",
  "girona",
  "jaen",
  
  // ============ CIUDADES COSTA / NARCOTRÁFICO ============
  "algeciras",
  "ceuta",
  "melilla",
  "marbella",
  "estepona",
  "la-linea-de-la-concepcion",
  "san-roque",
  "tarifa",
  "puerto-de-santa-maria",
  "chiclana-de-la-frontera",
  "sanlucar-de-barrameda",
  "ayamonte",
  "isla-cristina",
  "motril",
  "almunecar",
  "adra",
  "roquetas-de-mar",
  "el-ejido",
  "carboneras",
  "garrucha",
  "mojacar",
  "vera",
  "aguilas",
  "mazarron",
  "cartagena",
  "san-javier",
  "torrevieja",
  "benidorm",
  "denia",
  "javea",
  "calpe",
  "altea",
  "gandia",
  
  // ============ ÁREA METROPOLITANA MADRID ============
  "getafe",
  "alcorcon",
  "mostoles",
  "leganes",
  "fuenlabrada",
  "alcala-de-henares",
  "torrejon-de-ardoz",
  "parla",
  
  // ============ ÁREA METROPOLITANA BARCELONA ============
  "hospitalet-de-llobregat",
  "badalona",
  "terrassa",
  "sabadell",
  "mataro",
  "reus",
]

// =============================================================================
// SERVICE NAMES - ESPAÑOL
// =============================================================================
export const SERVICE_NAMES: Record<Service, { name: string; title: string; singular: string }> = {
  "abogado-narcotrafico": { 
    name: "Abogado Narcotráfico", 
    title: "Abogado Especialista en Narcotráfico", 
    singular: "abogado de narcotráfico" 
  },
  "abogado-penalista": { 
    name: "Abogado Penalista", 
    title: "Abogado Penalista Especializado", 
    singular: "abogado penalista" 
  },
  "abogado-penal": { 
    name: "Abogado Penal", 
    title: "Abogado Penal Especializado", 
    singular: "abogado penal" 
  },
  "defensa-trafico-drogas": { 
    name: "Defensa Tráfico de Drogas", 
    title: "Defensa en Tráfico de Drogas", 
    singular: "defensa en tráfico de drogas" 
  },
  "abogado-posesion-drogas": { 
    name: "Abogado Posesión Drogas", 
    title: "Abogado para Posesión de Drogas", 
    singular: "abogado para posesión de drogas" 
  },
  "abogado-drogas": { 
    name: "Abogado Drogas", 
    title: "Abogado Especialista en Drogas", 
    singular: "abogado de drogas" 
  },
  "abogado-cocaina": { 
    name: "Abogado Cocaína", 
    title: "Abogado Especialista en Casos de Cocaína", 
    singular: "abogado para casos de cocaína" 
  },
  "abogado-cannabis": { 
    name: "Abogado Cannabis", 
    title: "Abogado Especialista en Casos de Cannabis", 
    singular: "abogado para casos de cannabis" 
  },
  "abogado-marihuana": { 
    name: "Abogado Marihuana", 
    title: "Abogado Especialista en Casos de Marihuana", 
    singular: "abogado para casos de marihuana" 
  },
  "abogado-hachis": { 
    name: "Abogado Hachís", 
    title: "Abogado Especialista en Casos de Hachís", 
    singular: "abogado para casos de hachís" 
  },
  "abogado-heroina": { 
    name: "Abogado Heroína", 
    title: "Abogado Especialista en Casos de Heroína", 
    singular: "abogado para casos de heroína" 
  },
  "abogado-mdma": { 
    name: "Abogado MDMA", 
    title: "Abogado Especialista en Casos de MDMA", 
    singular: "abogado para casos de MDMA" 
  },
  "abogado-metanfetamina": { 
    name: "Abogado Metanfetamina", 
    title: "Abogado Especialista en Casos de Metanfetamina", 
    singular: "abogado para casos de metanfetamina" 
  },
  "defensa-blanqueo-capitales": { 
    name: "Defensa Blanqueo Capitales", 
    title: "Defensa en Blanqueo de Capitales", 
    singular: "defensa en blanqueo de capitales" 
  },
  "abogado-extradicion": { 
    name: "Abogado Extradición", 
    title: "Abogado para Extradiciones", 
    singular: "abogado para extradiciones" 
  },
  "recurso-sentencia-drogas": { 
    name: "Recurso Sentencia Drogas", 
    title: "Recursos contra Sentencias por Drogas", 
    singular: "recurso contra sentencia por drogas" 
  },
  "abogado-malos-tratos": { 
    name: "Abogado Malos Tratos", 
    title: "Abogado Especialista en Malos Tratos", 
    singular: "abogado para malos tratos" 
  },
  "abogado-urgente-penal": { 
    name: "Abogado Urgente Penal", 
    title: "Abogado Penal Urgente 24 Horas", 
    singular: "abogado penal urgente" 
  },
  "abogado-24-horas": { 
    name: "Abogado 24 Horas", 
    title: "Abogado Penalista 24 Horas", 
    singular: "abogado 24 horas" 
  },
  "abogado-detenido-drogas": { 
    name: "Abogado Detenido Drogas", 
    title: "Abogado para Detenidos por Drogas", 
    singular: "abogado para detenidos por drogas" 
  },
}

// =============================================================================
// SERVICE SLUGS I18N
// =============================================================================
export const SERVICE_SLUGS_I18N: Record<string, Record<Service, string>> = {
  es: {
    "abogado-narcotrafico": "abogado-narcotrafico",
    "abogado-penalista": "abogado-penalista",
    "abogado-penal": "abogado-penal",
    "defensa-trafico-drogas": "defensa-trafico-drogas",
    "abogado-posesion-drogas": "abogado-posesion-drogas",
    "abogado-drogas": "abogado-drogas",
    "abogado-cocaina": "abogado-cocaina",
    "abogado-cannabis": "abogado-cannabis",
    "abogado-marihuana": "abogado-marihuana",
    "abogado-hachis": "abogado-hachis",
    "abogado-heroina": "abogado-heroina",
    "abogado-mdma": "abogado-mdma",
    "abogado-metanfetamina": "abogado-metanfetamina",
    "defensa-blanqueo-capitales": "defensa-blanqueo-capitales",
    "abogado-extradicion": "abogado-extradicion",
    "recurso-sentencia-drogas": "recurso-sentencia-drogas",
    "abogado-malos-tratos": "abogado-malos-tratos",
    "abogado-urgente-penal": "abogado-urgente-penal",
    "abogado-24-horas": "abogado-24-horas",
    "abogado-detenido-drogas": "abogado-detenido-drogas",
  },
  en: {
    "abogado-narcotrafico": "drug-trafficking-lawyer",
    "abogado-penalista": "criminal-lawyer",
    "abogado-penal": "criminal-defense-attorney",
    "defensa-trafico-drogas": "drug-trafficking-defense",
    "abogado-posesion-drogas": "drug-possession-lawyer",
    "abogado-drogas": "drug-lawyer",
    "abogado-cocaina": "cocaine-lawyer",
    "abogado-cannabis": "cannabis-lawyer",
    "abogado-marihuana": "marijuana-lawyer",
    "abogado-hachis": "hashish-lawyer",
    "abogado-heroina": "heroin-lawyer",
    "abogado-mdma": "mdma-lawyer",
    "abogado-metanfetamina": "methamphetamine-lawyer",
    "defensa-blanqueo-capitales": "money-laundering-defense",
    "abogado-extradicion": "extradition-lawyer",
    "recurso-sentencia-drogas": "drug-sentence-appeal",
    "abogado-malos-tratos": "domestic-violence-lawyer",
    "abogado-urgente-penal": "urgent-criminal-lawyer",
    "abogado-24-horas": "24-hour-lawyer",
    "abogado-detenido-drogas": "drug-arrest-lawyer",
  },
  fr: {
    "abogado-narcotrafico": "avocat-trafic-drogue",
    "abogado-penalista": "avocat-penaliste",
    "abogado-penal": "avocat-penal",
    "defensa-trafico-drogas": "defense-trafic-drogue",
    "abogado-posesion-drogas": "avocat-possession-drogue",
    "abogado-drogas": "avocat-drogue",
    "abogado-cocaina": "avocat-cocaine",
    "abogado-cannabis": "avocat-cannabis",
    "abogado-marihuana": "avocat-marijuana",
    "abogado-hachis": "avocat-haschich",
    "abogado-heroina": "avocat-heroine",
    "abogado-mdma": "avocat-mdma",
    "abogado-metanfetamina": "avocat-methamphetamine",
    "defensa-blanqueo-capitales": "defense-blanchiment",
    "abogado-extradicion": "avocat-extradition",
    "recurso-sentencia-drogas": "appel-sentence-drogue",
    "abogado-malos-tratos": "avocat-violence-domestique",
    "abogado-urgente-penal": "avocat-penal-urgent",
    "abogado-24-horas": "avocat-24-heures",
    "abogado-detenido-drogas": "avocat-arrestation-drogue",
  },
  ar: {
    "abogado-narcotrafico": "محامي-تهريب-مخدرات",
    "abogado-penalista": "محامي-جنائي",
    "abogado-penal": "محامي-دفاع-جنائي",
    "defensa-trafico-drogas": "دفاع-تهريب-مخدرات",
    "abogado-posesion-drogas": "محامي-حيازة-مخدرات",
    "abogado-drogas": "محامي-مخدرات",
    "abogado-cocaina": "محامي-كوكايين",
    "abogado-cannabis": "محامي-قنب",
    "abogado-marihuana": "محامي-ماريجوانا",
    "abogado-hachis": "محامي-حشيش",
    "abogado-heroina": "محامي-هيروين",
    "abogado-mdma": "محامي-ام-دي-ام-ايه",
    "abogado-metanfetamina": "محامي-ميثامفيتامين",
    "defensa-blanqueo-capitales": "دفاع-غسيل-اموال",
    "abogado-extradicion": "محامي-تسليم",
    "recurso-sentencia-drogas": "استئناف-حكم-مخدرات",
    "abogado-malos-tratos": "محامي-عنف-اسري",
    "abogado-urgente-penal": "محامي-جنائي-عاجل",
    "abogado-24-horas": "محامي-24-ساعة",
    "abogado-detenido-drogas": "محامي-اعتقال-مخدرات",
  },
}

// Reverse lookup: from localized slug to canonical service
export function getCanonicalService(localizedSlug: string): Service | null {
  for (const locale of Object.keys(SERVICE_SLUGS_I18N)) {
    const slugs = SERVICE_SLUGS_I18N[locale]
    for (const [canonical, localized] of Object.entries(slugs)) {
      if (localized === localizedSlug) {
        return canonical as Service
      }
    }
  }
  return null
}

// Get localized slug for a service
export function getLocalizedSlug(service: Service, locale: string): string {
  return SERVICE_SLUGS_I18N[locale]?.[service] || SERVICE_SLUGS_I18N.es[service]
}

// =============================================================================
// SERVICE NAMES I18N
// =============================================================================
export const SERVICE_NAMES_I18N: Record<string, Record<Service, { name: string; title: string; singular: string }>> = {
  es: SERVICE_NAMES,
  en: {
    "abogado-narcotrafico": { name: "Drug Trafficking Lawyer", title: "Drug Trafficking Defense Attorney", singular: "drug trafficking lawyer" },
    "abogado-penalista": { name: "Criminal Lawyer", title: "Criminal Defense Attorney", singular: "criminal lawyer" },
    "abogado-penal": { name: "Criminal Attorney", title: "Criminal Defense Attorney", singular: "criminal attorney" },
    "defensa-trafico-drogas": { name: "Drug Trafficking Defense", title: "Drug Trafficking Defense", singular: "drug trafficking defense" },
    "abogado-posesion-drogas": { name: "Drug Possession Lawyer", title: "Drug Possession Defense Attorney", singular: "drug possession lawyer" },
    "abogado-drogas": { name: "Drug Lawyer", title: "Drug Defense Attorney", singular: "drug lawyer" },
    "abogado-cocaina": { name: "Cocaine Lawyer", title: "Cocaine Defense Attorney", singular: "cocaine lawyer" },
    "abogado-cannabis": { name: "Cannabis Lawyer", title: "Cannabis Defense Attorney", singular: "cannabis lawyer" },
    "abogado-marihuana": { name: "Marijuana Lawyer", title: "Marijuana Defense Attorney", singular: "marijuana lawyer" },
    "abogado-hachis": { name: "Hashish Lawyer", title: "Hashish Defense Attorney", singular: "hashish lawyer" },
    "abogado-heroina": { name: "Heroin Lawyer", title: "Heroin Defense Attorney", singular: "heroin lawyer" },
    "abogado-mdma": { name: "MDMA Lawyer", title: "MDMA Defense Attorney", singular: "MDMA lawyer" },
    "abogado-metanfetamina": { name: "Methamphetamine Lawyer", title: "Methamphetamine Defense Attorney", singular: "methamphetamine lawyer" },
    "defensa-blanqueo-capitales": { name: "Money Laundering Defense", title: "Money Laundering Defense", singular: "money laundering defense" },
    "abogado-extradicion": { name: "Extradition Lawyer", title: "Extradition Defense Attorney", singular: "extradition lawyer" },
    "recurso-sentencia-drogas": { name: "Drug Sentence Appeal", title: "Drug Sentence Appeals", singular: "drug sentence appeal" },
    "abogado-malos-tratos": { name: "Domestic Violence Lawyer", title: "Domestic Violence Defense Attorney", singular: "domestic violence lawyer" },
    "abogado-urgente-penal": { name: "Urgent Criminal Lawyer", title: "Urgent Criminal Defense Attorney", singular: "urgent criminal lawyer" },
    "abogado-24-horas": { name: "24 Hour Lawyer", title: "24 Hour Criminal Defense", singular: "24 hour lawyer" },
    "abogado-detenido-drogas": { name: "Drug Arrest Lawyer", title: "Drug Arrest Defense Attorney", singular: "drug arrest lawyer" },
  },
  fr: {
    "abogado-narcotrafico": { name: "Avocat Trafic de Drogue", title: "Avocat Spécialisé Trafic de Drogue", singular: "avocat trafic de drogue" },
    "abogado-penalista": { name: "Avocat Pénaliste", title: "Avocat Pénaliste Spécialisé", singular: "avocat pénaliste" },
    "abogado-penal": { name: "Avocat Pénal", title: "Avocat Pénal Spécialisé", singular: "avocat pénal" },
    "defensa-trafico-drogas": { name: "Défense Trafic de Drogue", title: "Défense en Trafic de Drogue", singular: "défense trafic de drogue" },
    "abogado-posesion-drogas": { name: "Avocat Possession Drogue", title: "Avocat pour Possession de Drogue", singular: "avocat possession de drogue" },
    "abogado-drogas": { name: "Avocat Drogue", title: "Avocat Spécialisé Drogue", singular: "avocat drogue" },
    "abogado-cocaina": { name: "Avocat Cocaïne", title: "Avocat Spécialisé Cocaïne", singular: "avocat cocaïne" },
    "abogado-cannabis": { name: "Avocat Cannabis", title: "Avocat Spécialisé Cannabis", singular: "avocat cannabis" },
    "abogado-marihuana": { name: "Avocat Marijuana", title: "Avocat Spécialisé Marijuana", singular: "avocat marijuana" },
    "abogado-hachis": { name: "Avocat Haschich", title: "Avocat Spécialisé Haschich", singular: "avocat haschich" },
    "abogado-heroina": { name: "Avocat Héroïne", title: "Avocat Spécialisé Héroïne", singular: "avocat héroïne" },
    "abogado-mdma": { name: "Avocat MDMA", title: "Avocat Spécialisé MDMA", singular: "avocat MDMA" },
    "abogado-metanfetamina": { name: "Avocat Méthamphétamine", title: "Avocat Spécialisé Méthamphétamine", singular: "avocat méthamphétamine" },
    "defensa-blanqueo-capitales": { name: "Défense Blanchiment", title: "Défense en Blanchiment d'Argent", singular: "défense blanchiment d'argent" },
    "abogado-extradicion": { name: "Avocat Extradition", title: "Avocat pour Extraditions", singular: "avocat extradition" },
    "recurso-sentencia-drogas": { name: "Appel Sentence Drogue", title: "Appels contre Sentences Drogue", singular: "appel sentence drogue" },
    "abogado-malos-tratos": { name: "Avocat Violence Domestique", title: "Avocat Spécialisé Violence Domestique", singular: "avocat violence domestique" },
    "abogado-urgente-penal": { name: "Avocat Pénal Urgent", title: "Avocat Pénal Urgent 24h", singular: "avocat pénal urgent" },
    "abogado-24-horas": { name: "Avocat 24 Heures", title: "Avocat Pénaliste 24 Heures", singular: "avocat 24 heures" },
    "abogado-detenido-drogas": { name: "Avocat Arrestation Drogue", title: "Avocat pour Arrestation Drogue", singular: "avocat arrestation drogue" },
  },
  ar: {
    "abogado-narcotrafico": { name: "محامي تهريب المخدرات", title: "محامي متخصص في تهريب المخدرات", singular: "محامي تهريب مخدرات" },
    "abogado-penalista": { name: "محامي جنائي", title: "محامي جنائي متخصص", singular: "محامي جنائي" },
    "abogado-penal": { name: "محامي دفاع جنائي", title: "محامي دفاع جنائي متخصص", singular: "محامي دفاع جنائي" },
    "defensa-trafico-drogas": { name: "الدفاع في قضايا المخدرات", title: "الدفاع في قضايا تهريب المخدرات", singular: "دفاع تهريب مخدرات" },
    "abogado-posesion-drogas": { name: "محامي حيازة مخدرات", title: "محامي لقضايا حيازة المخدرات", singular: "محامي حيازة مخدرات" },
    "abogado-drogas": { name: "محامي مخدرات", title: "محامي متخصص في المخدرات", singular: "محامي مخدرات" },
    "abogado-cocaina": { name: "محامي كوكايين", title: "محامي متخصص في قضايا الكوكايين", singular: "محامي كوكايين" },
    "abogado-cannabis": { name: "محامي قنب", title: "محامي متخصص في قضايا القنب", singular: "محامي قنب" },
    "abogado-marihuana": { name: "محامي ماريجوانا", title: "محامي متخصص في قضايا الماريجوانا", singular: "محامي ماريجوانا" },
    "abogado-hachis": { name: "محامي حشيش", title: "محامي متخصص في قضايا الحشيش", singular: "محامي حشيش" },
    "abogado-heroina": { name: "محامي هيروين", title: "محامي متخصص في قضايا الهيروين", singular: "محامي هيروين" },
    "abogado-mdma": { name: "محامي MDMA", title: "محامي متخصص في قضايا MDMA", singular: "محامي MDMA" },
    "abogado-metanfetamina": { name: "محامي ميثامفيتامين", title: "محامي متخصص في قضايا الميثامفيتامين", singular: "محامي ميثامفيتامين" },
    "defensa-blanqueo-capitales": { name: "الدفاع في غسيل الأموال", title: "الدفاع في قضايا غسيل الأموال", singular: "دفاع غسيل أموال" },
    "abogado-extradicion": { name: "محامي تسليم المجرمين", title: "محامي لقضايا التسليم", singular: "محامي تسليم" },
    "recurso-sentencia-drogas": { name: "استئناف حكم مخدرات", title: "استئناف أحكام المخدرات", singular: "استئناف حكم مخدرات" },
    "abogado-malos-tratos": { name: "محامي عنف أسري", title: "محامي متخصص في العنف الأسري", singular: "محامي عنف أسري" },
    "abogado-urgente-penal": { name: "محامي جنائي عاجل", title: "محامي جنائي عاجل 24 ساعة", singular: "محامي جنائي عاجل" },
    "abogado-24-horas": { name: "محامي 24 ساعة", title: "محامي جنائي 24 ساعة", singular: "محامي 24 ساعة" },
    "abogado-detenido-drogas": { name: "محامي اعتقال مخدرات", title: "محامي للمعتقلين بتهمة المخدرات", singular: "محامي اعتقال مخدرات" },
  },
}
