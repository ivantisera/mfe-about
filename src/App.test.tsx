import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { renderWithTolgee } from './test-utils';

describe('App Component', () => {
  it('renders localized content correctly', async () => {
    await renderWithTolgee(<App />, {
      language: 'en',
      translations: {
        my_name: 'Iván Tisera EN',
      },
    });

    const h1 = screen.getByText('MFE Template Home Page');
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe('H1');

    const p = screen.getByText('Iván Tisera EN');
    expect(p).toBeInTheDocument();
    expect(p.tagName).toBe('P');
  });
});
