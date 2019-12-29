import React from 'react'
import { Helmet } from 'react-helmet'
import Column from 'Components/Grid/Column'
import PageTitle from 'Components/UI/PageTitle'
import translations from 'Translations/translations.json'

class Documentation extends React.Component {

    state = {
        translations: {
            pageTitle: translations.documentation.pageTitle
        }
    }

    render() {
        const {
            pageTitle
        } = this.state.translations
        return (
            <>
                <Helmet>
                    <title>Documentation</title>
                </Helmet>
                <Column xs='1'>
                    <PageTitle supTitle={pageTitle.supTitle}
                               subTitle={pageTitle.subTitle}/>
				</Column>
            </>
            
        )
    }
}

export default Documentation
