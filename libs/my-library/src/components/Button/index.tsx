import React, { memo } from 'react';

const Button = memo(props => {

  const test = () => {
    console.log(`button click`,);
  };
  return (
    <button onClick={test}>按钮</button>
  );
});

export default Button;