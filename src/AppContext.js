import { createContext, useReducer } from "react";

const initialState = {
	budget: 2000,
	expenses: [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	],
    editBudgetFlag: false,
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                editBudgetFlag: state.editBudgetFlag,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [ ...state.expenses, action.payload ],
            }
        case 'DELETE_EXPENSE':  
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload),
            }
        case 'EDIT_BUDGET':
            return {
                ...state,
                editBudgetFlag: action.payload,
            }
        case 'UPDATE_BUDGET':
            return {
                ...state,
                budget: action.payload,
                editBudgetFlag: action.editBudgetFlag,
            }
        default:
			return state;
	}
};