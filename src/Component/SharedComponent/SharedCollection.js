import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function SharedCollection(props) {

    const NavigatetoCollection = () => {
        props.history.push(`main/${props.header}`)
    }

    return (
        // <Link to={`main/${props.header}`}>
        <div onClick={NavigatetoCollection} className="App-hover jumbotron m-1 shadow d-flex flex-wrap flex-column justify-content-start align-items-start p-5 h-100 w-100" style={{
            backgroundColor: props.color, 
            maxWidth: 350, 
            maxHeight: 350,
            cursor: 'pointer'
            }}>
         <div className="display-4 text-white">{props.header}</div>
         <div className="lead text-white">{props.subdesc}</div>
        </div>
        // </Link>
    )
}

export default withRouter(SharedCollection)
