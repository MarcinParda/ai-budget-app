import { UiProjectCard } from '@ai-budget-app/ui-project-card';
import { PiggyBankIcon } from 'lucide-react';

export default function Index() {
  return (
    <div className="flex items-center justify-center">
      <UiProjectCard
        Icon={PiggyBankIcon}
        description="A budgeting app that helps you plan & manage your finances with
              help of AI."
        title="AI Budget"
      />
    </div>
  );
}
