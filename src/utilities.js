const updateCurrent = (value, dispatch) => {

    dispatch({type:'UPDATE_CURRENT', payload: value})

} 

const getRandomInteger = (min, max) => {
    Math.floor(Math.random() * (max - min + 1) + min)
}

export {
    updateCurrent,
    getRandomInteger,
}