import { render } from '@testing-library/react';

import UiSharedMonthPicker from './ui-shared-month-picker';

describe('UiSharedMonthPicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSharedMonthPicker />);
    expect(baseElement).toBeTruthy();
  });
});
