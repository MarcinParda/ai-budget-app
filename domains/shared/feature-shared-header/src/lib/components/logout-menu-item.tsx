'use client';

import { DropdownMenuItem } from '@ai-budget-app/shared/ui-shared-dropdown-menu/src';
import { logout } from '@ai-budget-app/shared/util-shared-auth/src';

export function LogoutMenuItem() {
  return <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>;
}
