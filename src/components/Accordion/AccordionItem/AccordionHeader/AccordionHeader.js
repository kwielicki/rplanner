import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './AccordionHeader.scss'

class AccordionHeader extends PureComponent {

    render() {

        const {
            header,
            isActive,
            handleClick
        } = this.props

        return (
            <div styleName={classNames({
                    'AccordionHeader': true,
                    'isActive': isActive
                })}
                onClick={handleClick}
                role="button">
                <span styleName='__label'>{header}</span>
                <span styleName='__icon'>
                    <FontAwesomeIcon icon='chevron-down'/>
                </span>
            </div>
        )
    }
}

AccordionHeader.propTypes = {
    header: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    handleClick: PropTypes.func
}

export default AccordionHeader
