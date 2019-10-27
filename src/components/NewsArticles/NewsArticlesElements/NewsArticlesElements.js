import React from 'react';
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { isEmpty } from 'lodash'
import Moment from 'react-moment'
import 'moment-timezone'
import styles from './NewsArticlesElements.scss'

import bunches from 'Bunches/bunches.json'


@CSSModules(styles, {allowMultiple: true})
class NewsArticlesElements extends React.Component {

    state = {
        dictionary: bunches.dictionary
    }
    
    __setAuthor = article => {
        let authorName =  isEmpty(article.author) ? authorName = 'unknown author' : article.author
        return <strong>{authorName}</strong>
    }
    
    __renderElement = (article) => {

        const {
            dictionary
        } = this.state

        return (
            <div styleName="__article">
                <div styleName="__articlePicture">
                    {/* LazyImage component with intersection observer */}
                    <img src={article.urlToImage} styleName="__articleImage" alt={article.title}/>
                </div>
                <div styleName="__articleContent">
                    <h4 styleName="__articleTitle">{article.title}</h4>
                    <span styleName="__articleAuthor">
                        {dictionary.author}: {this.__setAuthor(article)}
                    </span>
                    <span styleName="__articleSource">
                        {/* Chips component */}
                        {dictionary.source}: {article.source.name}
                    </span>
                    <div styleName="__articlePublished">
                        <span styleName="__articlePublishedDate">
                            {dictionary.published}: <Moment date={article.publishedAt} format="D MMM YYYY"/>
                        </span>
                        <span styleName="__articlePublishedFrom">
                            {dictionary.howLong}: <Moment from={article.publishedAt}/>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { articles } = this.props
        const articlesWithImage = articles.filter(article => article.urlToImage ? articles : false)

        return (
            <div styleName="NewsArticlesElements">
                {(!isEmpty(articlesWithImage) &&
                    <div styleName="__inner">
                        {articlesWithImage.map(( article, index ) => (
                            <div styleName="__element" key={index}>
                                {this.__renderElement(article)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

NewsArticlesElements.propTypes = {
    articles: PropTypes.array
}

export default NewsArticlesElements