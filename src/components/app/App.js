import React from 'react'
import CSSModules from 'react-css-modules'
import { Helmet } from 'react-helmet'
import Footer from 'Components/Footer'
import Header from 'Components/Header';
import { Route, Switch } from "react-router-dom"

import Dashboard from 'Routes/Dashboard'
import AddingGuest from 'Routes/AddingGuest'
import Statistic from 'Routes/Statistic'
import PageNotFound from 'Routes/PageNotFound'
import UserProfile from 'Routes/UserProfile'
import Documentation from 'Routes/Documentation'
import EditingGuest from 'Routes/EditingGuest'
import News from 'Routes/News'
import styles from './App.scss'
import Sidebar from 'Components/Sidebar'

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
