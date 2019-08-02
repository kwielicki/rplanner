import React from 'react'
import { Helmet } from 'react-helmet'
import NewsArticles from '@components/NewsArticles'
import _ from 'lodash'

class News extends React.Component {
    
    render() {
        const {articles} = this.props;
        return (
            <NewsArticles items={articles}/>
        )
    }
}

export default News