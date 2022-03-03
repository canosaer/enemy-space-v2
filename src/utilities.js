const updateCurrent = (value, dispatch) => {

    dispatch({type:'UPDATE_CURRENT', payload: value})

} 

export {
    updateCurrent,
}