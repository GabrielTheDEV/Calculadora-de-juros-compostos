import { useMemo, useReducer } from "react";

function reducer( state , action ){
    switch(action.type){
        case 'GET_VALUE':
            return {...state, [action.field]: action.value}

        case 'CALCULATE':
            const { initial , monthly, rate , period } = state
            const resultx = initial * (1 + rate/100) ** period 
            const totalInvx = initial -  monthly * period 
            const totalRatex = resultx - initial + monthly * period

            return{...state, result: resultx, totalInv: totalInvx , totalRate: totalRatex}

        default:
            return state
    }
} 

export function useCalculateReducer(){
    const [state , dispatch] = useReducer( reducer , {
        initial: 0,
        monthly: 0,
        period: 0,
        rate:  0,
        
        result: 0,
        totalInv: 0,
        totalRate: 0
    })

    const setField = (field , value) => {
        dispatch({type: 'GET_VALUE', field , value})
    }
    const calculate = () => {
         dispatch({type: 'CALCULATE' })
        //  console.log('Working...')
    }

    const sendOut = useMemo(() => ({
        result: state.result,
        totalInv: state.totalInv,
        totalRate : state.totalRate
    
    }),[state.result, state.totalInv, state.totalRate])
    

    return { 
        state,
        setField,
        calculate,
        sendOut
    }

}
