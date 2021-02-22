import React from 'react'
import qrcode from '../../Assets/svg/qrcode.svg'

function SharedDetailQrCode() {
    return (
        <div className="d-flex justify-content-center align-items-center mt-2">
        <div className="App-hover shadow p-2 rounded bg-white" style={{width: 150, height: 150}}>
           <img src={qrcode} alt="qrcode" className="img-fluid"/>
       </div>
        </div>
    )
}

export default SharedDetailQrCode
