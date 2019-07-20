import React from 'react'
import { Helmet } from 'react-helmet'

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <p>Dashboard</p>
            </>
        )
    }
}

export default Dashboard