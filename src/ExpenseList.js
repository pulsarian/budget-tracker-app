import { React, useContext, useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from './AppContext';

const ExpenseList = () => {
    
    const { expenses } = useContext(AppContext);
    const [ filteredExpenses, setFilteredExpenses ] = useState(expenses);

    useEffect(() => {
        setFilteredExpenses(expenses);
    }, [expenses]);
    
    const filterExpensesHandler = (event) => {
        setFilteredExpenses(expenses.filter(expense => expense.name.startsWith(event.target.value)));
    }

    return (
        <div>        
            <div className="row mt-3">
                <div className='col-sm' style={{marginBottom: "20px"}}>
                    <input  
                        required='required'
                        type='text'
                        id='filter-expenses'
                        className='form-control'
                        placeholder="Type to search..."
                        onChange={filterExpensesHandler}
                    ></input>
                </div>
            </div>
            <ul className="list-group">
            {filteredExpenses.map((expense) => (
                <li className='list-group-item d-flex justify-content-between align-items-center'>
                    <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
                </li>
            ))}
            </ul>
        </div>
    );
}

export default ExpenseList;