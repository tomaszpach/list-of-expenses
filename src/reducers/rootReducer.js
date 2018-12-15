const initState = {
    title: 'List of expenses',
    eurPln: 4.382,
    transactions: [
        {
            title: 'New book about Rust',
            value: 100,
        },
        {
            title: 'Snacks for a football match',
            value: 20,
        },
        {
            title: 'Bus ticket',
            value: 2.55,
        }
    ]
};

const rootReducer = (state = initState, action) => {
    console.log({state});
    console.log({action});
    switch (action.type) {
        case 'TOGGLE_LOADER':
            return {
                ...state,
                loading: action.toggle
            };

        default:
            return state;
    }
};

export default rootReducer;
