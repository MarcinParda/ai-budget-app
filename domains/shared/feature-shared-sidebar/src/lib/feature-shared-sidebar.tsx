import {
  PlusIcon,
  ArrowLeftRightIcon,
  HomeIcon,
  NotebookPenIcon,
  Grid2X2Icon,
  WalletIcon,
  PiggyBankIcon,
} from 'lucide-react';
import { Separator } from '@ai-budget-app/ui-shared-separator';
import { SidebarNavigationLink } from './components/sidebar-navigation-link';

export function FeatureSharedSidebar() {
  return (
    <aside className="w-48 inset-y-0 left-0 z-10 hidden flex-col border-r bg-background sm:flex">
      <div className="flex w-full py-5 gap-2 justify-center items-center">
        <PiggyBankIcon className="w-8 h-8" />
        <span className="text-xl">AI budget</span>
      </div>
      <Separator />
      <nav className="flex flex-col justify-start items-center px-2 sm:py-5">
        <SidebarNavigationLink route="dashboard" Icon={HomeIcon} />
        <SidebarNavigationLink
          route="addTransactions"
          Icon={ArrowLeftRightIcon}
        />
        <SidebarNavigationLink
          route="planTransactions"
          Icon={NotebookPenIcon}
        />
        <SidebarNavigationLink route="categories" Icon={Grid2X2Icon} />
        <SidebarNavigationLink route="currentAssets" Icon={WalletIcon} />
        <Separator />
        <SidebarNavigationLink route="addNewLink" Icon={PlusIcon} />
      </nav>
    </aside>
  );
}

export default FeatureSharedSidebar;
