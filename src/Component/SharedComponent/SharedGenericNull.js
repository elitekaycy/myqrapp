import React from 'react'
import Nodata from '../../Assets/svg/Nodata.svg'
import { Link, withRouter } from 'react-router-dom'

function SharedGenericNull(props) {
    //this component gives generic messages

    // const NavigatetoAddPage = () => {
    //    props.history.replace(`/${props.generic}/create`)
    // }


    return (
       <div className="m-5 p-2 d-flex flex-column justify-content-center align-items-center" style={{height: 'auto'}}>
         <div className="p-3 w-100 h-100" style={{maxWidth: 300, maxHeight: 300, minWidth: 200, minHeight: 200}}> 
         <img className="img-fluid" src={Nodata} alt="no data" />
         </div>
         <div className="display-4">No {props.generic}</div>
         <div className="mt-2 w-50" style={{}}>
           <Link to={`${props.generic}/create`}>
          <button className="btn btn-outline-primary w-100 rounded-0">Add {props.generic}</button>
          </Link>
         </div>
       </div>
    )
}

export default withRouter(SharedGenericNull)
