import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import styles from './NewsArticlesHeader.scss'


@CSSModules(styles, {allowMultiple: true})
class NewsArticlesHeader extends React.Component {
    render() {
        const { totalResults, categoryOfResults, categoryOfCountry } = this.props
        return (
            <div styleName="NewsArticlesHeader">
                <h3>Total results: {totalResults}</h3>
                <h4>Wyszukano w kategorii: {categoryOfResults}</h4>
                <h5>Wyszukano dla kraju: {categoryOfCountry}</h5>
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