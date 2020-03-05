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

@CSSModules(styles, {allowMultiple: true})
export default class GuestTableBodyBasic extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div styleName='GuestTableBodyBasic'>
                {data.map(({id, data: {guest: {firstName, lastName, guestAffiliation, guestStatus, numberOfGuests}}} = collection, idx) => (
                    <div key={id} styleName={classNames({
                        '__row': true,
                        'isFirst': idx === 0 ? true : false,
                        'isOdd': idx % 2 !== 0 ? true : false
                    })} role='row'>
                        <div role='gridcell' styleName={classNames({
                            '__cell': true,
                            '--smaller': true
                        })}>{idx}</div>
                        <div styleName='__cell'>{firstName}</div>
                        <div styleName='__cell'>{lastName}</div>
                        <div styleName='__cell'>{numberOfGuests.adult}</div>
                        <div styleName='__cell'>
                            <LazyImage src={guestAffiliation === 'groom' ? groom : bride}/>
                        </div>
                        <div styleName='__cell'>
                            <Chips type={guestStatus} size='small'>
                                {capitalizedText(guestStatus)}
                            </Chips>
                        </div>
                        <div styleName='__cell'>
                            <Rbutton label='Edit' size='small' variant='secondary' space='spaceRight'/>
                            <Rbutton label='Delete' size='small' variant='primary'/>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
GuestTableBodyBasic.propTypes = {
    data: PropTypes.array.isRequired
}