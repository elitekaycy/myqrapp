import React from 'react'
import SharedButton from '../SharedComponent/SharedButton'
import SharedColWrappers from '../SharedComponent/SharedColWrappers'
import SharedCreateWrapper from '../SharedComponent/SharedCreateWrapper'
import SharedHeadertitle from '../SharedComponent/SharedHeadertitle'

function CreateDoc() {
    return (
      <SharedCreateWrapper>
        <SharedHeadertitle title="Document name" id="Documentname" placeholder="Enter Document Name" />
        <SharedColWrappers className="col-sm-12 col-md-12 mt-2 mb-5">
          <div className="display-4">Add docs here</div>
        </SharedColWrappers>
        <SharedButton header="Create Docs" title="Submit Doc" />
      </SharedCreateWrapper>
    )
}

export default CreateDoc
