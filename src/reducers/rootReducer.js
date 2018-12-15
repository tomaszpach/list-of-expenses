const initState = {
    title: 'List of expenses',
    eurPln: 4.382
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
