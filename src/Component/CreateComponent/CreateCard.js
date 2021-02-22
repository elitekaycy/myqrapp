import React from 'react'
import SharedCardComponent from '../SharedComponent/SharedCardComponent'
import SharedColWrappers from '../SharedComponent/SharedColWrappers'
import SharedCreateWrapper from '../SharedComponent/SharedCreateWrapper'
import SharedHeadertitle from '../SharedComponent/SharedHeadertitle'

function CreateCard() {
    return (
     <SharedCreateWrapper>
            {/* Card issuer or organization  */}
            <SharedHeadertitle id="CardIssuer" title="Card Issuer" placeholder="Enter CardIssuer"/>
               <SharedColWrappers className="col-sm-12 col-md-6 mb-3">              
                  <SharedCardComponent id="CardName" title="CardName" placeholder="Enter CardName" />
                  <SharedCardComponent id="CardType" title="CardType" placeholder="Enter CardType" />
                  <SharedCardComponent id="CardHolderName" title="Cald Holder Name" placeholder="Enter CardHoldername" />
                  <SharedCardComponent id="CardId" title="Card ID/Number" placeholder="Enter CardID or Number" />
              </SharedColWrappers>
           

          <SharedColWrappers className="col-sm-12 col-md-6">
         
          <div className="row g-3 mb-4">
                {/* Time Created */}
                <div className="col">
                <label htmlFor="Account Created" className="lead font-weight-bold">Time Created</label>
                <input type="Date" class="form-control" placeholder="Time Created" aria-label="Time Created"/>
                </div>
               
                {/* Time Created */}
                <div className="col">
                <label htmlFor="ExpiryDate" className="lead font-weight-bold">ExpiryDate</label>
                <input type="Date" class="form-control" placeholder="ExpiryDate" aria-label="ExpiryDate"/>
                </div>

                </div>

                <SharedCardComponent id="firstname" title="first Name" placeholder="Enter Firstname" />
                <SharedCardComponent id="lastname" title="last name" placeholder="Enter lastname" />


                <div className="formgroup mb-4">
                  <button className="btn btn-primary w-100">Submit</button>
                </div>


          </SharedColWrappers>

          
            

       </SharedCreateWrapper>
            
    )
}

export default CreateCard
