"use client"

import { useState } from "react"
import { Star, CheckCircle, ChevronDown } from "lucide-react"
import { type Locale, getTranslations, isRTL } from "@/lib/i18n"

interface ReviewsSectionProps {
  locale: Locale
}

const reviews = {
  es: [
    { name: "Mohamed A.", city: "Algeciras", rating: 5, text: "Me detuvieron en el puerto con un cargamento. Mi abogado consiguió demostrar irregularidades en el registro y los cargos se redujeron significativamente. Profesional y discreto.", date: "Enero 2025" },
    { name: "Carlos R.", city: "Madrid", rating: 5, text: "Caso de blanqueo de capitales muy complejo. El equipo trabajó durante meses. Absolución total. No tengo palabras para agradecer su trabajo.", date: "Diciembre 2024" },
    { name: "Ahmed B.", city: "Málaga", rating: 5, text: "Mi hermano fue acusado de tráfico internacional. El abogado viajó a Marruecos para coordinar la defensa. Resultado mucho mejor de lo esperado.", date: "Noviembre 2024" },
    { name: "Francisco J.", city: "Sevilla", rating: 5, text: "Llevaba 2 años en prisión preventiva. Consiguieron mi libertad provisional y después una sentencia muy reducida. Excelente servicio.", date: "Octubre 2024" },
    { name: "Rachid M.", city: "Ceuta", rating: 4, text: "Caso difícil con pruebas contundentes. Negociaron un acuerdo que evitó una condena mucho mayor. Siempre disponibles, incluso de madrugada.", date: "Septiembre 2024" },
    { name: "Antonio L.", city: "Barcelona", rating: 5, text: "Extradición desde Francia. Coordinaron abogados en ambos países. Proceso largo pero con final favorable. Muy recomendable.", date: "Agosto 2024" },
  ],
  en: [
    { name: "Mohamed A.", city: "Algeciras", rating: 5, text: "I was detained at the port with a shipment. My lawyer managed to prove irregularities in the search and charges were significantly reduced. Professional and discreet.", date: "January 2025" },
    { name: "Carlos R.", city: "Madrid", rating: 5, text: "Very complex money laundering case. The team worked for months. Total acquittal. I have no words to thank them for their work.", date: "December 2024" },
    { name: "Ahmed B.", city: "Málaga", rating: 5, text: "My brother was accused of international trafficking. The lawyer traveled to Morocco to coordinate the defense. Result much better than expected.", date: "November 2024" },
    { name: "Francisco J.", city: "Sevilla", rating: 5, text: "I spent 2 years in pretrial detention. They got my provisional release and then a greatly reduced sentence. Excellent service.", date: "October 2024" },
    { name: "Rachid M.", city: "Ceuta", rating: 4, text: "Difficult case with strong evidence. They negotiated an agreement that avoided a much larger sentence. Always available, even at dawn.", date: "September 2024" },
    { name: "Antonio L.", city: "Barcelona", rating: 5, text: "Extradition from France. They coordinated lawyers in both countries. Long process but with favorable outcome. Highly recommended.", date: "August 2024" },
  ],
  fr: [
    { name: "Mohamed A.", city: "Algeciras", rating: 5, text: "J'ai été arrêté au port avec une cargaison. Mon avocat a réussi à prouver des irrégularités dans la perquisition et les charges ont été considérablement réduites. Professionnel et discret.", date: "Janvier 2025" },
    { name: "Carlos R.", city: "Madrid", rating: 5, text: "Affaire de blanchiment d'argent très complexe. L'équipe a travaillé pendant des mois. Acquittement total. Je n'ai pas de mots pour les remercier.", date: "Décembre 2024" },
    { name: "Ahmed B.", city: "Málaga", rating: 5, text: "Mon frère a été accusé de trafic international. L'avocat s'est rendu au Maroc pour coordonner la défense. Résultat bien meilleur que prévu.", date: "Novembre 2024" },
    { name: "Francisco J.", city: "Sevilla", rating: 5, text: "J'ai passé 2 ans en détention provisoire. Ils ont obtenu ma libération provisoire puis une peine très réduite. Excellent service.", date: "Octobre 2024" },
    { name: "Rachid M.", city: "Ceuta", rating: 4, text: "Affaire difficile avec des preuves solides. Ils ont négocié un accord qui a évité une condamnation beaucoup plus lourde. Toujours disponibles.", date: "Septembre 2024" },
    { name: "Antonio L.", city: "Barcelona", rating: 5, text: "Extradition depuis la France. Ils ont coordonné des avocats dans les deux pays. Processus long mais avec une issue favorable. Très recommandé.", date: "Août 2024" },
  ],
  ar: [
    { name: "محمد أ.", city: "الجزيرة الخضراء", rating: 5, text: "تم احتجازي في الميناء مع شحنة. تمكن محاميي من إثبات مخالفات في التفتيش وتم تخفيض التهم بشكل كبير. محترف وسري.", date: "يناير 2025" },
    { name: "كارلوس ر.", city: "مدريد", rating: 5, text: "قضية غسيل أموال معقدة للغاية. عمل الفريق لأشهر. براءة تامة. لا أجد كلمات لشكرهم على عملهم.", date: "ديسمبر 2024" },
    { name: "أحمد ب.", city: "ملقة", rating: 5, text: "اتُهم أخي بالتهريب الدولي. سافر المحامي إلى المغرب لتنسيق الدفاع. النتيجة أفضل بكثير مما كان متوقعاً.", date: "نوفمبر 2024" },
    { name: "فرانسيسكو ج.", city: "إشبيلية", rating: 5, text: "قضيت عامين في الحبس الاحتياطي. حصلوا على إطلاق سراحي المؤقت ثم حكم مخفف جداً. خدمة ممتازة.", date: "أكتوبر 2024" },
    { name: "رشيد م.", city: "سبتة", rating: 4, text: "قضية صعبة مع أدلة قوية. تفاوضوا على اتفاق تجنب حكماً أكبر بكثير. متاحون دائماً حتى في الفجر.", date: "سبتمبر 2024" },
    { name: "أنطونيو ل.", city: "برشلونة", rating: 5, text: "تسليم من فرنسا. نسقوا المحامين في كلا البلدين. عملية طويلة لكن بنتيجة إيجابية. موصى بهم بشدة.", date: "أغسطس 2024" },
  ],
}

export function ReviewsSection({ locale }: ReviewsSectionProps) {
  const [visibleReviews, setVisibleReviews] = useState(3)
  const t = getTranslations(locale)
  const rtl = isRTL(locale)
  const localeReviews = reviews[locale] || reviews.es
  const avgRating = (localeReviews.reduce((acc, r) => acc + r.rating, 0) / localeReviews.length).toFixed(1)

  return (
    <section id="opiniones" className="bg-secondary" dir={rtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 ${rtl ? "sm:flex-row-reverse" : ""}`}>
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{t.reviews.label}</p>
            <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground">
              {t.reviews.title}
            </h2>
          </div>
          <div className={`flex items-center gap-2 ${rtl ? "flex-row-reverse" : ""}`}>
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-primary" />)}
            <span className="text-sm font-sans font-medium">{avgRating}/5</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {localeReviews.slice(0, visibleReviews).map((r, i) => (
            <article key={i} className="bg-card p-8 flex flex-col justify-between border border-border">
              <p className="text-xs text-foreground/80 font-sans leading-relaxed">{r.text}</p>
              <div className={`mt-6 pt-4 border-t border-border flex items-center justify-between ${rtl ? "flex-row-reverse" : ""}`}>
                <div>
                  <p className="text-xs font-medium font-sans">{r.name}</p>
                  <p className="text-[10px] text-muted-foreground font-sans">{r.city} · {r.date}</p>
                </div>
                <span className={`flex items-center gap-1 text-[10px] text-primary font-sans ${rtl ? "flex-row-reverse" : ""}`}>
                  <CheckCircle className="w-3 h-3" /> {t.reviews.verified}
                </span>
              </div>
            </article>
          ))}
        </div>

        {visibleReviews < localeReviews.length && (
          <button onClick={() => setVisibleReviews(localeReviews.length)} className="mt-8 flex items-center gap-2 text-xs font-sans font-medium text-foreground hover:text-primary transition-colors mx-auto">
            {locale === "ar" ? "عرض المزيد" : locale === "fr" ? "Voir plus" : locale === "en" ? "See more" : "Ver más"} <ChevronDown className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </section>
  )
}
