import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { type Locale, getTranslations, isRTL } from "@/lib/i18n"

interface ServicesSectionProps {
  locale: Locale
}

const serviceImages = {
  trafficking: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=2070&auto=format&fit=crop",
  possession: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  conspiracy: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop",
  moneylaundering: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
  international: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop",
  appeals: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2070&auto=format&fit=crop",
}

const serviceIds = {
  trafficking: "abogado-narcotrafico",
  possession: "abogado-posesion-drogas",
  conspiracy: "defensa-trafico-drogas",
  moneylaundering: "abogado-malos-tratos",
  international: "abogado-extradicion",
  appeals: "recurso-sentencia-drogas",
}

export function ServicesSection({ locale }: ServicesSectionProps) {
  const t = getTranslations(locale)
  const rtl = isRTL(locale)

  const services = [
    { key: "trafficking", span: "md:col-span-2 md:row-span-2" },
    { key: "possession", span: "" },
    { key: "conspiracy", span: "" },
    { key: "moneylaundering", span: "" },
    { key: "international", span: "" },
    { key: "appeals", span: "md:col-span-2" },
  ] as const

  return (
    <section id="servicios" className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32" dir={rtl ? "rtl" : "ltr"}>
      <div className="grid lg:grid-cols-12 gap-4 mb-16 lg:mb-24">
        <div className="lg:col-span-5">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{t.services.label}</p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.05]">
            {t.services.title}
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-8 flex items-end">
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-3">
        {services.map((svc) => {
          const serviceData = t.servicesList[svc.key]
          return (
            <Link
              key={svc.key}
              href={`/${locale}/${serviceIds[svc.key]}/`}
              className={`group relative overflow-hidden bg-card aspect-[4/3] ${svc.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={serviceImages[svc.key]}
                alt={serviceData.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              />
              <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-t from-background/90 to-transparent">
                <div className={`flex justify-between items-start ${rtl ? "flex-row-reverse" : ""}`}>
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground transition-colors duration-500">{serviceData.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                </div>
                <p className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-500 max-w-xs font-sans">
                  {serviceData.desc}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
