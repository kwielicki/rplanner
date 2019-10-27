import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import NewsArticles from 'Components/NewsArticles'
import PageTitle from 'Components/UI/PageTitle'
import InformationPanel from 'Components/UI/InformationPanel'
import Column from 'Components/Grid/Column'

import translations from 'Translations/translations.json'

class News extends React.Component {

    state = {
        translations: {
            pageTitle: translations.news.pageTitle,
            informationPanel: translations.news.informationPanel
        }
    }
    render() {
        
        const {
            informationPanel,
            pageTitle
        } = this.state.translations
        
        return (
            <>
                <Helmet>
                    <title>{this.state.title}</title>
                </Helmet>

                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
                <BreadcrumbsItem to='/news'>News</BreadcrumbsItem>
            
                <Column xs='1'>
                    <PageTitle supTitle={pageTitle.supTitle}
                               subTitle={pageTitle.subTitle}/>
                    <InformationPanel heading={informationPanel.heading} 
                                      description={informationPanel.description}/>
                    <NewsArticles/>
				</Column>
            </>
        )
    }
}

export default News