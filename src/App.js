import React, {Component} from 'react';
import Counter from './Counter';

// let { name, count, increment, decrement, changeName } = Counter;

class App extends Component {
  render() {
    return (
      <div>
        <input name="name" value={Counter.name} onChange={Counter} placeholder="Hi, what's your name" />
        <p>{Counter} clicked {Counter} times</p>
        <button onClick={Counter}>-</button>
        <button onClick={Counter}>+</button>
      </div>
    )
  }
}

export default App;