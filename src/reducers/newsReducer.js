import bunches from 'Bunches/bunches.json'

import {
    FETCH_NEWS_BEGIN,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_CATEGORY_SELECT,
    FETCH_NEWS_COUNTRY_SELECT
} from 'Actions/newsActions.js'


const initialState = {
    items:  [],
    loading: false,
    error: null,
    selectedCategory: 'general',
    selectedCountry: 'pl',
    selectedCountryLabel: 'Poland',
    countries: bunches.newsAvailableCountries,
    categories: bunches.newsAvailableCategories
}

export default function newsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_NEWS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_NEWS_CATEGORY_SELECT:
            return {
                ...state,
                selectedCategory: action.payload.selectedCategory
            }

        case FETCH_NEWS_COUNTRY_SELECT:
            return {
                ...state,
                selectedCountry: action.payload.selectedCountry,
                selectedCountryLabel: action.payload.selectedCountryLabel,
            }

        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.items
            }

        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }

        default:
            return state
    }
}