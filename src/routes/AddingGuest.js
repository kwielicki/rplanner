import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

import Column from 'Components/Grid/Column'
import PageTitle from 'Components/UI/PageTitle'

import translations from 'Translations/translations.json'

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
                <Helmet>
                    <title>Adding a new</title>
                </Helmet>

                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
                <BreadcrumbsItem to='/adding-guest'>Adding Guest</BreadcrumbsItem>

                <Column xs='1'>
                    <PageTitle supTitle={pageTitle.supTitle}
                               subTitle={pageTitle.subTitle}/>
                </Column>
            </>
        )
    }
}

export default AddingGuest