import Image from "next/image"
import { Globe, Languages, MapPin, ShieldCheck } from "lucide-react"
import { type Locale, getTranslations, isRTL } from "@/lib/i18n"

interface AboutSectionProps {
  locale: Locale
}

const aboutContent = {
  es: {
    label: "Sobre Tomás",
    title: "Más de 50 Años de Experiencia en Defensa Penal",
    bio: [
      "Tomás es licenciado en Derecho por la Universitat de Barcelona y cuenta con una trayectoria de más de medio siglo en la defensa penal, especializado en casos de narcotráfico y delitos contra la salud pública en toda España.",
      "Además de su carrera jurídica, Tomás ha tenido una destacada trayectoria política, habiendo sido diplomático en la Generalitat de Catalunya.",
      "Ha defendido varios casos de éxito en narcotráfico muy mediáticos en España, incluyendo operaciones internacionales de tráfico de drogas y extradiciones entre España, Marruecos y otros países.",
    ],
    credentials: [
      { icon: Globe, text: "Diplomático en la Generalitat de Catalunya" },
      { icon: Languages, text: "Atendemos en Castellano, Inglés, Francés y Ruso" },
      { icon: MapPin, text: "Defensa en toda España" },
      { icon: ShieldCheck, text: "Confidencialidad Absoluta" },
    ],
  },
  en: {
    label: "About Tomás",
    title: "Over 50 Years of Experience in Criminal Defense",
    bio: [
      "Tomás holds a Law degree from the University of Barcelona and has a track record of over half a century in criminal defense, specialized in drug trafficking and public health crime cases throughout Spain.",
      "In addition to his legal career, Tomás has had a distinguished political career, having served as a diplomat in the Generalitat de Catalunya.",
      "He has defended several high-profile successful drug trafficking cases in Spain, including international drug trafficking operations and extraditions between Spain, Morocco and other countries.",
    ],
    credentials: [
      { icon: Globe, text: "Diplomat at the Generalitat de Catalunya" },
      { icon: Languages, text: "We serve in Spanish, English, French and Russian" },
      { icon: MapPin, text: "Defense throughout Spain" },
      { icon: ShieldCheck, text: "Absolute Confidentiality" },
    ],
  },
  fr: {
    label: "À Propos de Tomás",
    title: "Plus de 50 Ans d'Expérience en Défense Pénale",
    bio: [
      "Tomás est diplômé en Droit de l'Université de Barcelone et possède une trajectoire de plus d'un demi-siècle en défense pénale, spécialisé dans les affaires de trafic de drogue et crimes contre la santé publique dans toute l'Espagne.",
      "En plus de sa carrière juridique, Tomás a eu une carrière politique distinguée, ayant été diplomate à la Generalitat de Catalunya.",
      "Il a défendu plusieurs affaires de trafic de drogue très médiatisées avec succès en Espagne, y compris des opérations internationales et des extraditions entre l'Espagne, le Maroc et d'autres pays.",
    ],
    credentials: [
      { icon: Globe, text: "Diplomate à la Generalitat de Catalunya" },
      { icon: Languages, text: "Nous servons en Espagnol, Anglais, Français et Russe" },
      { icon: MapPin, text: "Défense dans toute l'Espagne" },
      { icon: ShieldCheck, text: "Confidentialité Absolue" },
    ],
  },
  ar: {
    label: "عن توماس",
    title: "أكثر من 50 عامًا من الخبرة في الدفاع الجنائي",
    bio: [
      "توماس حاصل على شهادة في القانون من جامعة برشلونة ويتمتع بسجل حافل يمتد لأكثر من نصف قرن في الدفاع الجنائي، متخصص في قضايا تهريب المخدرات والجرائم ضد الصحة العامة في جميع أنحاء إسبانيا.",
      "بالإضافة إلى مسيرته القانونية، كان لتوماس مسيرة سياسية متميزة، حيث عمل دبلوماسيًا في حكومة كاتالونيا.",
      "دافع عن عدة قضايا ناجحة في تهريب المخدرات ذات تغطية إعلامية كبيرة في إسبانيا، بما في ذلك عمليات دولية والتسليم بين إسبانيا والمغرب ودول أخرى.",
    ],
    credentials: [
      { icon: Globe, text: "دبلوماسي في حكومة كاتالونيا" },
      { icon: Languages, text: "نخدم بالإسبانية والإنجليزية والفرنسية والروسية" },
      { icon: MapPin, text: "الدفاع في جميع أنحاء إسبانيا" },
      { icon: ShieldCheck, text: "سرية مطلقة" },
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
