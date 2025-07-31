import React from 'react';
import Image from 'next/image';

// ИСПРАВЛЕНО: Иконки теперь импортируются из отдельных файлов
import { WhatsappIcon } from './icons/WhatsappIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { TelegramIcon } from './icons/TelegramIcon';

// -- Компонент для колонки ссылок --
interface FooterLinksColumnProps {
  title: string;
  links: { text: string; href: string }[];
}

const FooterLinksColumn = ({ title, links }: FooterLinksColumnProps) => (
  <div>
    <p className="text-[22px] font-semibold text-left text-black mb-8">{title}</p>
    <div className="flex flex-col gap-6">
      {links.map((link, index) => (
        <a key={index} href={link.href} className="text-base text-left text-black/60 hover:text-black transition-colors">
          {link.text}
        </a>
      ))}
    </div>
  </div>
);

// -- Основной компонент футера --

export default function Footer() {
  // Данные для колонок ссылок
  const linkColumns = [
    {
      title: "О школе ZIS",
      links: [
        { text: "О школе", href: "#" },
        { text: "Преподаватели", href: "#" },
        { text: "Корп. управление", href: "#" },
        { text: "Образовательные программы", href: "#" },
        { text: "Лицензия", href: "#" },
        { text: "Благотворительность", href: "#" },
      ],
    },
    {
      title: "Поступление",
      links: [
        { text: "Правила приема", href: "#" },
        { text: "Документы для зачисления", href: "#" },
        { text: "График приема документов", href: "#" },
        { text: "Перевод в школу", href: "#" },
        { text: "Льготы и особые условия", href: "#" },
      ],
    },
    {
      title: "Родителям",
      links: [
        { text: "Родительский комитет", href: "#" },
        { text: "Электронный дневник", href: "#" },
        { text: "Условия доступности", href: "#" },
        { text: "Безопасность", href: "#" },
        { text: "Поступление", href: "#" },
      ],
    },
  ];

  // Данные для контактов
  const contacts = [
    { city: "Астана", address: "Петров 2/2", phone: "+7 707 742 12 12" },
    { city: "Шымкент", address: "Дулати 203", phone: "+7 778 649 88 22" },
    { city: "Жезказган", address: "Анаркулов 10", phone: "+7 771 170 79 78" },
    { city: "Атырау", address: "М. Утемисулы 132а", phone: "+7 700 030 06 06" },
    { city: "Тараз", address: "Молтек 7 (Самал), 9Б", phone: "+7 771 170 79 78" },
  ];

  return (
    <footer className="bg-white w-full py-16 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Верхняя часть с лого и ссылками */}
        <div className="border-t border-black/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Лого и соцсети */}
            <div className="flex flex-col gap-8">
              <a href="#">
                <Image src="/logo.png" alt="Zerdeli Logo" width={120} height={69} />
              </a>
              <div>
                <p className="text-base font-medium text-black/60 mb-4">Мы в соц сетях</p>
                <div className="flex gap-6">
                  <a href="#" aria-label="Whatsapp"><WhatsappIcon /></a>
                  <a href="#" aria-label="Instagram"><InstagramIcon /></a>
                  <a href="#" aria-label="Telegram"><TelegramIcon /></a>
                </div>
              </div>
            </div>
            {/* Колонки ссылок */}
            {linkColumns.map((col, index) => (
              <FooterLinksColumn key={index} title={col.title} links={col.links} />
            ))}
          </div>
        </div>

        {/* Нижняя часть с контактами */}
        <div className="border-t border-black/10 mt-12 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <p className="text-[22px] font-semibold text-left text-black col-span-1">Контакты</p>
            {contacts.map((contact, index) => (
              <div key={index} className="flex flex-col gap-3">
                <p className="text-base font-semibold text-left text-black/80">{contact.city}</p>
                <p className="text-base text-left text-black/60">{contact.address}</p>
                <p className="text-base text-left text-black/60">{contact.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-12 pt-8 text-center md:text-left">
          <p className="text-sm font-medium text-black/60">© Zerdeli International School, 2025</p>
        </div>
      </div>
    </footer>
  );
}
