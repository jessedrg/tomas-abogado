import { type Locale, getTranslations, isRTL } from "@/lib/i18n"

interface HowItWorksProps {
  locale: Locale
}

export function HowItWorks({ locale }: HowItWorksProps) {
  const t = getTranslations(locale)
  const rtl = isRTL(locale)

  const steps = [
    { n: "01", ...t.process.step1 },
    { n: "02", ...t.process.step2 },
    { n: "03", ...t.process.step3 },
    { n: "04", ...t.process.step4 },
  ]

  return (
    <section id="proceso" className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32" dir={rtl ? "rtl" : "ltr"}>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary mb-3 font-sans">{t.process.label}</p>
          <h2 className="font-serif text-2xl sm:text-4xl tracking-tight text-foreground leading-[1.1]">
            {t.process.title}
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-0">
          {steps.map((step, i) => (
            <div key={step.n} className={`flex gap-8 py-8 ${i < 3 ? "border-b border-border" : ""} ${rtl ? "flex-row-reverse" : ""}`}>
              <span className="font-serif text-4xl lg:text-5xl text-primary/20 flex-shrink-0">{step.n}</span>
              <div>
                <h3 className="text-sm font-sans font-medium text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 font-sans leading-relaxed max-w-md">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
