import React from 'react'

function SharedDetailDisplayWrapper(props) {
    return (
        <div className="container d-flex flex-row flex-wrap flex-sm-row-reverse">
            {props.children}
        </div>
    )
}

export default SharedDetailDisplayWrapper
