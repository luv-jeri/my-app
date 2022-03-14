import React from 'react';
import { useContext } from 'react';
import { CountContext } from '../context/count';

export default function Two() {
  const { count, setCount, reset } =
    useContext(CountContext);

  return (
    <div className='two'>
      Value is here - {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Inc Form one !
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}
