import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import NewsArticles from 'PATH_TO__COMPONENTS/NewsArticles'
import PageTitle from 'PATH_TO__COMPONENTS/UI/PageTitle'
import InformationPanel from 'PATH_TO__COMPONENTS/UI/InformationPanel';
import Column from 'PATH_TO__COMPONENTS/Grid/Column'

import translations from 'PATH_TO__TRANSLATIONS/translations.json'

class News extends React.Component {

    state = {
        title: 'News',
        subTitle: 'Love Actually - latest news, breaking stories - The News API',
        translations: translations
    }
    

    render() {
        const { newsTranslation } = this.state.translations
        return (
            <>
                <Helmet>
                    <title>{this.state.title}</title>
                </Helmet>

                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
                <BreadcrumbsItem to='/news'>News</BreadcrumbsItem>
            
                <Column xs='1'>
                    <PageTitle supTitle={this.state.title} subTitle={this.state.subTitle}/>
                    <InformationPanel heading={newsTranslation.headingText} description={newsTranslation.descriptionText}/>
                    <NewsArticles/>
				</Column>
            </>
        )
    }
}

export default News