import React from 'react'

function SharedCardComponent(props) {
    return (
        <div className="formgroup mb-4">
        <label htmlFor={props.id} className="lead">{props.title}</label>
        <input type="text" class="form-control rounded-0" id={props.id} placeholder={props.placeholder} value={props.value}/>
     </div>
    )
}

export default SharedCardComponent
