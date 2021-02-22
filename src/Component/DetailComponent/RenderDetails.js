import React from 'react'
import DetailCards from './DetailCards'
import DetailDocs from './DetailDocs'
import DetailOthers from './DetailOthers'
import DetailPasswords from './DetailPasswords'

function RenderDetails(props) {
    const { info, id} = props

    const Render = () => {
        if(info === 'Cards') return <DetailCards info={info} id={id} />
        else if(info === 'Docs') return <DetailDocs info={info} id={id} />
        else if (info === 'Passwords') return <DetailPasswords info={info} id={id} />
        else return <DetailOthers info={info} id={id}/>
    }
    return (
        <div>
           {Render()}
        </div>
    )
}

export default RenderDetails
