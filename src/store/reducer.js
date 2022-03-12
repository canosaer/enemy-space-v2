const reducer = (state, action) => {
    switch(action.type) {
        case 'MOUNT_STATE':
            return {
                ...state,
                ...action.payload
            }
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
        case 'UPDATE_GAME_OVER':
            return{
                ...state,
                gameOver: action.payload
            }
        case 'UPDATE_WIN':
            return{
                ...state,
                win: action.payload
            }
        case 'UPDATE_BEGIN':
            return{
                ...state,
                begin: action.payload
            }
        case 'RESET_GAME':
            return{
                ...state,
                weapons: 3,
                lifeSupport: 3,
                engines: 3,
                power: 3,
                encounter: action.payload,
                resolution: action.payload,
                gameOver: false,
                win: false,
                begin: true
            }
        default:
            return state
    }
}

export default reducer