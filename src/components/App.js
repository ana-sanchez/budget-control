import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Question from './Question'
import Form from './Form'
import List from './List'
import ControlBudget from './ControlBudget'


function App() {


const [budget, setBudget] = useState(0);
const [rest, setRest] = useState(0);
const [showquestion, setQuestion] = useState(true);
const [expenses, setExpenses] = useState([]);
const [expense, setExpense] = useState({});
const [makeExpense, setMakeExpense] = useState(false)


useEffect(() => {
  if(makeExpense) {
    setExpenses([
      ...expenses,
      expense
    ]);
    
    const restBudget = rest - expense.number;
    setRest(restBudget);
  }
  setMakeExpense(false)
 
}, [expense, makeExpense, expenses, rest])




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
                setExpense= {setExpense}
                setMakeExpense= {setMakeExpense}
                />
              </div>
              <div className='one-half column'>
                <List 
                  expenses={expenses}
                />
                <ControlBudget 
                  budget={budget}
                  rest={rest}
                />
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
