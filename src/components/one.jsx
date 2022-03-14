import { useContext } from 'react';
import { CountContext } from '../context/count';

export default function One(props) {
  const { count, jump } =
    useContext(CountContext);

  return (
    <div className='one'>
      <h1>{count}</h1>
      <button
        onClick={() => {
          jump(10);
        }}
      >
        Jump by 10
      </button>
    </div>
  );
}
