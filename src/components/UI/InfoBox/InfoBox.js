import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import './InfoBox.scss'

const InfoBox = ( { icon, type, title, subtitle } = props ) => {
    return (
        <div styleName='InfoBox'>
            <div styleName={classNames('__icon', {
                [`-${type}`]: type
            })}>
                <FontAwesomeIcon
                    icon={icon}/>
            </div>
            <p styleName='__title'>{title}</p>
            {subtitle && <p styleName='__subtitle'>{subtitle}</p>}
        </div>
    )
}

InfoBox.propTypes = {
    /**
     * Used to set icon type. IsRequired.
     */
    icon: PropTypes.string.isRequired,
    /**
     * Used to set title. IsRequired.
     */
    title: PropTypes.string.isRequired,
    /**
     * Used to set subtitle.
     */
    subtitle: PropTypes.string,
    /**
     * Used to set type. IsRequired.
     */
    type: PropTypes.oneOf(['success', 'danger']).isRequired
}

export default InfoBox
