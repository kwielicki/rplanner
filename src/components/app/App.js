import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer/Footer'
import Header from '../Header/Header';
import { 
  Route,
  Switch,
  Redirect } from "react-router-dom"

import Dashboard from '../../routes/Dashboard'
import AddingGuest from '../../routes/AddingGuest'
import Statistic from '../../routes/Statistic'
import PageNotFound from '../../routes/PageNotFound'
import UserProfile from '../../routes/UserProfile'
import Documentation from '../../routes/Documentation'
import EditingGuest from '../../routes/EditingGuest'
import styles from './App.scss'


class App extends React.Component {
    render() {
      return (
        <>
          <Helmet>
            <title>Wedding planner</title>
            <meta name="description" content="Wedding planner - application for managing wedding preparations" />
          </Helmet>
          <Header></Header>
            <main>
              <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/adding-guest' component={AddingGuest}/>
                <Route path='/statistic' component={Statistic}/>
                <Route path='/user-profile' component={UserProfile}/>
                <Route path='/documentation' component={Documentation}/>
                <Route path='/editing-guest' component={EditingGuest}/>
                <Route component={PageNotFound}/>
              </Switch>
            </main>
          <Footer></Footer>
        </>
      )
    }
}

export default App;
