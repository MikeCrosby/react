import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.RETURN_RESULT:
            console.log(action.result)
            return {
                ...state,
                results: state.results.concat({value: action.result})
            }
    }
    return state;
};

export default reducer;