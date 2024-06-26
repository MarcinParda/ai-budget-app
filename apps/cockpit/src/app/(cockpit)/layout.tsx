import { cn } from '@ai-budget-app/util-shared-classnames';
import { Inter as FontSans } from 'next/font/google';
import { TooltipProvider } from '@ai-budget-app/ui-shared-tooltip';
import { FeatureSharedHeader } from '@ai-budget-app/feature-shared-header';
import { cockpitProject } from '@ai-budget-app/util-project';
import '../global.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Cockpit',
  description: 'The Cockpit app that is hub for all of your applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <TooltipProvider>
          <div className="flex flex-col flex-1">
            <FeatureSharedHeader project={cockpitProject} />
            <div className="flex flex-1 w-full flex-col bg-muted/40">
              <div className="flex flex-col sm:gap-4 sm:pb-4 sm:pt-5">
                {children}
              </div>
            </div>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
