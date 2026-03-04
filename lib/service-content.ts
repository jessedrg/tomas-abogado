// =============================================================================
// CONTENIDO LEGAL ESPECÍFICO POR SERVICIO
// =============================================================================
// Información legal real sobre penas, cantidades y artículos del código penal
// =============================================================================

import type { Service } from "./sitemap-data"

export interface ServiceContent {
  codigoPenal: string[]
  penas: { min: string; max: string; agravada?: string }
  cantidades?: { posesion: string; trafico: string }
  introEs: string
  keyPointsEs: string[]
  faqsEs: { q: string; a: string }[]
}

export const SERVICE_CONTENT: Partial<Record<Service, ServiceContent>> = {
  "abogado-cocaina": {
    codigoPenal: ["Art. 368 CP", "Art. 369 CP", "Art. 370 CP"],
    penas: { min: "3 años", max: "6 años", agravada: "6-9 años" },
    cantidades: { posesion: "< 7.5g", trafico: "> 750g" },
    introEs: "La cocaína está clasificada como sustancia que causa grave daño a la salud según el artículo 368 del Código Penal español. Las penas por tráfico de cocaína oscilan entre 3 y 6 años de prisión, pudiendo alcanzar los 9 años en casos agravados. La cantidad que diferencia posesión de tráfico se establece jurisprudencialmente en torno a 7.5 gramos para consumo propio.",
    keyPointsEs: [
      "Pena base: 3-6 años de prisión y multa del tanto al triplo",
      "Cantidad notoria importancia: > 750 gramos (Art. 369.1.5ª)",
      "Agravante por organización criminal: penas de 6-9 años",
      "Posible suspensión de condena en primeras infracciones < 2 años",
      "Atenuante por drogodependencia acreditada (Art. 21.2 CP)"
    ],
    faqsEs: [
      { q: "¿Cuántos años de cárcel por tráfico de cocaína en España?", a: "El tráfico de cocaína conlleva penas de 3 a 6 años de prisión según el artículo 368 CP. En casos de notoria importancia (>750g) o pertenencia a organización criminal, las penas pueden alcanzar 6-9 años. Con agravantes múltiples, hasta 12 años." },
      { q: "¿Qué cantidad de cocaína se considera tráfico?", a: "Jurisprudencialmente, cantidades superiores a 7.5 gramos pueden considerarse destinadas al tráfico si no se acredita consumo propio. La 'notoria importancia' del Art. 369.1.5ª se establece a partir de 750 gramos de cocaína pura." },
      { q: "¿Se puede evitar la cárcel por cocaína?", a: "En primeras infracciones con cantidades pequeñas y sin agravantes, es posible obtener suspensión de condena si la pena no supera 2 años. La drogodependencia acreditada puede actuar como atenuante muy cualificada." }
    ]
  },
  
  "abogado-cannabis": {
    codigoPenal: ["Art. 368.2 CP"],
    penas: { min: "1 año", max: "3 años", agravada: "3-6 años" },
    cantidades: { posesion: "< 100g hierba / < 25g hachís", trafico: "> 10kg hierba" },
    introEs: "El cannabis está clasificado como sustancia que NO causa grave daño a la salud, lo que implica penas significativamente menores que otras drogas. Según el artículo 368.2 del Código Penal, las penas oscilan entre 1 y 3 años de prisión. La cantidad para consumo propio se establece en torno a 100 gramos de hierba o 25 gramos de hachís según jurisprudencia del Tribunal Supremo.",
    keyPointsEs: [
      "Pena base: 1-3 años de prisión (sustancia que no causa grave daño)",
      "Cantidad consumo propio: ~100g marihuana / ~25g hachís",
      "Notoria importancia: > 10kg hierba / > 2.5kg hachís",
      "Alta probabilidad de suspensión de condena",
      "Cultivo para autoconsumo compartido: posible absolución"
    ],
    faqsEs: [
      { q: "¿Cuántos años de cárcel por marihuana en España?", a: "El tráfico de cannabis conlleva penas de 1 a 3 años de prisión al ser sustancia que no causa grave daño a la salud (Art. 368.2 CP). En la práctica, la mayoría de condenas se suspenden si no hay antecedentes." },
      { q: "¿Qué cantidad de marihuana es legal en España?", a: "El consumo en privado no está penado. Para porte, cantidades hasta 100g de hierba o 25g de hachís pueden considerarse consumo propio según jurisprudencia consolidada del Tribunal Supremo." },
      { q: "¿El cultivo de cannabis es delito?", a: "El cultivo para autoconsumo exclusivo puede no ser delito. El cultivo compartido en asociaciones cannábicas tiene jurisprudencia contradictoria. El cultivo para tráfico sí está penado con 1-3 años." }
    ]
  },
  
  "abogado-marihuana": {
    codigoPenal: ["Art. 368.2 CP"],
    penas: { min: "1 año", max: "3 años", agravada: "3-6 años" },
    cantidades: { posesion: "< 100g", trafico: "> 10kg" },
    introEs: "La marihuana (cannabis sativa) está clasificada como sustancia que NO causa grave daño a la salud. Las penas por tráfico son de 1 a 3 años según el Art. 368.2 CP. España tiene una de las legislaciones más permisivas de Europa respecto al consumo privado, aunque el tráfico sigue siendo delito.",
    keyPointsEs: [
      "Pena base: 1-3 años (tipo atenuado Art. 368.2)",
      "Consumo privado: no penado",
      "Porte para consumo: hasta ~100 gramos",
      "Cultivo autoconsumo: atípico si se acredita",
      "Suspensión condena: muy probable sin antecedentes"
    ],
    faqsEs: [
      { q: "¿Cuánto cae por marihuana en España?", a: "Por tráfico de marihuana las penas son de 1 a 3 años de prisión. Al ser sustancia que no causa grave daño, las penas son las más bajas del Código Penal para delitos de drogas." },
      { q: "¿Cuánta marihuana puedo llevar encima?", a: "No hay cantidad legal establecida, pero la jurisprudencia considera consumo propio cantidades hasta 100 gramos aproximadamente, dependiendo de las circunstancias." },
      { q: "¿Me pueden detener por fumar marihuana?", a: "El consumo en vía pública es infracción administrativa (multa 601-30.000€), no delito. El consumo privado no está sancionado." }
    ]
  },
  
  "abogado-hachis": {
    codigoPenal: ["Art. 368.2 CP"],
    penas: { min: "1 año", max: "3 años", agravada: "3-6 años" },
    cantidades: { posesion: "< 25g", trafico: "> 2.5kg" },
    introEs: "El hachís (resina de cannabis) está clasificado como sustancia que NO causa grave daño a la salud. Al tener mayor concentración de THC que la hierba, las cantidades para consumo propio son menores: aproximadamente 25 gramos según jurisprudencia. Las penas son de 1 a 3 años de prisión.",
    keyPointsEs: [
      "Pena base: 1-3 años de prisión",
      "Cantidad consumo propio: ~25 gramos",
      "Notoria importancia: > 2.5 kg",
      "Mayor concentración THC = menor cantidad permitida",
      "Mismas penas que marihuana (Art. 368.2)"
    ],
    faqsEs: [
      { q: "¿Cuántos gramos de hachís son delito?", a: "No hay cantidad exacta legal. La jurisprudencia considera consumo propio hasta ~25 gramos. Cantidades superiores pueden considerarse tráfico si no se acredita consumo personal." },
      { q: "¿Qué pena tiene el tráfico de hachís?", a: "Las penas son de 1 a 3 años de prisión (Art. 368.2 CP). Con notoria importancia (>2.5kg) las penas suben a 3-6 años." },
      { q: "¿Es lo mismo hachís que marihuana legalmente?", a: "Sí, ambos son derivados del cannabis y tienen las mismas penas. La diferencia está en las cantidades: el hachís tiene mayor concentración, por lo que las cantidades de consumo propio son menores." }
    ]
  },
  
  "abogado-heroina": {
    codigoPenal: ["Art. 368 CP", "Art. 369 CP"],
    penas: { min: "3 años", max: "6 años", agravada: "6-9 años" },
    cantidades: { posesion: "< 3g", trafico: "> 300g" },
    introEs: "La heroína está clasificada como sustancia que causa grave daño a la salud. Las penas por tráfico oscilan entre 3 y 6 años de prisión. La cantidad para consumo propio es muy reducida (aproximadamente 3 gramos), y la notoria importancia se establece a partir de 300 gramos. La drogodependencia es atenuante muy relevante en estos casos.",
    keyPointsEs: [
      "Pena base: 3-6 años de prisión",
      "Cantidad consumo propio: < 3 gramos",
      "Notoria importancia: > 300 gramos",
      "Atenuante drogodependencia: muy aplicable",
      "Posible tratamiento como alternativa a prisión"
    ],
    faqsEs: [
      { q: "¿Cuántos años de cárcel por heroína?", a: "El tráfico de heroína conlleva penas de 3 a 6 años de prisión. Con notoria importancia (>300g) las penas suben a 6-9 años." },
      { q: "¿Qué cantidad de heroína es consumo propio?", a: "La jurisprudencia establece aproximadamente 3 gramos como cantidad máxima para consumo propio. Cantidades superiores se presumen destinadas al tráfico." },
      { q: "¿La adicción reduce la condena?", a: "Sí, la drogodependencia acreditada es atenuante (Art. 21.2 CP). En casos graves puede ser atenuante muy cualificada, reduciendo la pena en uno o dos grados." }
    ]
  },
  
  "abogado-mdma": {
    codigoPenal: ["Art. 368 CP", "Art. 369 CP"],
    penas: { min: "3 años", max: "6 años", agravada: "6-9 años" },
    cantidades: { posesion: "< 1.44g / 4-5 pastillas", trafico: "> 240g" },
    introEs: "El MDMA (éxtasis) está clasificado como sustancia que causa grave daño a la salud. Las penas por tráfico son de 3 a 6 años de prisión. La cantidad para consumo propio se establece en torno a 1.44 gramos (equivalente a 4-5 pastillas). La notoria importancia se fija a partir de 240 gramos.",
    keyPointsEs: [
      "Pena base: 3-6 años de prisión",
      "Cantidad consumo propio: ~1.44g (4-5 pastillas)",
      "Notoria importancia: > 240 gramos",
      "Sustancia que causa grave daño a la salud",
      "Frecuente en operaciones contra fiestas ilegales"
    ],
    faqsEs: [
      { q: "¿Cuántas pastillas de éxtasis son delito?", a: "No hay número exacto. La jurisprudencia considera consumo propio hasta 4-5 pastillas (~1.44g de MDMA puro). Más cantidad puede considerarse tráfico." },
      { q: "¿Qué pena tiene vender MDMA?", a: "El tráfico de MDMA conlleva penas de 3 a 6 años de prisión. Si se vende a menores o en centros educativos, las penas se agravan." },
      { q: "¿Me pueden detener por llevar éxtasis a una fiesta?", a: "Sí, el porte de MDMA es delito si se considera destinado al tráfico. Cantidades pequeñas para consumo propio pueden ser infracción administrativa." }
    ]
  },
  
  "abogado-metanfetamina": {
    codigoPenal: ["Art. 368 CP", "Art. 369 CP"],
    penas: { min: "3 años", max: "6 años", agravada: "6-9 años" },
    cantidades: { posesion: "< 3g", trafico: "> 300g" },
    introEs: "La metanfetamina está clasificada como sustancia que causa grave daño a la salud. Las penas por tráfico son de 3 a 6 años de prisión. Es una de las drogas con mayor persecución policial debido a su alta peligrosidad y adicción.",
    keyPointsEs: [
      "Pena base: 3-6 años de prisión",
      "Sustancia de alta peligrosidad",
      "Notoria importancia: > 300 gramos",
      "Frecuente en operaciones internacionales",
      "Agravantes por laboratorios clandestinos"
    ],
    faqsEs: [
      { q: "¿Qué pena tiene la metanfetamina en España?", a: "El tráfico de metanfetamina conlleva penas de 3 a 6 años de prisión. La fabricación en laboratorios clandestinos puede agravar las penas." },
      { q: "¿Es legal la metanfetamina con receta?", a: "No, la metanfetamina no tiene uso médico autorizado en España. Cualquier posesión es ilegal." },
      { q: "¿Qué pasa si me pillan con cristal?", a: "Depende de la cantidad. Pequeñas cantidades para consumo pueden ser infracción administrativa. Cantidades mayores son delito con penas de 3-6 años." }
    ]
  },
  
  "abogado-narcotrafico": {
    codigoPenal: ["Art. 368 CP", "Art. 369 CP", "Art. 370 CP", "Art. 371 CP"],
    penas: { min: "3 años", max: "6 años", agravada: "9-12 años" },
    introEs: "El narcotráfico engloba todas las conductas de cultivo, elaboración, tráfico o favorecimiento del consumo de drogas. Las penas varían según la sustancia (grave daño o no) y las circunstancias. Los casos de organización criminal, tráfico internacional o cantidades de notoria importancia tienen penas agravadas de hasta 12 años.",
    keyPointsEs: [
      "Art. 368: Tipo básico (1-3 años o 3-6 años según sustancia)",
      "Art. 369: Agravantes específicas (6-9 años)",
      "Art. 370: Jefes de organización (9-12 años)",
      "Art. 371: Precursores químicos",
      "Decomiso de bienes y blanqueo asociado"
    ],
    faqsEs: [
      { q: "¿Qué pena tiene el narcotráfico en España?", a: "Las penas van de 1-3 años (cannabis) a 3-6 años (cocaína, heroína). Con agravantes pueden alcanzar 9-12 años. Los jefes de organización pueden recibir hasta 12 años." },
      { q: "¿Qué es la notoria importancia?", a: "Es una agravante del Art. 369.1.5ª que se aplica cuando la cantidad de droga supera ciertos umbrales: 750g cocaína, 300g heroína, 10kg cannabis, etc." },
      { q: "¿Pueden quitarme mis bienes por narcotráfico?", a: "Sí, el decomiso de bienes es obligatorio en delitos de narcotráfico. Se decomisan los bienes procedentes del delito y los utilizados para cometerlo." }
    ]
  },
  
  "abogado-penalista": {
    codigoPenal: ["Código Penal completo"],
    penas: { min: "Variable", max: "Variable" },
    introEs: "Un abogado penalista es el especialista en derecho penal que defiende a personas acusadas de cualquier delito. En casos de drogas, la especialización es fundamental debido a la complejidad de la jurisprudencia y las múltiples atenuantes aplicables. Tomás Gilabert cuenta con más de 50 años de experiencia en defensa penal.",
    keyPointsEs: [
      "Defensa en todos los delitos del Código Penal",
      "Especialización en delitos contra la salud pública",
      "Asistencia al detenido 24 horas",
      "Negociación de conformidades",
      "Recursos de apelación y casación"
    ],
    faqsEs: [
      { q: "¿Cuánto cobra un abogado penalista?", a: "Los honorarios varían según la complejidad del caso. Las consultas iniciales suelen ser gratuitas. Los casos de drogas pueden oscilar entre 2.000€ y 15.000€ dependiendo de la gravedad." },
      { q: "¿Necesito abogado si me detienen?", a: "Sí, tiene derecho a abogado desde el momento de la detención. Puede elegir abogado de confianza o solicitar uno de oficio. Es fundamental no declarar sin asistencia letrada." },
      { q: "¿Qué hace un abogado penalista?", a: "Defiende sus derechos desde la detención, estudia las pruebas, identifica irregularidades, negocia con fiscalía, y le representa en juicio si es necesario." }
    ]
  },
  
  "abogado-penal": {
    codigoPenal: ["Código Penal completo"],
    penas: { min: "Variable", max: "Variable" },
    introEs: "El abogado penal es el profesional especializado en la defensa de personas acusadas de delitos. Su intervención es crucial desde el primer momento de la detención para garantizar que se respeten todos los derechos del detenido y construir una defensa sólida.",
    keyPointsEs: [
      "Asistencia inmediata al detenido",
      "Estudio de la legalidad de las pruebas",
      "Identificación de nulidades procesales",
      "Negociación de penas con fiscalía",
      "Defensa en juicio oral"
    ],
    faqsEs: [
      { q: "¿Cuándo necesito un abogado penal?", a: "Desde el momento en que es detenido, citado como investigado, o recibe cualquier notificación judicial relacionada con un delito." },
      { q: "¿Puedo cambiar de abogado de oficio a uno privado?", a: "Sí, puede cambiar de abogado en cualquier momento del procedimiento. Es recomendable hacerlo cuanto antes para que el nuevo abogado pueda estudiar el caso." },
      { q: "¿Qué diferencia hay entre abogado penal y penalista?", a: "Son términos equivalentes. Ambos se refieren al especialista en derecho penal que defiende a personas acusadas de delitos." }
    ]
  },
  
  "abogado-drogas": {
    codigoPenal: ["Art. 368-378 CP"],
    penas: { min: "1 año", max: "12 años" },
    introEs: "El abogado especialista en drogas conoce en profundidad toda la jurisprudencia sobre delitos contra la salud pública. Sabe identificar las cantidades que diferencian consumo de tráfico, las atenuantes aplicables, y las irregularidades policiales que pueden anular las pruebas.",
    keyPointsEs: [
      "Conocimiento de umbrales de cantidad por sustancia",
      "Experiencia en nulidad de pruebas",
      "Atenuantes: drogodependencia, confesión, reparación",
      "Conformidades ventajosas con fiscalía",
      "Recursos contra sentencias desproporcionadas"
    ],
    faqsEs: [
      { q: "¿Por qué necesito un abogado especialista en drogas?", a: "Los delitos de drogas tienen jurisprudencia muy específica sobre cantidades, atenuantes y procedimientos. Un especialista conoce todos los argumentos de defensa." },
      { q: "¿Pueden anular las pruebas de drogas?", a: "Sí, si hubo irregularidades en el registro, la cadena de custodia, o los análisis. Un abogado especialista sabe identificar estas nulidades." },
      { q: "¿La drogodependencia reduce la pena?", a: "Sí, es atenuante del Art. 21.2 CP. Si se acredita con informes médicos, puede reducir significativamente la pena o incluso sustituirla por tratamiento." }
    ]
  },
  
  "abogado-posesion-drogas": {
    codigoPenal: ["Art. 368 CP", "Ley Orgánica 4/2015"],
    penas: { min: "Multa administrativa", max: "6 años" },
    introEs: "La posesión de drogas puede ser infracción administrativa (consumo propio) o delito (tráfico). La diferencia está en la cantidad y las circunstancias. Un abogado especialista puede argumentar que la posesión era para consumo propio y evitar condenas penales.",
    keyPointsEs: [
      "Posesión consumo propio: infracción administrativa (601-30.000€)",
      "Posesión para tráfico: delito (1-6 años según sustancia)",
      "Clave: acreditar que era para consumo personal",
      "Circunstancias: lugar, forma de llevarla, antecedentes",
      "Posible archivo si se acredita consumo propio"
    ],
    faqsEs: [
      { q: "¿Es delito tener drogas para consumo propio?", a: "No, la posesión para consumo propio no es delito, solo infracción administrativa con multa de 601 a 30.000€. El delito es el tráfico." },
      { q: "¿Cómo demuestro que era para consumo propio?", a: "Se valora la cantidad, si estaba dividida en dosis, el lugar donde se encontró, si había dinero o balanzas, y los antecedentes de consumo." },
      { q: "¿Me pueden quitar el carnet por posesión de drogas?", a: "Sí, la sanción administrativa puede incluir suspensión del permiso de conducir de 3 meses a 1 año, además de la multa." }
    ]
  },
  
  "defensa-trafico-drogas": {
    codigoPenal: ["Art. 368-370 CP"],
    penas: { min: "1 año", max: "12 años" },
    introEs: "La defensa en casos de tráfico de drogas requiere un análisis exhaustivo de las pruebas, la legalidad de los registros, y las posibles atenuantes. Muchos casos se ganan por nulidad de pruebas obtenidas ilegalmente o por acreditar que la cantidad era para consumo propio.",
    keyPointsEs: [
      "Análisis de legalidad de registros y escuchas",
      "Impugnación de cadena de custodia",
      "Argumentación de consumo propio",
      "Atenuantes: confesión, drogodependencia, reparación",
      "Conformidades con reducción de pena"
    ],
    faqsEs: [
      { q: "¿Cómo me defiendo de una acusación de tráfico?", a: "Analizando la legalidad de las pruebas, la cadena de custodia, argumentando consumo propio si procede, y aplicando todas las atenuantes posibles." },
      { q: "¿Pueden condenarme solo por escuchas telefónicas?", a: "Las escuchas deben estar autorizadas judicialmente y cumplir requisitos estrictos. Si hay irregularidades, pueden anularse como prueba." },
      { q: "¿Qué pasa si confieso?", a: "La confesión es atenuante (Art. 21.4 CP) que puede reducir la pena. Pero debe valorarse estratégicamente con su abogado antes de declarar." }
    ]
  },
  
  "defensa-blanqueo-capitales": {
    codigoPenal: ["Art. 301-304 CP"],
    penas: { min: "6 meses", max: "6 años" },
    introEs: "El blanqueo de capitales es el delito de ocultar o transformar bienes procedentes de actividades delictivas. En casos de narcotráfico, suele investigarse conjuntamente. Las penas van de 6 meses a 6 años, más multa proporcional al valor de los bienes.",
    keyPointsEs: [
      "Pena: 6 meses a 6 años de prisión",
      "Multa: proporcional al valor blanqueado",
      "Decomiso de bienes obligatorio",
      "Delito autónomo del narcotráfico",
      "Responsabilidad de terceros (testaferros)"
    ],
    faqsEs: [
      { q: "¿Qué es el blanqueo de capitales?", a: "Es ocultar el origen ilícito de bienes, transformarlos, o ayudar a quien cometió el delito a eludir las consecuencias. Incluye comprar propiedades, crear empresas, o mover dinero." },
      { q: "¿Pueden quitarme mi casa por blanqueo?", a: "Sí, el decomiso es obligatorio. Se decomisan los bienes procedentes del delito y los adquiridos con ellos, aunque estén a nombre de terceros." },
      { q: "¿Puedo ser acusado de blanqueo sin ser narcotraficante?", a: "Sí, el blanqueo es delito autónomo. Puede acusarse a quien ayuda a ocultar bienes aunque no participara en el narcotráfico." }
    ]
  },
  
  "abogado-extradicion": {
    codigoPenal: ["Ley 4/1985", "Convenio Europeo de Extradición"],
    penas: { min: "N/A", max: "N/A" },
    introEs: "La extradición es el procedimiento por el que un país entrega a otro a una persona reclamada por la justicia. En casos de narcotráfico, España recibe solicitudes de extradición de países latinoamericanos y emite órdenes europeas de detención. La defensa puede oponerse por motivos humanitarios, riesgo de tortura, o defectos procesales.",
    keyPointsEs: [
      "Orden Europea de Detención (euroorden): procedimiento simplificado",
      "Extradición tradicional: más garantías para el reclamado",
      "Motivos de oposición: derechos humanos, doble incriminación",
      "Plazo máximo de prisión provisional: 60 días (euroorden)",
      "Posible entrega condicionada"
    ],
    faqsEs: [
      { q: "¿Pueden extraditarme a otro país por drogas?", a: "Sí, si hay tratado de extradición y el delito está castigado en ambos países. Puede oponerse por motivos humanitarios o defectos procesales." },
      { q: "¿Qué es una euroorden?", a: "Es la Orden Europea de Detención, un procedimiento simplificado entre países de la UE. El plazo máximo de entrega es 60-90 días." },
      { q: "¿Puedo evitar la extradición?", a: "Depende del caso. Se puede alegar riesgo de tortura, pena de muerte, prescripción, o que los hechos no son delito en España." }
    ]
  },
  
  "recurso-sentencia-drogas": {
    codigoPenal: ["LECrim Art. 790-792", "Art. 847-848"],
    penas: { min: "N/A", max: "N/A" },
    introEs: "Si ha sido condenado por un delito de drogas, puede recurrir la sentencia. El recurso de apelación permite revisar los hechos y el derecho. El recurso de casación ante el Tribunal Supremo se centra en infracciones legales. Un abogado especialista puede identificar errores que justifiquen la absolución o reducción de pena.",
    keyPointsEs: [
      "Apelación: revisión completa de hechos y derecho",
      "Casación: solo infracciones de ley o doctrina",
      "Plazo apelación: 10 días desde notificación",
      "Plazo casación: 5 días para preparación",
      "Posible suspensión de condena durante recurso"
    ],
    faqsEs: [
      { q: "¿Puedo recurrir una condena por drogas?", a: "Sí, siempre puede recurrir en apelación. Si la sentencia es de Audiencia Provincial, puede recurrir en casación ante el Tribunal Supremo." },
      { q: "¿Cuánto tarda un recurso de apelación?", a: "Entre 3 y 12 meses dependiendo del juzgado. Durante ese tiempo puede solicitar suspensión de la condena si cumple requisitos." },
      { q: "¿Merece la pena recurrir?", a: "Depende del caso. Un abogado especialista puede identificar errores en la valoración de pruebas, aplicación de atenuantes, o proporcionalidad de la pena." }
    ]
  },
  
  "abogado-malos-tratos": {
    codigoPenal: ["Art. 153 CP", "Art. 173 CP", "LO 1/2004"],
    penas: { min: "6 meses", max: "5 años" },
    introEs: "Los delitos de malos tratos incluyen la violencia física y psicológica en el ámbito familiar. Las penas van de 6 meses a 5 años según la gravedad. La defensa puede argumentar legítima defensa, ausencia de habitualidad, o falsedad de la denuncia.",
    keyPointsEs: [
      "Maltrato ocasional: 6 meses a 1 año (Art. 153)",
      "Maltrato habitual: 6 meses a 3 años (Art. 173)",
      "Agravantes: presencia de menores, armas",
      "Orden de alejamiento obligatoria",
      "Posible suspensión con programas formativos"
    ],
    faqsEs: [
      { q: "¿Qué pena tiene el maltrato?", a: "El maltrato ocasional tiene penas de 6 meses a 1 año. El maltrato habitual de 6 meses a 3 años. Con lesiones graves, las penas aumentan." },
      { q: "¿Pueden denunciarme falsamente por malos tratos?", a: "Sí, las denuncias falsas existen. La defensa puede demostrar la falsedad mediante pruebas, testigos, y análisis de contradicciones." },
      { q: "¿Qué es la orden de alejamiento?", a: "Es una medida que prohíbe acercarse a la víctima. Se impone automáticamente en casos de violencia de género y puede durar hasta 10 años." }
    ]
  },
  
  "abogado-urgente-penal": {
    codigoPenal: ["Constitución Art. 17", "LECrim Art. 520"],
    penas: { min: "N/A", max: "N/A" },
    introEs: "Cuando es detenido, tiene derecho a abogado desde el primer momento. Un abogado urgente acude a comisaría en menos de 2 horas para asistirle en la declaración y garantizar que se respeten sus derechos. No declare sin abogado.",
    keyPointsEs: [
      "Derecho a abogado desde la detención",
      "Asistencia en comisaría 24 horas",
      "Derecho a no declarar contra sí mismo",
      "Revisión de la legalidad de la detención",
      "Solicitud de libertad provisional"
    ],
    faqsEs: [
      { q: "¿Qué hago si me detienen?", a: "No declare nada sin abogado. Tiene derecho a llamar a un familiar y a ser asistido por abogado. Solicite abogado de confianza o de oficio." },
      { q: "¿Cuánto tiempo pueden tenerme detenido?", a: "Máximo 72 horas, ampliables a 5 días en casos de terrorismo o bandas organizadas. Pasado ese tiempo, deben ponerle en libertad o a disposición judicial." },
      { q: "¿Puedo negarme a declarar?", a: "Sí, tiene derecho constitucional a no declarar contra sí mismo. Su abogado le aconsejará si es conveniente declarar o acogerse a su derecho a guardar silencio." }
    ]
  },
  
  "abogado-24-horas": {
    codigoPenal: ["Constitución Art. 17", "LECrim Art. 520"],
    penas: { min: "N/A", max: "N/A" },
    introEs: "Ofrecemos servicio de abogado penalista 24 horas para urgencias. Si usted o un familiar ha sido detenido, llámenos inmediatamente. Acudimos a cualquier comisaría de España en el menor tiempo posible.",
    keyPointsEs: [
      "Disponibilidad 24 horas, 365 días",
      "Asistencia en cualquier comisaría de España",
      "Desplazamiento inmediato",
      "Primera consulta gratuita",
      "Experiencia en detenciones por drogas"
    ],
    faqsEs: [
      { q: "¿Atienden de madrugada?", a: "Sí, nuestro servicio de guardia está disponible 24 horas. Las detenciones no tienen horario y nosotros tampoco." },
      { q: "¿Cuánto tardan en llegar a comisaría?", a: "Dependiendo de la ubicación, entre 30 minutos y 2 horas. En Madrid, Barcelona y principales ciudades, la respuesta es más rápida." },
      { q: "¿Cuánto cuesta el servicio de urgencia?", a: "La primera consulta telefónica es gratuita. Los honorarios por asistencia en comisaría se informan antes de desplazarnos." }
    ]
  },
  
  "abogado-detenido-drogas": {
    codigoPenal: ["Art. 368 CP", "LECrim Art. 520"],
    penas: { min: "1 año", max: "12 años" },
    introEs: "Si ha sido detenido por drogas, necesita un abogado especialista inmediatamente. No declare sin asistencia letrada. Un abogado experto en drogas conoce los argumentos de defensa, las cantidades de consumo propio, y las irregularidades que pueden anular las pruebas.",
    keyPointsEs: [
      "No declare sin abogado",
      "Derecho a conocer los motivos de la detención",
      "Revisión de la legalidad del registro",
      "Argumentación de consumo propio",
      "Solicitud de libertad provisional"
    ],
    faqsEs: [
      { q: "Me han detenido con drogas, ¿qué hago?", a: "No declare nada. Solicite abogado de confianza. No firme nada sin leerlo con su abogado. Tiene derecho a guardar silencio." },
      { q: "¿Pueden registrarme sin orden judicial?", a: "En la calle pueden cachearte por seguridad. Para registrar vehículo o domicilio necesitan autorización judicial o consentimiento, salvo flagrante delito." },
      { q: "¿Iré a la cárcel por drogas?", a: "Depende de la cantidad y circunstancias. Cantidades pequeñas para consumo propio no son delito. Un abogado especialista evaluará su caso." }
    ]
  },
}

// Función para obtener contenido por servicio
export function getServiceContent(service: Service): ServiceContent | null {
  return SERVICE_CONTENT[service] || null
}

// Función para obtener intro según idioma
export function getServiceIntro(service: Service, locale: string): string {
  const content = SERVICE_CONTENT[service]
  if (!content) return ""
  return content.introEs // Por ahora solo español, se puede expandir
}

// Función para obtener FAQs según idioma
export function getServiceFAQs(service: Service, locale: string): { q: string; a: string }[] {
  const content = SERVICE_CONTENT[service]
  if (!content) return []
  return content.faqsEs // Por ahora solo español
}

// Función para obtener puntos clave según idioma
export function getServiceKeyPoints(service: Service, locale: string): string[] {
  const content = SERVICE_CONTENT[service]
  if (!content) return []
  return content.keyPointsEs // Por ahora solo español
}
