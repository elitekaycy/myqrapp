import React from 'react'
import SharedDisplay from '../SharedComponent/SharedDisplay'
import SharedDisplayWrapper from '../SharedComponent/SharedDisplayWrapper'
import {CardData} from '../Data/CardData'
import card from '../../Assets/svg/card.svg'

function DisplayCards(props) {

    console.log(CardData)

    return (
        <SharedDisplayWrapper>
           
           {CardData && CardData.map((data) => {return <SharedDisplay logo={card} id={data.id} info={props.info} userid={data.userid} key={data.id} color="bg-primary" name={data.name} organization={data.cardIssuer} timeCreated={data.timeCreated} />})}  
             
        </SharedDisplayWrapper>
    )
}

export default DisplayCards
