// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;
var initialState={currentValue:0};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function increment(amt){
    return{
        type: INCREMENT,
        payload: amt
    }
}
export function decrement(amt){
    return{
        type:DECREMENT,
        payload:amt
    }
}

function reducer(state =initialState,action){
    state = Object.assign(state,{lastAction:action})
    switch(action.type){
        case INCREMENT:
        return Object.assign({},state,{
            currentValue: state.currentValue + action.payload
        });
        case DECREMENT:
        return Object.assign({},state,{
            currentValue:state.currentValue - action.payload
        });
    default:
    return state;
    }
}


export default reducer;