  import React from 'react'
  import Image from 'next/image'

  import Container from './custom/Container'
  import Link from 'next/link'

  interface FooterLinksColumnProps {
    title: string
    links: { text: string; href: string }[]
  }

  const FooterLinksColumn = ({ title, links }: FooterLinksColumnProps) => (
    <div>
      <p className="text-xl font-semibold text-black mb-4">{title}</p>
      <div className="flex flex-col gap-4">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="text-sm text-black/60">
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )

  // -- Основной компонент футера --

  export default function Footer() {
    // Данные для колонок ссылок
    const linkColumns = [
      {
        title: 'О школе ZIS',
        links: [
          { text: 'О школе', href: '#' },
          { text: 'Преподаватели', href: '#' },
          { text: 'Корп. управление', href: '#' },
          { text: 'Образовательные программы', href: '#' },
          { text: 'Лицензия', href: '#' },
          { text: 'Благотворительность', href: '#' },
        ],
      },
      {
        title: 'Поступление',
        links: [
          { text: 'Правила приема', href: '#' },
          { text: 'Документы для зачисления', href: '#' },
          { text: 'График приема документов', href: '#' },
          { text: 'Перевод в школу', href: '#' },
          { text: 'Льготы и особые условия', href: '#' },
          { text: 'Запись на экзамен', href: '/exam-registration' },],
      },
      {
        title: 'Родителям',
        links: [
          { text: 'Родительский комитет', href: '/parent-committee' },
          { text: 'Электронный дневник', href: '#' },
          { text: 'Условия доступности', href: '#' },
          { text: 'Безопасность', href: '#' },
          { text: 'Поступление', href: '#' },
        ],
      },
    ]

    // Данные для контактов
    const contacts = [
      { city: 'Астана', address: 'Петров 2/2', phone: '+7 707 742 12 12' },
      { city: 'Шымкент', address: 'Дулати 203', phone: '+7 778 649 88 22' },
      { city: 'Жезказган', address: 'Анаркулов 10', phone: '+7 771 170 79 78' },
      { city: 'Атырау', address: 'М. Утемисулы 132а', phone: '+7 700 030 06 06' },
      { city: 'Тараз', address: 'Молтек 7 (Самал), 9Б', phone: '+7 771 170 79 78' },
    ]

  return (
    <footer className="bg-white w-full py-8 md:py-16 border-t border-gray-100 max-md:mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col gap-8">
            <Link className="flex-shrink-0" href="/">
              <Image src={'/svg/logo.svg'} width={80} height={50} alt="Zerdeli" />
            </Link>
            <div className="space-y-4">
              <p className="text-sm text-black/60">Мы в соц сетях</p>
              <div className="flex gap-6">
                <Link href="#" aria-label="Whatsapp">
                  <Image alt="whatsapp" src="/svg/whatsapp.svg" width={20} height={20} />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Image alt="instagram" src="/svg/instagram.svg" width={20} height={20} />
                </Link>
                <Link href="#" aria-label="Telegram">
                  <Image alt="telegram" src="/svg/telegram.svg" width={20} height={20} />
                </Link>
              </div>
              <p className="text-xs text-black/60">
                © Zerdeli International School, {new Date().getFullYear()}
              </p>
            </div>
          </div>
          {/* Колонки ссылок */}
          {linkColumns.map((col, index) => (
            <FooterLinksColumn key={index} title={col.title} links={col.links} />
          ))}
        </div>

          {/* Нижняя часть с контактами */}
          <div className="border-t border-black/10 mt-8 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <p className="text-xl font-semibold text-left text-black col-span-1">Контакты</p>
              {contacts.map((contact, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-black/80">{contact.city}</p>
                  <p className="text-sm text-black/60">{contact.address}</p>
                  <p className="text-sm text-black/60">{contact.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </footer>
    )
  }
