import { ExternalLink, Newspaper } from "lucide-react"
import { type Locale, getTranslations, isRTL } from "@/lib/i18n"

interface PressSectionProps {
  locale: Locale
}

const pressArticles = [
  {
    source: "La Vanguardia",
    date: "2017",
    title: {
      es: "Caso Imprenta Constantí - Referéndum 1-O",
      en: "Constantí Printing Case - 1-O Referendum",
      fr: "Affaire Imprimerie Constantí - Référendum 1-O",
      ar: "قضية مطبعة كونستانتي - استفتاء 1-O",
    },
    description: {
      es: "Defensa en el mediático caso del registro de la Guardia Civil a la imprenta de Constantí durante el proceso del referéndum catalán.",
      en: "Defense in the high-profile case of the Civil Guard search of the Constantí printing press during the Catalan referendum process.",
      fr: "Défense dans l'affaire médiatique de la perquisition de la Garde civile à l'imprimerie de Constantí lors du processus référendaire catalan.",
      ar: "الدفاع في القضية الإعلامية لتفتيش الحرس المدني لمطبعة كونستانتي خلال عملية الاستفتاء الكتالوني.",
    },
    url: "https://www.lavanguardia.com/politica/20170908/431128677120/guardia-civil-entra-imprenta-constanti.html",
    logo: "lavanguardia",
  },
  {
    source: "Diari Més",
    date: "2024",
    title: {
      es: "Absolución Policías Vila-seca",
      en: "Vila-seca Police Acquittal",
      fr: "Acquittement Policiers Vila-seca",
      ar: "تبرئة شرطة فيلا-سيكا",
    },
    description: {
      es: "Defensa exitosa de dos policías locales acusados de torturas y tentativa de asesinato. Absolución por falta de pruebas tras demostrar inconsistencias en la acusación.",
      en: "Successful defense of two local police officers accused of torture and attempted murder. Acquittal due to lack of evidence after demonstrating inconsistencies in the accusation.",
      fr: "Défense réussie de deux policiers locaux accusés de torture et tentative de meurtre. Acquittement pour manque de preuves après avoir démontré des incohérences dans l'accusation.",
      ar: "دفاع ناجح عن شرطيين محليين متهمين بالتعذيب ومحاولة القتل. تبرئة بسبب نقص الأدلة بعد إثبات تناقضات في الاتهام.",
    },
    url: "https://www.diarimes.com/es/camp-tarragona/tarragones/240209/absueltos-dos-policias-locales-vila-seca-acusados-haber-torturado-e-intentado-asesinar-hombre-2013_140345.html",
    logo: "diarimes",
  },
  {
    source: "Diari de Tarragona",
    date: "2023",
    title: {
      es: "Defensa Caso Tentativa Homicidio",
      en: "Attempted Homicide Defense Case",
      fr: "Affaire Défense Tentative d'Homicide",
      ar: "قضية دفاع محاولة قتل",
    },
    description: {
      es: "Defensa penal en caso de tentativa de homicidio. Reducción significativa de la petición fiscal de 18 años a pena menor mediante estrategia de defensa técnica.",
      en: "Criminal defense in attempted homicide case. Significant reduction of the 18-year prosecution request to a lesser sentence through technical defense strategy.",
      fr: "Défense pénale dans une affaire de tentative d'homicide. Réduction significative de la demande de 18 ans du parquet à une peine moindre grâce à une stratégie de défense technique.",
      ar: "دفاع جنائي في قضية محاولة قتل. تخفيض كبير لطلب النيابة 18 عامًا إلى عقوبة أقل من خلال استراتيجية دفاع تقنية.",
    },
    url: "https://www.diaridetarragona.com/sucesos/230603/se-enfrenta-a-una-peticion-de-hasta-18-anos-de-prision-por-intentar-matar-a-su-pareja-en-tarragona-en-mayo-de-2023-da24175402.html",
    logo: "diaridetarragona",
  },
]

export function PressSection({ locale }: PressSectionProps) {
  const t = getTranslations(locale)
  const rtl = isRTL(locale)

  const pressLabels = {
    es: { label: "Prensa", title: "Tomás Gilabert en los Medios", subtitle: "Más de 50 años de trayectoria con presencia en los principales medios de comunicación nacionales. Casos de alta repercusión mediática.", readMore: "Leer artículo" },
    en: { label: "Press", title: "Tomás Gilabert in the Media", subtitle: "Over 50 years of experience with presence in major national media outlets. High-profile cases.", readMore: "Read article" },
    fr: { label: "Presse", title: "Tomás Gilabert dans les Médias", subtitle: "Plus de 50 ans d'expérience avec présence dans les principaux médias nationaux. Affaires de grande envergure.", readMore: "Lire l'article" },
    ar: { label: "الصحافة", title: "توماس جيلابيرت في وسائل الإعلام", subtitle: "أكثر من 50 عامًا من الخبرة مع حضور في وسائل الإعلام الوطنية الرئيسية. قضايا بارزة.", readMore: "اقرأ المقال" },
  }

  const labels = pressLabels[locale] || pressLabels.es

  return (
    <section className="bg-card border-y border-border" dir={rtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{labels.label}</p>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-foreground mb-4">
            {labels.title}
          </h2>
          <p className="text-sm text-muted-foreground font-sans max-w-2xl mx-auto">
            {labels.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pressArticles.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background border border-border p-6 hover:border-primary/50 transition-colors"
            >
              <div className={`flex items-center gap-3 mb-4 ${rtl ? "flex-row-reverse" : ""}`}>
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <Newspaper className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-sans font-medium text-foreground">{article.source}</p>
                  <p className="text-[10px] text-muted-foreground">{article.date}</p>
                </div>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {article.title[locale] || article.title.es}
              </h3>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-4">
                {article.description[locale] || article.description.es}
              </p>
              <span className={`inline-flex items-center gap-1 text-xs text-primary font-sans ${rtl ? "flex-row-reverse" : ""}`}>
                {labels.readMore} <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
