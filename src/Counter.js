import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const decrement = () => setCount(c => c - 1);
  const increment = () => setCount(c => c + 1);
  const changeName = e => setName(e.target.value);

  return (
    <div>
      <input name="name" value={name} onChange={changeName} placeholder="Hi, what's your name" />
      <p>{name} clicked {count} times</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;



