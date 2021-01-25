import React from 'react'
import Container from 'Components/Grid/Container'
import Column from 'Components/Grid/Column'
import BreadcrumbsWrapper from 'Components/BreadcrumbsWrapper'
import Logout from 'Components/Logout'
import { AccountDropdown } from 'Components/AccountDropdown'
import { ReminderDropdown } from 'Components/ReminderDropdown'
import IconButton from 'Components/UI/IconButton'
import { isEmpty } from 'lodash'
import { useDispatch, useSelector } from "react-redux"
import { hamburgerOpenAction } from 'Actions/hamburgerActions'
import { overlayShowAction } from 'Actions/overlayActions'
import './Header.scss'

export const Header = ( { isMobile } ) => {
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.hamburger.isOpen);
    const isOverlayActivated = useSelector(state => state.overlay.isOverlayActivated);
    const ownerData = useSelector(state => state.auth.ownerData);
    const sideBarOpen = () => {
        dispatch(hamburgerOpenAction(!isOpen))
        dispatch(overlayShowAction(!isOverlayActivated))
    }
    return (
        <header styleName='Header'>
            <Container>
                <Column xs='1'>
                    <div styleName='__inner'>
                        <div styleName='__innerTop'>
                            {!isEmpty(ownerData) &&
                                <>
                                    <ReminderDropdown/>
                                    <AccountDropdown
                                        user={ownerData}/>
                                </>}
                            <Logout/>
                        </div>
                        {isMobile &&
                            <IconButton
                                handleClick={() => sideBarOpen()}
                                icon='bars'/>
                        }
                        <BreadcrumbsWrapper/>
                    </div>
                </Column>
            </Container>
        </header>
    )
}
