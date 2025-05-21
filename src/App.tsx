import { useTranslate } from '@tolgee/react';

const App = () => {
  const { t } = useTranslate();

  return (
    <>
      <h1>MFE About Home Page</h1>
      <p>{t('my_name')}</p>
    </>
  );
};

export default App;
