'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@ai-budget-app/ui-shared-button';
import { cn } from '@ai-budget-app/util-shared-classnames';
import { MonthCalendar } from '@ai-budget-app/ui-shared-month-calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@ai-budget-app/ui-shared-popover';

export function MonthPicker() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'MMMM yyyy') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <MonthCalendar currentMonth={date} onMonthChange={setDate} />
      </PopoverContent>
    </Popover>
  );
}
