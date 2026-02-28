"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { type Locale, getTranslations, isRTL } from "@/lib/i18n"

interface FaqSectionProps {
  locale: Locale
}

const faqs = {
  es: [
    { q: "¿Cuánto cuesta la primera consulta?", a: "La primera consulta es gratuita y confidencial. Evaluamos tu caso sin compromiso y te explicamos las opciones de defensa disponibles." },
    { q: "¿Qué hago si me detienen por narcotráfico?", a: "No declares nada sin abogado presente. Tienes derecho a guardar silencio. Llámanos inmediatamente al número de urgencias 24h. Acudiremos a comisaría lo antes posible." },
    { q: "¿Trabajáis casos internacionales?", a: "Sí, tenemos amplia experiencia en casos transfronterizos, especialmente España-Marruecos, extradiciones y cooperación judicial internacional." },
    { q: "¿Cuánto puede durar un caso de narcotráfico?", a: "Depende de la complejidad. Casos simples pueden resolverse en 6-12 meses. Casos con organización criminal o internacionales pueden durar 2-4 años." },
    { q: "¿Qué penas se enfrentan por tráfico de drogas?", a: "Las penas varían según cantidad, tipo de sustancia y circunstancias. Pueden ir desde 3 años hasta más de 20 en casos graves. Una buena defensa puede reducir significativamente la condena." },
    { q: "¿Ofrecéis servicios en otros idiomas?", a: "Sí, atendemos en español, inglés, francés y árabe. Tenemos experiencia con clientes de diversas nacionalidades." },
  ],
  en: [
    { q: "How much does the first consultation cost?", a: "The first consultation is free and confidential. We evaluate your case without commitment and explain the available defense options." },
    { q: "What should I do if I'm arrested for drug trafficking?", a: "Don't make any statements without a lawyer present. You have the right to remain silent. Call us immediately on our 24h emergency number. We'll come to the police station as soon as possible." },
    { q: "Do you handle international cases?", a: "Yes, we have extensive experience in cross-border cases, especially Spain-Morocco, extraditions and international judicial cooperation." },
    { q: "How long can a drug trafficking case last?", a: "It depends on complexity. Simple cases can be resolved in 6-12 months. Cases involving criminal organizations or international elements can take 2-4 years." },
    { q: "What sentences are faced for drug trafficking?", a: "Sentences vary according to quantity, type of substance and circumstances. They can range from 3 years to more than 20 in serious cases. A good defense can significantly reduce the sentence." },
    { q: "Do you offer services in other languages?", a: "Yes, we serve clients in Spanish, English, French and Arabic. We have experience with clients of various nationalities." },
  ],
  fr: [
    { q: "Combien coûte la première consultation?", a: "La première consultation est gratuite et confidentielle. Nous évaluons votre affaire sans engagement et vous expliquons les options de défense disponibles." },
    { q: "Que faire si je suis arrêté pour trafic de drogue?", a: "Ne faites aucune déclaration sans avocat présent. Vous avez le droit de garder le silence. Appelez-nous immédiatement sur notre numéro d'urgence 24h. Nous viendrons au commissariat dès que possible." },
    { q: "Traitez-vous des affaires internationales?", a: "Oui, nous avons une vaste expérience dans les affaires transfrontalières, notamment Espagne-Maroc, les extraditions et la coopération judiciaire internationale." },
    { q: "Combien de temps peut durer une affaire de trafic de drogue?", a: "Cela dépend de la complexité. Les affaires simples peuvent être résolues en 6-12 mois. Les affaires impliquant des organisations criminelles ou internationales peuvent prendre 2-4 ans." },
    { q: "Quelles peines encourt-on pour trafic de drogue?", a: "Les peines varient selon la quantité, le type de substance et les circonstances. Elles peuvent aller de 3 ans à plus de 20 dans les cas graves. Une bonne défense peut réduire significativement la peine." },
    { q: "Offrez-vous des services dans d'autres langues?", a: "Oui, nous servons nos clients en espagnol, anglais, français et arabe. Nous avons l'expérience de clients de diverses nationalités." },
  ],
  ar: [
    { q: "كم تكلفة الاستشارة الأولى؟", a: "الاستشارة الأولى مجانية وسرية. نقيم قضيتك دون التزام ونشرح لك خيارات الدفاع المتاحة." },
    { q: "ماذا أفعل إذا تم اعتقالي بتهمة تهريب المخدرات؟", a: "لا تدلي بأي تصريحات بدون محامي. لديك الحق في الصمت. اتصل بنا فوراً على رقم الطوارئ 24 ساعة. سنحضر إلى مركز الشرطة في أقرب وقت ممكن." },
    { q: "هل تتعاملون مع القضايا الدولية؟", a: "نعم، لدينا خبرة واسعة في القضايا العابرة للحدود، خاصة إسبانيا-المغرب، والتسليم والتعاون القضائي الدولي." },
    { q: "كم يمكن أن تستمر قضية تهريب المخدرات؟", a: "يعتمد على التعقيد. القضايا البسيطة يمكن حلها في 6-12 شهراً. القضايا التي تشمل منظمات إجرامية أو دولية قد تستغرق 2-4 سنوات." },
    { q: "ما العقوبات المواجهة في تهريب المخدرات؟", a: "تختلف العقوبات حسب الكمية ونوع المادة والظروف. يمكن أن تتراوح من 3 سنوات إلى أكثر من 20 في الحالات الخطيرة. الدفاع الجيد يمكن أن يقلل الحكم بشكل كبير." },
    { q: "هل تقدمون خدمات بلغات أخرى؟", a: "نعم، نخدم العملاء بالإسبانية والإنجليزية والفرنسية والعربية. لدينا خبرة مع عملاء من جنسيات مختلفة." },
  ],
}

export function FaqSection({ locale }: FaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = getTranslations(locale)
  const rtl = isRTL(locale)
  const localeFaqs = faqs[locale] || faqs.es

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-32" dir={rtl ? "rtl" : "ltr"}>
      <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{t.faq.label}</p>
      <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground mb-12">
        {t.faq.title}
      </h2>
      <div className="border-t border-border">
        {localeFaqs.map((faq, i) => (
          <div key={i} className="border-b border-border">
            <button 
              onClick={() => setOpenFaq(openFaq === i ? null : i)} 
              className={`w-full flex items-start justify-between gap-6 py-5 text-left group ${rtl ? "flex-row-reverse text-right" : ""}`}
            >
              <h3 className="text-xs sm:text-sm font-sans font-medium text-foreground leading-relaxed group-hover:text-primary transition-colors">{faq.q}</h3>
              <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
            </button>
            {openFaq === i && (
              <div className="pb-5 -mt-1">
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
