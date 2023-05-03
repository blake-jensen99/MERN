import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontents from './components/Subcontents';
import Advertisement from './components/Advertisement';
import styles from "./components/Style.module.css"
 
                
function App() {
  return (
    <div className="app">
        <Header />
        <div className='bottom'>
          <Navigation />
          <Main>
            <div className={styles.flex}>
              <Subcontents />
              <Subcontents />
              <Subcontents />
            </div>
            <Advertisement />
          </Main>
        </div>
    </div>
  );
}
                
export default App;


