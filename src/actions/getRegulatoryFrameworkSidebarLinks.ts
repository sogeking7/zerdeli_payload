'use server';

export default async function getRegulatoryFrameworkSidebarLinks() {
  // Эти ссылки обычно статичны, но их тоже можно вынести в админку при желании
  const sidebarLinks = [
    { href: "/about/teachers", label: "Преподаватели" },
    { href: "/about/governance", label: "Корп. управление" },
    { href: "/about/programs", label: "Образовательные программы" },
    { href: "/about/framework", label: "Нормативно-правовая база" },
    { href: "/about/reports", label: "Отчеты" },
    { href: "/about/license", label: "Лицензия" },
  ];
  return sidebarLinks;
}