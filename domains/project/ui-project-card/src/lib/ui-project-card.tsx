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
  url: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}

export function UiProjectCard({
  title,
  description,
  url,
  Icon,
}: UiProjectCardProps) {
  return (
    <a href={url} className="cursor-pointer">
      <Card className="w-[350px] transition-all bg-background hover:bg-muted">
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
    </a>
  );
}
