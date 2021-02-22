import React from 'react'
import { withRouter } from 'react-router-dom'
import qrcode from '../../Assets/svg/qrcode.svg'
import qrcode2 from '../../Assets/svg/qrcode2.svg'

function SharedCard(props) {
    const routetoscan = () => {
        props.history.push('/main/scan')
    }
    return (
        <div
         onClick={routetoscan}
         className="App-hover m-4 mt-3 jumbotron shadow d-flex flex-column justify-content-around" style={{ 
            background: "linear-gradient(57deg,#5100fc 0%, rgb(189,0,252) 80%)", 
            height: props.height,
            cursor: 'pointer',
            overflow: 'hidden'
            
            }}>
         <div className="container d-flex flex-row justify-content-between align-items-center p-3">
          <div className="p-2 rounded bg-white" style={{width: 100, height: 100}}>
              <img src={qrcode} alt="qrcode" className="img-fluid"/>
          </div>
          <div className="p-2 rounded bg-white" style={{width: 100, height: 100}}>
              <img src={qrcode2} alt="qrcode" className="img-fluid"/>
          </div>
         </div>
         <div className="mt-3">
          <div className="display-4 text-white">Scan Qrcode</div>
          <div className="lead text-white">Qrcode based scanner</div>
         </div>
        </div>
    )
}

// background: #5100fc;
// background: linear-gradient(57deg,#5100fc 0%, rgb(189,0,252) 80%);

export default withRouter(SharedCard)
