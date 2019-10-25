import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from './NewsArticlesHeader.scss'


@CSSModules(styles, {allowMultiple: true})
class NewsArticlesHeader extends React.Component {
    render() {
        const { totalResults, selectedCategory } = this.props
        return (
            <div styleName="NewsArticlesHeader">
                <h3>Znaleziono: {totalResults}</h3>
                <h4>Wyszukano w kategorii: {selectedCategory}</h4>
            </div>
        )
    }
}

NewsArticlesHeader.propTypes = {
    totalResults: PropTypes.number,
    categoryOfResults: PropTypes.string,
    categoryOfCountry: PropTypes.string
}

export default NewsArticlesHeader