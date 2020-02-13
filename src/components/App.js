import React from 'react';
import '../styles/App.css';
import Question from './Question'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className='principal-content content'>
          <Question />
        </div>
      </header>
      
    </div>
  );
}

export default App;
