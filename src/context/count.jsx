import { useState, createContext } from 'react';

export const CountContext = createContext();

export function Count(props) {
  const [count, setCount] = useState(100000);

  const jump = (jumpBy) => {
    setCount(count + jumpBy);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <CountContext.Provider
      value={{ count, setCount, jump, reset }}
    >
      {props.children}
    </CountContext.Provider>
  );
}
