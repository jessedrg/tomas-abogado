"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X, Globe } from "lucide-react"
import { type Locale, localeNames, localeFlags, getTranslations, isRTL } from "@/lib/i18n"

const PHONE_URL = "tel:+34641021551"

interface NavbarProps {
  locale: Locale
}

export function Navbar({ locale }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const t = getTranslations(locale)
  const rtl = isRTL(locale)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <nav className={`max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-14 lg:h-16 ${rtl ? "flex-row-reverse" : ""}`}>
        <Link href={`/${locale}/`} className="flex items-center gap-1">
          <span className="text-xl lg:text-2xl font-serif text-foreground tracking-tight">
            Elite <span className="text-primary">Penal</span>
          </span>
        </Link>

        <div className={`hidden lg:flex items-center gap-10 text-[13px] tracking-wide font-sans ${rtl ? "flex-row-reverse" : ""}`}>
          <Link href={`/${locale}/#servicios`} className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.services}</Link>
          <Link href={`/${locale}/#proceso`} className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.about}</Link>
          <Link href={`/${locale}/#opiniones`} className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.cases}</Link>
          <Link href={`/${locale}/#contacto`} className="text-muted-foreground hover:text-foreground transition-colors">{t.nav.contact}</Link>
        </div>

        <div className={`hidden lg:flex items-center gap-4 ${rtl ? "flex-row-reverse" : ""}`}>
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm px-3 py-2"
            >
              <Globe className="w-4 h-4" />
              <span>{localeFlags[locale]}</span>
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 bg-card border border-border rounded-sm shadow-lg py-1 min-w-[140px]">
                {(["es", "en", "fr", "ar"] as Locale[]).map((l) => (
                  <Link
                    key={l}
                    href={`/${l}/`}
                    onClick={() => setLangOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 text-sm hover:bg-secondary transition-colors ${l === locale ? "text-primary" : "text-foreground"}`}
                  >
                    <span>{localeFlags[l]}</span>
                    <span>{localeNames[l]}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href={PHONE_URL}
            className="flex items-center gap-2 bg-primary text-primary-foreground text-[13px] px-5 py-2.5 hover:opacity-90 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5" />
            {t.nav.freeConsultation}
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-6 space-y-4">
          <Link href={`/${locale}/#servicios`} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground">{t.nav.services}</Link>
          <Link href={`/${locale}/#proceso`} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground">{t.nav.about}</Link>
          <Link href={`/${locale}/#opiniones`} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground">{t.nav.cases}</Link>
          <Link href={`/${locale}/#contacto`} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground">{t.nav.contact}</Link>
          <hr className="border-border" />
          <div className="flex gap-2">
            {(["es", "en", "fr", "ar"] as Locale[]).map((l) => (
              <Link
                key={l}
                href={`/${l}/`}
                className={`px-3 py-2 text-sm border ${l === locale ? "border-primary text-primary" : "border-border text-muted-foreground"}`}
              >
                {localeFlags[l]}
              </Link>
            ))}
          </div>
          <a href={PHONE_URL} className="block text-center bg-primary text-primary-foreground text-sm px-6 py-3">
            {t.nav.freeConsultation}
          </a>
        </div>
      )}
    </header>
  )
}
