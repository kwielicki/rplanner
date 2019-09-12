import React from 'react'
import CSSModules from 'react-css-modules'
import { Helmet } from 'react-helmet'
import Footer from '@components/Footer'
import Header from '@components/Header';
import { Route, Switch } from "react-router-dom"

import Dashboard from '@routes/Dashboard'
import AddingGuest from '@routes/AddingGuest'
import Statistic from '@routes/Statistic'
import PageNotFound from '@routes/PageNotFound'
import UserProfile from '@routes/UserProfile'
import Documentation from '@routes/Documentation'
import EditingGuest from '@routes/EditingGuest'
import News from '@routes/News'
import styles from './App.scss'
import Sidebar from '@components/Sidebar'

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
