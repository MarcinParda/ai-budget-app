import { FeatureSharedHeader } from '@ai-budget-app/feature-shared-header';
import { cockpitProject } from '@ai-budget-app/util-project';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1">
      <FeatureSharedHeader project={cockpitProject} />
      <div className="flex flex-1 w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:pb-4 sm:pt-5">{children}</div>
      </div>
    </div>
  );
}
