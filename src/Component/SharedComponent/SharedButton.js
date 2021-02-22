import React from 'react'
import SharedColWrappers from './SharedColWrappers'

function SharedButton(props) {
    return (
        <SharedColWrappers className="col-sm-12 col-md-12 mb-5">
            <div className="lead">{props.header}</div>
            <button onClick={props.onClick} className="btn btn-primary w-100 rounded-0 lead">{props.title}</button>
        </SharedColWrappers>
    )
}

export default SharedButton
