import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { logoutUser } from "Actions/auth"
import Rbutton from 'Components/Rbutton'
import IconButton from 'Components/UI/IconButton'
import translations from 'Translations/translations.json'
import './Logout.scss' 


export default function Logout() {
    const dispatch = useDispatch()

    const __handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <div styleName='Logout'>
            <div styleName='__desktop'>
                <Rbutton
                    variant='tertiary'
                    label="Logout"
                    ariaLabel={translations.properties.logoutLabel}
                    icon='sign-out-alt'
                    iconPlacement='top'
                    handleClick={__handleLogout}/>
            </div>
            <div styleName='__mobile'>
                <IconButton
                    icon='sign-out-alt'
                    handleClick={__handleLogout}></IconButton>
            </div>
        </div>
    )
}
