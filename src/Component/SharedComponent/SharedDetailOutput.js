import React from 'react'

function SharedDetailOutput(props) {
    const {title, output} = props
    return (
       <tr>
           <td>{title}</td>
           <td>{output}</td>
       </tr>
    )
}

export default SharedDetailOutput
