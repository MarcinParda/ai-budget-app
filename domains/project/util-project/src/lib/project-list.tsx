import { LucideProps, PiggyBankIcon } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface Project {
  name: string;
  description: string;
  url: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}

export const projectList: Project[] = [
  {
    name: 'AI Budget',
    description:
      'A budgeting app that helps you plan & manage your finances with help of AI.',
    url: 'https://localhost:3001',
    Icon: PiggyBankIcon,
  },
];
