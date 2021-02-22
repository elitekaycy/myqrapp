import React from 'react'

function SharedTableComponent(props) {
    return (
        <table className="table table-hover">
         <thead className="table-dark">
          <tr>
            <td>{props.title}</td>  
            <td>{props.output}</td>
          </tr>
          </thead>
         <tbody>
           {props.children}
          </tbody>

        </table>
    )
}

export default SharedTableComponent
