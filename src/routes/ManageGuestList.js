import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

class ManageGuestList extends React.Component {
    render() {
        return (
            <>
                <Helmet title="Manage guest list"/>
                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
                <BreadcrumbsItem to='/manage-guest-list'>Manage guest list</BreadcrumbsItem>
            </>
        )
    }
}

export default ManageGuestList