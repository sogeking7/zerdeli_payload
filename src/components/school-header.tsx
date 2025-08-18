'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer'
import { Menu, ChevronDown, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Container from './custom/Container'
import { useMemo, useState } from 'react'

import { SearchOverlay } from '@/features/search/SearchSection'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import { useTranslations } from 'next-intl'

export default function SchoolHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const t = useTranslations('Header')

  const navItems = useMemo(
    () => [
      {
        label: t('nav.about.label'),
        dropdown: [{ label: t('nav.about.dropdown.about'), href: '/about' }
        , { label: t('nav.about.dropdown.teachers'), href: '/teachers' },
        { label: t('nav.about.dropdown.management'), href: '/corporate-management' },
        { label: t('nav.about.dropdown.programs'), href: '/educational-programs' },
            { label: t('nav.about.dropdown.regulatoryFramework'), href: '/regulatory-framework' },
        { label: t('nav.about.dropdown.reports'), href: '/reports' },
        { label: t('nav.about.dropdown.license'), href: '/license' },
            { label: t('nav.about.dropdown.charity'), href: '/charity' },
        { label: t('nav.about.dropdown.accessibilityConditions'), href: '/accessibility-conditions' },
            { label: t('nav.about.dropdown.safety'), href: '/safety' },
        ],
      },
      {
        label: t('nav.admission.label'),
        dropdown: [
          { label: t('nav.admission.dropdown.requirements'), href: '/admission-rules' },
          { label: t('nav.admission.dropdown.enrollmentDocuments'), href: '/documents' },
            { label: t('nav.admission.dropdown.documentsSchedule'), href: '/documents-schedule' },
            { label: t('nav.admission.dropdown.schoolTransfer'), href: '/school-transfer' },
            { label: t('nav.admission.dropdown.benefits'), href: '/benefits' },
        ],
      },
      {
        label: t('nav.parents.label'),
        dropdown: [
          { label: t('nav.parents.dropdown.parentCommittee'), href: '/parent-committee' },
            { label: t('nav.parents.dropdown.eDiary'), href: '/e-diary' },
            { label: t('nav.parents.dropdown.accessibility'), href: '/accessibility' },
            { label: t('nav.parents.dropdown.safety'), href: '/safety' },
            { label: t('nav.parents.dropdown.admission'), href: '/admission' },
        ],
      },
      { label: t('nav.news'), href: '/news' },
      { label: t('nav.contacts'), href: '#footer' },
    ],
    [t],
  )

  return (
    <header className="bg-white fixed top-0 z-20 w-full h-16 border-b border-gray-100">
      <Container>
        <div className="flex items-center h-full justify-between">
          {/* Logo */}
          <Link className="flex-shrink-0" href="/">
            <Image src={'/svg/logo.svg'} width={80} height={50} alt="Zerdeli" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-[#000000] hover:bg-gray-50 px-3 py-2 text-sm font-medium"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.dropdown.map((subItem, subIndex) => (
                      <DropdownMenuItem key={subIndex} asChild>
                        <a href={subItem.href}>{subItem.label}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={index}
                  asChild
                  variant="ghost"
                  className="text-[#000000] hover:bg-gray-50 px-3 py-2 text-sm font-medium"
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ),
            )}
          </nav>

          {/* Right Side - Contact & Controls */}
          <div className="flex items-center space-x-4">
            {/* Phone Number */}
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-sm font-semibold text-[#000000]">+7 707 742-12-12</span>
              <span className="text-xs text-gray-600">{t('callCenter')}</span>
            </div>

            {/* Search Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="text-[#000000] hover:bg-gray-50"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Selector */}
            <LocaleSwitcher />

            {/* Mobile Menu Trigger */}
            <Drawer direction="right" open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu strokeWidth={1.5} className="size-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-full w-4/5 sm:w-1/2 px-4">
                <DrawerHeader className="h-16 flex items-center justify-center !p-0">
                  <Link onClick={() => setOpen(false)} className="flex-shrink-0" href="/">
                    <Image src={'/svg/logo.svg'} width={80} height={50} alt="Zerdeli" />
                  </Link>
                </DrawerHeader>
                <nav className="flex flex-col space-y-4 py-6">
                  {navItems.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      {item.dropdown ? (
                        <>
                          {item.dropdown.map((subItem, subIndex) => (
                            <Button
                              asChild
                              onClick={() => setOpen(false)}
                              variant="ghost"
                              key={subIndex}
                            >
                              <Link href={subItem.href}>{subItem.label}</Link>
                            </Button>
                          ))}
                        </>
                      ) : (
                        <Button asChild variant="ghost" key={index} onClick={() => setOpen(false)}>
                          <Link href={item.href}>{item.label} </Link>
                        </Button>
                      )}
                    </div>
                  ))}
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </Container>

      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}
