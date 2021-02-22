import React from 'react'
import SharedDisplay from '../SharedComponent/SharedDisplay'
import SharedDisplayWrapper from '../SharedComponent/SharedDisplayWrapper'
import { PasswordData } from '../Data/PasswordData'
import user from '../../Assets/svg/user.svg'

function DisplayPasswords(props) {
    return (
     
      
       <SharedDisplayWrapper>
           
           {PasswordData && PasswordData.map((data) => {return <SharedDisplay logo={user} id={data.id} info={props.info} userid={data.userid} key={data.id} color="bg-primary" name={data.name} organization={data.name} timeCreated={data.timeCreated} />})}  
   

      </SharedDisplayWrapper>
    )
}

export default DisplayPasswords
