import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import FooterContainer from '../Footer/footer';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={styles['App']}>
          <main className={styles['App-content']}>
            <Route exact path="/" component={Home} />
          </main>
          <FooterContainer />
        </div>

      </Router>
    );
  }
}

export default App;
