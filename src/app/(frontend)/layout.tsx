import './styles.css'
import { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import SchoolHeader from '@/components/school-header'
import Footer from '@/components/footer-section'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import SchoolHeaderWrapper from '@/components/SchoolHeaderWrapper'
const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Школа, которая открывает перспективы.',
  title: 'Zerdeli',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body className={`${manrope.variable} font-manrope`}>
        <NextIntlClientProvider>
          <SchoolHeaderWrapper />
          <main className="flex flex-col space-y-20 md:space-y-32">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
