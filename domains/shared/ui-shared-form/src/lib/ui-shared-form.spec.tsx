import { render } from '@testing-library/react';

import UiSharedForm from './ui-shared-form';

describe('UiSharedForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSharedForm />);
    expect(baseElement).toBeTruthy();
  });
});
