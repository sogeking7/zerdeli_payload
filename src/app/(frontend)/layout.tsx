import React from 'react'
import './styles.css'
import { Metadata } from 'next'
import SchoolHeader from '@/components/school-header'

import { Manrope } from 'next/font/google'

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
        <main>
          <SchoolHeader />
          {children}
        </main>
      </body>
    </html>
  )
}
