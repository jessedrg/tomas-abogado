import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { type Locale, getTranslations, isRTL } from "@/lib/i18n"
import { getLocalizedSlug } from "@/lib/sitemap-data"

const PHONE_URL = "tel:+34600000000"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale)
  const rtl = isRTL(locale)

  const services = [
    { name: locale === "ar" ? "الاتجار بالمخدرات" : locale === "fr" ? "Trafic de drogue" : locale === "en" ? "Drug Trafficking" : "Narcotráfico", href: `/${locale}/${getLocalizedSlug("abogado-narcotrafico", locale)}/` },
    { name: locale === "ar" ? "حيازة المخدرات" : locale === "fr" ? "Possession de drogue" : locale === "en" ? "Drug Possession" : "Posesión Drogas", href: `/${locale}/${getLocalizedSlug("abogado-posesion-drogas", locale)}/` },
    { name: locale === "ar" ? "غسيل الأموال" : locale === "fr" ? "Blanchiment" : locale === "en" ? "Money Laundering" : "Blanqueo Capitales", href: `/${locale}/${getLocalizedSlug("defensa-blanqueo-capitales", locale)}/` },
    { name: locale === "ar" ? "التسليم" : locale === "fr" ? "Extradition" : locale === "en" ? "Extradition" : "Extradición", href: `/${locale}/${getLocalizedSlug("abogado-extradicion", locale)}/` },
    { name: locale === "ar" ? "الاستئناف" : locale === "fr" ? "Appels" : locale === "en" ? "Appeals" : "Recursos", href: `/${locale}/${getLocalizedSlug("recurso-sentencia-drogas", locale)}/` },
  ]

  const cities = ["Madrid", "Barcelona", "Málaga", "Sevilla", "Algeciras", "Ceuta"]
  const mainServiceSlug = getLocalizedSlug("abogado-narcotrafico", locale)

  return (
    <footer className="bg-card border-t border-border" dir={rtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href={`/${locale}/`} className="text-2xl font-serif text-foreground tracking-tight">
              Elite <span className="text-primary">Penal</span>
            </Link>
            <p className="text-muted-foreground text-xs mt-4 leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">{t.footer.services}</p>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.name}>
                  <Link href={s.href} className="text-xs text-foreground/70 hover:text-primary transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">{t.footer.cities}</p>
            <ul className="space-y-2.5">
              {cities.map(c => (
                <li key={c}>
                  <Link href={`/${locale}/${mainServiceSlug}/${c.toLowerCase()}/`} className="text-xs text-foreground/70 hover:text-primary transition-colors">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">{t.footer.contact}</p>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_URL} className={`flex items-center gap-2 text-xs text-foreground/70 hover:text-primary transition-colors ${rtl ? "flex-row-reverse" : ""}`}>
                  <Phone className="w-3.5 h-3.5" /> +34 600 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@elitepenal.com" className={`flex items-center gap-2 text-xs text-foreground/70 hover:text-primary transition-colors ${rtl ? "flex-row-reverse" : ""}`}>
                  <Mail className="w-3.5 h-3.5" /> info@elitepenal.com
                </a>
              </li>
              <li className={`flex items-center gap-2 text-xs text-foreground/70 ${rtl ? "flex-row-reverse" : ""}`}>
                <MapPin className="w-3.5 h-3.5" /> Madrid, España
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t border-border mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 ${rtl ? "sm:flex-row-reverse" : ""}`}>
          <p className="text-[10px] text-muted-foreground">© {new Date().getFullYear()} Elite Penal. {t.footer.rights}</p>
          <div className={`flex gap-6 text-[10px] text-muted-foreground ${rtl ? "flex-row-reverse" : ""}`}>
            <Link href={`/${locale}/`} className="hover:text-foreground transition-colors">{t.footer.privacy}</Link>
            <Link href={`/${locale}/`} className="hover:text-foreground transition-colors">{t.footer.legal}</Link>
            <Link href={`/${locale}/`} className="hover:text-foreground transition-colors">{t.footer.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
