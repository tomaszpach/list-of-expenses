const initState = {
    title: 'List of expenses',
    eurPln: 4.382,
    transactions: []
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                transactions: [...state.transactions, action.expense]
            };

        case 'DELETE_EXPENSE':
            return {
                ...state,
                transactions: state.transactions.filter(element => element.id !== action.id)
            };

        case 'UPDATE_CURRENCY':
            return {
                ...state,
                eurPln: action.eurPln
            };

        default:
            return state;
    }
};

export default rootReducer;
