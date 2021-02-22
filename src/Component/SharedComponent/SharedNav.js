import React from 'react'
import Settings from '../../Assets/svg/Settings.svg'
import Back from '../../Assets/svg/Back.svg'
import plus from '../../Assets/svg/plus.svg'

function SharedNav(props) {
    return (
        <div className="d-flex flex-row justify-content-around align-items-center vw-100 p-2 mb-3" style={{ height: 50, backgroundColor: 'white', color: 'black'}} >
        <div className={props.hidden || 'App-hover' } style={{cursor: 'pointer'}} onClick={props.NavigateBack}>
        <img src={Back} alt="settings" className="img-fluid" style={{width: 24, height: 24}} />
        </div>
        <div className="App-hover lead" style={{cursor: 'pointer'}}>{props.header}</div>
        <div className={props.hiddenRoute || 'App-hover lead'} style={{cursor: 'pointer'}} onClick={props.addNew}>
        <img src={plus} alt="settings" className="img-fluid" style={{width: 24, height: 24}} />
        </div>
        <div className="align-self-start lead ml-2" style={{cursor: 'pointer'}}>
         <img src={Settings} alt="settings" className="App-hover img-fluid" style={{width: 24, height: 24}} />
        </div>
        </div>
    )
}

export default SharedNav
