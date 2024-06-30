import { render } from '@testing-library/react';

import UiSharedLabel from './ui-shared-label';

describe('UiSharedLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSharedLabel />);
    expect(baseElement).toBeTruthy();
  });
});
