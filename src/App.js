import React from 'react';
import './App.css';
import PeopleList from './components/info/PeoplesList'
import Header from './components/navs/Header'

function App() {
  return (
    <section className='body'>
    <div className="App">
      <Header/>
      <PeopleList/>
      </div>
      </section>
  );
}

export default App;
