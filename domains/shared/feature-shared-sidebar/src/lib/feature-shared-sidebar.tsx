import Link from 'next/link';
import {
  SettingsIcon,
  PlusIcon,
  ArrowLeftRightIcon,
  HomeIcon,
  NotebookPenIcon,
  Grid2X2Icon,
  WalletIcon,
  PiggyBankIcon,
} from 'lucide-react';
import { Button } from '@ai-budget-app/ui-shared-button';
import { Separator } from '@ai-budget-app/ui-shared-separator';

export function FeatureSharedSidebar() {
  return (
    <aside className="w-48 inset-y-0 left-0 z-10 hidden flex-col border-r bg-background sm:flex">
      <div className="flex w-full py-5 gap-2 justify-center items-center">
        <PiggyBankIcon className="w-8 h-8" />
        <span className="text-xl">AI budget</span>
      </div>
      <Separator />
      <nav className="flex flex-col justify-start items-center px-2 sm:py-5">
        <Link className="w-full" href="/dashboard">
          <Button className="w-full justify-start" variant="link">
            <HomeIcon className="mr-2 h-4 w-4" /> Dashboard
          </Button>
        </Link>
        <Link className="w-full" href="/dashboard">
          <Button className="w-full justify-start" variant="link">
            <ArrowLeftRightIcon className="mr-2 h-4 w-4" /> Add transactions
          </Button>
        </Link>
        <Link className="w-full" href="/dashboard">
          <Button className="w-full justify-start" variant="link">
            <NotebookPenIcon className="mr-2 h-4 w-4" /> Plan transactions
          </Button>
        </Link>
        <Link className="w-full" href="/dashboard">
          <Button className="w-full justify-start" variant="link">
            <Grid2X2Icon className="mr-2 h-4 w-4" /> Categories
          </Button>
        </Link>
        <Link className="w-full" href="/dashboard">
          <Button className="w-full justify-start" variant="link">
            <WalletIcon className="mr-2 h-4 w-4" /> Current assets
          </Button>
        </Link>
        <Separator />
        <Link className="w-full" href="/favorites">
          <Button className="w-full justify-start" variant="link">
            <PlusIcon className="mr-2 h-4 w-4" /> Add new link
          </Button>
        </Link>
      </nav>
    </aside>
  );
}

export default FeatureSharedSidebar;
