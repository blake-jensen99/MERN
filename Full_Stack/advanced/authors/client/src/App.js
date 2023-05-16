import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Dash from './components/Dash';
import { New } from './components/New';
import Edit from './components/Edit';
import None from './components/None';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Dash/>} path='/' />
        <Route element={<New/>} path='/new' />
        <Route element={<Edit/>} path='/edit/:id' />
        <Route element={<None/>} path='/none' />
      </Routes>
    </div>
  );
}

export default App;
