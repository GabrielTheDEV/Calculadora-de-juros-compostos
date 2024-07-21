import React from 'react'

export function InputComponent({ label, name, placeholder, handle }) {


    return(
        <>
        <p>{label} :</p>

            <input 
                type="text" 
                name={name}
                onChange={handle}
                placeholder={placeholder} 
            />
        </>
    )
}