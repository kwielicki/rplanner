import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import NewsArticles from 'Components/NewsArticles'
import PageTitle from 'Components/UI/PageTitle'
import InformationPanel from 'Components/UI/InformationPanel';
import Column from 'Components/Grid/Column'

import translations from 'Translations/translations.json'

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