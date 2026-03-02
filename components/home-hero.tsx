import { Phone, Scale, ArrowRight } from "lucide-react"
import { type Locale, getTranslations, isRTL } from "@/lib/i18n"

const PHONE_URL = "tel:+34600000000"

interface HomeHeroProps {
  locale: Locale
}

export function HomeHero({ locale }: HomeHeroProps) {
  const t = getTranslations(locale)
  const rtl = isRTL(locale)

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden" dir={rtl ? "rtl" : "ltr"}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
          alt="Courthouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24 pt-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 text-xs font-medium mb-8 backdrop-blur-sm border border-primary/30">
            <Scale className="w-3.5 h-3.5" />
            {t.hero.badge}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.0]">
            {t.hero.title}
            <br />
            <span className="italic font-light text-primary">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mt-8 font-sans leading-relaxed max-w-xl">
            {t.hero.subtitle}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 mt-10 ${rtl ? "sm:flex-row-reverse" : ""}`}>
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              {t.hero.cta}
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground border border-border px-8 py-4 text-sm font-sans hover:bg-muted transition-colors"
            >
              {t.hero.ctaSecondary}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border/30">
          {[
            { value: "+50", label: t.stats.cases },
            { value: "24h", label: t.stats.experience },
            { value: "✓", label: t.stats.success },
            { value: t.stats.availableValue, label: t.stats.available },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-serif text-2xl sm:text-3xl text-primary">{value}</p>
              <p className="text-xs text-muted-foreground mt-1 font-sans">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
