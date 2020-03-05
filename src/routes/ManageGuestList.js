import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import GuestTableManager from 'Components/GuestTableManager'
import Container from 'Components/Grid/Container'
import Column from 'Components/Grid/Column'
import PageTitle from 'Components/UI/PageTitle'
import translations from 'Translations/translations.json'

class ManageGuestList extends Component {

    state = {
        translations: {
            pageTitle: translations.manageGuestList.pageTitle
        }
    }

    render() {
        const {
            pageTitle
        } = this.state.translations
        return (
            <>
                <Helmet title="Manage guest list"/>
                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
                <BreadcrumbsItem to='/manage-guest-list'>Manage guest list</BreadcrumbsItem>
                <Container>
                    <Column xs='1'>
                        <PageTitle supTitle={pageTitle.supTitle} subTitle={pageTitle.subTitle}/>
                    </Column>
                    <Column xs='1'><GuestTableManager></GuestTableManager></Column>
                </Container>
            </>
        )
    }
}

export default ManageGuestList