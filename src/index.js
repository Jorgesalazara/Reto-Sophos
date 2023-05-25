import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import App from './Alquileres/App';
import Page from './Clientes/Page';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/App" element={<App />} />
          <Route path="/Page" element={<Page />} />
        </Routes>
      </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
