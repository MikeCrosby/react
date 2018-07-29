const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === 'SUBTRACT') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    if (action.type === 'STORE') {
        return {
            ...state,
            results: state.results.concat({id: new Date().valueOf(), value: state.counter})
        }
    }
    if (action.type === 'REMOVE') {
        const updatedArray = state.results.filter(result => result.id !== action.resultId)
        return {
            ...state,
            results: updatedArray
        }
    }
    return state
}

export default reducer