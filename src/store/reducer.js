const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_CURRENT':
            return {
                ...state,
                current: action.payload
            }
        case 'TOGGLE_ENCOUNTER':
            return{
                ...state,
                encounter: action.payload
            }
        default: 
            return state
    }
}

export default reducer