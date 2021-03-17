import { React, useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from './AppContext';

const ExpenseItem = (props) => {

    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        console.log('clicked')
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    return (
        <>
            {props.name}
            <div>
                <span className='badge badge-primary badge-pill mr-3'>
                    ${props.cost}
                </span>
                <TiDelete size="1.5em" onClick={handleDeleteExpense} cursor="pointer"></TiDelete>
            </div>
        </>
    );
}

export default ExpenseItem;