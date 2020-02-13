import React, { useState } from 'react';
import '../styles/App.css';
import Question from './Question'
import Form from './Form'


function App() {


const [budget, setBudget] = useState(0);
const [rest, setRest] = useState(0);
const [showquestion, setQuestion] = useState(true);
const [expenses, setExpense] = useState([]);

const newExpense = expense => {
 setExpense([
   ...expenses,
   expense
 ])
}


  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className='principal-content content'>
          {showquestion ? ( 
            <Question 
            setBudget= {setBudget}
            setRest= {setRest}
            setQuestion= {setQuestion}
          />

          ) : 
          (
            <div className='row'>
              <div className='one-half column'>
                <Form 
                newExpense= {newExpense}
                />
              </div>
              <div className='one-half column'>
            
              </div>

            </div>
          )
          }
          
          
        </div>
      </header>
    </div>
  );
}

export default App;
