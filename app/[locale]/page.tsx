import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { HomeHero } from "@/components/home-hero"
import { AboutSection } from "@/components/about-section"
import { CredentialsSection } from "@/components/credentials-section"
import { ServicesSection } from "@/components/services-section"
import { PressSection } from "@/components/press-section"
import { ReviewsSection } from "@/components/reviews-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { locales, type Locale } from "@/lib/i18n"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const validLocale = locale as Locale

  return (
    <>
      <Navbar locale={validLocale} />
      <main>
        <HomeHero locale={validLocale} />
        <AboutSection locale={validLocale} />
        <CredentialsSection locale={validLocale} />
        <ServicesSection locale={validLocale} />
        <PressSection locale={validLocale} />
        <ReviewsSection locale={validLocale} />
        <CtaSection locale={validLocale} />
      </main>
      <Footer locale={validLocale} />
    </>
  )
}
