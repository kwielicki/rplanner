import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import Chips from 'Components/UI/Chips'
import './ReminderDropdown.scss'

export const ReminderDropdown = () => {
    return (
        <div styleName='ReminderDropdown'>
            <div styleName='__icon'>
                <FontAwesomeIcon
                    icon='envelope'/>
                <div styleName='__iconChips'>
                    <Chips
                        type='primary'
                        rounded>
                        3
                    </Chips>
                </div>
            </div>
        </div>
    )
}
