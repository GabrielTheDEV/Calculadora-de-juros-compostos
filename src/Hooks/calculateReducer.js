import { useReducer } from "react";
// import { Calculator } from "../Components/Calculator/calculator";

function reducer( state , action ){
    switch(action.type){
        case 'GET_VALUE':
            return {...state, [action.field]: action.value}
        case 'CALCULATE':
            return console.log('calculate...')
        default:
            return state
    }
}


export function useCalculateReducer(){
    const [state , dispatch] = useReducer( reducer , {
        initial: 0,
        monthly: 0,
        rate: 0,
        period: 0
    })

    const setField = (field , value) => {
        dispatch({type: 'GET_VALUE', field , value})
    }

    return { 
        state,
        setField,
    }

}