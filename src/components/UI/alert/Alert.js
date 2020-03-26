import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Alert.scss'

function Alert( props ) {
    const { type, icon, message } = props
    return (
        <div styleName={classNames({
            'Alert': true,
            [`-${type}`]: type
        })} role='alert'>
            <div styleName={classNames({
                '__inner': true,
                [`-${type}`]: type
            })}>
                <div styleName='__icon'>
                    <FontAwesomeIcon icon={icon} styleName='__iconVariant'/>
                </div>
                <div styleName='__content'>
                    <h6 styleName='__title'>{type}</h6>
                    <p styleName='__text' dangerouslySetInnerHTML={{__html: message}}></p>
                </div>
            </div>
        </div>
    )
}

Alert.propTypes = {
    type: PropTypes.oneOf(['warning', 'danger', 'success', 'info']),
    icon: PropTypes.string.isRequired
}

export default Alert