import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

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

export const ContextProvider = (props) => {
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

