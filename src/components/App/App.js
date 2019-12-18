import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from '../../pages/Search/Search';
import FooterContainer from '../Footer/footer';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={styles['App']}>
          <main className={styles['App-content']}>
            <Route exact path="/" component={Search} />
          </main>
          <FooterContainer />
        </div>

      </Router>
    );
  }
}

export default App;
