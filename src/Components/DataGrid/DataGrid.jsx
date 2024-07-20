import React from 'react'

export function DataGrid( key, props ){

    return(
        <div className='containerData' key={key} >
            <div className='container'><span>{props.name}</span></div>
            <div className='container'><span>{props.name}</span></div>
            <div className='container'><span>{props.name}</span></div>
            <div className='container'><span>{props.name}</span></div>
            <div className='container'><span>{props.name}</span></div>
        </div>
    )
}