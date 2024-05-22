import Link from 'next/link';
import {
  Home,
  LineChart,
  Mail,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  PlusIcon,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@ai-budget-app/ui-shared-tooltip';
import { Button } from '@ai-budget-app/ui-shared-button';
import { Separator } from '@ai-budget-app/ui-shared-separator';

export function FeatureSharedSidebar() {
  return (
    <aside className="w-48 inset-y-0 left-0 z-10 hidden flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col justify-start items-center px-2 sm:py-5">
        <Link className="w-full" href="/dashboard">
          <Button className="w-full justify-start" variant="link">
            <Home className="mr-2 h-4 w-4" /> Dashboard
          </Button>
        </Link>
        <Link className="w-full" href="/dashboard">
          <Button className="w-full justify-start" variant="link">
            <Home className="mr-2 h-4 w-4" /> Add transactions
          </Button>
        </Link>
        <Link className="w-full" href="/dashboard">
          <Button className="w-full justify-start" variant="link">
            <Home className="mr-2 h-4 w-4" /> Plan transactions
          </Button>
        </Link>
        <Link className="w-full" href="/dashboard">
          <Button className="w-full justify-start" variant="link">
            <Home className="mr-2 h-4 w-4" /> Categories
          </Button>
        </Link>
        <Link className="w-full" href="/dashboard">
          <Button className="w-full justify-start" variant="link">
            <Home className="mr-2 h-4 w-4" /> Current assets
          </Button>
        </Link>
        <Separator />
        <Link className="w-full" href="/favorites">
          <Button className="w-full justify-start" variant="link">
            <PlusIcon className="mr-2 h-4 w-4" /> Add new link
          </Button>
        </Link>
      </nav>
      <nav className="mt-auto flex flex-col items-center px-2 sm:py-5">
        <Link className="w-full" href="/setting">
          <Button className="w-full justify-start" variant="link">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </Link>
      </nav>
    </aside>
  );
}

export default FeatureSharedSidebar;
