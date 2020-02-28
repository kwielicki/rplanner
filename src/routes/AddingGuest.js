import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import { db } from "Components/firebase/firebase.js"

import Container from 'Components/Grid/Container'
import Column from 'Components/Grid/Column'
import PageTitle from 'Components/UI/PageTitle'

import translations from 'Translations/translations.json'
import AddingGuestForm from '../components/AddingGuestForm/AddingGuestForm'

class AddingGuest extends React.Component {

    state = {
        translations: {
            pageTitle: translations.addingGuest.pageTitle
        }
    }

    render() {
        const {
            pageTitle
        } = this.state.translations
        return (
            <>
                <Helmet title='Adding a new guest'/>

                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
                <BreadcrumbsItem to='/adding-guest'>Adding Guest</BreadcrumbsItem>

                <Container>
                    <Column xs='1'>
                        <PageTitle supTitle={pageTitle.supTitle}
                                subTitle={pageTitle.subTitle}/>
                    </Column>
                </Container>

                <Container>
                    <Column xs='1'>
                        <AddingGuestForm></AddingGuestForm>
                    </Column>
                </Container>

            </>
        )
    }
}

export default AddingGuest