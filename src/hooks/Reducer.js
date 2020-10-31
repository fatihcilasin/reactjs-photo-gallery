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
        case 'TOGGLE_IMAGE_MODAL':
            return {
                ...state,
                showImageModal: action.payload,
            }
        case 'UPDATE_SELECTED_IMAGE':
            return {
                ...state,
                selectedImage: action.payload,
            }
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites.filter( fav => { return fav.id !== action.payload.id } )]
            }
    }
};

export default Reducer;