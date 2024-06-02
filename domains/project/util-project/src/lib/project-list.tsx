import { BlocksIcon, LucideProps, PiggyBankIcon } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type ProjectName = 'AI Budget' | 'Cockpit';

export interface Project {
  name: ProjectName;
  description: string;
  url: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}

export const cockpitProject: Project = {
  name: 'Cockpit',
  description: 'A dashboard that provides an overview of all your projects.',
  url: 'http://localhost:3000',
  Icon: BlocksIcon,
};

export const aiBudgetProject: Project = {
  name: 'AI Budget',
  description:
    'A budgeting app that helps you plan & manage your finances with help of AI.',
  url: 'http://localhost:3001',
  Icon: PiggyBankIcon,
};

export const projectList: Project[] = [
  { ...cockpitProject },
  { ...aiBudgetProject },
];

export const projectsListWithoutCockpit = projectList.filter(
  (project) => project.name !== 'Cockpit'
);
