import React,{ useState } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import RenderDisplay from '../Component/DisplayComponent/RenderDisplay'

import SharedGenericNull from '../Component/SharedComponent/SharedGenericNull'
// import SharedNav from '../Component/SharedComponent/SharedNav'
import SharedReformedNav from '../Component/SharedComponent/SharedReformedNav'
import navback from '../Assets/svg/navback.svg'
import plus from '../Assets/svg/plus.svg'

function Info(props) {
    const { info } = useParams()
    const [isEmpty, setisEmpty] = useState(false)
    const NavigateBack = () => {  props.history.goBack() }

    const addNew = () => {
     props.history.push(`${info}/Create`)
    }

    

    return (
    <div style={{width: '100vw', minHeight: '100vh', height: 'auto', backgroundColor: 'white', overflow: 'hidden'}}>
     {/* <SharedNav header={info} NavigateBack={NavigateBack} addNew={addNew} /> */}
     <SharedReformedNav NavigateBack={NavigateBack} addNew={addNew} header={info} return={navback} additional={plus}/>
     {!isEmpty ? <RenderDisplay info={info} /> : <SharedGenericNull generic={info} />}
    </div>
    )
}

export default withRouter(Info)
