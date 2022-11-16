// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Suspense } from 'react';
import styles from './app.module.less';

// import('my-library/tool').then(m => {
//   console.log(`library:`, m);
// });

const Button = React.lazy(() => import('my-library/button'));

export function App() {
  return (
    <div>
      <h1>App</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Button />
      </Suspense>
    </div>
  );
}

export default App;
