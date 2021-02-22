import React from 'react'

function SharedHeadertitle(props) {
    return (
        <div className="shadow col-sm-12 col-md-12 p-4 mb-4" style={{backgroundColor: 'white', borderRadius: 10, height: props.height || 'auto' }}>
         <label htmlFor={props.id} className="display-4">{props.title}</label>
        <input type="text" class="form-control rounded-0" id={props.id} placeholder={props.placeholder} value={props.value} />
        </div>
    )
}

export default SharedHeadertitle
