'use client';

import { TooltipProvider } from '@ai-budget-app/shared/ui-shared-tooltip/src';
import { tanstackQueryClient } from '@ai-budget-app/shared/util-shared-api/src';
import { QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={tanstackQueryClient}>
      <SessionProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
