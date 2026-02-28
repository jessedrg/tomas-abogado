import Image from "next/image"
import { Award, Scale, GraduationCap, MapPin } from "lucide-react"
import { type Locale, getTranslations, isRTL } from "@/lib/i18n"

interface AboutSectionProps {
  locale: Locale
}

const aboutContent = {
  es: {
    label: "Sobre el Despacho",
    title: "Más de 50 Años de Experiencia en Defensa Penal",
    bio: [
      "Tomás Gilabert cuenta con una trayectoria de más de medio siglo en la defensa penal, especializado en casos de narcotráfico y delitos contra la salud pública en toda España.",
      "Tomás ha sido reconocido con la Distinción Honorífica por Ejercicio Ejemplar de la Abogacía, otorgada por el Ilustre Colegio de Abogados, en reconocimiento a una carrera ejemplar de más de 50 años de ejercicio profesional.",
      "Ha defendido casos de alta complejidad con repercusión mediática nacional, incluyendo operaciones internacionales de tráfico de drogas, casos de blanqueo de capitales y extradiciones entre España, Marruecos y otros países.",
    ],
    credentials: [
      { icon: Award, text: "Distinción Honorífica por Ejercicio Ejemplar" },
      { icon: Scale, text: "Especialización en Derecho Penal" },
      { icon: GraduationCap, text: "+50 Años de Experiencia" },
      { icon: MapPin, text: "Actuación en toda España" },
    ],
  },
  en: {
    label: "About the Firm",
    title: "Over 50 Years of Experience in Criminal Defense",
    bio: [
      "Tomás Gilabert has a track record of over half a century in criminal defense, specialized in drug trafficking and public health crime cases throughout Spain.",
      "Tomás has been recognized with the Honorary Distinction for Exemplary Practice of Law, awarded by the Bar Association, in recognition of an exemplary career of over 50 years of professional practice.",
      "He has defended highly complex cases with national media coverage, including international drug trafficking operations, money laundering cases and extraditions between Spain, Morocco and other countries.",
    ],
    credentials: [
      { icon: Award, text: "Honorary Distinction for Exemplary Practice" },
      { icon: Scale, text: "Criminal Law Specialization" },
      { icon: GraduationCap, text: "+50 Years of Experience" },
      { icon: MapPin, text: "Operating throughout Spain" },
    ],
  },
  fr: {
    label: "À Propos du Cabinet",
    title: "Plus de 50 Ans d'Expérience en Défense Pénale",
    bio: [
      "Tomás Gilabert possède une trajectoire de plus d'un demi-siècle en défense pénale, spécialisé dans les affaires de trafic de drogue et crimes contre la santé publique dans toute l'Espagne.",
      "Tomás a été reconnu avec la Distinction Honorifique pour Exercice Exemplaire du Droit, décernée par le Barreau, en reconnaissance d'une carrière exemplaire de plus de 50 ans de pratique professionnelle.",
      "Il a défendu des affaires très complexes avec une couverture médiatique nationale, y compris des opérations internationales de trafic de drogue, des affaires de blanchiment d'argent et des extraditions entre l'Espagne, le Maroc et d'autres pays.",
    ],
    credentials: [
      { icon: Award, text: "Distinction Honorifique pour Exercice Exemplaire" },
      { icon: Scale, text: "Spécialisation en Droit Pénal" },
      { icon: GraduationCap, text: "+50 Ans d'Expérience" },
      { icon: MapPin, text: "Intervention dans toute l'Espagne" },
    ],
  },
  ar: {
    label: "عن المكتب",
    title: "أكثر من 50 عامًا من الخبرة في الدفاع الجنائي",
    bio: [
      "يتمتع توماس جيلابيرت بسجل حافل يمتد لأكثر من نصف قرن في الدفاع الجنائي، متخصص في قضايا تهريب المخدرات والجرائم ضد الصحة العامة في جميع أنحاء إسبانيا.",
      "تم تكريم توماس بوسام الشرف للممارسة المثالية للمحاماة، الممنوح من نقابة المحامين، تقديرًا لمسيرة مهنية مثالية تمتد لأكثر من 50 عامًا.",
      "دافع عن قضايا معقدة للغاية ذات تغطية إعلامية وطنية، بما في ذلك عمليات تهريب المخدرات الدولية وقضايا غسيل الأموال والتسليم بين إسبانيا والمغرب ودول أخرى.",
    ],
    credentials: [
      { icon: Award, text: "وسام شرفي للممارسة المثالية" },
      { icon: Scale, text: "تخصص في القانون الجنائي" },
      { icon: GraduationCap, text: "+50 عامًا من الخبرة" },
      { icon: MapPin, text: "نعمل في جميع أنحاء إسبانيا" },
    ],
  },
}

export function AboutSection({ locale }: AboutSectionProps) {
  const t = getTranslations(locale)
  const rtl = isRTL(locale)
  const content = aboutContent[locale] || aboutContent.es

  return (
    <section id="sobre" className="bg-background" dir={rtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className={`relative ${rtl ? "lg:order-2" : ""}`}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/WhatsApp Image 2026-02-24 at 14.38.04.jpeg"
                alt="Abogado Penalista"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary -z-10" />
          </div>

          {/* Content */}
          <div className={rtl ? "lg:order-1" : ""}>
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{content.label}</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-foreground leading-tight mb-8">
              {content.title}
            </h2>
            
            <div className="space-y-4 mb-8">
              {content.bio.map((paragraph, i) => (
                <p key={i} className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {content.credentials.map(({ icon: Icon, text }, i) => (
                <div key={i} className={`flex items-center gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-sans text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
