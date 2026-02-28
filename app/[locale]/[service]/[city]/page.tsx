import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { locales, type Locale, getTranslations, isRTL } from "@/lib/i18n"
import { VALID_SERVICES, CITIES, SERVICE_NAMES_I18N, SERVICE_SLUGS_I18N, getCanonicalService, getLocalizedSlug, type Service } from "@/lib/sitemap-data"
import { Phone, Shield, Clock, Scale, Users, Star, CheckCircle, ChevronDown, ArrowRight, Award, Newspaper, ExternalLink } from "lucide-react"
import Image from "next/image"

const PHONE_URL = "tel:+34600000000"

interface PageProps {
  params: Promise<{ locale: string; service: string; city: string }>
}

function getCityDisplayName(slug: string): string {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}

export async function generateStaticParams() {
  const params: { locale: string; service: string; city: string }[] = []
  for (const locale of locales) {
    for (const service of VALID_SERVICES) {
      const localizedSlug = getLocalizedSlug(service, locale)
      for (const city of CITIES.slice(0, 50)) {
        params.push({ locale, service: localizedSlug, city })
      }
    }
  }
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, service: serviceSlug, city } = await params
  const validLocale = (locales.includes(locale as Locale) ? locale : "es") as Locale
  
  const canonicalService = getCanonicalService(serviceSlug)
  if (!canonicalService) {
    return { title: "Not Found" }
  }

  const serviceNames = SERVICE_NAMES_I18N[validLocale] || SERVICE_NAMES_I18N.es
  const serviceName = serviceNames[canonicalService]
  const cityName = getCityDisplayName(city)

  const title = `${serviceName.title} en ${cityName} | Elite Penal - Tomás Gilabert`
  const description = `${serviceName.title} en ${cityName}. Tomás Gilabert, abogado penalista con Distinción Honorífica y 50 años de experiencia. Consulta gratuita 24h.`

  return {
    title,
    description,
    alternates: { canonical: `https://elitepenal.com/${locale}/${serviceSlug}/${city}/` },
    openGraph: { title, description, type: "website", siteName: "Elite Penal" },
  }
}

export default async function ServiceCityPage({ params }: PageProps) {
  const { locale, service: serviceSlug, city } = await params
  
  if (!locales.includes(locale as Locale)) notFound()
  
  const canonicalService = getCanonicalService(serviceSlug)
  if (!canonicalService) notFound()

  const validLocale = locale as Locale
  const t = getTranslations(validLocale)
  const rtl = isRTL(validLocale)
  const serviceNames = SERVICE_NAMES_I18N[validLocale] || SERVICE_NAMES_I18N.es
  const serviceName = serviceNames[canonicalService]
  const cityName = getCityDisplayName(city)
  const pageTitle = `${serviceName.title} en ${cityName}`

  const cityIndex = CITIES.indexOf(city)
  const nearbyCities = CITIES.slice(Math.max(0, cityIndex - 5), Math.min(CITIES.length, cityIndex + 6)).filter(c => c !== city).slice(0, 5)
  const relatedServices = VALID_SERVICES.filter(s => s !== canonicalService).slice(0, 4)

  const seed = hashCode(`${city}-${canonicalService}`)
  const reviews = generateReviews(cityName, validLocale, seed)
  const faqs = generateFAQs(cityName, serviceName, validLocale)
  const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <>
      <Navbar locale={validLocale} />
      <main>
        {/* Hero */}
        <section className="relative bg-card border-b border-border" dir={rtl ? "rtl" : "ltr"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <nav className={`text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-8 font-sans flex items-center gap-2 ${rtl ? "flex-row-reverse" : ""}`}>
                  <Link href={`/${validLocale}/`} className="hover:text-primary transition-colors">{t.cityPage.breadcrumbHome}</Link>
                  <span>/</span>
                  <Link href={`/${validLocale}/${serviceSlug}/`} className="hover:text-primary transition-colors">{serviceName.name}</Link>
                  <span>/</span>
                  <span className="text-primary">{cityName}</span>
                </nav>

                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[0.95]">
                  {pageTitle}
                </h1>

                <p className="text-sm sm:text-base text-muted-foreground mt-8 max-w-xl font-sans leading-relaxed">
                  {validLocale === "ar" ? `محامي ${serviceName.singular} في ${cityName}. استشارة سرية ومجانية. متاح 24 ساعة.` :
                   validLocale === "fr" ? `${serviceName.singular} à ${cityName}. Consultation confidentielle et gratuite. Disponible 24h.` :
                   validLocale === "en" ? `${serviceName.singular} in ${cityName}. Free and confidential consultation. Available 24h.` :
                   `${serviceName.singular} en ${cityName}. Consulta confidencial y gratuita. Disponible 24h.`}
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex flex-col gap-3">
                  <a
                    href={PHONE_URL}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity"
                  >
                    <Phone className="w-4 h-4" />
                    {t.cityPage.freeQuote}
                  </a>
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 text-sm font-sans hover:border-primary/50 transition-colors"
                  >
                    {t.cityPage.howItWorks}
                  </a>
                </div>

                <div className={`flex items-center gap-4 mt-6 text-xs text-muted-foreground font-sans ${rtl ? "flex-row-reverse" : ""}`}>
                  <div className={`flex items-center gap-1 ${rtl ? "flex-row-reverse" : ""}`}>
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-primary" />)}
                    <span className="ml-1 text-primary font-medium">{avgRating}</span>
                  </div>
                  <span>|</span>
                  <span>{reviews.length}+ {validLocale === "ar" ? "تقييمات" : validLocale === "fr" ? "avis" : validLocale === "en" ? "reviews" : "opiniones"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, label: t.cityPage.certified },
                { icon: Clock, label: t.cityPage.experience },
                { icon: Scale, label: t.cityPage.confidential },
                { icon: Users, label: t.cityPage.urgent },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className={`flex items-center gap-3 ${rtl ? "flex-row-reverse" : ""}`}>
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-xs font-sans text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Tomás */}
        <section className="bg-secondary" dir={rtl ? "rtl" : "ltr"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className={`lg:col-span-3 ${rtl ? "lg:order-2" : ""}`}>
                <div className="relative aspect-square overflow-hidden max-w-[200px] mx-auto lg:mx-0">
                  <Image
                    src="/WhatsApp Image 2026-02-24 at 14.38.04.jpeg"
                    alt="Tomás Gilabert - Abogado Penalista"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>
              <div className={`lg:col-span-8 ${rtl ? "lg:order-1 lg:col-start-1" : "lg:col-start-5"}`}>
                <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-2 font-sans">
                  {validLocale === "ar" ? "محاميك" : validLocale === "fr" ? "Votre Avocat" : validLocale === "en" ? "Your Lawyer" : "Tu Abogado"}
                </p>
                <h2 className="font-serif text-xl sm:text-2xl tracking-tight text-foreground mb-4">
                  Tomás Gilabert
                </h2>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">
                  {validLocale === "ar" 
                    ? `أكثر من 50 عامًا من الخبرة في الدفاع الجنائي. وسام شرفي للممارسة المثالية للمحاماة. متخصص في ${serviceName.singular}.`
                    : validLocale === "fr" 
                    ? `Plus de 50 ans d'expérience en défense pénale. Distinction Honorifique pour Exercice Exemplaire. Spécialisé en ${serviceName.singular}.`
                    : validLocale === "en"
                    ? `Over 50 years of experience in criminal defense. Honorary Distinction for Exemplary Practice. Specialized in ${serviceName.singular}.`
                    : `Más de 50 años de experiencia en defensa penal. Distinción Honorífica por Ejercicio Ejemplar de la Abogacía. Especializado en ${serviceName.singular}.`}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className={`flex items-center gap-2 ${rtl ? "flex-row-reverse" : ""}`}>
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-sans text-foreground">{validLocale === "ar" ? "وسام شرفي" : validLocale === "fr" ? "Distinction Honorifique" : validLocale === "en" ? "Honorary Distinction" : "Distinción Honorífica"}</span>
                  </div>
                  <div className={`flex items-center gap-2 ${rtl ? "flex-row-reverse" : ""}`}>
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-sans text-foreground">+50 {validLocale === "ar" ? "عامًا" : validLocale === "fr" ? "ans" : validLocale === "en" ? "years" : "años"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press */}
        <section className="border-b border-border" dir={rtl ? "rtl" : "ltr"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-4 font-sans">
              {validLocale === "ar" ? "الصحافة" : validLocale === "fr" ? "Presse" : validLocale === "en" ? "Press" : "Prensa"}
            </p>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { source: "La Vanguardia", year: "2017", url: "https://www.lavanguardia.com/politica/20170908/431128677120/guardia-civil-entra-imprenta-constanti.html" },
                { source: "Diari Més", year: "2024", url: "https://www.diarimes.com/es/camp-tarragona/tarragones/240209/absueltos-dos-policias-locales-vila-seca-acusados-haber-torturado-e-intentado-asesinar-hombre-2013_140345.html" },
                { source: "Diari de Tarragona", year: "2023", url: "https://www.diaridetarragona.com/sucesos/230603/se-enfrenta-a-una-peticion-de-hasta-18-anos-de-prision-por-intentar-matar-a-su-pareja-en-tarragona-en-mayo-de-2023-da24175402.html" },
              ].map((article, i) => (
                <a key={i} href={article.url} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 bg-card border border-border hover:border-primary/50 transition-colors group ${rtl ? "flex-row-reverse" : ""}`}>
                  <Newspaper className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xs font-sans text-foreground flex-1">{article.source} ({article.year})</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32" dir={rtl ? "rtl" : "ltr"}>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{t.process.label}</p>
              <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground leading-[1.1]">
                {t.process.title}
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-0">
              {[t.process.step1, t.process.step2, t.process.step3].map((step, i) => (
                <div key={i} className={`flex gap-8 py-8 ${i < 2 ? "border-b border-border" : ""} ${rtl ? "flex-row-reverse" : ""}`}>
                  <span className="font-serif text-4xl lg:text-5xl text-primary/20 flex-shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="text-sm font-sans font-medium text-foreground">{step.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2 font-sans leading-relaxed max-w-md">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-secondary" dir={rtl ? "rtl" : "ltr"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
            <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16 ${rtl ? "sm:flex-row-reverse" : ""}`}>
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{t.reviews.label}</p>
                <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground">
                  {validLocale === "ar" ? `عملاء من ${cityName}` : validLocale === "fr" ? `Clients de ${cityName}` : validLocale === "en" ? `Clients from ${cityName}` : `Clientes de ${cityName}`}
                </h2>
              </div>
              <div className={`flex items-center gap-2 ${rtl ? "flex-row-reverse" : ""}`}>
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current text-primary" />)}
                <span className="text-sm font-sans font-medium">{avgRating}/5</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3">
              {reviews.slice(0, 3).map((r, i) => (
                <article key={i} className="bg-card p-8 flex flex-col justify-between border border-border">
                  <p className="text-xs text-foreground/80 font-sans leading-relaxed">{r.text}</p>
                  <div className={`mt-6 pt-4 border-t border-border flex items-center justify-between ${rtl ? "flex-row-reverse" : ""}`}>
                    <div>
                      <p className="text-xs font-medium font-sans">{r.name}</p>
                      <p className="text-[10px] text-muted-foreground font-sans">{cityName} · {r.date}</p>
                    </div>
                    <span className={`flex items-center gap-1 text-[10px] text-primary font-sans ${rtl ? "flex-row-reverse" : ""}`}>
                      <CheckCircle className="w-3 h-3" /> {t.reviews.verified}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="bg-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl tracking-tight text-primary-foreground leading-[1.05]">
              {t.cta.title}
            </h2>
            <a href={PHONE_URL} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 mt-10 text-sm font-sans font-medium hover:opacity-90 transition-opacity">
              <Phone className="w-4 h-4" /> {t.cta.button}
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-32" dir={rtl ? "rtl" : "ltr"}>
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{t.faq.label}</p>
          <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground mb-12">
            {t.faq.title}
          </h2>
          <div className="border-t border-border">
            {faqs.map((faq, i) => (
              <details key={i} className="border-b border-border group">
                <summary className={`w-full flex items-start justify-between gap-6 py-5 cursor-pointer list-none ${rtl ? "flex-row-reverse text-right" : ""}`}>
                  <h3 className="text-xs sm:text-sm font-sans font-medium text-foreground leading-relaxed group-hover:text-primary transition-colors">{faq.q}</h3>
                  <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="pb-5 -mt-1">
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* SEO content */}
        <section className="bg-secondary" dir={rtl ? "rtl" : "ltr"}>
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{t.cityPage.guideLabel}</p>
            <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground mb-8">
              {validLocale === "ar" ? `دليل ${serviceName.singular} في ${cityName}` :
               validLocale === "fr" ? `Guide ${serviceName.singular} à ${cityName}` :
               validLocale === "en" ? `${serviceName.singular} Guide in ${cityName}` :
               `Guía de ${serviceName.singular} en ${cityName}`}
            </h2>
            <div className="prose-sm font-sans text-muted-foreground space-y-4 leading-relaxed text-xs sm:text-sm">
              <p>
                {validLocale === "es" && `Si te enfrentas a cargos relacionados con narcotráfico en ${cityName}, contar con un abogado especializado es fundamental. Tomás Gilabert tiene más de 20 años de experiencia defendiendo casos de drogas en toda España, incluyendo ${cityName} y alrededores.`}
                {validLocale === "en" && `If you are facing drug trafficking charges in ${cityName}, having a specialized lawyer is essential. Tomás Gilabert has over 20 years of experience defending drug cases throughout Spain, including ${cityName} and surrounding areas.`}
                {validLocale === "fr" && `Si vous faites face à des accusations de trafic de drogue à ${cityName}, avoir un avocat spécialisé est essentiel. Tomás Gilabert a plus de 20 ans d'expérience dans la défense d'affaires de drogue dans toute l'Espagne, y compris ${cityName} et ses environs.`}
                {validLocale === "ar" && `إذا كنت تواجه تهماً تتعلق بتهريب المخدرات في ${cityName}، فإن وجود محامٍ متخصص أمر ضروري. يتمتع توماس جيلابرت بأكثر من 20 عامًا من الخبرة في الدفاع عن قضايا المخدرات في جميع أنحاء إسبانيا، بما في ذلك ${cityName} والمناطق المحيطة بها.`}
              </p>
              <h3 className="text-foreground font-medium text-sm pt-4">
                {validLocale === "ar" ? "لماذا تختارنا" : validLocale === "fr" ? "Pourquoi nous choisir" : validLocale === "en" ? "Why choose us" : "Por qué elegirnos"}
              </h3>
              <p>
                {validLocale === "es" && `Ofrecemos consulta inicial gratuita, disponibilidad 24 horas para urgencias, y total confidencialidad. Conocemos los juzgados de ${cityName} y tenemos experiencia con casos locales e internacionales.`}
                {validLocale === "en" && `We offer free initial consultation, 24-hour availability for emergencies, and total confidentiality. We know the courts in ${cityName} and have experience with local and international cases.`}
                {validLocale === "fr" && `Nous offrons une consultation initiale gratuite, une disponibilité 24h pour les urgences, et une confidentialité totale. Nous connaissons les tribunaux de ${cityName} et avons de l'expérience avec des affaires locales et internationales.`}
                {validLocale === "ar" && `نقدم استشارة أولية مجانية، وتوافر على مدار 24 ساعة للطوارئ، وسرية تامة. نعرف محاكم ${cityName} ولدينا خبرة في القضايا المحلية والدولية.`}
              </p>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32" dir={rtl ? "rtl" : "ltr"}>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{t.cityPage.nearbyTitle}</p>
              <h3 className="font-serif text-xl tracking-tight text-foreground mb-6">
                {serviceName.title}
              </h3>
              <nav><ul className="space-y-0">
                {nearbyCities.map(c => (
                  <li key={c}>
                    <Link href={`/${validLocale}/${serviceSlug}/${c}/`} className={`flex items-center justify-between py-3 border-b border-border/50 group ${rtl ? "flex-row-reverse" : ""}`}>
                      <span className="text-xs font-sans text-foreground group-hover:text-primary transition-colors">{`${serviceName.title} en ${getCityDisplayName(c)}`}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul></nav>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{t.cityPage.relatedTitle}</p>
              <h3 className="font-serif text-xl tracking-tight text-foreground mb-6">{cityName}</h3>
              <nav><ul className="space-y-0">
                {relatedServices.map(svc => (
                  <li key={svc}>
                    <Link href={`/${validLocale}/${getLocalizedSlug(svc, validLocale)}/${city}/`} className={`flex items-center justify-between py-3 border-b border-border/50 group ${rtl ? "flex-row-reverse" : ""}`}>
                      <span className="text-xs font-sans text-foreground group-hover:text-primary transition-colors">{`${serviceNames[svc as Service]?.title || svc} en ${cityName}`}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul></nav>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary-foreground/40 mb-4 font-sans">
              {validLocale === "ar" ? "اتخذ الخطوة الأولى" : validLocale === "fr" ? "Faites le premier pas" : validLocale === "en" ? "Take the first step" : "Da el primer paso"}
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl tracking-tight text-primary-foreground">{t.cta.title}</h2>
            <div className={`flex flex-col sm:flex-row gap-3 justify-center mt-10 ${rtl ? "sm:flex-row-reverse" : ""}`}>
              <a href={PHONE_URL} className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4" /> {t.cta.button}
              </a>
              <Link href={`/${validLocale}/`} className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-sans hover:bg-primary-foreground/10 transition-colors">
                {validLocale === "ar" ? "عرض الخدمات" : validLocale === "fr" ? "Voir les services" : validLocale === "en" ? "View services" : "Ver servicios"}
              </Link>
            </div>
          </div>
        </section>

        {/* Schema.org */}
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "LegalService",
          name: `Elite Penal - ${pageTitle}`,
          description: `${serviceName.title} en ${cityName}. Tomás Gilabert, abogado penalista. 50 años de experiencia.`,
          url: `https://elitepenal.com/${validLocale}/${serviceSlug}/${city}/`,
          address: { "@type": "PostalAddress", addressLocality: cityName, addressRegion: "España", addressCountry: "ES" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: avgRating, reviewCount: reviews.length, bestRating: "5", worstRating: "1" },
        })}} />
      </main>
      <Footer locale={validLocale} />
    </>
  )
}

function generateReviews(cityName: string, locale: Locale, seed: number) {
  const names = {
    es: ["María L.", "Carlos G.", "Ahmed R.", "Javier M.", "Elena S.", "Mohamed P."],
    en: ["Maria L.", "Carlos G.", "Ahmed R.", "Javier M.", "Elena S.", "Mohamed P."],
    fr: ["Marie L.", "Charles G.", "Ahmed R.", "Xavier M.", "Hélène S.", "Mohamed P."],
    ar: ["ماريا ل.", "كارلوس ج.", "أحمد ر.", "خافيير م.", "إيلينا س.", "محمد ب."],
  }

  const templates = {
    es: [
      `Me detuvieron en ${cityName} y mi abogado llegó en menos de 2 horas. Consiguió mi libertad provisional y después una sentencia muy reducida. Profesional y discreto.`,
      `Caso muy complicado de tráfico internacional. Coordinaron la defensa entre España y Marruecos. Resultado mucho mejor de lo esperado.`,
      `Llevaba meses en prisión preventiva. Revisaron mi caso y encontraron irregularidades en el procedimiento. Ahora estoy libre.`,
    ],
    en: [
      `I was detained in ${cityName} and my lawyer arrived in less than 2 hours. They got my provisional release and then a greatly reduced sentence. Professional and discreet.`,
      `Very complicated international trafficking case. They coordinated the defense between Spain and Morocco. Result much better than expected.`,
      `I had been in pretrial detention for months. They reviewed my case and found procedural irregularities. Now I'm free.`,
    ],
    fr: [
      `J'ai été arrêté à ${cityName} et mon avocat est arrivé en moins de 2 heures. Il a obtenu ma libération provisoire puis une peine très réduite. Professionnel et discret.`,
      `Affaire de trafic international très compliquée. Ils ont coordonné la défense entre l'Espagne et le Maroc. Résultat bien meilleur que prévu.`,
      `J'étais en détention provisoire depuis des mois. Ils ont examiné mon dossier et trouvé des irrégularités de procédure. Maintenant je suis libre.`,
    ],
    ar: [
      `تم احتجازي في ${cityName} ووصل محاميي في أقل من ساعتين. حصلوا على إطلاق سراحي المؤقت ثم حكم مخفف جداً. محترفون وسريون.`,
      `قضية تهريب دولي معقدة جداً. نسقوا الدفاع بين إسبانيا والمغرب. النتيجة أفضل بكثير مما كان متوقعاً.`,
      `كنت في الحبس الاحتياطي لأشهر. راجعوا قضيتي ووجدوا مخالفات إجرائية. الآن أنا حر.`,
    ],
  }

  const dates = {
    es: ["Enero 2025", "Diciembre 2024", "Noviembre 2024"],
    en: ["January 2025", "December 2024", "November 2024"],
    fr: ["Janvier 2025", "Décembre 2024", "Novembre 2024"],
    ar: ["يناير 2025", "ديسمبر 2024", "نوفمبر 2024"],
  }

  return Array.from({ length: 3 }, (_, i) => ({
    name: names[locale][(seed + i) % names[locale].length],
    rating: 5,
    text: templates[locale][i % templates[locale].length],
    date: dates[locale][i],
  }))
}

function generateFAQs(cityName: string, serviceName: { title: string; singular: string }, locale: Locale) {
  const faqs = {
    es: [
      { q: `¿Cuánto cuesta la consulta inicial en ${cityName}?`, a: `La primera consulta es gratuita y confidencial. Evaluamos tu caso sin compromiso y te explicamos las opciones de defensa disponibles.` },
      { q: `¿Qué hago si me detienen por drogas en ${cityName}?`, a: `No declares nada sin abogado presente. Tienes derecho a guardar silencio. Llámanos inmediatamente. Acudiremos a comisaría lo antes posible.` },
      { q: `¿Cuánto puede durar mi caso?`, a: `Depende de la complejidad. Casos simples pueden resolverse en 6-12 meses. Casos con organización criminal pueden durar 2-4 años.` },
    ],
    en: [
      { q: `How much does the initial consultation cost in ${cityName}?`, a: `The first consultation is free and confidential. We evaluate your case without commitment and explain the available defense options.` },
      { q: `What should I do if I'm arrested for drugs in ${cityName}?`, a: `Don't make any statements without a lawyer present. You have the right to remain silent. Call us immediately. We'll come to the police station as soon as possible.` },
      { q: `How long can my case last?`, a: `It depends on complexity. Simple cases can be resolved in 6-12 months. Cases involving criminal organizations can take 2-4 years.` },
    ],
    fr: [
      { q: `Combien coûte la consultation initiale à ${cityName}?`, a: `La première consultation est gratuite et confidentielle. Nous évaluons votre affaire sans engagement et vous expliquons les options de défense disponibles.` },
      { q: `Que faire si je suis arrêté pour drogue à ${cityName}?`, a: `Ne faites aucune déclaration sans avocat présent. Vous avez le droit de garder le silence. Appelez-nous immédiatement. Nous viendrons au commissariat dès que possible.` },
      { q: `Combien de temps peut durer mon affaire?`, a: `Cela dépend de la complexité. Les affaires simples peuvent être résolues en 6-12 mois. Les affaires impliquant des organisations criminelles peuvent prendre 2-4 ans.` },
    ],
    ar: [
      { q: `كم تكلفة الاستشارة الأولى في ${cityName}؟`, a: `الاستشارة الأولى مجانية وسرية. نقيم قضيتك دون التزام ونشرح لك خيارات الدفاع المتاحة.` },
      { q: `ماذا أفعل إذا تم اعتقالي بتهمة المخدرات في ${cityName}؟`, a: `لا تدلي بأي تصريحات بدون محامي. لديك الحق في الصمت. اتصل بنا فوراً. سنحضر إلى مركز الشرطة في أقرب وقت ممكن.` },
      { q: `كم يمكن أن تستمر قضيتي؟`, a: `يعتمد على التعقيد. القضايا البسيطة يمكن حلها في 6-12 شهراً. القضايا التي تشمل منظمات إجرامية قد تستغرق 2-4 سنوات.` },
    ],
  }

  return faqs[locale] || faqs.es
}
