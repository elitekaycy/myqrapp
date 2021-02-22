import React, { useState } from 'react'
import Login from './Login'
import Signup from './SignUp'

function AuthWrapper() {
    const [authNavigate, setAuthNavigate] = useState(false)
    return (
       <div>
        {authNavigate ? <Login onNavigate={() => setAuthNavigate(false)} /> : <Signup onNavigate={() => setAuthNavigate(true)} /> }
       </div>
    )
}

 
export default AuthWrapper
