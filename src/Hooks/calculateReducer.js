import { useReducer } from "react";

function reducer( state , action ){
    switch(action.type){
        case 'GET_VALUE':
            return {...state, [action.field]: action.value}

        case 'CALCULATE':{
            const { initial , monthly, rate , period } = state
            const resultx = initial * (1 + rate/100) ** period 
            const totalInvx = initial -  monthly * period 
            const totalRatex = resultx - initial + monthly * period

            return{...state, result: resultx, totalInv: totalInvx , totalRate: totalRatex}
        }
        
        case 'CREATE_TABLE':{
            const { initial, monthly,rate, period } = state;
            let tableData = []
            let time = 12 * period
            
            for(let i = 0; i< time; i++){
                let amount = initial * (1 + rate/100) ** (i/12)
                let totalInv = initial - monthly*(i/12)
                let totalRate = amount - initial + monthly * (i / 12);
                
                tableData.push({
                    period: i,
                    amount: amount.toFixed(2),
                    totalInv:totalInv.toFixed(2),
                    totalRate: totalRate.toFixed(2)
                })
                
            }
            return{...state, tableData}
            
        }    
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
        totalRate: 0,
        tableData:[]
    })

    const setField = (field , value) => {
        dispatch({type: 'GET_VALUE', field , value})
    }
    const calculate = () => {
         dispatch({type: 'CALCULATE' })
        
         dispatch({type: 'CREATE_TABLE' })
    }

    const sendOut = {
        result: state.result,
        totalInv: state.totalInv,
        totalRate: state.totalRate,
        table: state.tableData
    }


    return { 
        state,
        setField,
        calculate,
        sendOut
    }

}
