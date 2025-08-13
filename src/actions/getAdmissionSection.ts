'use server';

// В будущем вы сможете заменить этот массив на запрос к вашей админке
export default async function getAdmissionSections() {
  const sectionsData = [
    {
      id: 'grantRules',
      title: 'Правила присуждения и размеров образовательного гранта',
      description: 'Основной документ, регулирующий деятельность образовательного учреждения.',
      documents: [
        {
          title: 'Присуждения образовательного гранта',
          file: { url: '/docs/grant-rules.pdf' }
        },
      ]
    },
    {
      id: 'paidEducation',
      title: 'Правила приема на платное обучение',
      description: 'Здесь описаны условия и порядок приема учащихся на платной основе.',
      documents: [
        {
          title: 'Договор на оказание платных образовательных услуг',
          file: { url: '/docs/paid-education-contract.pdf' }
        },
      ]
    }
  ];

  return sectionsData;
}