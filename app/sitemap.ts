import { MetadataRoute } from "next"
import { locales } from "@/lib/i18n"
import { VALID_SERVICES, CITIES, getLocalizedSlug } from "@/lib/sitemap-data"

const BASE_URL = "https://elitepenal.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = []

  // Home pages for each locale
  for (const locale of locales) {
    routes.push({
      url: `${BASE_URL}/${locale}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    })
  }

  // Service pages for each locale with localized slugs
  for (const locale of locales) {
    for (const service of VALID_SERVICES) {
      const localizedSlug = getLocalizedSlug(service, locale)
      routes.push({
        url: `${BASE_URL}/${locale}/${localizedSlug}/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      })
    }
  }

  // Service + City pages for each locale with localized slugs (limit to main cities for sitemap size)
  const mainCities = CITIES.slice(0, 50)
  for (const locale of locales) {
    for (const service of VALID_SERVICES) {
      const localizedSlug = getLocalizedSlug(service, locale)
      for (const city of mainCities) {
        routes.push({
          url: `${BASE_URL}/${locale}/${localizedSlug}/${city}/`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.8,
        })
      }
    }
  }

  return routes
}
