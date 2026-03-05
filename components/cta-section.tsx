import Image from "next/image"
import { type Locale, getTranslations, isRTL } from "@/lib/i18n"

const SIGNAL_URL = "https://signal.me/#p/%2B34641021551"
const WHATSAPP_URL = "https://wa.me/34641021551?text=Hola%2C%20necesito%20consulta%20urgente"

interface CtaSectionProps {
  locale: Locale
}

export function CtaSection({ locale }: CtaSectionProps) {
  const t = getTranslations(locale)
  const rtl = isRTL(locale)

  return (
    <section id="contacto" className="bg-primary" dir={rtl ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24 text-center">
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl tracking-tight text-primary-foreground leading-[1.05]">
          {t.cta.title}
        </h2>
        <p className="text-sm text-primary-foreground/70 mt-6 max-w-xl mx-auto font-sans">
          {t.cta.subtitle}
        </p>
        <div className={`flex flex-col sm:flex-row gap-3 justify-center mt-10 ${rtl ? "sm:flex-row-reverse" : ""}`}>
          <a 
            href={SIGNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 text-sm font-sans font-medium hover:opacity-90 transition-opacity"
          >
            <Image src="/signal.jpeg" alt="Signal" width={16} height={16} className="w-4 h-4" /> {t.cta.button}
          </a>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-sans hover:bg-primary-foreground/10 transition-colors"
          >
            <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="w-4 h-4" /> {t.cta.whatsapp}
          </a>
        </div>
      </div>
    </section>
  )
}
