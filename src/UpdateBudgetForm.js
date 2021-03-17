import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';

const UpdateBudgetForm = () => {
    
    const { editBudgetFlag, budget, dispatch } = useContext(AppContext);
    const [ newBudget, updateBudget ] = useState(budget);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'UPDATE_BUDGET',
            payload: newBudget,
            editBudgetFlag: false,
        });
    }
    
    if (editBudgetFlag) {
        return (
            <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Updated Budget</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='new-budget'
                        value={newBudget}
                        onChange={(event) => updateBudget(event.target.value)}
                    ></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Update
                    </button>
                </div>
            </div>
        </form>
        );
    }
    return null;
};

export default UpdateBudgetForm;