const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_CURRENT':
            return {
                ...state,
                current: action.payload
            }
        case 'UPDATE_ENCOUNTER':
            return{
                ...state,
                encounter: action.payload
            }
        case 'UPDATE_RESOLUTION':
            return{
                ...state,
                resolution: action.payload
            }
        case 'UPDATE_WEAPONS':
            return{
                ...state,
                weapons: action.payload
            }
        case 'UPDATE_LIFESUPPORT':
            return{
                ...state,
                lifeSupport: action.payload
            }
        case 'UPDATE_POWER':
            return{
                ...state,
                power: action.payload
            }
        case 'UPDATE_ENGINES':
            return{
                ...state,
                engines: action.payload
            }
        default: 
            return state
    }
}

export default reducer