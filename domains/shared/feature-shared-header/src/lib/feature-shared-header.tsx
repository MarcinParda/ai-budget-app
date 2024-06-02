import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@ai-budget-app/ui-shared-sheet';
import { Button } from '@ai-budget-app/ui-shared-button';
import {
  BellIcon,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  SmileIcon,
  Users2,
} from 'lucide-react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@ai-budget-app/ui-shared-breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ai-budget-app/ui-shared-dropdown-menu';
import { headers } from 'next/headers';
import { routes } from '@ai-budget-app/util-shared-routes';
import { Project } from '@ai-budget-app/util-project';

interface FeatureSharedHeaderProps {
  project: Project;
}

export function FeatureSharedHeader({ project }: FeatureSharedHeaderProps) {
  const { Icon, name } = project;
  const headerList = headers();
  const pathname = headerList.get('x-current-path');
  const currentRoute = Object.values(routes).find(
    (route) => route.url() === pathname
  );

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-card sm:h-auto sm:py-3 sm:gap-0">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              Orders
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Package className="h-5 w-5" />
              Products
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Users2 className="h-5 w-5" />
              Customers
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex">
        <div className="flex sm:pl-6 gap-2 items-center font-medium text-xl w-48">
          <Icon className="w-8 h-8" />
          <span>{name}</span>
        </div>
      </div>
      <div className="flex flex-1 sm:px-6">
        {currentRoute && (
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              {currentRoute.breadcrumbs.map((breadcrumb, index) => (
                <>
                  <BreadcrumbItem key={index}>
                    {breadcrumb.url !== currentRoute.url() ? (
                      <BreadcrumbLink asChild>
                        <>
                          {breadcrumb.isExternalUrl && (
                            <a href={breadcrumb.url}>{breadcrumb.label}</a>
                          )}
                          {!breadcrumb.isExternalUrl && (
                            <Link href={breadcrumb.url}>
                              {breadcrumb.label}
                            </Link>
                          )}
                        </>
                      </BreadcrumbLink>
                    ) : (
                      <span className="font-bold">{breadcrumb.label}</span>
                    )}
                  </BreadcrumbItem>
                  {index !== currentRoute.breadcrumbs.length - 1 && (
                    <BreadcrumbSeparator />
                  )}
                </>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
        <div className="flex flex-1 justify-end gap-2 items-center">
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <BellIcon className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <SmileIcon className="h-5 w-5" />
                {/* <Image
                src="/placeholder-user.jpg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              /> */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default FeatureSharedHeader;
