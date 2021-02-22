import React from 'react'
import SharedButton from '../SharedComponent/SharedButton'
import SharedCreateWrapper from '../SharedComponent/SharedCreateWrapper'
import SharedHeadertitle from '../SharedComponent/SharedHeadertitle'

function CreatePassword() {
    return (
        <SharedCreateWrapper>
            <SharedHeadertitle title="Account name" placeholder="Enter Account name" id="AccountName"  />
            <SharedHeadertitle title="Account password" placeholder="Enter Account password" id="Accountpassword"/>
            <SharedButton header="Create Password" title="submit" />
        </SharedCreateWrapper>

    )
}

export default CreatePassword
