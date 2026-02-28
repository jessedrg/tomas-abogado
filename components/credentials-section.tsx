import { Award, Scale, Users, ShieldCheck } from "lucide-react"
import { type Locale, getTranslations, isRTL } from "@/lib/i18n"

interface CredentialsSectionProps {
  locale: Locale
}

export function CredentialsSection({ locale }: CredentialsSectionProps) {
  const t = getTranslations(locale)
  const rtl = isRTL(locale)

  const credentials = [
    { icon: Award, ...t.credentials.item1 },
    { icon: Scale, ...t.credentials.item2 },
    { icon: Users, ...t.credentials.item3 },
    { icon: ShieldCheck, ...t.credentials.item4 },
  ]

  return (
    <section className="bg-secondary" dir={rtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{t.credentials.label}</p>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-foreground leading-[1.05]">
              {t.credentials.title}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              {t.credentials.subtitle}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-card p-8 border border-border">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">{title}</h3>
              <p className="text-xs text-muted-foreground font-sans leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
