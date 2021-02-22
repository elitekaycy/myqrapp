import React from 'react'
import { withRouter } from 'react-router-dom'


function SharedDisplay(props) {
  const RoutetoDetail = () => {
    props.history.push(`${props.info}/${props.id}`)
  }

   const { organization, name, timeCreated} = props
   const refinedname = name[0] + name[1]
   

   const colors = ['bg-primary', 'bg-dark', 'bg-success', 'bg-danger', 'bg-info', 'bg-secondary']
   const Currentcolor =  Math.floor(Math.random() * 5);

    return ( 
     
      <div onClick={RoutetoDetail} className={`App-hover card rounded-start shadow-sm text-center mb-3 `} style={{
        cursor: 'pointer',
        background: "linear-gradient(90deg,#f9f9f9 0%, #eff0f0 80%)",   
        }}>
        
      
      <div className="card-header container-fluid d-flex flex-row justify-content-between align-items-center p-2">
      <div className="lead">{organization}</div>
         <div className="App-hover p-1 rounded bg-white" style={{width: 40, height: 40}}>
          <img src={props.logo} alt="qrcode" className="img-fluid"/>
          </div>
        </div>
        
       <div className="container d-flex flex-row justify-content-center align-items-center p-4">
         <div className={`display-4  text-white p-2 rounded ${colors[Currentcolor]}`}>{refinedname}</div>
         <div className="lead ml-1">{name}</div>
      </div>
     
     <div className="card-footer lead">
      {timeCreated}
     </div>

    </div>
  
    )
}

export default withRouter(SharedDisplay)
