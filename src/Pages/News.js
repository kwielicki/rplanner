import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import NewsArticles from 'Components/NewsArticles'
import PageTitle from 'Components/UI/PageTitle'
import Column from 'Components/Grid/Column'

import translations from 'Translations/translations.json'
import Container from 'Components/Grid/Container'

class News extends React.Component {
    state = {
        translations: {
            pageTitle: translations.news.pageTitle
        }
    }
    render() {
        const {
            pageTitle
        } = this.state.translations
        return (
            <>
                <Helmet title='News manager'/>
                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
                <BreadcrumbsItem to='/news'>News</BreadcrumbsItem>
                <Container>
                    <Column xs='1'>
                        <PageTitle supTitle={pageTitle.supTitle} subTitle={pageTitle.subTitle}/>
                    </Column>
                    <Column xs='1'>
                        <NewsArticles/>
                    </Column>
                </Container>
            </>
        )
    }
}

export default News