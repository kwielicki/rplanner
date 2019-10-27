import React from 'react'
import { Helmet } from 'react-helmet'

import Column from 'Components/Grid/Column'
import Rating from 'Components/UI/Rating'
import Rbutton from 'Components/Rbutton'
class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <Column xs='1'>
                    <h1>Dashboard</h1>
                    <Rbutton/>
                    <Rating rating={1}/>
                    <Rating rating={3}/>
                    <Rating rating={0}/>
				</Column>
            </>
        )
    }
}

export default Dashboard