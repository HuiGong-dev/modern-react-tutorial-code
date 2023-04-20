import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'segs',
      label: 'can i use react on a project?',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque modi officia ab fugit cupiditate eum hic inventore tempore velit, corporis quia rem quas architecto consequuntur repellat voluptate pariatur. Nulla, deleniti!',
    },
    {
      id: 'sdw',
      label: 'can i use tailwind on a project?',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque modi officia ab fugit cupiditate eum hic inventore tempore velit, corporis quia rem quas architecto consequuntur repellat voluptate pariatur. Nulla, deleniti!',
    },
    {
      id: 'ezd',
      label: 'can i sue typescript on server?',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque modi officia ab fugit cupiditate eum hic inventore tempore velit, corporis quia rem quas architecto consequuntur repellat voluptate pariatur. Nulla, deleniti!',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
