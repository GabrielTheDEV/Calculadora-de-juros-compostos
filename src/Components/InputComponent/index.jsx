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
                className='w-80 font-normal text-gray-700 p-2.5 border border-black'
            />
        </>
    )
}