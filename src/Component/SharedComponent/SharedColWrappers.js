import React from 'react'

function SharedColWrappers(props) {
    return (
        <div className={props.className}>
              <div className="shadow p-4" style={{backgroundColor: 'white', borderRadius: 10, width: '100%'}}>
               {props.children}
              </div>   
        </div>
    )
}

export default SharedColWrappers
