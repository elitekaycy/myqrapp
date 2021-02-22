import React from 'react'
import { useParams, withRouter } from 'react-router-dom'
import RenderNew from '../Component/CreateComponent/RenderNew'
import SharedNav from '../Component/SharedComponent/SharedNav'

function Create(props) {
    const { info } = useParams()
    const NavigateBack = () => {  props.history.goBack() }
    return (
      <div style={{width: '100vw', minHeight: '100vh', height: 'auto', backgroundColor: '#F0F0F0'}}>
       <SharedNav header={`Add ${info}`} NavigateBack={NavigateBack} hiddenRoute="d-none" />
       <RenderNew info={info} />
     </div>
    )
}

export default withRouter(Create)
