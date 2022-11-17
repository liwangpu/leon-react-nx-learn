import { memo } from 'react';
// import * as aaa from 'react-dom';

const Button = memo(props => {

  const test = () => {
    console.log(`button click`);
  };
  return (
    <button onClick={test}>按钮</button>
  );
});

export default Button;