import React, { Component } from 'react';
import Ninjas from './Ninjas';


class App extends Component {
  state = {
    ninjas : [
        {name: 'Carlos', age: 25, belt: 'black', id: 1 },
        {name: 'Miguel', age: 26, belt: 'purple', id: 2 },
        {name: 'Olena', age: 27, belt: 'blue', id: 3 },
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
