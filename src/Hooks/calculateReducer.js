import { useEffect, useReducer } from "react";
// import { Calculator } from "../Components/Calculator/calculator";

function reducer( state , action ){
    switch(action.type){
        case 'GET_VALUE':
            return {...state, [action.field]: action.value}

        case 'CALCULATE':
            const {initial , rate , period} = state
            return {
                ...state,
                 result : initial * (1 + (rate/100)) ** period}

        default:
            return state
    }
}


export function useCalculateReducer(){
    const [state , dispatch] = useReducer( reducer , {
        initial: 0,
        monthly: 0,
        rate: 0,
        period: 0,
        result: 0
    })

    // useEffect(() => {
    //     // console.log(state.result.toFixed(2))
    //     sendOut(state.result)

    // } , [state.result])


    const setField = (field , value) => {
        dispatch({type: 'GET_VALUE', field , value})
        dispatch({type: 'CALCULATE' })
    }

    const sendOut = () => {
        return state.result
    }

    return { 
        setField,
        sendOut
    }

}