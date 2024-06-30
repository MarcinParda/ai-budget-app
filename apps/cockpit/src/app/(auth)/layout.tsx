import { cn } from '@ai-budget-app/util-shared-classnames';
import { Inter as FontSans } from 'next/font/google';
import '../global.css';
import Image from 'next/image';

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
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
          <div className="flex items-center justify-center py-12">
            {children}
          </div>
          <div className="hidden bg-muted lg:block">
            <Image
              src="/placeholder.svg"
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
