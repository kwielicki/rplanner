import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './GuestTableBodyBasic.scss'
import Chips from 'Components/UI/Chips'
import { capitalizedText } from 'Components/Helpers/capitalizedText'
import Rbutton from 'Components/Rbutton'
import groom from 'Assets/images/icons/groom.png'
import bride from 'Assets/images/icons/bride.png'
import LazyImage from 'Components/LazyImage'
import IconButton from 'Components/UI/IconButton'
import Modal from 'Components/UI/Modal/Modal'
import GuestTableDetails from './GuestTableDetails'
import bunches from 'Bunches/bunches.json'

@CSSModules(styles, { allowMultiple: true })
export default class GuestTableBodyBasic extends React.Component {

    state = {
        modalOpen: false,
        guestDetails: bunches.guestModel,
    }

    handleOpenModal = () => {
        this.setState({ modalOpen: true })
    }

    handleCloseModal = () => {
        this.setState({ modalOpen: false, guestDetails: bunches.guestModel })
    }

    handleModalDescription = (email) => {
        return `Guest added by <strong>${email}</strong>`
    }

    handleGuestAffiliation = (guestAffiliation) => {
        return guestAffiliation === 'groom' ? groom : bride
    }

    render() {
        const { data } = this.props
        return (
            <div styleName='GuestTableBodyBasic'>
                {data.map(({ id, data: { guest: { ...guestData }, timestamp, creator } } = collection, idx) => (
                    <div key={id} styleName={classNames({
                        '__row': true,
                        'isFirst': idx === 0 ? true : false,
                        'isOdd': idx % 2 !== 0 ? true : false
                    })} role='row'>
                        <div role='gridcell' styleName={classNames({
                            '__cell': true,
                            '--smaller': true
                        })}>{idx}</div>
                        <div styleName='__cell'>{guestData.firstName}</div>
                        <div styleName='__cell'>{guestData.lastName}</div>
                        <div styleName='__cell'>{guestData.numberOfGuests.adult}</div>
                        <div styleName='__cell'>
                            <LazyImage
                                placeholder={this.handleGuestAffiliation(guestData.guestAffiliation)}
                                src={this.handleGuestAffiliation(guestData.guestAffiliation)}/>
                        </div>
                        <div styleName='__cell'>
                            <Chips type={guestData.guestStatus} size='small'>
                                {capitalizedText(guestData.guestStatus)}
                            </Chips>
                        </div>
                        <div styleName='__cell'>
                            <Rbutton
                                size='small'
                                variant='secondary'
                                icon='edit'
                                space='spaceRight'/>
                            <Rbutton size='small' variant='primary' space='spaceRight' icon='trash-alt'/>
                            <IconButton
                                icon='cogs'
                                size='small'
                                ariaLabel='Details'
                                handleClick={() => this.handleOpenModal(this.setState({
                                    guestDetails: {
                                        creator: {
                                            email: creator.email,
                                        },
                                        fullName: guestData.fullName,
                                        phoneNumber: guestData.phoneNumber,
                                        emailAddress: guestData.emailAddress,
                                        additionalInformation: guestData.additionalInformation,
                                        numberOfGuests: {
                                            children: guestData.numberOfGuests.children,
                                        },
                                        timestamp: timestamp,
                                    }
                                }))}></IconButton>
                        </div>
                    </div>
                ))}
                {this.state.modalOpen && <Modal isOpen={this.state.modalOpen}
                    headerTitle='Details for '
                    headerSubtitle={this.state.guestDetails.fullName}
                    headerDescription={this.handleModalDescription(this.state.guestDetails.creator.email)}
                    closeStyle='secondary'
                    closeLabel='Close'
                    onClose={this.handleCloseModal}><GuestTableDetails guestDetails={this.state.guestDetails}/></Modal>}
            </div>
        )
    }
}
GuestTableBodyBasic.propTypes = {
    data: PropTypes.array.isRequired
}