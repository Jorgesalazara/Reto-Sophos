import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import App from './App';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showApp: false
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showApp: !prevState.showApp
    }));
  }

  render() {
    return (
      <div>
        {this.state.showApp ? <App /> : <Home handleButtonClick={this.handleClick} />}
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));