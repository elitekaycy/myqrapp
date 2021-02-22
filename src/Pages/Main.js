import React from 'react'
import { withRouter } from 'react-router-dom'
import SharedNav from '../Component/SharedComponent/SharedNav'
import SharedCard from '../Component/SharedComponent/SharedCard'
import SharedCollection from '../Component/SharedComponent/SharedCollection'

function Main(props) {
    return (
    <div className="position-relative" style={{backgroundColor: 'white', minHeight: '100vh', width: '100vw'}}>
     <SharedNav header={'Dickson'} hidden="d-none" hiddenRoute="d-none" />
     <SharedCard  height={300}/>
     <div className="display-4 mt-1" style={{color: '#ddd'}}>Collections</div>
     <div className="d-flex flex-wrap flex-row justify-content-center align-items-center">
        <SharedCollection color="#F9AA94" header="Cards" subdesc="Collection of cards" />
        <SharedCollection color="#F0698E" header="Docs" subdesc="Collection of Docs" />
        <SharedCollection color="#595B9C" header="Passwords" subdesc="Collections of Passwords" />
        <SharedCollection color="#3C876C" header="Others" subdesc="Collections of Others" />
     </div>
    </div>
    )
}

export default withRouter(Main)
