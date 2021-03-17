import React from 'react';

const SearchExpense = () => {
    
    
    return (
        <div className='row'>
            <div className='col-sm'>
                <input
                    required='required'
                    type='text'
                    className='form-control'
                    id='new-budget'
                    placeholder="Type to search..."
                ></input>
            </div>
        </div>
    );
}

export default SearchExpense;
