import React from 'react';
import { isEmpty } from 'lodash'
import { connect } from 'react-redux'
import { fetchNews, fetchNewsCategorySelect, fetchNewsCountrySelect } from 'Actions/newsActions'
import NewsArticlesHeader from './NewsArticlesHeader/'
import NewsArticlesElements from './NewsArticlesElements'
import './NewsArticles.scss'

import SelectSomething from 'Components/UI/SelectSomething'
import Loader from 'Components/UI/Loader'


const mapStateToProps = state => {
    console.log(state)
    const { items,
            loading,
            error,
            categories,
            countries,
            selectedCategory,
            selectedCountryLabel,
            selectedCountry } = state.news
    return {
        items: items,
        loading: loading,
        error: error,
        categories: categories,
        countries: countries,
        selectedCategory: selectedCategory,
        selectedCountry: selectedCountry,
        selectedCountryLabel: selectedCountryLabel
    }
}

class NewsArticles extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchNews(this.props.selectedCategory, this.props.selectedCountry))
    }

    _handleChange = (evt) => {
        const category = evt.target.value

        
        this.props.dispatch(fetchNewsCategorySelect(category))
        this.props.dispatch(fetchNews(category, this.props.selectedCountry))
    }
    
    _handleCountryChange = (evt) => {
        const country = evt.target.value
        const countryLabel = evt.target.options[evt.target.selectedIndex].text

        this.props.dispatch(fetchNewsCountrySelect(country, countryLabel))
        this.props.dispatch(fetchNews(this.props.selectedCategory, country))
    }

    render() {
        const { loading, items, items: { totalResults }, categories, countries, selectedCategory, selectedCountryLabel } = this.props;
        return (
            <div styleName="NewsArticles">
                {loading
                    ? <Loader/>
                    : <div styleName="__inner">
                        <div styleName="__selects">
                            <div styleName="__select">
                                <SelectSomething options={categories} 
                                                 onChange={this._handleChange} 
                                                 value={this.props.selectedCategory}
                                                 labelForSelect="Category"/>
                            </div>
                            <div styleName="__select">
                                <SelectSomething options={countries} 
                                                 onChange={this._handleCountryChange} 
                                                 value={this.props.selectedCountry}
                                                 labelForSelect="Country"/>
                            </div>
                        </div>
                        {(!isEmpty(items.articles) 
                            ? <>
                                <NewsArticlesHeader
                                    totalResults={totalResults} 
                                    selectedCategory={selectedCategory} 
                                    selectedCountryLabel={selectedCountryLabel}/>
                                <NewsArticlesElements articles={items.articles}/>
                              </>
                            : <h2>Ops. Coś poszło nie tak. Wygląda na to, że nie posiadamy artykułów, które spełniają Twoje kryteria wyszukiwania.</h2>)}
                    </div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(NewsArticles)