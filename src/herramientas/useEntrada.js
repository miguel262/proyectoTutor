import React, {useState} from 'react'

export const useEntrada = (initialState={}) => {
    
    const [values, setValues] = useState(initialState)

    const validaEntrada=({target})=>{
            setValues({
                ...values,
                [target.name]:target.value
            });
    }
    return [values,validaEntrada];
}