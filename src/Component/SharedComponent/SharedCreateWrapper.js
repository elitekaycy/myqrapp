import React from 'react'

function SharedCreateWrapper(props) {
    return (
    <form id={props.id} onSubmit={props.onSubmit}>
        <div>
        <div className="m-3 row g-0 ">
        {props.children}
        </div>
        </div>
    </form>
    )
}

export default SharedCreateWrapper
