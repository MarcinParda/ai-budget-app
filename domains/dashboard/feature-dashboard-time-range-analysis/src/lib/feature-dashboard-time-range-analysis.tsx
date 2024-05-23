import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ai-budget-app/ui-shared-card';
import { Progress } from '@ai-budget-app/ui-shared-progress';

export function FeatureDashboardTimeRangeAnalysis() {
  return (
    <>
      Pick time range
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>Time progress</CardDescription>
          <CardTitle className="text-4xl">15 Mar 24</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={50} aria-label="50% spent" />
        </CardContent>
      </Card>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card x-chunk="dashboard-05-chunk-2">
          <CardHeader className="pb-2">
            <CardDescription>Balance</CardDescription>
            <CardTitle className="text-4xl">+5329zł</CardTitle>
          </CardHeader>
          <CardContent>
            <div>Gained: 9349zł</div>
            <div>Spent: 4020zł</div>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="pb-2">
            <CardDescription>Planned balance</CardDescription>
            <CardTitle className="text-4xl">+3500zł</CardTitle>
          </CardHeader>
          <CardContent>
            <div>Planned gain: 9500zł</div>
            <div>Planned spent: 6000zł</div>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-05-chunk-2">
          <CardHeader className="pb-2">
            <CardDescription>Spent/Planned</CardDescription>
            <CardTitle className="text-4xl">4020zł/6000zł</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={67} aria-label="66% spent" />
            <div className="text-center pt-4">^ Collapse all categories</div>
            <div className="pt-4">
              Food: 480zł/1000zł
              <Progress value={48} aria-label="66% spent" />
            </div>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-05-chunk-2">
          <CardHeader className="pb-2">
            <CardDescription>Gained/Planned</CardDescription>
            <CardTitle className="text-4xl">9349zł/9500zł</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={94} aria-label="94% Gained" />
            <div className="text-center pt-4">^ Collapse all categories</div>
            <div className="pt-4">
              Work: 9000zł/9000zł
              <Progress value={100} aria-label="100% Gained" />
            </div>
            <div className="pt-4">
              Allegro/OLX: 349/500zł
              <Progress value={70} aria-label="100% Gained" />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
