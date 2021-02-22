import React from 'react'

function SharedDisplayWrapper(props) {
    return (
        <div className="container">
           {props.children} 
        </div>
    )
}

export default SharedDisplayWrapper
