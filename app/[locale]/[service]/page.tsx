import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { locales, type Locale, getTranslations, isRTL } from "@/lib/i18n"
import { VALID_SERVICES, CITIES, SERVICE_NAMES_I18N, SERVICE_SLUGS_I18N, getCanonicalService, getLocalizedSlug, type Service } from "@/lib/sitemap-data"
import { Shield, Clock, Scale, Users, ArrowRight, Award, Newspaper, ExternalLink } from "lucide-react"
import Image from "next/image"

const SIGNAL_URL = "https://signal.me/#p/+34641021551"
const WHATSAPP_URL = "https://wa.me/34641021551?text=Hola%2C%20necesito%20consulta%20urgente"

interface PageProps {
  params: Promise<{ locale: string; service: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; service: string }[] = []
  for (const locale of locales) {
    for (const service of VALID_SERVICES) {
      const localizedSlug = getLocalizedSlug(service, locale)
      params.push({ locale, service: localizedSlug })
    }
  }
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, service: serviceSlug } = await params
  const validLocale = (locales.includes(locale as Locale) ? locale : "es") as Locale
  
  // Get canonical service from localized slug
  const canonicalService = getCanonicalService(serviceSlug)
  if (!canonicalService) {
    return { title: "Not Found" }
  }

  const serviceNames = SERVICE_NAMES_I18N[validLocale] || SERVICE_NAMES_I18N.es
  const serviceName = serviceNames[canonicalService]

  return {
    title: `${serviceName.title} | Elite Penal - Tomás Gilabert`,
    description: `${serviceName.title}. Tomás Gilabert, abogado penalista con Distinción Honorífica y 50 años de experiencia. Consulta gratuita 24h.`,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { locale, service: serviceSlug } = await params
  
  if (!locales.includes(locale as Locale)) notFound()
  
  // Get canonical service from localized slug
  const canonicalService = getCanonicalService(serviceSlug)
  if (!canonicalService) notFound()

  const validLocale = locale as Locale
  const t = getTranslations(validLocale)
  const rtl = isRTL(validLocale)
  const serviceNames = SERVICE_NAMES_I18N[validLocale] || SERVICE_NAMES_I18N.es
  const serviceName = serviceNames[canonicalService]

  const mainCities = CITIES.slice(0, 20)

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
                  <span className="text-primary">{serviceName.name}</span>
                </nav>

                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[0.95]">
                  {serviceName.title}
                </h1>

                <p className="text-sm sm:text-base text-muted-foreground mt-8 max-w-xl font-sans leading-relaxed">
                  {validLocale === "ar" ? "دفاع متخصص في جميع أنحاء إسبانيا. استشارة سرية ومجانية." :
                   validLocale === "fr" ? "Défense spécialisée dans toute l'Espagne. Consultation confidentielle et gratuite." :
                   validLocale === "en" ? "Specialized defense throughout Spain. Free and confidential consultation." :
                   "Defensa especializada en toda España. Consulta confidencial y gratuita."}
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex flex-col gap-3">
                  <a
                    href={SIGNAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity"
                  >
                    <Image src="/signal.jpeg" alt="Signal" width={16} height={16} className="w-4 h-4" />
                    {t.cta.button}
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 text-sm font-sans hover:border-primary/50 transition-colors"
                  >
                    <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="w-4 h-4" />
                    {t.cta.whatsapp}
                  </a>
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

        {/* About Tomás Section */}
        <section className="bg-secondary" dir={rtl ? "rtl" : "ltr"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-4 ${rtl ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/WhatsApp Image 2026-02-24 at 14.38.04.jpeg"
                    alt="Tomás Gilabert - Abogado Penalista"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className={`lg:col-span-7 ${rtl ? "lg:order-1 lg:col-start-1" : "lg:col-start-6"}`}>
                <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">
                  {validLocale === "ar" ? "عن المحامي" : validLocale === "fr" ? "À Propos" : validLocale === "en" ? "About" : "Sobre el Abogado"}
                </p>
                <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground mb-6">
                  Tomás Gilabert
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {validLocale === "ar" 
                      ? "يتمتع توماس جيلابيرت بأكثر من 50 عامًا من الخبرة في الدفاع الجنائي، متخصص في قضايا تهريب المخدرات والجرائم ضد الصحة العامة."
                      : validLocale === "fr" 
                      ? "Tomás Gilabert possède plus de 50 ans d'expérience en défense pénale, spécialisé dans les affaires de trafic de drogue et crimes contre la santé publique."
                      : validLocale === "en"
                      ? "Tomás Gilabert has over 50 years of experience in criminal defense, specialized in drug trafficking and public health crime cases."
                      : "Tomás Gilabert cuenta con más de 50 años de experiencia en defensa penal, especializado en casos de narcotráfico y delitos contra la salud pública."}
                  </p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {validLocale === "ar"
                      ? "تم تكريمه بوسام الشرف للممارسة المثالية للمحاماة من نقابة المحامين."
                      : validLocale === "fr"
                      ? "Il a été reconnu avec la Distinction Honorifique pour Exercice Exemplaire du Droit par le Barreau."
                      : validLocale === "en"
                      ? "He has been recognized with the Honorary Distinction for Exemplary Practice of Law by the Bar Association."
                      : "Ha sido reconocido con la Distinción Honorífica por Ejercicio Ejemplar de la Abogacía por el Ilustre Colegio de Abogados."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className={`flex items-center gap-2 ${rtl ? "flex-row-reverse" : ""}`}>
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-xs font-sans text-foreground">
                      {validLocale === "ar" ? "وسام شرفي" : validLocale === "fr" ? "Distinction Honorifique" : validLocale === "en" ? "Honorary Distinction" : "Distinción Honorífica"}
                    </span>
                  </div>
                  <div className={`flex items-center gap-2 ${rtl ? "flex-row-reverse" : ""}`}>
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-xs font-sans text-foreground">+50 {validLocale === "ar" ? "عامًا" : validLocale === "fr" ? "ans" : validLocale === "en" ? "years" : "años"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press Section */}
        <section className="bg-card border-y border-border" dir={rtl ? "rtl" : "ltr"}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">
              {validLocale === "ar" ? "الصحافة" : validLocale === "fr" ? "Presse" : validLocale === "en" ? "Press" : "Prensa"}
            </p>
            <h3 className="font-serif text-xl sm:text-2xl tracking-tight text-foreground mb-8">
              {validLocale === "ar" ? "توماس جيلابيرت في وسائل الإعلام" : validLocale === "fr" ? "Tomás Gilabert dans les Médias" : validLocale === "en" ? "Tomás Gilabert in the Media" : "Tomás Gilabert en los Medios"}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { source: "La Vanguardia", year: "2017", title: validLocale === "es" ? "Caso Imprenta Constantí" : "Constantí Printing Case", url: "https://www.lavanguardia.com/politica/20170908/431128677120/guardia-civil-entra-imprenta-constanti.html" },
                { source: "Diari Més", year: "2024", title: validLocale === "es" ? "Absolución Policías Vila-seca" : "Vila-seca Police Acquittal", url: "https://www.diarimes.com/es/camp-tarragona/tarragones/240209/absueltos-dos-policias-locales-vila-seca-acusados-haber-torturado-e-intentado-asesinar-hombre-2013_140345.html" },
                { source: "Diari de Tarragona", year: "2023", title: validLocale === "es" ? "Defensa Tentativa Homicidio" : "Attempted Homicide Defense", url: "https://www.diaridetarragona.com/sucesos/230603/se-enfrenta-a-una-peticion-de-hasta-18-anos-de-prision-por-intentar-matar-a-su-pareja-en-tarragona-en-mayo-de-2023-da24175402.html" },
              ].map((article, i) => (
                <a key={i} href={article.url} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 p-4 bg-background border border-border hover:border-primary/50 transition-colors group ${rtl ? "flex-row-reverse" : ""}`}>
                  <Newspaper className="w-8 h-8 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-sans font-medium text-foreground truncate">{article.source} ({article.year})</p>
                    <p className="text-[10px] text-muted-foreground truncate">{article.title}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32" dir={rtl ? "rtl" : "ltr"}>
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">
            {validLocale === "ar" ? "المدن" : validLocale === "fr" ? "Villes" : validLocale === "en" ? "Cities" : "Ciudades"}
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground mb-12">
            {serviceName.title} {validLocale === "ar" ? "في إسبانيا" : validLocale === "fr" ? "en Espagne" : validLocale === "en" ? "in Spain" : "en España"}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {mainCities.map((city) => (
              <Link
                key={city}
                href={`/${validLocale}/${serviceSlug}/${city}/`}
                className={`flex items-center justify-between p-4 bg-card border border-border hover:border-primary/50 transition-colors group ${rtl ? "flex-row-reverse" : ""}`}
              >
                <span className="text-sm font-sans text-foreground group-hover:text-primary transition-colors capitalize">
                  {city.replace(/-/g, " ")}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        <CtaSection locale={validLocale} />
      </main>
      <Footer locale={validLocale} />
    </>
  )
}
