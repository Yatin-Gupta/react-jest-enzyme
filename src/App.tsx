import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import SampleComponent from './components/sample/SampleComponent';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Route path="/sample" component={SampleComponent} />
      </Router>
    );
  }
}

export default App;
