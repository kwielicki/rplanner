import React from 'react'
import CSSModules from 'react-css-modules'
import { Helmet } from 'react-helmet'
import Footer from 'Components/Footer'
import Header from 'Components/Header';
import { Route, Switch } from "react-router-dom"
import fontAwesome from 'FontAwesome/fontAwesome'
import { connect } from "react-redux"
import Dashboard from 'Routes/Dashboard'
import AddingGuest from 'Routes/AddingGuest'
import Statistic from 'Routes/Statistic'
import PageNotFound from 'Routes/PageNotFound'
import UserProfile from 'Routes/UserProfile'
import Documentation from 'Routes/Documentation'
import EditingGuest from 'Routes/EditingGuest'
import Login from 'Routes/Login'
import News from 'Routes/News'
import styles from './App.scss'
import Sidebar from 'Components/Sidebar'

import ProtectedRoute from "Components/ProtectedRoute"
import classNames from 'classnames'

@CSSModules(styles, { allowMultiple: true })
class App extends React.Component { 
    render() {
        const { isAuthenticated, isVerifying } = this.props
        return (
            <>
                <Helmet>
                    <title>Wedding planner</title>
                    <meta name="description" content="Wedding planner - application for managing wedding preparations" />
                </Helmet>
                <div styleName='App'>
                    {isAuthenticated && (
                        <aside styleName='__sidebar'>
                            <Sidebar/>
                        </aside>
                    )}
                    <main styleName={classNames({
                        '__main': true,
                        '--withoutSpace': !isAuthenticated
                    })}>
                        {isAuthenticated && <Header/>}
                            <div styleName='__content'>
                                <Switch>
                                    <ProtectedRoute exact path='/' component={Dashboard} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                    <ProtectedRoute path='/adding-guest' component={AddingGuest} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                    <ProtectedRoute path='/statistic' component={Statistic} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                    <ProtectedRoute path='/user-profile' component={UserProfile} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                    <ProtectedRoute path='/documentation' component={Documentation} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                    <ProtectedRoute path='/editing-guest' component={EditingGuest} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                    <ProtectedRoute path='/news' component={News} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                    <Route path='/login' component={Login} />
                                    <ProtectedRoute component={PageNotFound} isAuthenticated={isAuthenticated} isVerifying={isVerifying}/>
                                </Switch>
                            </div>
                        {isAuthenticated && <Footer/>}
                    </main>
                </div>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying
    }
}

export default connect(mapStateToProps)(App)
