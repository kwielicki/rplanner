import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './GuestTableBodyBasic.scss'
import Chips from 'Components/UI/Chips'
import capitalize from 'Components/Helpers/capitalize'
import Rbutton from 'Components/Rbutton'
import groom from 'Assets/images/icons/groom.svg'
import bride from 'Assets/images/icons/bride.svg'
import LazyImage from 'Components/LazyImage'
import Modal from 'Components/UI/Modal/Modal'
import GuestTableDetails from './GuestTableDetails'
import bunches from 'Bunches/bunches.json'
import translations from 'Translations/translations.json'

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

    handleGuestAffiliationAlt = (guestAffiliation, suffix = translations.properties.icon) => {
        return `${capitalize(guestAffiliation)} ${suffix}`
    }

    render() {
        const { data } = this.props
        return (
            <div styleName='GuestTableBodyBasic'>
                {data.map(({ id, data: { guest: { ...guestData }, timestamp, owner } } = collection, idx) => (
                    <div key={id} styleName={classNames({
                        '__row': true,
                        'isFirst': idx === 0 ? true : false,
                        'isOdd': idx % 2 !== 0 ? true : false
                    })} role='row'>
                        <div role='gridcell' styleName={classNames({
                            '__cell': true,
                            '-smaller': true
                        })}>{idx}</div>
                        <div styleName='__cell'>{guestData.firstName}</div>
                        <div styleName='__cell'>{guestData.lastName}</div>
                        <div styleName='__cell'>{guestData.numberOfGuests.adult}</div>
                        <div styleName='__cell'>
                            <div styleName='__cellIcon'>
                                <LazyImage
                                    placeholder={this.handleGuestAffiliation(guestData.guestAffiliation)}
                                    src={this.handleGuestAffiliation(guestData.guestAffiliation)}
                                    alt={`${this.handleGuestAffiliationAlt(guestData.guestAffiliation)}`}/>
                            </div>
                        </div>
                        <div styleName='__cell'>
                            <Chips type={guestData.guestStatus} size='small'>
                                {capitalize(guestData.guestStatus)}
                            </Chips>
                        </div>
                        <div styleName={classNames('__cell', {
                            '-actions': true
                        })}>
                            <div styleName='__cellAction'>
                                <Rbutton
                                    size='small'
                                    variant='secondary'
                                    label='Edit'
                                    asBlock/>
                            </div>
                            <div styleName='__cellAction'>
                                <Rbutton
                                    size='small'
                                    variant='primary'
                                    label='Remove'
                                    asBlock/>
                            </div>
                            <div styleName={classNames('__cellAction', {
                                '-details': true
                            })}>
                                <Rbutton
                                    size='small'
                                    variant='tertiary'
                                    label='Details'
                                    ariaLabel={`Check details information for ${guestData.fullName}`}
                                    asBlock
                                    handleClick={() => this.handleOpenModal(this.setState({
                                        guestDetails: {
                                            owner: {
                                                email: owner.email,
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
                                    }))}/>
                            </div>
                        </div>
                    </div>
                ))}
                {this.state.modalOpen && <Modal isOpen={this.state.modalOpen}
                    headerTitle='Details for '
                    headerSubtitle={this.state.guestDetails.fullName}
                    headerDescription={this.handleModalDescription(this.state.guestDetails.owner.email)}
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
