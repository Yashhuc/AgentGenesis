import { MainNavItem, SidebarNavItem } from '@/types/nav';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}
export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Agents',
      href: '/agents',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/agents',
          items: [],
        },
      ],
    },
    {
      title: 'Document Compressor',
      items: [
        {
          title: 'Cohere Reranker',
          href: '/docs/components/cohereReranker',
          items: [],
        },
      ],
    },
  ],
};
