import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';

const Budget = () => {

    const { budget, dispatch } = useContext(AppContext);

    const handleBudgetEdit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_BUDGET',
            payload: true,
        });
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: ${budget}</span>
            <button className='badge badge-primary float-right' onClick={handleBudgetEdit} cursor="pointer">
                Edit
            </button>
        </div>
    );
}

export default Budget;