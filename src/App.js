import React, { Component } from 'react';
import Ninjas from './Ninjas';


class App extends Component {
  state = {
    ninjas : [
        {name: 'Carlos', age: 26, belt: 'red', id: 1 },
        {name: 'Eliza', age: 18, belt: 'black', id: 2 },
        {name: 'Olena', age: 26, belt: 'blue', id: 3 },
        {name: 'Susi', age: 21, belt: 'blue', id: 4 }
    ]
}
  render() {
    return (
      <div className="App">
      <h1>My first React App</h1>
      <p>welcome! :)</p>
      <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
