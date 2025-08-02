import './styles.css'
import { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import SchoolHeader from '@/components/school-header'
import Footer from '@/components/footer-section'

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Школа, которая открывает перспективы.',
  title: 'Zerdeli',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="kk">
      <body className={`${manrope.variable} font-manrope`}>
        <SchoolHeader />
        <main className="flex flex-col space-y-20 md:space-y-32">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
