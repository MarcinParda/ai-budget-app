import { cn } from '@ai-budget-app/util-shared-classnames';
import { Inter as FontSans } from 'next/font/google';
import { Providers } from './providers';
import './global.css';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
