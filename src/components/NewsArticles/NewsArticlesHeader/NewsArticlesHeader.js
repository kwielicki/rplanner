import React from 'react';
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from './NewsArticlesHeader.scss'


@CSSModules(styles, {allowMultiple: true, handleNotFoundStyleName: 'log'})
class NewsArticlesHeader extends React.Component {
    render() {
        const { totalResults, selectedCategory, selectedCountryLabel } = this.props
        return (
            <div styleName="NewsArticlesHeader">
                <div styleName="__inner">
                    <div styleName="__filters">
                        <ul styleName="__list">
                            <li styleName="__listElement">
                                Founded <strong>{totalResults}</strong> {totalResults === 1 ? 'item' : 'items'}
                            </li>
                            <li styleName="__listElement">
                                in <strong>{selectedCategory}</strong> category.
                            </li>
                            <li styleName="__listElement">
                                Searched for in the country <strong>{selectedCountryLabel}</strong>.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

NewsArticlesHeader.propTypes = {
    totalResults: PropTypes.number,
    selectedCategory: PropTypes.string,
    selectedCountryLabel: PropTypes.string
}

export default NewsArticlesHeader