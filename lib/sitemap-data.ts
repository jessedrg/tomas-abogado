// =============================================================================
// SITEMAP DATA - ABOGADO PENALISTA NARCOTRÁFICO
// =============================================================================
// Tomás Gilabert - Defensa Penal Especializada en Narcotráfico
// =============================================================================

export const VALID_SERVICES = [
  "abogado-narcotrafico",
  "defensa-trafico-drogas",
  "abogado-posesion-drogas",
  "defensa-blanqueo-capitales",
  "abogado-extradicion",
  "recurso-sentencia-drogas",
] as const

export type Service = typeof VALID_SERVICES[number]

export const VALID_PROFESSIONS = VALID_SERVICES
export type Profession = Service

// =============================================================================
// HIGH-INTENT KEYWORD MODIFIERS - Sector Legal Penal
// =============================================================================
export const MODIFIERS = [
  "",
  // ============ URGENCIA ============
  "-urgente", "-24-horas", "-inmediato", "-emergencia",
  
  // ============ CALIDAD / REPUTACION ============
  "-mejor", "-experto", "-especialista", "-reconocido",
  "-con-experiencia", "-de-confianza",
  
  // ============ PRECIO / CONSULTA ============
  "-consulta-gratis", "-primera-consulta", "-honorarios",
  "-precio", "-economico",
  
  // ============ TIPO DE CASO ============
  "-cocaina", "-hachis", "-marihuana", "-heroina",
  "-trafico-internacional", "-organizacion-criminal",
  
  // ============ UBICACIÓN ============
  "-cerca-de-mi", "-local",
] as const

export type Modifier = typeof MODIFIERS[number]

// =============================================================================
// PROBLEMAS / SITUACIONES POR SERVICIO
// =============================================================================
export const PROBLEMS: Record<Service, readonly string[]> = {
  "abogado-narcotrafico": [
    "detenido-por-drogas", "acusado-trafico", "registro-domicilio",
    "intervencion-policial", "cargos-narcotrafico",
  ],
  "defensa-trafico-drogas": [
    "trafico-internacional", "trafico-local", "venta-drogas",
    "distribucion-sustancias", "red-distribucion",
  ],
  "abogado-posesion-drogas": [
    "posesion-cantidad", "posesion-consumo", "posesion-intencion-venta",
    "drogas-en-vehiculo", "drogas-en-domicilio",
  ],
  "defensa-blanqueo-capitales": [
    "cuentas-bloqueadas", "investigacion-patrimonial", "origen-fondos",
    "bienes-incautados", "embargo-preventivo",
  ],
  "abogado-extradicion": [
    "orden-europea-detencion", "extradicion-marruecos", "extradicion-latinoamerica",
    "cooperacion-internacional", "euroorden",
  ],
  "recurso-sentencia-drogas": [
    "sentencia-condenatoria", "pena-excesiva", "error-judicial",
    "nuevas-pruebas", "revision-condena",
  ],
} as const

// =============================================================================
// CIUDADES PRINCIPALES DE ESPAÑA
// =============================================================================
export const CITIES: readonly string[] = [
  "madrid",
  "barcelona",
  "valencia",
  "sevilla",
  "zaragoza",
  "malaga",
  "murcia",
  "palma-de-mallorca",
  "las-palmas",
  "bilbao",
  "alicante",
  "cordoba",
  "valladolid",
  "vigo",
  "gijon",
  "hospitalet-de-llobregat",
  "vitoria-gasteiz",
  "la-coruna",
  "granada",
  "elche",
  "oviedo",
  "terrassa",
  "badalona",
  "cartagena",
  "jerez-de-la-frontera",
  "sabadell",
  "mostoles",
  "santa-cruz-de-tenerife",
  "alcala-de-henares",
  "pamplona",
  "fuenlabrada",
  "almeria",
  "san-sebastian",
  "leganes",
  "santander",
  "burgos",
  "castellon-de-la-plana",
  "albacete",
  "alcorcon",
  "getafe",
  "salamanca",
  "logrono",
  "huelva",
  "badajoz",
  "tarragona",
  "lleida",
  "marbella",
  "leon",
  "cadiz",
  "jaen",
  "dos-hermanas",
  "algeciras",
  "torrejon-de-ardoz",
  "orihuela",
  "reus",
  "girona",
  "parla",
  "mataró",
  "san-fernando",
  "torrevieja",
  "ceuta",
  "melilla",
  "linares",
  "motril",
  "estepona",
  "benidorm",
  "torremolinos",
  "fuengirola",
  "mijas",
  "roquetas-de-mar",
  "el-ejido",
  "velez-malaga",
  "rincon-de-la-victoria",
  "la-linea-de-la-concepcion",
  "san-roque",
  "tarifa",
  "puerto-de-santa-maria",
  "chiclana-de-la-frontera",
  "sanlucar-de-barrameda",
  "ayamonte",
  "isla-cristina",
  "lepe",
  "cartaya",
  "moguer",
  "palos-de-la-frontera",
  "nerja",
  "almunecar",
  "salobrena",
  "adra",
  "carboneras",
  "garrucha",
  "mojacar",
  "vera",
  "cuevas-del-almanzora",
  "nijar",
  "vicar",
  "dalias",
  "berja",
  "albox",
  "huercal-overa",
  "aguilas",
  "mazarron",
  "san-javier",
  "san-pedro-del-pinatar",
  "los-alcazares",
  "torre-pacheco",
  "la-union",
  "lorca",
  "totana",
  "alhama-de-murcia",
  "cieza",
  "jumilla",
  "yecla",
  "caravaca-de-la-cruz",
  "calasparra",
  "moratalla",
  "bullas",
  "mula",
  "archena",
  "molina-de-segura",
  "alcantarilla",
  "las-torres-de-cotillas",
  "santomera",
  "beniel",
  "alquerias",
  "fortuna",
  "abanilla",
  "blanca",
  "ojos",
  "ricote",
  "villanueva-del-rio-segura",
  "ulea",
  "lorqui",
  "ceutí",
  "alguazas",
  "campos-del-rio",
  "albudeite",
  "pliego",
  "librilla",
  "alhama-de-murcia",
]

export const SERVICE_NAMES: Record<Service, { name: string; title: string; singular: string }> = {
  "abogado-narcotrafico": { 
    name: "Abogado Narcotráfico", 
    title: "Abogado Especialista en Narcotráfico", 
    singular: "abogado de narcotráfico" 
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
}

// Localized service slugs for URLs
export const SERVICE_SLUGS_I18N: Record<string, Record<Service, string>> = {
  es: {
    "abogado-narcotrafico": "abogado-narcotrafico",
    "defensa-trafico-drogas": "defensa-trafico-drogas",
    "abogado-posesion-drogas": "abogado-posesion-drogas",
    "defensa-blanqueo-capitales": "defensa-blanqueo-capitales",
    "abogado-extradicion": "abogado-extradicion",
    "recurso-sentencia-drogas": "recurso-sentencia-drogas",
  },
  en: {
    "abogado-narcotrafico": "drug-trafficking-lawyer",
    "defensa-trafico-drogas": "drug-trafficking-defense",
    "abogado-posesion-drogas": "drug-possession-lawyer",
    "defensa-blanqueo-capitales": "money-laundering-defense",
    "abogado-extradicion": "extradition-lawyer",
    "recurso-sentencia-drogas": "drug-sentence-appeal",
  },
  fr: {
    "abogado-narcotrafico": "avocat-trafic-drogue",
    "defensa-trafico-drogas": "defense-trafic-drogue",
    "abogado-posesion-drogas": "avocat-possession-drogue",
    "defensa-blanqueo-capitales": "defense-blanchiment",
    "abogado-extradicion": "avocat-extradition",
    "recurso-sentencia-drogas": "appel-sentence-drogue",
  },
  ar: {
    "abogado-narcotrafico": "محامي-تهريب-مخدرات",
    "defensa-trafico-drogas": "دفاع-تهريب-مخدرات",
    "abogado-posesion-drogas": "محامي-حيازة-مخدرات",
    "defensa-blanqueo-capitales": "دفاع-غسيل-اموال",
    "abogado-extradicion": "محامي-تسليم",
    "recurso-sentencia-drogas": "استئناف-حكم-مخدرات",
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

// Translations for service names
export const SERVICE_NAMES_I18N: Record<string, Record<Service, { name: string; title: string; singular: string }>> = {
  es: SERVICE_NAMES,
  en: {
    "abogado-narcotrafico": { 
      name: "Drug Trafficking Lawyer", 
      title: "Drug Trafficking Defense Attorney", 
      singular: "drug trafficking lawyer" 
    },
    "defensa-trafico-drogas": { 
      name: "Drug Trafficking Defense", 
      title: "Drug Trafficking Defense", 
      singular: "drug trafficking defense" 
    },
    "abogado-posesion-drogas": { 
      name: "Drug Possession Lawyer", 
      title: "Drug Possession Defense Attorney", 
      singular: "drug possession lawyer" 
    },
    "defensa-blanqueo-capitales": { 
      name: "Money Laundering Defense", 
      title: "Money Laundering Defense", 
      singular: "money laundering defense" 
    },
    "abogado-extradicion": { 
      name: "Extradition Lawyer", 
      title: "Extradition Defense Attorney", 
      singular: "extradition lawyer" 
    },
    "recurso-sentencia-drogas": { 
      name: "Drug Sentence Appeal", 
      title: "Drug Sentence Appeals", 
      singular: "drug sentence appeal" 
    },
  },
  fr: {
    "abogado-narcotrafico": { 
      name: "Avocat Trafic de Drogue", 
      title: "Avocat Spécialisé Trafic de Drogue", 
      singular: "avocat trafic de drogue" 
    },
    "defensa-trafico-drogas": { 
      name: "Défense Trafic de Drogue", 
      title: "Défense en Trafic de Drogue", 
      singular: "défense trafic de drogue" 
    },
    "abogado-posesion-drogas": { 
      name: "Avocat Possession Drogue", 
      title: "Avocat pour Possession de Drogue", 
      singular: "avocat possession de drogue" 
    },
    "defensa-blanqueo-capitales": { 
      name: "Défense Blanchiment", 
      title: "Défense en Blanchiment d'Argent", 
      singular: "défense blanchiment d'argent" 
    },
    "abogado-extradicion": { 
      name: "Avocat Extradition", 
      title: "Avocat pour Extraditions", 
      singular: "avocat extradition" 
    },
    "recurso-sentencia-drogas": { 
      name: "Appel Sentence Drogue", 
      title: "Appels contre Sentences Drogue", 
      singular: "appel sentence drogue" 
    },
  },
  ar: {
    "abogado-narcotrafico": { 
      name: "محامي تهريب المخدرات", 
      title: "محامي متخصص في تهريب المخدرات", 
      singular: "محامي تهريب مخدرات" 
    },
    "defensa-trafico-drogas": { 
      name: "الدفاع في قضايا المخدرات", 
      title: "الدفاع في قضايا تهريب المخدرات", 
      singular: "دفاع تهريب مخدرات" 
    },
    "abogado-posesion-drogas": { 
      name: "محامي حيازة مخدرات", 
      title: "محامي لقضايا حيازة المخدرات", 
      singular: "محامي حيازة مخدرات" 
    },
    "defensa-blanqueo-capitales": { 
      name: "الدفاع في غسيل الأموال", 
      title: "الدفاع في قضايا غسيل الأموال", 
      singular: "دفاع غسيل أموال" 
    },
    "abogado-extradicion": { 
      name: "محامي تسليم المجرمين", 
      title: "محامي لقضايا التسليم", 
      singular: "محامي تسليم" 
    },
    "recurso-sentencia-drogas": { 
      name: "استئناف حكم مخدرات", 
      title: "استئناف أحكام المخدرات", 
      singular: "استئناف حكم مخدرات" 
    },
  },
}
