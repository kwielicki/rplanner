import React from 'react'
import { Helmet } from 'react-helmet'

import Column from 'Components/Grid/Column'
import PageTitle from 'Components/UI/PageTitle'
import translations from 'Translations/translations.json'
import OpenWeather from 'Components/OpenWeather'


class Dashboard extends React.Component {

    state = {
        translations: {
            pageTitle: translations.dashboard.pageTitle
        }
    }

    render() {
        const {
            pageTitle
        } = this.state.translations

        return (
            <>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <Column xs='1'>
                    <PageTitle supTitle={pageTitle.supTitle}
                               subTitle={pageTitle.subTitle}/>
				</Column>
                <Column xs='1' lg='2' spacerBottom='30'>
                    <OpenWeather></OpenWeather>
                </Column>
            </>
        )
    }
}

export default Dashboard