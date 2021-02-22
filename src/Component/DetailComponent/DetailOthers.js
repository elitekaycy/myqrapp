import React from 'react'
import SharedColWrappers from '../SharedComponent/SharedColWrappers'
import SharedDetailOutput from '../SharedComponent/SharedDetailOutput'
import SharedDetailQrCode from '../SharedComponent/SharedDetailQrCode'
import SharedTableComponent from '../SharedComponent/SharedTableComponent'

function DetailOthers(props) {
  const { info, id} = props
    return (
        <div>
         <SharedColWrappers className="col-sm-12 col-md-12 mb-3">
          <span className="badge bg-dark text-white m-1">{info}</span>
          <span className="badge bg-dark text-white m-1">fidelity</span>
          <span className="badge bg-dark text-white m-1">{id}</span>

         <SharedDetailQrCode />

          
        </SharedColWrappers>

        <SharedColWrappers className="col-sm-12 col-md-12 mb-3 ">
          <SharedTableComponent title={'others'} output={'Details'}>
            <SharedDetailOutput title={'Card name'} output={'Fidelity Card'}/>
          </SharedTableComponent>
          
        </SharedColWrappers>
        </div>
    )
}

export default DetailOthers
