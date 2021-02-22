import React from 'react'
import { useParams, withRouter } from 'react-router-dom'
import RenderDetails from '../Component/DetailComponent/RenderDetails'
import SharedNav from '../Component/SharedComponent/SharedNav'
// import cancel from '../Assets/svg/cancel.svg'
// import qrcode from '../Assets/svg/qrcode.svg'
// import SharedReformedNav from '../Component/SharedComponent/SharedReformedNav'

function Detail(props) {
    const {info, id} = useParams()
    const NavigateBack = () => {  props.history.goBack() }
    return (
        <div style={{backgroundColor: '#eee', minHeight: '100vh', width: '100vw'}}>
        {/* <SharedReformedNav header={`${info}/${id}`} return={cancel} NavigateBack={NavigateBack} additional={qrcode}/> */}
        <SharedNav header={`${info}/${id}`} hiddenRoute="d-none" NavigateBack={NavigateBack}/>
         <div className="container mt-1">
         <RenderDetails info={info} id={id}/>
         </div>
        </div>
    )
}

export default withRouter(Detail)
