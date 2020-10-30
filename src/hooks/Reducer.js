const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'SET_IMAGES':
            return {
                ...state,
                images: action.payload,
            }
    }
};

export default Reducer;