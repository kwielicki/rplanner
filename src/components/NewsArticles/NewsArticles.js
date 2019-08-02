import React from 'react';
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchNews } from '@actions/newsActions'
import NewsArticlesHeader from './NewsArticlesHeader'
import styles from './NewsArticles.scss'


@CSSModules(styles, {allowMultiple: true})
@connect(state => ({
    articles: state.news.items,
    loading: state.news.loading,
    error: state.news.error,
    categories: state.news.categories
}))
export default class NewsArticles extends React.Component {

    state = {
        selectedCategory: 'general'
    }

    componentDidMount() {
        this.props.dispatch(fetchNews('pl', this.state.selectedCategory))
    }
    
    componentDidUpdate(prevProps, prevState) {
        if ( this.state.selectedCategory !== prevState.selectedCategory ) {
            this.props.dispatch(fetchNews('pl', this.state.selectedCategory))
        }
    }

    _handleChange = (evt) => {
        this.setState({
            selectedCategory: evt.target.value
        })
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
            <select onChange={this._handleChange}>
                {categories.map(category => {
                    return this.__optionRender(category)
                })}
            </select>
        )
    }

    render() {
        const { error, loading, articles, articles: {totalResults}, categories } = this.props;
        return (
            <>
            {loading
                ? <p>Loading...</p>
                : <div>
                    {this.__selectRender(categories)}
                    {(!_.isEmpty(articles) 
                        ? <NewsArticlesHeader
                            totalResults={totalResults}/>
                        : <h2>Empty.</h2>)}
                  </div>
            }
        </>
        )
    }
}