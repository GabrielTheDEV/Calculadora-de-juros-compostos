import { createContext } from "react";
import { useCalculateReducer} from '../Hooks/calculateReducer'

export const MyContext = createContext()  // Contexto!


export function ContextProvider({children}){
    const { state, setField, calculate, sendOut } = useCalculateReducer()


    function handleClick() {
        if(state.initial > 0 && state.rate > 0 && state.period > 0) { 
            return calculate()
        } 
        else{
            return alert('Algum campo esta faltando !')
        }
    }
    return(
        <MyContext.Provider value={{ handleClick , setField , sendOut}} >
            {children}
        </MyContext.Provider>
    )
}