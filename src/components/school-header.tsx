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
import { useState } from 'react'

const navItems = [
  {
    label: 'О школе',
    dropdown: [
      { label: 'О школе', href: '/about' },
      // { label: 'Наша миссия', href: '#' },
      // { label: 'Преподаватели', href: '#' },
    ],
  },
  {
    label: 'Поступление',
    dropdown: [
      { label: 'Требования', href: '#' },
      { label: 'Документы', href: '#' },
      { label: 'Тестирование', href: '#' },
    ],
  },
  {
    label: 'Родителям',
    dropdown: [
      { label: 'Расписание', href: '#' },
      { label: 'Оплата', href: '#' },
      { label: 'Родительский комитет', href: '#' },
    ],
  },
  { label: 'Новости', href: '#' },
  { label: 'Контакты', href: '#' },
]

const languageOptions = [
  { label: 'Русский', code: 'РУС' },
  { label: 'Қазақша', code: 'ҚАЗ' },
  { label: 'English', code: 'ENG' },
]

export default function SchoolHeader() {
  const [open, setOpen] = useState(false)
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
                  variant="ghost"
                  className="text-[#000000] hover:bg-gray-50 px-3 py-2 text-sm font-medium"
                  asChild
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ),
            )}
          </nav>

          {/* Right Side - Contact & Controls */}
          <div className="flex items-center space-x-4">
            {/* Phone Number */}
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-sm font-semibold text-[#000000]">+7 707 742-12-12</span>
              <span className="text-xs text-gray-600">Колл-центр</span>
            </div>

            {/* Search Icon */}
            <Button variant="ghost" size="icon" className="text-[#000000] hover:bg-gray-50">
              <Search className="h-5 w-5" />
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-[#000000] hover:bg-gray-50 px-3 py-2 text-sm font-medium"
                >
                  {languageOptions[0].code}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languageOptions.map((lang, index) => (
                  <DropdownMenuItem key={index}>{lang.label}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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
                            <Button onClick={() => setOpen(false)} variant="ghost" key={subIndex}>
                              <Link href={subItem.href}>{subItem.label}</Link>
                            </Button>
                          ))}
                        </>
                      ) : (
                        <Button variant="ghost" key={index} onClick={() => setOpen(false)}>
                          <Link href={item.href}>{item.label}</Link>
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
    </header>
  )
}
