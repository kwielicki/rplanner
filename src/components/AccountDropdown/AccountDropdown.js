import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getFirstCharacterFromString } from 'Utils/string'
import './AccountDropdown.scss'

export const AccountDropdown = ({user}) => {
    return (
        <div styleName='AccountDropdown' role="button">
            <div styleName='__inner'>
                <span styleName='__initials'>
                    {getFirstCharacterFromString(user.firstName)}
                    {getFirstCharacterFromString(user.lastName)}
                </span>
                <div styleName='__user'>
                    <span styleName='__userType'>
                        Admin account
                    </span>
                    <span styleName='__userName'>
                        {user.fullName}
                    </span>
                </div>
                <span styleName='__icon'>
                    <FontAwesomeIcon icon='chevron-down'/>
                </span>
            </div>
        </div>
    )
}

AccountDropdown.propTypes = {
    user: PropTypes.object.isRequired
}
