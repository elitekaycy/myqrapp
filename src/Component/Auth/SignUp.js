import React from 'react'

function Signup(props) {

    const { onNavigate } = props

    return (
        <div className="position-relative">
        <div className="lead p-3 text-center">Signup</div>
        <form>
            <div className="formClass mb-4">
            <input type="email" className="form-control rounded-0" id="email" placeholder="Enter email" />
            </div>
            <div className="formClass mb-4">
            <input type="username" className="form-control rounded-0" id="username" placeholder="Enter username" />
            </div>
            <div className="formClass mb-4">
            <input type="password" className="form-control rounded-0" id="password" placeholder="Enter password" />
            </div>
            <div className="submit">
               <button className="btn btn-primary rounded-0 w-100">Submit</button>
            </div>
            <div className="p-2 text-center"> 
             <div> Nostrud ullamco culpa duis ?</div>
             <div className="p-1" style={{cursor: 'pointer', color: 'blue'}} onClick={onNavigate}>Login</div>
            </div>
           
        </form>
        </div>
    )
}

export default Signup
