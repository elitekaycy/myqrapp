import React from 'react'
import CreateCard from './CreateCard'
import CreateDoc from './CreateDoc'
import CreateOthers from './CreateOthers'
import CreatePassword from './CreatePassword'

function RenderNew(props) {
    const { info  } = props

    const Render = () => {
        if(info === 'Cards') return <CreateCard />
        else if(info === 'Docs') return <CreateDoc />
        else if (info === 'Passwords') return <CreatePassword />
        else return <CreateOthers />
    }


    return (
        <div>
        {Render()}
        </div>
    )
}

export default RenderNew
