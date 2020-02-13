import React, {Fragment, useState} from 'react'
import Error from './Error';
import PropTypes from 'prop-types'



const Question = ({setBudget, setRest, setQuestion}) => {


  const [quantity,setQuantity] = useState(0);
  const [error, setError] = useState(false);


  const makeBudget = e => {
    setQuantity(parseInt(e.target.value, 10))
  }

  const addBudget = e => {
    e.preventDefault();

    if( quantity < 1 || isNaN(quantity) ) {
      setError(true);
      return;
    } 
    setError(false);
    setBudget(quantity);
    setRest(quantity);
    setQuestion(false);

  }


  return ( 
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error  message='El presupuesto es incorrecto'/> : null}
      <form onSubmit={addBudget}>
        <input 
          type='number'
          className='u-full-width'
          placeholder='Coloca tu presupuesto'
          onChange={makeBudget}
        />
        <input 
          type='submit' 
          className='button-primary u-full-width'
          value='Definir presupuesto'
        />

      </form>
    </Fragment>
   );
}

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRest: PropTypes.func.isRequired,
  setQuestion: PropTypes.func.isRequired

}

export default Question ;