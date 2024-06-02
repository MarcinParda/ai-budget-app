import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from '@ai-budget-app/ui-shared-card';
import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface UiProjectCardProps {
  title: string;
  description: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}

export function UiProjectCard({
  title,
  description,
  Icon,
}: UiProjectCardProps) {
  return (
    <Card className="w-[350px] cursor-pointer transition-all bg-muted hover:bg-background">
      <CardContent className="py-6">
        <div className="flex gap-5">
          <Icon className="w-10 h-10" />
          <div className="flex-1 pt-2">
            <CardTitle className="pb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
