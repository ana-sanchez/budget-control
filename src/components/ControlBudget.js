import React, { Fragment } from 'react';
import { reviewBudget } from '../helpers'
import PropTypes from 'prop-types'


const ControlBudget = ({budget, rest}) => {
  return ( 
    <Fragment>
      <div className='alert alert-primary'>
        Presupuesto: {budget} €
      </div>
      <div  className={reviewBudget(budget, rest)}>
        Restante: {rest} €
      </div>
    </Fragment>
   );
}

ControlBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired
}
 
export default ControlBudget;