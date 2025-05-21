import React from 'react';
import { render } from '@testing-library/react';
import { Tolgee, TolgeeProvider, FormatSimple } from '@tolgee/react';

export function renderWithTolgee(
  ui: React.ReactElement,
  {
    language = 'en',
    translations = {},
  }: {
    language?: string;
    translations?: Record<string, string>;
  } = {},
) {
  const tolgee = Tolgee()
    .use(FormatSimple())
    .init({
      language,
      fallbackLanguage: 'en',
      staticData: {
        [language]: translations,
      },
    });

  return tolgee.run().then(() => render(<TolgeeProvider tolgee={tolgee}>{ui}</TolgeeProvider>));
}
