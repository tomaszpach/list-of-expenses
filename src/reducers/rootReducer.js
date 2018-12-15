const initState = {
    title: 'List of expenses',
    eurPln: 4.382,
    transactions: [
        {
            title: 'New book about Rust',
            value: 100,
            id: 1544882981030
        },
        {
            title: 'Snacks for a football match',
            value: 20,
            id: 1544882981031
        },
        {
            title: 'Bus ticket',
            value: 2.55,
            id: 1544882981032
        }
    ]
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

        default:
            return state;
    }
};

export default rootReducer;
