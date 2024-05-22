import { Button } from '@ai-budget-app/ui-shared-button';
import { routes } from '@ai-budget-app/util-shared-routes';
import { LucideProps } from 'lucide-react';
import Link from 'next/link';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export const SidebarNavigationLink = ({
  route,
  Icon,
}: {
  route: keyof typeof routes;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}) => {
  return (
    <Link className="w-full" href={routes[route].url()}>
      <Button className={'w-full justify-start'} variant="link">
        <Icon className="mr-2 h-4 w-4" />
        {routes[route].pageName}
      </Button>
    </Link>
  );
};
