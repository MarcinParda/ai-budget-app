'use client';

import { TooltipProvider } from '@ai-budget-app/shared/ui-shared-tooltip/src';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </SessionProvider>
  );
}
