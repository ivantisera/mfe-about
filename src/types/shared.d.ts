import type { TolgeeInstance } from '@tolgee/core';

declare module '@shared/tolgee' {
  export const tolgee: any;
}

//TODO: Fix tolgee import implementation using systemjs!!
declare global {
  interface Window {
    tolgee: TolgeeInstance;
    tolgeeReady: Promise<void>;
  }
}
