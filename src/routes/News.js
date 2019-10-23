import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import NewsArticles from '@components/NewsArticles'
import PageTitle from '@components/UI/PageTitle'
import Column from '@components/Grid/Column'

class News extends React.Component {

    state = {
        title: 'News',
        subTitle: 'Love Actually - latest news, breaking stories - The News API'
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>{this.state.title}</title>
                </Helmet>

                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
                <BreadcrumbsItem to='/news'>News</BreadcrumbsItem>

                <Column xs='1'>
                    <PageTitle supTitle={this.state.title} subTitle={this.state.subTitle}/>
                    <NewsArticles/>
				</Column>
            </>
        )
    }
}

export default News