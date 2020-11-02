import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { db } from "Firebase/firebase"
import './GuestTableBodyBasic.scss'
import Chips from 'Components/UI/Chips'
import capitalize from 'Components/Helpers/capitalize'
import Rbutton from 'Components/Rbutton'
import SvgGroom from 'Assets/images/icons/groom.svg'
import SvgBride from 'Assets/images/icons/bride.svg'
import Modal from 'Components/UI/Modal/Modal'
import GuestTableDetails from './GuestTableDetails'
import bunches from 'Bunches/bunches.json'
import translations from 'Translations/translations.json'
import Pagination from 'Components/UI/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TranslationComponentProperty } from 'Components/TranslationText'
import { isEmpty } from 'lodash'
import InfoBox from "Components/UI/InfoBox"

export default class GuestTableBodyBasic extends React.Component {

    state = {
        modalOpenGuestDetails: false,
        modalOpenGuestRemove: false,
        guestDetails: bunches.guestModel,
        guestDeleted: false,
        currentPage: 1,
        maxItemsPerPage: 25
    }

    handleOpenModal = () => {
        this.setState({ modalOpenGuestDetails: true })
    }

    handleOpenModalDeleteGuest = () => {
        this.setState({ modalOpenGuestRemove: true })
    }

    handleCloseModal = () => {
        this.setState({ modalOpenGuestDetails: false, guestDetails: bunches.guestModel })
    }

    handleCloseModalDeleteGuest = () => {
        this.setState({ modalOpenGuestRemove: false, guestDetails: bunches.guestModel, guestDeleted: false })
    }

    handleModalDescription = (email, processStatus) => {
        return `Guest ${processStatus ? "removed" : "added"} by <strong>${email}</strong>`
    }

    handleModalDeleteGuestConfirm = (id, uid) => {
        return db
                .collection('guests')
                .doc(uid)
                .collection('guest')
                .doc(id)
                .get()
                .then(doc => {
                    doc.ref.delete().then(() => {
                        this.setState({guestDeleted: true})
                    }).catch(err => {
                        console.log(err);
                    });
                })
    }

    handleGuestAffiliation = (guestAffiliation) => {
        return guestAffiliation === 'groom' ? <SvgGroom/> : <SvgBride/>
    }

    handleGuestAffiliationAlt = (guestAffiliation, suffix = translations.properties.icon) => {
        return `${capitalize(guestAffiliation)} ${suffix}`
    }
    
    isGuestDeleted = () => {
        return this.state.guestDeleted
    }

    handlePageClick = (data) => {
        const selected = data.selected;
        this.setState({
            currentPage: selected + 1
        });

    }

    render() {
        const { data, uid, dispatch } = this.props
        return (
            <div styleName='GuestTableBodyBasic'>
                {data.slice((this.state.currentPage * this.state.maxItemsPerPage) - this.state.maxItemsPerPage, this.state.currentPage * this.state.maxItemsPerPage).map(({ id, data: { guest: { ...guestData }, timestamp, owner } } = collection, idx) => (
                    <div key={id} styleName={classNames({
                        '__row': true,
                        'isFirst': idx === 0 ? true : false,
                        'isOdd': idx % 2 !== 0 ? true : false
                    })} role='row'>
                        <div role='gridcell' styleName={classNames({
                            '__cell': true,
                            '-smaller': true
                        })}>{idx + 1}</div>
                        <div styleName='__cell'>{guestData.firstName}</div>
                        <div styleName='__cell'>{guestData.lastName}</div>
                        <div styleName='__cell'>{guestData.numberOfGuests.adult}</div>
                        <div styleName='__cell'>
                            <div styleName='__cellIcon'>
                                {this.handleGuestAffiliation(guestData.guestAffiliation)}
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
                                    handleClick={() => this.handleOpenModalDeleteGuest(this.setState({
                                        guestDetails: {
                                            owner: {
                                                email: owner.email
                                            },
                                            fullName: guestData.fullName,
                                            id: id
                                        }
                                    }))}
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
                {!isEmpty(data) && <div styleName='__pagination'>
                    <Pagination
                        pageCount={Math.ceil(data.length / this.state.maxItemsPerPage)}
                        onPageChange={this.handlePageClick}
                        previousLabel={<FontAwesomeIcon icon='chevron-left'/>}
                        nextLabel={<FontAwesomeIcon icon='chevron-right'/>}
                        maxItemsPerPage={this.state.maxItemsPerPage}
                        selectedPage={this.state.currentPage}
                        pageRangeStart={(this.state.currentPage * this.state.maxItemsPerPage) - this.state.maxItemsPerPage}
                        pageRangeEnd={this.state.currentPage * this.state.maxItemsPerPage}
                        allPages={data.length}/>
                </div>}
                {this.state.modalOpenGuestDetails &&
                    <Modal 
                        isOpen={this.state.modalOpenGuestDetails}
                        headerTitle='Details for '
                        headerSubtitle={this.state.guestDetails.fullName}
                        headerDescription={this.handleModalDescription(this.state.guestDetails.owner.email)}
                        closeStyle='secondary'
                        closeLabel='Close'
                        onClose={this.handleCloseModal}><GuestTableDetails guestDetails={this.state.guestDetails}/></Modal>}
                { this.state.modalOpenGuestRemove &&
                    <Modal 
                        isOpen={this.state.modalOpenGuestRemove}
                        type='danger'
                        headerTitle='Guest removal process for - '
                        headerSubtitle={this.state.guestDetails.fullName}
                        headerDescription={this.handleModalDescription(this.state.guestDetails.owner.email, this.state.guestDeleted)}
                        confirmStyle='primary'
                        confirmLabel={!this.isGuestDeleted() && 'Remove guest'}
                        closeStyle='secondary'
                        closeLabel={this.isGuestDeleted() ? 'Close' : "I'm not sure"}
                        footerStyle={!this.isGuestDeleted() && 'spaceBetween'}
                        bodyCentering
                        onClose={this.handleCloseModalDeleteGuest}
                        onConfirm={() => this.handleModalDeleteGuestConfirm(this.state.guestDetails.id, uid, dispatch)}>
                            {this.isGuestDeleted()
                                ? <InfoBox
                                    icon='check'
                                    type='success'
                                    title={
                                        <TranslationComponentProperty
                                            componentName='guestTableBodyBasic'
                                            translationKey="guestRemovedCorrectly"/>}
                                  />
                                : <InfoBox
                                    icon='user-minus'
                                    type='danger'
                                    title={
                                        <TranslationComponentProperty
                                            componentName='guestTableBodyBasic'
                                            translationKey="guestPermanentlyRemoved"/>}
                                    subtitle={
                                        <TranslationComponentProperty
                                            componentName='guestTableBodyBasic'
                                            translationKey="proceed"/>}
                                  />
                            }
                        </Modal>}
            </div>
        )
    }
}
GuestTableBodyBasic.propTypes = {
    data: PropTypes.array.isRequired
}
