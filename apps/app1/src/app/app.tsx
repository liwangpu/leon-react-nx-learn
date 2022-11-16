// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.less';

import('my-library/tool').then(m => {
  console.log(`library:`, m);
});

export function App() {
  return (
    <div>App1</div>
  );
}

export default App;
