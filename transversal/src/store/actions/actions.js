export const RETURN_RESULT = 'RETURN_RESULT';

export const saveResult = (payload) => {
    console.log("action1: ",payload)
    return {
        type: RETURN_RESULT,
        result: payload
    }
}

export const getResult = (payload) => {
    return dispatch => {
        setTimeout(() => {
            console.log(payload)
            dispatch(saveResult(payload))
        }, 1000)
    }  
}