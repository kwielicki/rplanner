import React from 'react';
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchNews, fetchNewsCategorySelect } from 'Actions/newsActions'
import NewsArticlesHeader from './NewsArticlesHeader'
import styles from './NewsArticles.scss'

import SelectSomething from 'Components/UI/SelectSomething'
import Loader from 'Components/UI/Loader'


const mapStateToProps = state => {
    const { items,
            loading,
            error,
            categories,
            selectedCategory,
            selectedCountry } = state.news
    return {
        items: items,
        loading: loading,
        error: error,
        categories: categories,
        selectedCategory: selectedCategory,
        selectedCountry: selectedCountry
    };
}
  
@CSSModules(styles, {allowMultiple: true})
class NewsArticles extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchNews(this.props.selectedCategory))
    }

    _handleChange = (evt) => {
        const category = evt.target.value

        this.props.dispatch(fetchNewsCategorySelect(category))
        this.props.dispatch(fetchNews(category))
    }

    __optionRender = (category) => {
        const { id, name } = category
        return (
            <option value={id} key={id}>
                {name}
            </option>
        )
    }

    __selectRender = (categories) => {
        return (
            <select onChange={this._handleChange} value={this.props.selectedCategory}>
                {categories.map(category => (
                    this.__optionRender(category)
                ))}
            </select>
        )
    }

    render() {
        const { loading, items, items: { totalResults }, categories, selectedCategory } = this.props;
        return (
            <div styleName="NewsArticles">
                {loading
                    ? <Loader/>
                    : <div styleName="__inner">
                        <SelectSomething options={categories} onChange={this._handleChange} value={this.props.selectedCategory}/>
                        {(!_.isEmpty(items.articles) 
                            ? <NewsArticlesHeader
                                totalResults={totalResults} selectedCategory={selectedCategory}/>
                            : <h2>Przefiltruj wyniki</h2>)}
                    </div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(NewsArticles)