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
            console.log('yo')
            return{
                ...state,
                weapons: action.payload
            }
        case 'UPDATE_LIFESUPPORT':
            console.log('yo')
            return{
                ...state,
                lifeSupport: action.payload
            }
        case 'UPDATE_POWER':
            console.log('yo')
            return{
                ...state,
                power: action.payload
            }
        case 'UPDATE_ENGINES':
            console.log('yo')
            return{
                ...state,
                engines: action.payload
            }
        default: 
            return state
    }
}

export default reducer