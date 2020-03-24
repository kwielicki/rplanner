import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { convertUtcDate } from 'Components/Helpers/convertUtcDate'
import { DecoratedList } from 'Components/UI/DecoratedList'
import { DecoratedListElement } from 'Components/UI/DecoratedList'
import { _isEmpty } from 'lodash'

function GuestTableDetails(props) {
    const { guestDetails: { phoneNumber, emailAddress, additionalInformation, numberOfGuests, timestamp } } = props
    return (
        <div>
            <DecoratedList>
                <DecoratedListElement header='Phone number' sizeDesktop='oneHalf'>
                    {_.isEmpty(phoneNumber) ? 'No phone number' : <a href={`mailto: ${phoneNumber}`}>{phoneNumber}</a>}
                </DecoratedListElement>
                <DecoratedListElement header='Email address' sizeDesktop='oneHalf'>
                    {_.isEmpty(emailAddress) ? 'No email address' : <a href={`mailto: ${emailAddress}`}>{emailAddress}</a>}
                </DecoratedListElement>
                <DecoratedListElement header='Children number'>
                    {_.isEmpty(numberOfGuests.children) ? 'No children' : numberOfGuests.children}
                </DecoratedListElement>
                <DecoratedListElement header='Added data'>
                    {_.isEmpty(timestamp)
                        ? 'No added data'
                        : <Moment date={convertUtcDate(timestamp.seconds)} format="D MMM YYYY, HH:mm"/>}
                </DecoratedListElement>
                <DecoratedListElement header='Additional information' sizeDesktop='twoThirds'>
                    {_.isEmpty(additionalInformation) ? 'No additional information' : additionalInformation}
                </DecoratedListElement>
            </DecoratedList>
        </div>
    )
}

GuestTableDetails.propTypes = {
    guestDetails: PropTypes.object.isRequired
}

export default GuestTableDetails
