import React from 'react'
import SharedDisplay from '../SharedComponent/SharedDisplay'
import SharedDisplayWrapper from '../SharedComponent/SharedDisplayWrapper'
import { DocData } from '../Data/DocData'
import doc from '../../Assets/svg/doc.svg'

function DisplayDocs(props) {
    return (
        <SharedDisplayWrapper>
           
        {DocData && DocData.map((data) => {return <SharedDisplay logo={doc} id={data.id} info={props.info} userid={data.userid} key={data.id} color="bg-primary" name={data.name} organization={data.name} timeCreated={data.timeCreated} />})}  
        
     </SharedDisplayWrapper>
    )
}

export default DisplayDocs
