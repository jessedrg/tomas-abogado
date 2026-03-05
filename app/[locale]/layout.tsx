import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
import { locales, type Locale, isRTL } from "@/lib/i18n"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600", "700"], display: "swap" })

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const metadataByLocale: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Elite Penal | Tomás Gilabert - Abogado Penalista 50 Años Experiencia",
    description: "¿Detenido por narcotráfico? Tomás Gilabert, uno de los abogados penalistas con más prestigio en España. 50 años de experiencia. Primera consulta GRATIS.",
  },
  en: {
    title: "Elite Penal | Tomás Gilabert - Criminal Defense Attorney 50 Years Experience",
    description: "Arrested for drug trafficking? Tomás Gilabert, one of the most prestigious criminal defense attorneys in Spain. 50 years of experience. First consultation FREE.",
  },
  fr: {
    title: "Elite Penal | Tomás Gilabert - Avocat Pénaliste 50 Ans d'Expérience",
    description: "Arrêté pour trafic de drogue? Tomás Gilabert, l'un des avocats pénalistes les plus prestigieux d'Espagne. 50 ans d'expérience. Première consultation GRATUITE.",
  },
  ar: {
    title: "Elite Penal | توماس جيلابيرت - محامي جنائي 50 عامًا من الخبرة",
    description: "هل تم اعتقالك بتهمة تهريب المخدرات؟ توماس جيلابيرت، أحد أكثر المحامين الجنائيين شهرة في إسبانيا. 50 عامًا من الخبرة. الاستشارة الأولى مجانية.",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLocale = (locales.includes(locale as Locale) ? locale : "es") as Locale
  const meta = metadataByLocale[validLocale]

  return {
    title: meta.title,
    description: meta.description,
    keywords: "abogado penalista urgente, abogado narcotráfico, contratar abogado penalista, abogado drogas urgente, cuanto cuesta abogado penalista, abogado detenido drogas, defensa narcotráfico españa",
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      siteName: "Elite Penal",
    },
    icons: [{ rel: "icon", url: "/icon.svg", type: "image/svg+xml" }],
  }
}

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params
  const validLocale = (locales.includes(locale as Locale) ? locale : "es") as Locale
  const rtl = isRTL(validLocale)

  return (
    <html lang={validLocale} dir={rtl ? "rtl" : "ltr"} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
