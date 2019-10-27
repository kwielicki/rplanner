import React from 'react';
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { isEmpty } from 'lodash'
import Moment from 'react-moment'
import 'moment-timezone'
import styles from './NewsArticlesElements.scss'

import bunches from 'Bunches/bunches.json'

import Chips from 'Components/UI/Chips'


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
                    <span styleName="__articleChip">
                        <Chips type="primary">{article.source.name}</Chips>
                    </span>
                    {/* LazyImage component with intersection observer */}
                    <img src={article.urlToImage} styleName="__articleImage" alt={article.title}/>
                </div>
                <div styleName="__articleContent">
                    <h4 styleName="__articleTitle">{article.title}</h4>
                    <span styleName="__articleAuthor">
                        {dictionary.author}:&nbsp;{this.__setAuthor(article)}
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
                <div styleName="__articleActions">
                    {/* @TODO Component LinkDuo */}
                    <a href={article.url}
                       title={article.title}
                       target="_blank"
                       rel="nofollow noopener">Preview</a>
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