import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import Column from 'Components/Grid/Column'

class Statistic extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Statistics</title>
                </Helmet>

                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
                <BreadcrumbsItem to='/statistic'>Statistic</BreadcrumbsItem>

                <Column xs='1'>
                    <h1>Statistic route</h1>
				</Column>
            </>
        )
    }
}

export default Statistic