import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Footer from 'Components/Footer'
import Header from 'Components/Header';
import { Route, Switch } from "react-router-dom"
import fontAwesome from 'FontAwesome/fontAwesome'
import classNames from 'classnames'
import { connect } from "react-redux"
import Dashboard from 'Routes/Dashboard'
import AddingGuest from 'Routes/AddingGuest'
import ManageGuestList from 'Routes/ManageGuestList'
import Statistic from 'Routes/Statistic'
import PageNotFound from 'Routes/PageNotFound'
import UserProfile from 'Routes/UserProfile'
import Documentation from 'Routes/Documentation'
import EditingGuest from 'Routes/EditingGuest'
import Login from 'Routes/Login'
import News from 'Routes/News'
import Faq from 'Routes/Faq'
import EscapeOutside from "react-escape-outside"
import useResizeObserver from "use-resize-observer"
import Sidebar from 'Components/Sidebar'
import ProtectedRoute from "Components/ProtectedRoute"
import { bodyBlockScroll, bodyUnblockScroll } from 'Components/Helpers/bodyScrollBehavior'
import { hamburgerCloseAction } from 'Actions/hamburgerActions'
import { overlayHideAction } from 'Actions/overlayActions'
import Overlay from 'Components/UI/Overlay'
import './App.scss'

const App = (props) => {
    const { isAuthenticated, isVerifying, isOpen, dispatch, isOverlayActivated } = props
    const [ isActivated, setIsActivated ] = useState(false)
    const [ isMobile, setIsMobile ] = useState(null)
    const [ isDesktop, setIsDesktop ] = useState(null)
    const { ref } = useResizeObserver({
        onResize: ({ width, height }) => {
            if ( width > 991 ) {
                setIsMobile(false)
                setIsDesktop(true)
                if ( isOpen ) {
                    dispatch(hamburgerCloseAction(!isOpen))
                    dispatch(overlayHideAction(!isOverlayActivated))
                }
            } else {
                setIsMobile(true)
                setIsDesktop(false)
            }
        }
    });

    const _onEscapeOutside = () => {
        dispatch(hamburgerCloseAction(!isOpen))
        dispatch(overlayHideAction(!isOverlayActivated))
    }

    useEffect(() => {
        isOpen ? bodyBlockScroll() : bodyUnblockScroll()
        return
    })
    
    return (
        <>
            <Helmet>
                <title>Wedding planner</title>
                <meta name="description" content="Wedding planner - application for managing wedding preparations" />
            </Helmet>
            <div styleName='App' ref={ref}>
                {isAuthenticated && (
                    <aside styleName={classNames({
                        '__sidebar': true,
                        '-isOpened': isOpen && isMobile,
                        '-isMobile': isMobile,
                        '-isDesktop': isDesktop
                    })}>
                        {isDesktop 
                            ? <Sidebar/>
                            : isOpen && 
                                <EscapeOutside styleName='__escape' onEscapeOutside={() => _onEscapeOutside()}>
                                    <Sidebar/>
                                </EscapeOutside>}
                    </aside>
                )}

                <main styleName={classNames({
                    '__main': true,
                    '-withoutSpace': !isAuthenticated,
                    '-isOpened': isOpen && isMobile,
                    '-isMobile': isAuthenticated && isMobile,
                    '-isDesktop': isAuthenticated && isDesktop
                })}>
                    {isAuthenticated && <Header isMobile={isMobile} sideBarOpen={() => setIsActivated(!isActivated)}/>}
                        <div styleName='__content'>
                            <Switch>
                                <ProtectedRoute exact path='/' component={Dashboard} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                <ProtectedRoute path='/adding-guest' component={AddingGuest} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                <ProtectedRoute path='/manage-guest-list' component={ManageGuestList} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                <ProtectedRoute path='/statistic' component={Statistic} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                <ProtectedRoute path='/user-profile' component={UserProfile} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                <ProtectedRoute path='/documentation' component={Documentation} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                <ProtectedRoute path='/editing-guest' component={EditingGuest} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                <ProtectedRoute path='/news' component={News} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                <Route path='/login' component={Login} />
                                <ProtectedRoute path='/faq' component={Faq} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                <ProtectedRoute component={PageNotFound} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                            </Switch>
                        </div>
                    {isAuthenticated && <Footer/>}
                    {isAuthenticated && <Overlay/>}
                </main>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying,
        isOpen: state.hamburger.isOpen
    }
}
export default connect(mapStateToProps)(App)
