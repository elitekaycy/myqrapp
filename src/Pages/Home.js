import React from 'react'
import { withRouter } from 'react-router-dom'
import Authwrapper from '../Component/Auth/AuthWrapper'



function Home(props) {
    return (
        <div className="position-relative  vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="display-4">Qstore</div>
        <div className="container w-100" >
        <Authwrapper />
        </div>  
        </div>
    )
}

export default withRouter(Home)
