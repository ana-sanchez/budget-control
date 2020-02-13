import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid'
import PropTypes from 'prop-types'


const Form = ({setExpense, setMakeExpense}) => {

  const [item, setItem] = useState('');
  const [number, setNumber] = useState(0)
  const [error, setError] = useState(false)

  const addExpense = e => {
    e.preventDefault();

    
    if(number < 1 || isNaN(number) || item.trim() === '') {
      setError(true);
      return;
    }
    setError(false)

     const expense = {
       item,
       number,
       id: shortid.generate()
     }

     setExpense(expense)
     setMakeExpense(true)
     setItem('');
     setNumber(0);

  }


  return ( 
    <form onSubmit={addExpense}>
          <h2>Agrega tus gastos aquí</h2>

          {error ? <Error message='Todos los campos son obligatorios o presupuesto incorrecto'/> : null }

          <div className='field'>
            <label>Nombre Gasto</label>
            <input 
              type='text'
              className='u-full-width'
              placeholder='Ej. Transporte'
              value={item}
              onChange= {e => setItem(e.target.value)}
            />
          </div>
          <div className='field'>
            <label>Gasto</label>
            <input 
              type='number'
              className='u-full-width'
              placeholder='Ej. 300'
              value= {number}
              onChange= {e => setNumber(parseInt(e.target.value, 10))}

            />
          </div>
          <input 
            type='submit'
            className='button-primary u-full-width'
            value='agregar gasto'  
          />


    </form>
   );
}


Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setMakeExpense: PropTypes.func.isRequired
}
export default Form;