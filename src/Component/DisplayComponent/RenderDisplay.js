import React from 'react'
import DisplayCards from './DisplayCards'
import DisplayDocs from './DisplayDocs'
import DisplayOthers from './DisplayOthers'
import DisplayPasswords from './DisplayPasswords'

function RenderDisplay(props) {

    const { info  } = props

    const Render = () => {
        if(info === 'Cards') return <DisplayCards info={info}/>
        else if(info === 'Docs') return <DisplayDocs info={info} />
        else if (info === 'Passwords') return <DisplayPasswords info={info} />
        else return <DisplayOthers info={info} />
    }

    return (
        <div>
          {Render()}  
        </div>
    )
}

export default RenderDisplay
