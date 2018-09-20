import React, { Component } from 'react';
import Header from './app/Header';
import Footer from './app/Footer';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header/>
        <main>
          This is the main section.
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;