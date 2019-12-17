import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from '../../pages/Search/Search';
import Asset from '../../pages/Asset/Asset';
import FooterContainer from '../Footer/footer';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={styles['App']}>
          <main className={styles['App-content']}>
            <Route exact path="/" component={Search} />
            <Route path="/search/:query" component={Search} />
            <Route path="/asset/:id" component={Asset} />
          </main>
          <FooterContainer />
        </div>

      </Router>
    );
  }
}

export default App;
