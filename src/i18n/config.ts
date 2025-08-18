export type Locale = (typeof locales)[number]

export const locales = ['en', 'ru', 'kk'] as const
export const defaultLocale: Locale = 'kk'
