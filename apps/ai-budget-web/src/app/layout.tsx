import { cn } from '@ai-budget-app/util-shared-classnames';
import { Inter as FontSans } from 'next/font/google';
import { TooltipProvider } from '@ai-budget-app/ui-shared-tooltip';
import { FeatureSharedSidebar } from '@ai-budget-app/feature-shared-sidebar';
import { FeatureSharedHeader } from '@ai-budget-app/feature-shared-header';
import './global.css';
import { aiBudgetProject } from '@ai-budget-app/util-project';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'AI budget',
  description:
    'The AI-Powered Budget Planner app that uses AI to help you manage your finances more effectively.',
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
            <FeatureSharedHeader project={aiBudgetProject} />
            <div className="flex flex-1">
              <FeatureSharedSidebar />
              <div className="flex flex-1 w-full flex-col bg-muted/40">
                <div className="flex flex-col sm:gap-4 sm:pb-4 sm:pt-5">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
