import { createRoot } from 'react-dom/client';
import App from './App';
import { TolgeeProvider } from '@tolgee/react';

let root: ReturnType<typeof createRoot>;

export async function bootstrap() {}

export async function mount(props: { domElementGetter?: () => HTMLElement }) {
  const container =
    props.domElementGetter?.() || document.getElementById('microfrontend-container');
  if (!container) throw new Error('Container not found');

  const { tolgee, tolgeeReady } = window; //TODO: Fix tolgee import implementation using systemjs!!
  await tolgeeReady;

  root = createRoot(container);
  root.render(
    <TolgeeProvider tolgee={tolgee} fallback={'Loading...'}>
      <App />
    </TolgeeProvider>,
  );
}

export async function unmount() {
  root?.unmount();
}
