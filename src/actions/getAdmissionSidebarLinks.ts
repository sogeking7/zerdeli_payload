'use server';

// В будущем вы сможете заменить этот массив на запрос к вашей админке
export default async function getAdmissionSidebarLinks() {
  const sidebarLinks = [
    { href: "/admission/rules", label: "Правила приема" },
    { href: "/admission/docs", label: "Документы для зачисления" },
    { href: "/admission/schedule", label: "График приема документов" },
    { href: "/admission/transfer", label: "Перевод в школу" },
    { href: "/admission/benefits", label: "Льготы и особые условия" },
  ];

  return sidebarLinks;
}