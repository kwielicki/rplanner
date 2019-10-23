import React from 'react'
import CSSModules from 'react-css-modules'
import { Helmet } from 'react-helmet'
import Footer from 'PATH_TO__COMPONENTS/Footer'
import Header from 'PATH_TO__COMPONENTS/Header';
import { Route, Switch } from "react-router-dom"

import Dashboard from 'PATH_TO__ROUTES/Dashboard'
import AddingGuest from 'PATH_TO__ROUTES/AddingGuest'
import Statistic from 'PATH_TO__ROUTES/Statistic'
import PageNotFound from 'PATH_TO__ROUTES/PageNotFound'
import UserProfile from 'PATH_TO__ROUTES/UserProfile'
import Documentation from 'PATH_TO__ROUTES/Documentation'
import EditingGuest from 'PATH_TO__ROUTES/EditingGuest'
import News from 'PATH_TO__ROUTES/News'
import styles from './App.scss'
import Sidebar from 'PATH_TO__COMPONENTS/Sidebar'

@CSSModules(styles, { allowMultiple: true })
class App extends React.Component { 
    render() {
        return (
            <>
                <Helmet>
                    <title>Wedding planner</title>
                    <meta name="description" content="Wedding planner - application for managing wedding preparations" />
                </Helmet>
                <div styleName='App'>
                    <aside styleName='__sidebar'>
                        <Sidebar/>
                    </aside>
                    <main styleName='__main'>
                        <Header/>
                            <div styleName='__content'>
                                <Switch>
                                    <Route exact path='/' component={Dashboard} />
                                    <Route path='/adding-guest' component={AddingGuest} />
                                    <Route path='/statistic' component={Statistic} />
                                    <Route path='/user-profile' component={UserProfile} />
                                    <Route path='/documentation' component={Documentation} />
                                    <Route path='/editing-guest' component={EditingGuest} />
                                    <Route path='/news' component={News}/>
                                    <Route component={PageNotFound} />
                                </Switch>
                            </div>
                        <Footer/>
                    </main>
                </div>
            </>
        )
    }
}

export default App;
