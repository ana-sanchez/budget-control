import React from 'react';
import PropTypes from 'prop-types'


const Expense = ({expense}) => (
  <li className='expenses'>
    <p>
      {expense.item}
      <span className='expanse'> {expense.number} €</span>
    </p>
  </li>
)

Expense.propTypes = {
  expense: PropTypes.object.isRequired
}
export default Expense;