import React from 'react'
import { Helmet } from 'react-helmet'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import NewsArticles from '@components/NewsArticles'
import Column from '@components/Grid/Column'

class News extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>News</title>
                </Helmet>

                <BreadcrumbsItem to='/'>Dashboard</BreadcrumbsItem>
                <BreadcrumbsItem to='/news'>News</BreadcrumbsItem>

                <Column xs='1'>
                    <h1>Statistic route</h1>
                    <NewsArticles/>
				</Column>
            </>
        )
    }
}

export default News