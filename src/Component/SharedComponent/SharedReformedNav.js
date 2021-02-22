import React from 'react'
import search from '../../Assets/svg/search.svg'

function SharedReformedNav(props) {
    return (
        <div className="bg-white vw-100 h-auto">
        <div className="container d-flex flex-column mb-3 p-3 ">
          <div className="float-start ml-2 mb-2 mt-3" onClick={props.NavigateBack} style={{cursor: 'pointer'}}> 
          <img src={props.return} alt="Cancel" className="App-hover img-fluid" style={{ width: 30, height: 30}} />
           </div>

        <div className="d-flex flex-row justify-content-between align-items-center ">
            <div className="display-4" style={{cursor: 'pointer'}}>{props.header}</div>
            <div className="d-flex flex-row ">
            <div className="mr-2"  style={{cursor: 'pointer'}} onClick={props.search}>
            <img src={search} alt="Cancel" className="App-hover img-fluid" style={{ width: 30, height: 30}} />
            </div>
            <div className="mr-2"  style={{cursor: 'pointer'}} onClick={props.addNew}>
            <img src={props.additional} alt="Cancel" className="App-hover img-fluid" style={{ width: 30, height: 30}} />
            </div>
            </div>
        </div>  
        </div>
        </div>
    )
}

export default SharedReformedNav
