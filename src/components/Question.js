import React, {Fragment, useState} from 'react'
import Error from './Error';


const Question = () => {


  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);


  const makeBudget = e => {
    saveQuantity(parseInt(e.target.value, 10))
  }

  const addBudget = e => {
    e.preventDefault();

    if( quantity < 1 || isNaN(quantity) ) {
      saveError(true);
      return
    } 
    saveError(false)

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
 
export default Question ;