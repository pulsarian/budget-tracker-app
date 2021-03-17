import { React, useContext } from 'react';
import { AppContext } from './AppContext';

const ExpenseTotal = () => {

    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    return (
        <div className="alert alert-primary">
            <span>Total expenses: ${totalExpenses}</span>
        </div>
    );
}

export default ExpenseTotal;